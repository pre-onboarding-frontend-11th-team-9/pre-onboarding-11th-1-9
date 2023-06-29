import { API } from '../constants';
import apiClient from '../utils/apiClient';
import storage from '../utils/storage';

export const signIn = async (signData) => {
  try {
    const response = await apiClient.post(API.SIGNIN, signData);
    storage.setToken(response.data.access_token);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const signUp = async (signData) => {
  try {
    const response = await apiClient.post(API.SIGNUP, signData);
    return response;
  } catch (err) {
    console.error(err);
  }
};
