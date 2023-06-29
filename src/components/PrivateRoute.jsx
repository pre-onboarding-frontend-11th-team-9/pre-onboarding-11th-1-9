import { Navigate } from 'react-router-dom';
import storage from '../utils/storage';

export const PrivateRoute = ({ element, redirectTo }) => {
  const isAuthenticated = storage.getToken();
  return isAuthenticated ? element : <Navigate to={redirectTo} />;
};
