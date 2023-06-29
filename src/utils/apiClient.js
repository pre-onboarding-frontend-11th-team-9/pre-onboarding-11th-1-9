import axios from 'axios';
import { BASE_URL } from '../constants';
import storage from './storage';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

const requestConfig = (config) => {
  const token = storage.getToken();

  config.headers.Authorization = `Bearer ${token}`;
  return config;
};

apiClient.interceptors.request.use(requestConfig);

export default apiClient;
