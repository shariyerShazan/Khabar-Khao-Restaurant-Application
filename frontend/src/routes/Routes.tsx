import MainLayout from '../layouts/MainLayout';
import { createBrowserRouter } from 'react-router';
// import Login from '../(auth)/login/Login';
import ErrorPage from '@/components/shared/ErrorPage';
import Home from '@/(customer)/pages/home/Home';
import Login from '@/(auth)/login/Login';
import AddUserRole from '@/(auth)/addUserRole/AddUserRole';

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: "/add-role",
    element: <AddUserRole />
  }
]);
