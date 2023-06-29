import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/global.scss';
import { routes } from './routes';

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
