import axiosClient from './axiosClient';

export const authApi = {
  login: () => {
    const url = '/login';
    return axiosClient.post(url);
  },
};
