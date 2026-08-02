import type { RouteObject } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Dashboard from "../pages/Admin/Dashboard";
import Categories from "../pages/Admin/Categories/Categories";
import Login from "../pages/Admin/Login";
import NewProduct from "../pages/Admin/NewProduct/NewProduct";
import Products from "../pages/Admin/Products/Products";

export const adminRoutes: RouteObject[] = [
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
      {
        path: "/admin/new-product",
        element: <NewProduct />,
      },
      {
        path: "/admin/products/:id/edit",
        element: <NewProduct />,
      },
      {
        path: "/admin/categories",
        element: <Categories />,
      },
    ],
  },
];
