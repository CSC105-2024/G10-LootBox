import { db } from '../index.js';

export const ITEM_TYPES = {
  MEME: 'Meme',
  SUPERHERO: 'Superhero',
};

export const getItemById = async (id: number) => {
  return db.item.findUnique({
    where: { id },
  });
};

export const addItemToUser = async (userId: number, itemId: number, quantity: number) => {
  const existingUserItem = await db.userItem.findFirst({
    where: { userId, itemId },
  });

  if (existingUserItem) {
    return db.userItem.update({
      where: { id: existingUserItem.id },
      data: { quantity: existingUserItem.quantity + quantity },
    });
  } else {
    return db.userItem.create({
      data: { userId, itemId, quantity },
    });
  }
};

export const sellItem = async (userId: number, itemId: number, quantity: number) => {
  const userItem = await db.userItem.findFirst({
    where: { userId, itemId },
    include: { item: true },
  });

  if (!userItem || userItem.quantity < quantity) {
    throw new Error('Not enough items');
  }

  const totalCoin = userItem.item.sellPrice * quantity;

  await db.userItem.update({
    where: { id: userItem.id },
    data: { quantity: userItem.quantity - quantity },
  });

  await db.user.update({
    where: { id: userId },
    data: { coin: { increment: totalCoin } },
  });

  return { addedCoin: totalCoin };
};

export const getAllBaseItems = async () => {
  return db.item.findMany({
    select: {
      id: true,
      name: true,
      type: true,
      sellPrice: true,
      img: true,
      rarity: true,
    },
    orderBy: {
      id: 'asc',
    },
  });
};

export const getItemsByRarity = async (rarity: string) => {
  return db.item.findMany({
    where: { rarity },
  });
};

