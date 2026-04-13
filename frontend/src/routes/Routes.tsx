import MainLayout from '../layouts/MainLayout';
import { createBrowserRouter } from 'react-router';

import ErrorPage from '@/components/shared/ErrorPage';
import Home from '@/(customer)/pages/home/Home';
import Login from '@/(auth)/login/Login';
import AddUserRole from '@/(auth)/addUserRole/AddUserRole';
import Terms from '@/(auth)/privacy&terms/Terms';
import Privacy from '@/(auth)/privacy&terms/Privacy';

import ProtectedRoute from './ProtectedRoute';
import RoleRoute from './RoleRoute';

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <RoleRoute roles={['CUSTOMER', 'RIDER', 'RESTAURANT']}>
            <Home />
          </RoleRoute>
        ),
      },
    ],
  },

  // PUBLIC
  { path: '/login', element: <Login /> },
  { path: '/terms', element: <Terms /> },
  { path: '/privacy', element: <Privacy /> },

  // AUTH ONLY
  {
    path: '/add-role',
    element: (
      <ProtectedRoute>
        <AddUserRole />
      </ProtectedRoute>
    ),
  },
]);
