import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../pages/home/home/Home';
import About from '../../pages/about/About';
import Appointment from '../../pages/appointment/Appointment';
import Login from '../../pages/login/Login';
import SignUp from './../../pages/signUp/SignUp';
import Dashboard from '../../pages/dashboard/Dashboard';
import PrivateRoute from '../privateRoute/PrivateRoute';
import DashboardLayout from '../../layout/DashboardLayout';
import MyAppoinment from '../../pages/dashboard/myAppoinment/MyAppoinment';
import AllUsers from '../../pages/dashboard/dashboard/allUsers/AllUsers';
import AdminRoute from '../adminRoute/AdminRoute';
import AddDoctor from '../../pages/dashboard/addDoctor/AddDoctor';
import ManageDoctor from '../../pages/dashboard/mangeDoctor/ManageDoctor';
import Payment from '../../pages/dashboard/payment/Payment';

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
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },

  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <MyAppoinment />,
      },
      {
        path: '/dashboard/all-users',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/add-doctor',
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/manage-doctor',
        element: (
          <AdminRoute>
            <ManageDoctor />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/payment/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:3000/bookings/${params.id}`),
        element: (
          <AdminRoute>
            <Payment />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
