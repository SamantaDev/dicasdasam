import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import Travel from "../pages/Travel/Travel";
import Food from "../pages/Food/Food";
import Lifestyle from "../pages/Lifestyle/Lifestyle";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Admin from "../pages/Admin/Admin";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/produtos",
        element: <Products />,
      },
      {
        path: "/produto/:id",
        element: <Product />,
      },
      {
        path: "/viagens",
        element: <Travel />,
      },
      {
        path: "/gastronomia",
        element: <Food />,
      },
      {
        path: "/lifestyle",
        element: <Lifestyle />,
      },
      {
        path: "/sobre",
        element: <About />,
      },
      {
        path: "/contato",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);