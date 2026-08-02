import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>💖 Dicas da Sam</h2>

          <p>
            Produtos, viagens, gastronomia e lifestyle.
            Tudo escolhido com carinho.
          </p>

        </div>

        <div className="footer-links">

          <h3>Navegação</h3>

<a href="/produtos">Produtos</a>

<a href="/viagens">Viagens</a>

<a href="/gastronomia">Gastronomia</a>

<a href="/lifestyle">Lifestyle</a>

<a href="/contato">Contato</a>

        </div>

        <div className="footer-links">

          <h3>Contato</h3>

          <a
            href="https://instagram.com/samantaacristina"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a href="mailto:contato@dicasdasam.com">
            contato@dicasdasam.com
          </a>

        </div>

      </div>

      <div className="footer-copy">

        © 2026 Dicas da Sam • Todos os direitos reservados.

      </div>

    </footer>
  );
}