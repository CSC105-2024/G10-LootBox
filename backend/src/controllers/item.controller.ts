import type { Context } from 'hono';
import * as itemModel from '../models/item.model.js';

const getAllBaseItems = async (c: Context) => {
  try {
    const items = await itemModel.getAllBaseItems();
    return c.json({ success: true, data: items });
  } catch (e) {
    return c.json({ success: false, msg: `Internal Server Error: ${e}` }, 500);
  }
};

export {
  getAllBaseItems,
};
