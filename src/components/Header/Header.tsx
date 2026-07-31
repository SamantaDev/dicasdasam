import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header className={scrolled ? "header scrolled" : "header"}>

      <NavLink to="/" className="logo">

        <span>✨</span>

        <div>

          <strong>Dicas da Sam</strong>

          <small>Descobertas que valem a pena.</small>

        </div>

      </NavLink>

      <nav>

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
        className="instagram"
        href="https://instagram.com/samantaacristina"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>

    </header>

  );

}