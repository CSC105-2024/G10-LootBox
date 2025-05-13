import { Axios } from '../util/axiosInstance';
import { ApiResponse } from './types';

export type SummonResult = {
  id: number; 
  name: string;
  type: string;
  rarity: string;
  img: string;
  message: string;
  remainingKeys?: number;
};

export const summonItem = async (username: string, type: string) => {
  try {
    const res = await Axios.post<ApiResponse<SummonResult>>(`/summon`, {
      username,
      type,
    });
    return res.data;
  } catch (e: any) {
    return {
      success: false,
      data: null,
      msg: e?.response?.data?.msg || e.message || 'Summon failed',
    };
  }
};
