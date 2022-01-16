import { useRoutes } from 'react-router-dom';
import Home from './pages/Home'
export default function Router(props) {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);
}
