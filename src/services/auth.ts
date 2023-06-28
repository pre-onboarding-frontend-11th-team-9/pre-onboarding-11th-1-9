import { PATH } from '../constants';
import { SignData, SignResponseData } from '../types';
import apiClient from '../utils/apiClient';
import storage from '../utils/storage';

export const signIn = async (signData: SignData) => {
  try {
    const response = await apiClient.post<SignResponseData>(
      PATH.SIGN_IN,
      signData,
    );
    storage.setToken(response.data.access_token);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const signUp = async (signData: SignData) => {
  try {
    const response = await apiClient.post(PATH.SIGN_UP, signData);
    return response;
  } catch (err) {
    console.error(err);
  }
};
