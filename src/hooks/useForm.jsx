import { useState } from 'react';
import authService from '../services/auth';
import storage from '../utils/storage';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../constants';

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await authService.signIn(form);
      storage.setToken(res.data.access_token);
      navigate(PATH.TODO);
      alert('로그인에 성공했습니다.');
    } catch (err) {
      console.error(err);
      alert('로그인에 실패했습니다.');
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      await authService.signUp(form);
      navigate(PATH.SIGN_IN);
      alert('회원가입에 성공했습니다. 로그인 화면으로 이동합니다.');
    } catch (err) {
      console.error(err);
      alert('회원가입에 실패했습니다.');
    }
  };

  const handleSignOutSubmit = () => {
    storage.removeToken();
    navigate(PATH.ROOT);
  };

  return {
    form,
    handleInputChange,
    handleSignInSubmit,
    handleSignUpSubmit,
    handleSignOutSubmit,
  };
};
