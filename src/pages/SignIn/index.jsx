import { useNavigate } from 'react-router-dom/dist';
import { useForm } from '../../hooks/useForm';
import validate from '../../utils/validate';
import { PATH } from '../../constants';

const { email: emailValidate, password: passwordValidate } = validate;

const SignInPage = () => {
  const { form, handleInputChange, handleSignInSubmit } = useForm({
    email: '',
    password: '',
  });

  const isDisabled = !(
    emailValidate(form.email) && passwordValidate(form.password)
  );

  const navigate = useNavigate();

  return (
    <div className="card">
      <form onSubmit={handleSignInSubmit}>
        <h2>로그인</h2>
        <input
          data-testid="email-input"
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={form.email}
          onChange={handleInputChange}
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={form.password}
          onChange={handleInputChange}
        />
        <button
          data-testid="signin-button"
          type="submit"
          disabled={isDisabled}
          className="btn btn-primary full"
        >
          로그인
        </button>
      </form>
      <button
        type="button"
        onClick={() => navigate(PATH.SIGN_UP)}
        className="btn full"
      >
        회원가입 하러가기
      </button>
    </div>
  );
};

export default SignInPage;
