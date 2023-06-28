import LandingPage from '@/pages/Landing';
import { PrivateRoute } from '../components/PrivateRoute';
import { PublicRoute } from '../components/PublicRoute';
import { Root } from '../components/Root';
import { PATH } from '../constants';
import SignInPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';
import TodoPage from '../pages/Todo';

export const routes = [
  {
    element: <Root />,
    children: [
      {
        path: PATH.ROOT,
        element: <LandingPage />,
      },
      {
        path: PATH.SIGN_IN,
        element: (
          <PublicRoute element={<SignInPage />} redirectTo={PATH.TODO} />
        ),
      },
      {
        path: PATH.SIGN_UP,
        element: (
          <PublicRoute element={<SignUpPage />} redirectTo={PATH.TODO} />
        ),
      },
      {
        path: PATH.TODO,
        element: (
          <PrivateRoute element={<TodoPage />} redirectTo={PATH.SIGN_IN} />
        ),
      },
    ],
  },
];
