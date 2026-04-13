/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const RoleRoute = ({
  children,
  roles,
}: {
  children: React.ReactNode;
  roles: string[];
}) => {
  const user = useSelector((state: any) => state.auth.user);

  const hasAccess = user?.role && roles.includes(user.role);

  useEffect(() => {
    if (user && !hasAccess) {
      toast.error('You do not have permission to access this page');
    }
  }, [user, hasAccess]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!hasAccess) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RoleRoute;
