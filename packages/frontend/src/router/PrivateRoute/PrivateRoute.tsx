import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { getToken } from "../../utils";

interface PrivateRouteProps {
  children: ReactElement;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const authenticated = getToken();

  if (authenticated) return children;

  return <Navigate to="/" />;
};
