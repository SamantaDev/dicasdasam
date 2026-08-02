import { useEffect, useState } from "react";

import Hero from "../../components/Hero/Hero";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

import { getProducts } from "../../services/productService";

import type { Product } from "../../types/Product";


export default function Home() {

  const [samChoices, setSamChoices] = useState<Product[]>([]);
  const [novelties, setNovelties] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    async function loadProducts() {

      try {

        const data = await getProducts();



        const choices = data.filter(
          (product) => product.samChoice
        );



        const news = data.filter(
          (product) => product.novelty
        );



        const featured = data.filter(
          (product) => product.featured
        );



        setSamChoices(choices);

        setNovelties(news);

        setFeaturedProducts(featured);



      } catch (error) {

        console.error(
          "Erro ao carregar produtos:",
          error
        );


      } finally {

        setLoading(false);

      }

    }


    void loadProducts();


  }, []);




  return (

    <>

      <Hero />


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


          {samChoices.length > 0 && (

            <FeaturedProducts

              products={samChoices}

              badge="✨ Escolhas da Sam"

              title="Produtos que realmente valem a pena"

              subtitle="Minha seleção pessoal de produtos que eu testaria, usaria e recomendaria."

            />

          )}



          {novelties.length > 0 && (

            <FeaturedProducts

              products={novelties}

              badge="🔥 Novidades"

              title="As últimas descobertas"

              subtitle="Novos produtos encontrados e selecionados para você."

            />

          )}



          {featuredProducts.length > 0 && (

            <FeaturedProducts

              products={featuredProducts}

              badge="⭐ Destaques"

              title="Mais recomendados"

              subtitle="Os produtos que ganharam destaque no Dicas da Sam."

            />

          )}



        </>

      )}

    </>

  );

}