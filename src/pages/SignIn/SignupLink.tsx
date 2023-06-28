import { PATH } from '@/constants';
import { Link } from 'react-router-dom';

export const SignupLink = () => {
  return <Link to={PATH.SIGN_UP}>회원가입</Link>;
};
