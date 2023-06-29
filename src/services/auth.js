import { API } from '../constants';
import apiClient from '../utils/apiClient';

const authService = {
  async signIn(signData) {
    const response = await apiClient.post(API.SIGNIN, signData);
    return response;
  },
  async signUp(signData) {
    const response = await apiClient.post(API.SIGNUP, signData);
    return response;
  },
};

export default authService;
