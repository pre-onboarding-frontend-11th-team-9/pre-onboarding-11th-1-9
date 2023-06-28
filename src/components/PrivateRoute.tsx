import { Navigate } from 'react-router-dom';
import storage from '../utils/storage';

type PrivateRouteProps = {
  element: JSX.Element;
  redirectTo: string;
};

export const PrivateRoute = ({ element, redirectTo }: PrivateRouteProps) => {
  const isAuthenticated = storage.getToken();
  return isAuthenticated ? element : <Navigate to={redirectTo} />;
};
