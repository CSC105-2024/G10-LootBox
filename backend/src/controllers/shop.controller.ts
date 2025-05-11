import type { Context } from 'hono';
import * as userModel from '../models/user.model.js';
import * as keyModel from '../models/key.model.js';
import * as itemModel from '../models/item.model.js';

const KEY_PRICES: Record<string, number> = {
  Meme: 250,
  Superhero: 850,
};

const buyKey = async (c: Context) => {
  try {
    const { username, keyType, quantity } = await c.req.json<{
      username: string;
      keyType: string;
      quantity: number;
    }>();

    if (!username || !keyType || !quantity || quantity <= 0) {
      return c.json({ success: false, msg: 'Missing or invalid input' }, 400);
    }

    const user = await userModel.findUserByUsername(username);
    if (!user) {
      return c.json({ success: false, msg: 'User not found' }, 404);
    }

    const pricePerKey = KEY_PRICES[keyType];
    if (pricePerKey === undefined) {
      return c.json({ success: false, msg: 'Invalid key type' }, 400);
    }

    const totalCost = pricePerKey * quantity;
    if (user.coin < totalCost) {
      return c.json({ success: false, msg: 'Not enough coins' }, 400);
    }

    const key = await keyModel.getKeyByType(keyType);
    if (!key) {
      return c.json({ success: false, msg: 'Key type not found' }, 404);
    }

    await keyModel.addKeyToUser(user.id, key.id, quantity);
    await userModel.updateUserCoin(user.id, -totalCost);

    return c.json({
      success: true,
      msg: `Purchased ${quantity} ${keyType} key(s)`,
      data: {
        coinSpent: totalCost,
        remainingCoin: user.coin - totalCost,
      },
    });
  } catch (e) {
    return c.json({ success: false, msg: `Internal Server Error: ${e}` }, 500);
  }
};

const sellItem = async (c: Context) => {
  try {
    const { username, itemId, quantity } = await c.req.json<{
      username: string;
      itemId: number;
      quantity: number;
    }>();

    if (!username || !itemId || !quantity || quantity <= 0) {
      return c.json({ success: false, msg: 'Missing or invalid input' }, 400);
    }

    const user = await userModel.findUserByUsername(username);
    if (!user) {
      return c.json({ success: false, msg: 'User not found' }, 404);
    }

    const result = await itemModel.sellItem(user.id, itemId, quantity);

    return c.json({
      success: true,
      msg: `Sold ${quantity} item(s) for ${result.addedCoin} coins`,
      data: {
        addedCoin: result.addedCoin,
      },
    });
  } catch (e) {
    return c.json({ success: false, msg: `Internal Server Error: ${e}` }, 500);
  }
};

export {
  buyKey,
  sellItem,
};
