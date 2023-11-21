import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export const BaseApp = () => {
  const router = createMemoryRouter(routes);
  return <RouterProvider router={router} />;
};
