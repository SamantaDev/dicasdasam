import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";

import Travel from "./pages/Travel/Travel";
import Food from "./pages/Food/Food";
import Lifestyle from "./pages/Lifestyle/Lifestyle";
import Contact from "./pages/Contact/Contact";

import Admin from "./pages/Admin/Admin";
import Login from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";
import AdminProducts from "./pages/Admin/Products/Products";
import NewProduct from "./pages/Admin/NewProduct/NewProduct";
import Categories from "./pages/Admin/Categories/Categories";


export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        {/* Site público */}

        <Route 
          path="/" 
          element={<Home />} 
        />

        <Route 
          path="/produtos" 
          element={<Products />} 
        />

        <Route 
          path="/produto/:id" 
          element={<Product />} 
        />


        <Route 
          path="/viagens" 
          element={<Travel />} 
        />

        <Route 
          path="/gastronomia" 
          element={<Food />} 
        />

        <Route 
          path="/lifestyle" 
          element={<Lifestyle />} 
        />

        <Route 
          path="/contato" 
          element={<Contact />} 
        />


        {/* Área administrativa */}

        <Route 
          path="/admin" 
          element={<Admin />} 
        />

        <Route 
          path="/admin/login" 
          element={<Login />} 
        />

        <Route 
          path="/admin/dashboard" 
          element={<Dashboard />} 
        />

        <Route 
          path="/admin/products" 
          element={<AdminProducts />} 
        />

        <Route 
          path="/admin/new-product" 
          element={<NewProduct />} 
        />

        <Route 
          path="/admin/categories" 
          element={<Categories />} 
        />

      </Routes>

    </BrowserRouter>
  );
}