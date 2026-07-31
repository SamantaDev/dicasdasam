import "./Admin.css";

import { Link } from "react-router-dom";

import AdminLayout from "../../components/Admin/AdminLayout/AdminLayout";

import { products } from "../../data/products";

export default function Admin() {

  const totalProducts = products.length;

  const totalTravels = 0;
  const totalFood = 0;
  const totalLifestyle = 0;

  return (

    <AdminLayout>

      <section className="admin">

        <div className="admin-header">

          <span>Painel Administrativo</span>

          <h1>Bem-vinda de volta, Sam 👋</h1>

          <p>

            Gerencie todo o conteúdo do Dicas da Sam.

          </p>

        </div>

        <div className="dashboard-cards">

          <div className="dashboard-card">

            <span>📦</span>

            <h2>{totalProducts}</h2>

            <p>Produtos</p>

          </div>

          <div className="dashboard-card">

            <span>✈️</span>

            <h2>{totalTravels}</h2>

            <p>Viagens</p>

          </div>

          <div className="dashboard-card">

            <span>🍽</span>

            <h2>{totalFood}</h2>

            <p>Gastronomia</p>

          </div>

          <div className="dashboard-card">

            <span>✨</span>

            <h2>{totalLifestyle}</h2>

            <p>Lifestyle</p>

          </div>

        </div>

        <div className="admin-actions">

          <Link
            to="#"
            className="new-button"
          >

            + Novo Produto

          </Link>

        </div>

      </section>

    </AdminLayout>

  );

}