# Week 1-1

> 동료학습을 통해서 팀에서 생각한 원티드 프리온보딩 프론트엔드 인턴십 [선발 과제](https://github.com/walking-sunset/selection-task)의 Best Pratice를 만들고 제출해주세요

![원티드 프리온보딩 프론트엔드 인턴십 배너 사진](https://static.wanted.co.kr/images/events/2909/b35918a6.jpg)

## 기본 사항

- 배포 링크 : [DEMO](https://pre-onboarding-11th-1-9.vercel.app/signin)
- 진행 기간 : 2023.06.27. ~ 2023.06.30.

## How To Run

```shell
$ git clone https://github.com/pre-onboarding-frontend-11th-team-9/pre-onboarding-11th-1-9.git
$ cd pre-onboarding-11th-1-9/
$ npm install
$ npm start
```

## Tech Stack

### 개발

- **React** v18.2
- **React-Router** v6.14
- **SASS** v1.63
- **Axios** v1.4

### 일관성 있는 코드

- **Prettier**
- **Eslint**
- **Husky**

## 구현 기능

- 회원가입
- 로그인 / 로그아웃
  - 이메일, 비밀번호 유효성 검사
- 투두리스트
  - 투두 리스트 작성
  - 투두 리스트 수정
  - 투두 리스트 삭제

## 구현 방법 - Best Practice

### API 처리

- axios instance 사용하여 코드의 중복 해결 
- api url을 상수로 관리하여 관리가 용이하도록 하게 함
- service에 api 요청 로직을 구현하여 호출하여 사용

### localstorage 관리

- utils 폴더에 localStorage 관련 함수를 구현 -> 관심사 분리
- access_token을 상수로 관리하여 관리가 용이하도록 하게 함
```js
const TOKEN_NAME = 'access_token';

const storage = {
  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  },
  setToken(token) {
    localStorage.setItem(TOKEN_NAME, token);
  },
  removeToken() {
    localStorage.removeItem(TOKEN_NAME);
  },
};

export default storage;


```

### 유효성 검사
- utils 폴더에 유효성 검증 관련 함수를 구현 -> 관심사 분리
```js
const validate = {
  email(email) {
    return email.includes('@');
  },
  password(password) {
    return password.length >= 8;
  },
};

export default validate;

  
```


### 커스텀 훅 활용
- useForm 과 useTodo로 커스텀 훅을 구현하여 데이터의 상태 관리와 api호출 구현하의
컴포넌트의 재사용성과 유지보수성을 높임
```js
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

```

### 상수관리
- API URL, 라우트 경로 등을 상수로 관리하여 가독성 및 유지보수성을 높임
```js
export const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

export const API = {
  SIGNUP: '/auth/signup',
  SIGNIN: '/auth/signin',
  TODO: '/todos',
};

```

#### createBrowserRotuer 적용
- 객체로 라우터를 관리하여 가독성을 높이고 , 확장성을 고려할 수 있음


## Team Info

| Name   | Github ID                                                                                                                                                                 | Role      |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| 김보라 | <a href="https://github.com/rockbell89" target="_blank"><img src="https://img.shields.io/badge/rockbell89-181717?style=flat-square&logo=github&logoColor=white"/></a>     | 팀장      |
| 김나현 | <a href="https://github.com/reezekim" target="_blank"><img src="https://img.shields.io/badge/reezekim-181717?style=flat-square&logo=github&logoColor=white"/></a>         | Auth 파트 |
| 이동규 | <a href="https://github.com/tenenger7125" target="_blank"><img src="https://img.shields.io/badge/tenenger7125-181717?style=flat-square&logo=github&logoColor=white"/></a> | Todo 파트 |
| 조은선 | <a href="https://github.com/es39" target="_blank"><img src="https://img.shields.io/badge/es39-181717?style=flat-square&logo=github&logoColor=white"/></a>                 | Todo 파트 |
| 편경진 | <a href="https://github.com/kjindev" target="_blank"><img src="https://img.shields.io/badge/kjindev-181717?style=flat-square&logo=github&logoColor=white"/></a>           | 미참여    |
