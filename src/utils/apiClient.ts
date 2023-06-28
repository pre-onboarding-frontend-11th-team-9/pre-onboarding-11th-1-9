import { BASE_URL } from '@/constants';
import axios, { InternalAxiosRequestConfig } from 'axios';
import storage from './storage';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

const requestConfig = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const token = storage.getToken();

  if (token === null) {
    throw new Error('토큰이 존재하지 않습니다');
  }

  config.headers.Authorization = `Bearer ${token}`;
  return config;
};

apiClient.interceptors.request.use(requestConfig);

export default apiClient;
