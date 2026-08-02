import { useEffect, useState } from "react";

import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

import { getProducts } from "../../services/productService";

import type { Product } from "../../types/Product";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [latestProducts, setLatestProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();

        const featured = data.filter(
          (product) => product.featured
        );

        setFeaturedProducts(featured);
        setLatestProducts(data.slice(0, 6));

      } catch (error) {
        console.error("Erro ao carregar produtos:", error);

      } finally {
        setLoading(false);
      }
    }

    loadProducts();

  }, []);

  return (
    <>
      <Hero />

      <Categories />

      {loading ? (

        <div
          style={{
            padding: "80px",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          Carregando produtos...
        </div>

      ) : (

        <>

          <FeaturedProducts
            products={
              featuredProducts.length > 0
                ? featuredProducts
                : latestProducts
            }
            badge="✨ Escolhas da Sam"
            title="Produtos que realmente valem a pena"
            subtitle="Minha seleção de produtos que fazem sentido e eu recomendo."
          />


          <FeaturedProducts
            products={latestProducts}
            badge="🆕 Novidades"
            title="Últimas descobertas"
            subtitle="As recomendações mais recentes do Dicas da Sam."
          />

        </>

      )}

    </>
  );
}