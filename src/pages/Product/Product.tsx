import "./Product.css";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getProduct } from "../../services/productService";
import type { Product as ProductType } from "../../types/Product";

export default function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.error("Erro ao carregar produto:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <section className="product-page">
        <h1>Carregando produto...</h1>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="product-page">
        <h1>Produto não encontrado.</h1>

        <Link to="/" className="back-button">
          ← Voltar
        </Link>
      </section>
    );
  }

  return (
    <section className="product-page">
      <div className="product-container">

        <div className="product-photo">
          <img
            className="main-image"
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="product-info">

          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.title}</h1>

          <p>{product.description}</p>

          <div className="product-benefits">

            <h3>Por que recomendamos?</h3>

            <ul>
              <li>✔ Produto selecionado cuidadosamente.</li>
              <li>✔ Excelente custo-benefício.</li>
              <li>✔ Boa avaliação dos consumidores.</li>
              <li>✔ Vale a pena conhecer.</li>
            </ul>

          </div>

          <div className="product-buttons">

            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-button"
            >
              Comprar agora →
            </a>

            <Link
              to="/"
              className="back-button"
            >
              ← Voltar
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}