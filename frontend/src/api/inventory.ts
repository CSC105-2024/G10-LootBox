import { Axios } from '../util/axiosInstance';
import * as Types from './types';
import type { ApiResponse } from './types';

export const getUserInventory = async (username: string) => {
  try {
    const res = await Axios.get<ApiResponse<Types.Inventory>>(`/inventory/${username}`);
    return res.data;
  } catch (error) {
    return { success: false, data: null, msg: `${error}` };
  }
};

export const getUserKeys = async (username: string) => {
  try {
    const res = await Axios.get<ApiResponse<
      { key: { type: string }; quantity: number }[]
    >>(`/inventory/${username}/keys`);
    return res.data;
  } catch (error) {
    return { success: false, data: null, msg: `${error}` };
  }
};

export const getAllBaseItems = async () => {
  try {
    const res = await Axios.get<ApiResponse<Types.Item[]>>('/inventory/items');
    return res.data;
  } catch (error) {
    return { success: false, data: null, msg: `${error}` };
  }
};

export const getItemsByRarity = async (rarity: string) => {
  try {
    const res = await Axios.get<ApiResponse<Types.Item[]>>(`/inventory/items/rarity/${rarity}`);
    return res.data;
  } catch (error) {
    return { success: false, data: null, msg: `${error}` };
  }
};
