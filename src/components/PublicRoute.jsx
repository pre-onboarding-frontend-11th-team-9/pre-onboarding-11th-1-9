import { Navigate } from 'react-router-dom';
import storage from '../utils/storage';

export const PublicRoute = ({ element, redirectTo }) => {
  const isAuthenticated = storage.getToken();
  return isAuthenticated ? <Navigate to={redirectTo} /> : element;
};
