import { Navigate } from 'react-router-dom';
import { Root } from '../components/Root';
import { PATH } from '../constants';
import { PublicRoute } from '../components/PublicRoute';
import { PrivateRoute } from '../components/PrivateRoute';
import SignInPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';
import TodoPage from '../pages/Todo';

export const routes = [
  {
    element: <Root />,
    children: [
      {
        path: PATH.ROOT,
        element: <Navigate to={PATH.SIGN_IN} />,
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
