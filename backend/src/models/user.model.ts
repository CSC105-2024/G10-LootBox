  import { db } from '../index.js';
  import { saveFile } from '../utils/fileHandler.js';
  import fs from 'fs/promises';
  import path from 'path';

  export const createUser = async (username: string, password: string) => {
    const existing = await db.user.findUnique({ where: { username } });
    if (existing) {
      throw new Error('Username already exists');
    }

    return db.user.create({
      data: {
        username,
        password,
        coin: 0,
      },
    });
  };

  export const findUserByUsername = async (username: string) => {
    return db.user.findUnique({ where: { username } });
  };

  export const comparePassword = async (password: string, storedPassword?: string | null) => {
    return password === storedPassword;
  };

  export const getUserInventory = async (username: string) => {
    const user = await db.user.findUnique({
      where: { username },
    });

    if (!user) return null;

    const allItems = await db.item.findMany();
    const userItems = await db.userItem.findMany({
      where: { userId: user.id },
    });

    const inventory = allItems.map(item => {
      const ownedItem = userItems.find(ui => ui.itemId === item.id);
      return {
        id: item.id,
        name: item.name,
        type: item.type,
        sellPrice: item.sellPrice,
        img: item.img,
        rarity: item.rarity,
        quantity: ownedItem?.quantity ?? 0,
        owned: Boolean(ownedItem),
      };
    });

    return inventory;
  }


  export const getTotalItemQuantity = async (username: string) => {
    const user = await db.user.findUnique({
      where: { username },
      select: {
        items: {
          select: {
            quantity: true,
          },
        },
      },
    });

    if (!user) return null;

    const total = user.items.reduce((sum, item) => sum + item.quantity, 0);
    return total;
  };

  export const updateUserCoin = async (userId: number, amount: number) => {
    return db.user.update({
      where: { id: userId },
      data: {
        coin: { increment: amount },
      },
    });
  };

  export const getUserPicByUsername = async (username: string) => {
    return db.user.findUnique({
      where: { username },
      select: {
        profilePic: true,
        backgroundImage: true,
      },
    });
  };

  export const handleUserImageUpload = async (
    username: string,
    profilePicFile?: File,
    backgroundImageFile?: File
  ) => {
    const user = await db.user.findUnique({ where: { username } });
    if (!user) {
      return { success: false, data: null, msg: 'User not found' };
    }

    let profilePicPath = user.profilePic ?? '';
    let backgroundImagePath = user.backgroundImage ?? '';

    if (profilePicFile) {
      await deleteUserImageIfExists(user.profilePic);
      profilePicPath = await saveFile(profilePicFile, 'profilePic');
    }

    if (backgroundImageFile) {
      await deleteUserImageIfExists(user.backgroundImage);
      backgroundImagePath = await saveFile(backgroundImageFile, 'backgroundImage');
    }

    await db.user.update({
      where: { username },
      data: {
        profilePic: profilePicPath,
        backgroundImage: backgroundImagePath,
      },
    });

    return { success: true, data: null, msg: 'Images uploaded successfully' };
  };


  const deleteUserImageIfExists = async (imgPath?: string | null) => {
    if (!imgPath || !imgPath.startsWith('/uploads')) return;

    const fullPath = path.join(process.cwd(), 'public', imgPath);
    try {
      await fs.unlink(fullPath);
      console.log(`Deleted image: ${fullPath}`);
    } catch (err) {
      console.warn(`Could not delete image: ${fullPath}`, err);
    }
  };

  export const deleteUserById = async (id: number) => {
    const user = await db.user.findUnique({ where: { id } });

    if (!user) {
      throw new Error('User not found');
    }

    await deleteUserImageIfExists(user.profilePic);
    await deleteUserImageIfExists(user.backgroundImage);

    return db.user.delete({ where: { id } });
  };