import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PageHero from "../../components/PageHero/PageHero";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

import { getProducts } from "../../services/productService";
import type { Product } from "../../types/Product";

export default function Food() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const allProducts = await getProducts();

        const filteredProducts = allProducts.filter(
          (product) =>
            product.category.toLowerCase() === "gastronomia"
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <>
      <PageHero
        title="Gastronomia"
        subtitle="Os melhores lugares para comer e viver experiências incríveis."
      />

      {loading ? (
        <p style={{ textAlign: "center", margin: "60px 0" }}>
          Carregando...
        </p>
      ) : products.length === 0 ? (
        <section
          style={{
            maxWidth: "700px",
            margin: "80px auto",
            textAlign: "center",
          }}
        >
          <h2>Ainda não há recomendações nesta categoria 🍽️</h2>

          <p style={{ margin: "20px 0" }}>
            Em breve a Sam vai compartilhar aqui os melhores restaurantes,
            cafeterias e experiências gastronômicas.
          </p>

          <Link className="details-button" to="/">
            ← Voltar para Home
          </Link>
        </section>
      ) : (
        <FeaturedProducts
          products={products}
          badge="Gastronomia"
          title="Recomendações"
          subtitle={`${products.length} recomendação(ões)`}
        />
      )}
    </>
  );
}