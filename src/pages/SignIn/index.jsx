import { useNavigate } from 'react-router-dom/dist';
import authService from '../../services/auth';

const SignInPage = () => {
  const navigate = useNavigate();
  const handleSignInBtnClick = async () => {
    const token = await authService.signIn({
      email: 'test@wanted.com',
      password: '12345678',
    });
    console.log(token);
    if (token) {
      navigate('/todo');
    }
  };

  return (
    <div>
      <button onClick={handleSignInBtnClick}>로그인</button>
    </div>
  );
};

export default SignInPage;
