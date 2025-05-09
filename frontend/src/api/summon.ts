import { Axios } from '../util/axiosInstance';
import { ApiResponse } from './types';

export type SummonResult = {
  itemId: number;
  name: string;
  type: string;
  rarity: string;
};

export const summonItem = async (username: string, type: string) => {
  try {
    const res = await Axios.post<ApiResponse<SummonResult>>(`/summon/${type}`, { username });
    return res.data;
  } catch (e) {
    return { success: false, data: null, msg: `${e}` };
  }
};