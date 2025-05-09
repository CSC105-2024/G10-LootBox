import { Axios } from '../util/axiosInstance';
import { ApiResponse, User } from './types';

export const signupUser = async (username: string, password: string) => {
  try {
    const res = await Axios.post<ApiResponse<User>>('/user/signup', { username, password });
    return res.data;
  } catch (e) {
    if (e.response) {
      return e.response.data;
    }
    return { success: false, data: null, msg: `${e}` };
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const res = await Axios.post<ApiResponse<User>>('/user/login', { username, password });
    return res.data;
  } catch (e: any) {
    if (e.response) {
      return e.response.data;
    }
    return { success: false, data: null, msg: `${e}` };
  }
};