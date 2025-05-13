import { Axios } from '../util/axiosInstance';
import { ApiResponse } from './types';

export const buyKey = async (username: string, type: string, quantity: number) => {
  try {
    const res = await Axios.post<ApiResponse<null>>('/shop/buy', { 
      username, 
      keyType: type, 
      quantity 
    });
    return res.data;
  } catch (e) {
    return { success: false, data: null, msg: `${e}` };
  }
};

export const sellItem = async (username: string, itemId: number, quantity: number) => {
  try {
    const res = await Axios.post<ApiResponse<null>>('/shop/sell', { username, itemId, quantity });
    return res.data;
  } catch (e) {
    return { success: false, data: null, msg: `${e}` };
  }
};
