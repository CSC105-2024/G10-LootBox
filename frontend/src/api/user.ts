import { Axios } from '../util/axiosInstance';
import * as Types from './types';
import type { ApiResponse } from './types';

export const signupUser = async (username: string, password: string) => {
  try {
    const res = await Axios.post<ApiResponse<Types.User>>('/user/signup', { username, password });
    return res.data;
  } catch (error: any) {
    if (error.response?.data) {
      return {
        success: false,
        data: null,
        msg: error.response.data.msg || 'Signup failed',
      };
    }
    return { success: false, data: null, msg: 'Network error or unexpected error' };
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const res = await Axios.post<ApiResponse<Types.User>>('/user/login', { username, password });
    return res.data;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    }
    return { success: false, data: null, msg: `${error}` };
  }
};

export const getUsername = async (username: string) => {
  try {
    const res = await Axios.get<ApiResponse<Types.User>>(`/user/name/${username}`);
    return res.data;
  } catch (error) {
    return { success: false, data: null, msg: `${error}` };
  }
};

export const deleteAccount = async (username: string) => {
  try {
    const res = await Axios.delete<ApiResponse<null>>(`/user/delete/${username}`);
    return res.data;
  } catch (error) {
    return { success: false, data: null, msg: `${error}` };
  }
};

export const getUserPic = async (username: string) => {
  try {
    const res = await Axios.get<ApiResponse<Types.UserPic>>(`/user/pic/${username}`);
    return res.data;
  } catch (error: any) {
    if (error.response?.data) {
      return {
        success: false,
        data: null,
        msg: error.response.data.msg || 'Failed to fetch user picture',
      };
    }
    return { success: false, data: null, msg: 'Network error or unexpected error' };
  }
};

export const uploadUserImages = async (formData: FormData) => {
  try {
    const res = await Axios.post<ApiResponse<null>>('/user/upload-images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (error: any) {
    if (error.response?.data) {
      return {
        success: false,
        data: null,
        msg: error.response.data.msg || 'Upload failed',
      };
    }
    return { success: false, data: null, msg: 'Network error or unexpected error' };
  }
};
export const getUserProfile = async (username: string) => {
  try {
    const res = await Axios.get<ApiResponse<Types.User>>(`/user/profile/${username}`);
    return res.data;
  } catch (error: any) {
    return {
      success: false,
      data: null,
      msg: error.response?.data?.msg || 'Failed to fetch user profile',
    };
  }
};

