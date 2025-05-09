import { Axios } from '../util/axiosInstance';
import { ApiResponse, Inventory } from './types';

export const getUserInventory = async (username: string) => {
  try {
    const res = await Axios.get<ApiResponse<Inventory>>(`/inventory/${username}`);
    return res.data;
  } catch (e) {
    return { success: false, data: null, msg: `${e}` };
  }
};

export const getUserKeys = async (username: string) => {
  try {
    const res = await Axios.get<ApiResponse<
      { key: { type: string }; quantity: number }[]
    >>(`/inventory/${username}/keys`);
    return res.data;
  } catch (e) {
    return { success: false, data: null, msg: `${e}` };
  }
};
