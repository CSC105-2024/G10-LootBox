import { db } from '../index.js';

export const KEY_TYPES = {
  MEME: 'Meme',
  SUPERHERO: 'Superhero'
} as const;

export type KeyType = typeof KEY_TYPES[keyof typeof KEY_TYPES];

export const KEY_REGEN_INTERVALS: Record<KeyType, number> = {
  Meme: 1000 * 60 * 60 * 1,    
  Superhero: 1000 * 60 * 60 * 2 
};

const isValidKeyType = (type: string): type is KeyType => {
  return Object.values(KEY_TYPES).includes(type as KeyType);
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

export const getUserKeyQuantity = async (userId: number, keyId: number) => {
  const userKey = await db.userKey.findUnique({
    where: {
      userId_keyId: {
        userId,
        keyId,
      },
    },
  });
  return userKey?.quantity ?? 0;
};

export const getUserKeyCountByType = async (username: string, type: string) => {
  const user = await db.user.findUnique({
    where: { username },
    select: { id: true },
  });

  if (!user) return 0;

  const result = await db.userKey.findMany({
    where: {
      userId: user.id,
      key: { type },
    },
    include: { key: true },
  });

  const total = result.reduce((sum, entry) => sum + entry.quantity, 0);
  return total;
};

export const giveFreeKey = async (userId: number, type: string, quantity: number = 1) => {
  if (!isValidKeyType(type)) {
    throw new Error('Invalid key type');
  }

  const key = await getKeyByType(type);
  if (!key) throw new Error('Key not found');

  const userKey = await db.userKey.findFirst({
    where: {
      userId,
      keyId: key.id
    }
  });

  const now = new Date();
  const cooldown = type === KEY_TYPES.MEME ? 1 : 2;
  const nextAllowedTime = new Date(
    userKey?.lastClaimedAt?.getTime() || 0
  );
  nextAllowedTime.setHours(nextAllowedTime.getHours() + cooldown);

  if (userKey && now < nextAllowedTime) {
    throw new Error(`Cooldown not finished. Try again later.`);
  }

  if (userKey) {
    await db.userKey.update({
      where: { id: userKey.id },
      data: {
        quantity: userKey.quantity + quantity,
        lastClaimedAt: now,
      }
    });
  } else {
    await db.userKey.create({
      data: {
        userId,
        keyId: key.id,
        quantity,
        lastClaimedAt: now,
      }
    });
  }
};

export const regenerateKeysIfReady = async (userId: number) => {
  const keyTypes = [KEY_TYPES.MEME, KEY_TYPES.SUPERHERO];

  for (const type of keyTypes) {
    try {
      await giveFreeKey(userId, type);
      console.log(`Granted ${type} key to user ${userId}`);
    } catch (e: any) {
      if (e.message.includes('Cooldown not finished')) {
        continue;
      }
      console.error(`Failed to regenerate ${type} key for user ${userId}:`, e.message);
    }
  }
};

export const getUserKeysDetailed = async (username: string) => {
  const user = await db.user.findUnique({
    where: { username },
    select: { id: true },
  });

  if (!user) return [];

  const userKeyData = await db.userKey.findMany({
    where: { userId: user.id },
    include: { key: true },
  });

  const now = new Date();

  const result = Object.values(KEY_TYPES).map((type) => {
    const entry = userKeyData.find(k => k.key.type === type);
    const quantity = entry?.quantity || 0;

    let nextRegenerateTime: string | null = null;
    if (entry?.lastClaimedAt) {
      const regenInterval = KEY_REGEN_INTERVALS[type];
      const next = new Date(entry.lastClaimedAt.getTime() + regenInterval);
      nextRegenerateTime = next > now ? next.toISOString() : null;
    }

    return {
      keyType: type,
      count: quantity,
      nextRegenerateTime,
    };
  });

  return result;
};
