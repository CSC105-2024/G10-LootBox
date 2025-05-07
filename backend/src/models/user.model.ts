import { db } from '../index.js';

export const createUser = async (username: string, password: string) => {
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

export const deleteUserById = async (id: number) => {
  return db.user.delete({ where: { id } });
};

export const getUserInventory = async (username: string) => {
  return db.user.findUnique({
    where: { username },
    select: {
      coin: true,
      keys: {
        select: {
          key: {
            select: {
              type: true,
            },
          },
          quantity: true,
        },
      },
      items: {
        select: {
          item: {
            select: {
              name: true,
              type: true,
              sellPrice: true,
            },
          },
          quantity: true,
        },
      },
    },
  });
};

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
