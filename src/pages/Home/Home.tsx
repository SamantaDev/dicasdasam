import { useEffect, useState } from "react";

import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

import { getProducts } from "../../services/productService";

import type { Product } from "../../types/Product";

export default function Home() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadProducts() {

      try {

        const data = await getProducts();

        const featuredProducts = data.filter(
          (product) => product.featured
        );

        if (featuredProducts.length > 0) {

          setProducts(featuredProducts);

        } else {

          setProducts(data.slice(0, 6));

        }

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

        <FeaturedProducts products={products} />

      )}

    </>

  );

}