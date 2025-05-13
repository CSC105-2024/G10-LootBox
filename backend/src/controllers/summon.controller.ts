import type { Context } from 'hono';
import { summonItem, type BoxType } from '../models/summon.model.js';

const allowedTypes: BoxType[] = ['Meme', 'Superhero'];

export const handleSummon = async (c: Context) => {
  try {
    const { username, type } = await c.req.json();

    if (!username || !type) {
      return c.json({ success: false, msg: 'Username and type are required' }, 400);
    }

    if (!allowedTypes.includes(type)) {
      return c.json({ success: false, msg: `Invalid type: ${type}` }, 400);
    }

    const item = await summonItem(username, type as BoxType);
    return c.json({
      success: true,
      msg: item.message,
      data: item
    });
  } catch (err: any) {
    console.error('Summon error:', err.message);
    return c.json({ success: false, msg: err.message }, 500);
  }
};
