import { findUserByUsername } from './user.model.js';
import { getKeyByType, useKey, getUserKeyQuantity } from './key.model.js';
import { getItemsByTypeAndRarity, addItemToUser } from './item.model.js';

export type BoxType = 'Meme' | 'Superhero';

const rarityWeightsByType: Record<BoxType, Record<string, number>> = {
  Meme:       { common: 50, rare: 35, epic: 10, legendary:  5 },
  Superhero:  { common: 40, rare: 38.9, epic: 20, legendary: 1, unreal: 0.1 },
};

const getRandomRarityByType = (type: BoxType): string => {
  const weights = rarityWeightsByType[type];
  const rand    = Math.random() * 100;
  let   sum     = 0;

  for (const [rarity, weight] of Object.entries(weights)) {
    sum += weight;
    if (rand <= sum) return rarity;
  }
  return Object.keys(weights)[0];
};

export const summonItem = async (username: string, boxType: BoxType) => {
  const user = await findUserByUsername(username);
  if (!user) throw new Error('User not found');

  const key = await getKeyByType(boxType);
  if (!key) throw new Error(`Key type "${boxType}" not found`);

  const keyQty = await getUserKeyQuantity(user.id, key.id);
  if (keyQty <= 0) throw new Error(`You have no ${boxType} keys left`);

  await useKey(user.id, key.id, 1);

  const rarity = getRandomRarityByType(boxType);
  const pool = await getItemsByTypeAndRarity(boxType, rarity);
  if (pool.length === 0) throw new Error('No item found for this rarity');

  const item = pool[Math.floor(Math.random() * pool.length)];
  await addItemToUser(user.id, item.id, 1);

  return {
    id:     item.id,
    name:   item.name,
    type:   item.type,
    rarity: item.rarity,
    img:    item.img,
    message: `You got a ${item.rarity} ${item.name}!`,
    remainingKeys: keyQty - 1
  };
};
