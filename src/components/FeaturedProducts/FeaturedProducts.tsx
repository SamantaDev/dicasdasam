import "./FeaturedProducts.css";
import { products as allProducts } from "../../data/products";
import type { Product } from "../../data/products";

import RecommendationCard from "../RecommendationCard/RecommendationCard";

interface FeaturedProductsProps {
  products?: Product[];
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function FeaturedProducts({
  products = allProducts,
  title = "Produtos em destaque",
  subtitle = "Os produtos mais recomendados do momento.",
  badge = "Destaques",
}: FeaturedProductsProps) {
  return (
    <section className="featured">

      <div className="featured-title">

        <span>{badge}</span>

        <h2>{title}</h2>

        <p>{subtitle}</p>

      </div>

      <div className="products-grid">

        {products.map((product) => (

          <RecommendationCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
}