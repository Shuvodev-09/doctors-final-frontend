import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../pages/home/home/Home';
import About from '../../pages/about/About';
import Appointment from '../../pages/appointment/Appointment';
import Login from '../../pages/login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/appointment',
        element: <Appointment />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
