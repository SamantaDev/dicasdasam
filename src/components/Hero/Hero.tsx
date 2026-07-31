import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-light one"></div>
      <div className="hero-light two"></div>

      <div className="hero-content">

        <div className="hero-text">

          <span className="badge">
            ✨ Recomendações reais
          </span>

          <h1>
            Descubra produtos incríveis,
            viagens inesquecíveis e
            experiências que realmente
            <span> valem a pena.</span>
          </h1>

          <p>
            Produtos, viagens, gastronomia e lifestyle.
            Tudo selecionado por quem realmente testa,
            usa e recomenda.
          </p>

          <div className="hero-buttons">

            <button>
              Explorar recomendações
            </button>

            <a
              href="https://instagram.com/samantaacristina"
              target="_blank"
              rel="noreferrer"
            >
              Instagram →
            </a>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="/images/sam.png"
            alt="Sam"
          />

        </div>

      </div>

    </section>
  );
}