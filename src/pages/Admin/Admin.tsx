import "./Admin.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AdminLayout from "../../components/Admin/AdminLayout/AdminLayout";

import { getProducts } from "../../services/productService";

export default function Admin() {
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    async function loadProducts() {
      try {
        const products = await getProducts();

        setTotalProducts(products.length);

      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }

    loadProducts();
  }, []);

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
            to="/admin/new-product"
            className="new-button"
          >
            + Novo Produto
          </Link>

        </div>


      </section>
    </AdminLayout>
  );
}