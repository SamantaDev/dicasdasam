import { Outlet } from "react-router-dom";

import "./AdminLayout.css";

export default function AdminLayout() {

  return (

    <div className="admin-layout">

      <aside className="sidebar">

        <h2>Dicas da Sam</h2>

        <nav>

          <a href="#">Dashboard</a>

          <a href="#">Produtos</a>

          <a href="#">Categorias</a>

          <a href="#">Viagens</a>

          <a href="#">Gastronomia</a>

          <a href="#">Lifestyle</a>

          <a href="#">Configurações</a>

        </nav>

      </aside>

      <section className="admin-content">

        <Outlet />

      </section>

    </div>

  );

}