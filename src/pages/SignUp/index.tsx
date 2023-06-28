import { SigninLink } from './SigninLink';
import { SignupForm } from './SignupForm';

const SignUpPage = () => {
  return (
    <>
      <h1>회원가입</h1>
      <SignupForm />
      <SigninLink />
    </>
  );
};

export default SignUpPage;
