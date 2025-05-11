import { db } from '../index.js';

export const KEY_TYPES = {
  MEME: 'Meme',
  SUPERHERO: 'Superhero'
};

const isValidKeyType = (type: string): boolean => {
  return Object.values(KEY_TYPES).includes(type);
};

export const getKeyByType = async (type: string) => {
  return db.key.findFirst({
    where: { type }
  });
};

export const getKeysById = async (userId: number) => {
  return db.userKey.findMany({
    where: { userId },
    include: { key: true }
  });
};

export const addKeyToUser = async (userId: number, keyId: number, quantity: number) => {
  const existingUserKey = await db.userKey.findFirst({
    where: {
      userId,
      keyId
    }
  });

  if (existingUserKey) {
    return db.userKey.update({
      where: { id: existingUserKey.id },
      data: { quantity: existingUserKey.quantity + quantity }
    });
  } else {
    return db.userKey.create({
      data: {
        userId,
        keyId,
        quantity
      }
    });
  }
};

export const useKey = async (userId: number, keyId: number, quantity: number = 1) => {
  const userKey = await db.userKey.findFirst({
    where: {
      userId,
      keyId
    }
  });

  if (!userKey || userKey.quantity < quantity) {
    throw new Error('Not enough keys');
  }

  return db.userKey.update({
    where: { id: userKey.id },
    data: { quantity: userKey.quantity - quantity }
  });
};

export const buyKeyByType = async (userId: number, type: string, quantity: number = 1) => {
  if (!isValidKeyType(type)) {
    throw new Error('Invalid key type');
  }

  const key = await getKeyByType(type);
  if (!key) {
    throw new Error('Key not found');
  }

  return addKeyToUser(userId, key.id, quantity);
};
