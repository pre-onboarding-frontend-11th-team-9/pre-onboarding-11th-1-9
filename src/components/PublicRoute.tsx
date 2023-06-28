import { Navigate } from 'react-router-dom';
import storage from '../utils/storage';

type PublicRouteProps = {
  element: JSX.Element;
  redirectTo: string;
};

export const PublicRoute = ({ element, redirectTo }: PublicRouteProps) => {
  const isAuthenticated = storage.getToken();
  return isAuthenticated ? <Navigate to={redirectTo} /> : element;
};
