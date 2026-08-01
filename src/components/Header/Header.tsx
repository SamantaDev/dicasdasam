import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };

  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (

    <>

      <header className={scrolled ? "header scrolled" : "header"}>

        <NavLink
          to="/"
          className="logo"
          onClick={closeMenu}
        >

          <span>✨</span>

          <div>

            <strong>Dicas da Sam</strong>

            <small>Descobertas que valem a pena.</small>

          </div>

        </NavLink>

        <nav className="desktop-nav">

          <NavLink to="/produtos">
            Produtos
          </NavLink>

          <NavLink to="/viagens">
            Viagens
          </NavLink>

          <NavLink to="/gastronomia">
            Gastronomia
          </NavLink>

          <NavLink to="/lifestyle">
            Lifestyle
          </NavLink>

          <NavLink to="/sobre">
            Sobre
          </NavLink>

          <NavLink to="/contato">
            Contato
          </NavLink>

        </nav>

        <a
          className="instagram desktop-instagram"
          href="https://instagram.com/samantaacristina"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >

          <Menu size={30} />

        </button>

      </header>

      {menuOpen && (

        <>

          <div
            className="menu-overlay"
            onClick={closeMenu}
          />

          <aside className="mobile-menu">

            <div className="mobile-header">

              <div className="mobile-logo">

                <span>✨</span>

                <div>

                  <strong>Dicas da Sam</strong>

                  <small>Descobertas que valem a pena.</small>

                </div>

              </div>

              <button
                className="close-menu"
                onClick={closeMenu}
              >

                <X size={28} />

              </button>

            </div>

            <nav>

              <NavLink
                to="/"
                onClick={closeMenu}
              >
                Home
              </NavLink>

              <NavLink
                to="/produtos"
                onClick={closeMenu}
              >
                Produtos
              </NavLink>

              <NavLink
                to="/viagens"
                onClick={closeMenu}
              >
                Viagens
              </NavLink>

              <NavLink
                to="/gastronomia"
                onClick={closeMenu}
              >
                Gastronomia
              </NavLink>

              <NavLink
                to="/lifestyle"
                onClick={closeMenu}
              >
                Lifestyle
              </NavLink>

              <NavLink
                to="/sobre"
                onClick={closeMenu}
              >
                Sobre
              </NavLink>

              <NavLink
                to="/contato"
                onClick={closeMenu}
              >
                Contato
              </NavLink>

            </nav>

            <a
              className="instagram mobile-instagram"
              href="https://instagram.com/samantaacristina"
              target="_blank"
              rel="noreferrer"
            >

              Instagram

            </a>

          </aside>

        </>

      )}

    </>

  );

}