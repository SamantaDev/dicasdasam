import { useEffect, useState } from "react";

import PageHero from "../../components/PageHero/PageHero";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

import { getProducts } from "../../services/productService";
import type { Product } from "../../types/Product";

export default function Travel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const allProducts = await getProducts();

        const filteredProducts = allProducts.filter(
          (product) =>
            product.category.toLowerCase() === "viagem"
        );

        setProducts(filteredProducts);
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
      <PageHero
        title="Viagens"
        subtitle="Destinos, hotéis e experiências inesquecíveis."
      />

      {loading ? (
        <p style={{ textAlign: "center", margin: "60px 0" }}>
          Carregando produtos...
        </p>
      ) : (
        <FeaturedProducts
          products={products}
          title="Viagens"
          subtitle="Todos os passeios e experiências recomendados."
          badge="Viagens"
        />
      )}
    </>
  );
}