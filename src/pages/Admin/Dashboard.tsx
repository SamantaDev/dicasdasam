import "./Dashboard.css";

import { useEffect, useState } from "react";
import {
  FolderKanban,
  MousePointerClick,
  Package,
  Star,
} from "lucide-react";

import AdminLayout from "../../components/Admin/Layout/AdminLayout";
import ProductTable from "../../components/Admin/ProductTable/ProductTable";
import StatCard from "../../components/Admin/StatCard/StatCard";

import { getProducts } from "../../services/productService";
import { getCategories } from "../../services/categoryService";

import type { Product } from "../../types/Product";

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState(0);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const productsData = await getProducts();
        const categoriesData = await getCategories();

        setProducts(productsData);
        setCategories(categoriesData.length);

      } catch (error) {
        console.error("Erro ao carregar dashboard:", error);
      }
    }

    loadDashboard();
  }, []);


  const featuredProducts = products.filter(
    (product) => product.featured
  );


  return (
    <AdminLayout>

      <section className="dashboard-page">

        <div className="dashboard-page__intro">
          <p>Painel administrativo</p>

          <h2>Visão geral</h2>

          <span>
            Acompanhe os principais números do seu conteúdo.
          </span>
        </div>


        <section
          className="dashboard-page__stats"
          aria-label="Estatísticas do painel"
        >

          <StatCard
            label="Produtos"
            value={products.length.toString()}
            detail="Produtos cadastrados"
            icon={<Package size={22}/>}
            tone="pink"
          />


          <StatCard
            label="Categorias"
            value={categories.toString()}
            detail="Categorias cadastradas"
            icon={<FolderKanban size={22}/>}
            tone="purple"
          />


          <StatCard
            label="Destaques"
            value={featuredProducts.length.toString()}
            detail="Produtos em destaque"
            icon={<Star size={22}/>}
            tone="orange"
          />


          <StatCard
            label="Cliques"
            value="0"
            detail="Em acompanhamento"
            icon={<MousePointerClick size={22}/>}
            tone="blue"
          />


        </section>


        <ProductTable products={products}/>


      </section>

    </AdminLayout>
  );
}