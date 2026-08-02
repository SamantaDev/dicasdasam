import "./About.css";

import samPhoto from "../../assets/images/about/sam-about.jpeg";

export default function About() {
  return (
    <section className="about-page">

      <div className="about-container">

        <div className="about-card">

          <div className="about-photo">

            <img
              src={samPhoto}
              alt="Sam - Dicas da Sam"
            />

          </div>


          <div>

            <span className="about-tag">
              Sobre
            </span>


            <h1>
              Prazer, eu sou a Sam 👋
            </h1>


            <p className="about-intro">
              Curiosa por natureza, apaixonada por descobrir
              produtos incríveis, lugares especiais e tudo aquilo
              que pode deixar a vida mais prática e feliz.
            </p>

          </div>

        </div>



        <div className="about-text">

          <p>
            Sempre fui aquela pessoa que pesquisava antes de
            comprar qualquer coisa. Comparava opções, lia
            avaliações e buscava encontrar aquilo que realmente
            valia a pena.
          </p>


          <p>
            Com o tempo, amigos e familiares começaram a perguntar:
            <strong> "Sam, você recomenda?"</strong>
          </p>


          <p>
            Foi assim que nasceu o <strong>Dicas da Sam</strong>.
            Um espaço criado para compartilhar descobertas,
            experiências e recomendações sinceras.
          </p>


          <p>
            Aqui você encontra dicas de produtos, viagens,
            gastronomia e lifestyle. Tudo escolhido com carinho,
            pensando em economizar seu tempo e ajudar nas suas
            escolhas.
          </p>

        </div>



        <div className="about-mission">

          <h2>
            Minha missão ✨
          </h2>


          <p>
            Facilitar suas escolhas mostrando apenas aquilo que
            realmente vale a pena conhecer.
          </p>

        </div>



        <div className="about-values">


          <div>

            <h3>
              🛍 Produtos
            </h3>

            <p>
              Achadinhos e recomendações que unem qualidade e
              custo-benefício.
            </p>

          </div>



          <div>

            <h3>
              ✈️ Viagens
            </h3>

            <p>
              Lugares e experiências que merecem fazer parte da
              sua história.
            </p>

          </div>



          <div>

            <h3>
              🍽 Gastronomia
            </h3>

            <p>
              Restaurantes e sabores que realmente valem a visita.
            </p>

          </div>



          <div>

            <h3>
              ✨ Lifestyle
            </h3>

            <p>
              Pequenas descobertas para deixar o dia a dia melhor.
            </p>

          </div>


        </div>



        <div className="about-instagram">

          <h2>
            Vamos nos conhecer melhor?
          </h2>


          <p>
            Acompanhe minhas descobertas e novidades no Instagram.
          </p>


          <a
            href="https://instagram.com/samantaacristina"
            target="_blank"
            rel="noopener noreferrer"
            className="about-button"
          >
            @samantaacristina
          </a>


        </div>


      </div>

    </section>
  );
}