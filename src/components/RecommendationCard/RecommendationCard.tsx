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


        {product.samChoice && (
          <span className="sam-badge">
            ✨ Escolha da Sam
          </span>
        )}


        {!product.samChoice && product.novelty && (
          <span className="novelty-badge">
            🆕 Novidade
          </span>
        )}


        <span className="category">
          {product.category}
        </span>


      </div>


      <div className="product-content">


        <h3>
          {product.title}
        </h3>


        <p>
          {product.shortDescription}
        </p>


        {product.samOpinion && (

          <div className="sam-opinion">

            <strong>
              💬 Opinião da Sam:
            </strong>

            <span>
              {product.samOpinion}
            </span>

          </div>

        )}


        <Link
          to={`/produto/${product.id}`}
          className="details-button"
        >

          Ver recomendação

          <span>
            →
          </span>

        </Link>


      </div>


    </article>
  );
}