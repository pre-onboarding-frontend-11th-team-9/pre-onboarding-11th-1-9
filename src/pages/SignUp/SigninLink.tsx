import { PATH } from '@/constants';
import { Link } from 'react-router-dom';

export const SigninLink = () => {
  return <Link to={PATH.SIGN_IN}>로그인</Link>;
};
