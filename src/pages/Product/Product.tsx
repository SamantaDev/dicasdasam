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


          <div className="product-tags">

            <span className="product-category">
              {product.category}
            </span>


            {product.samChoice && (
              <span className="sam-badge">
                ✨ Escolha da Sam
              </span>
            )}


            {product.novelty && (
              <span className="new-badge">
                🆕 Novidade
              </span>
            )}

          </div>



          <h1>
            {product.title}
          </h1>



          <p>
            {product.description}
          </p>



          {product.samOpinion && (

            <div className="sam-opinion">

              <h3>
                💗 Opinião da Sam
              </h3>


              <p>
                "{product.samOpinion}"
              </p>

            </div>

          )}



          {(product.pros?.length || product.cons?.length) && (

            <div className="product-benefits">


              <h3>
                ✨ Minha experiência
              </h3>



              {product.pros && product.pros.length > 0 && (

                <div className="evaluation-block">

                  <strong>
                    O que eu gostei:
                  </strong>


                  <ul>

                    {product.pros.map((item, index) => (

                      <li key={index}>
                        ✔ {item}
                      </li>

                    ))}

                  </ul>

                </div>

              )}




              {product.cons && product.cons.length > 0 && (

                <div className="evaluation-block">

                  <strong>
                    Pontos de atenção:
                  </strong>


                  <ul>

                    {product.cons.map((item, index) => (

                      <li key={index}>
                        ⚠ {item}
                      </li>

                    ))}

                  </ul>

                </div>

              )}


            </div>

          )}



          <div className="product-buttons">

            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-button"
            >
              Quero conhecer →
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