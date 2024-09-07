import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn, Logout, Home } from "../pages";

const routes = [
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <div>Not Found Page</div>,
  },
];

const router = createBrowserRouter(routes);

const Provider = () => <RouterProvider router={router} />;

export { Provider as RouterProvider };
