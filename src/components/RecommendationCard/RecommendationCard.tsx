import { Link } from "react-router-dom";
import "./RecommendationCard.css";

import type { Product } from "../../types/Product";

interface Props {
  product: Product;
}

export default function RecommendationCard({ product }: Props) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.title}
        />

        <span className="category">
          {product.category}
        </span>
      </div>

      <div className="product-content">
        <h3>{product.title}</h3>

        <p>{product.shortDescription}</p>

        <Link
          to={`/produto/${product.id}`}
          className="details-button"
        >
          Ver detalhes
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}