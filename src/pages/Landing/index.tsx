import { PATH } from '@/constants';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <Link to={PATH.SIGN_IN}>시작하기</Link>
    </>
  );
};

export default LandingPage;
