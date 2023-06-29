import { API } from '../constants';
import apiClient from '../utils/apiClient';
import storage from '../utils/storage';

const authService = {
  async signIn(signData) {
    try {
      const response = await apiClient.post(API.SIGNIN, signData);
      storage.setToken(response.data.access_token);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
  async signUp(signData) {
    try {
      const response = await apiClient.post(API.SIGNUP, signData);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
};

export default authService;
