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



  function handleNavigation() {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

  }



  return (

    <>

      <header className={scrolled ? "header scrolled" : "header"}>


        <NavLink
          to="/"
          className="logo"
          onClick={() => {
            closeMenu();
            handleNavigation();
          }}
        >

          <span>✨</span>

          <div>

            <strong>Dicas da Sam</strong>

            <small>Descobertas que valem a pena.</small>

          </div>

        </NavLink>



        <nav className="desktop-nav">


          <NavLink 
            to="/produtos"
            onClick={handleNavigation}
          >
            Produtos
          </NavLink>


          <NavLink 
            to="/viagens"
            onClick={handleNavigation}
          >
            Viagens
          </NavLink>


          <NavLink 
            to="/gastronomia"
            onClick={handleNavigation}
          >
            Gastronomia
          </NavLink>


          <NavLink 
            to="/lifestyle"
            onClick={handleNavigation}
          >
            Lifestyle
          </NavLink>


          <NavLink 
            to="/sobre"
            onClick={handleNavigation}
          >
            Sobre
          </NavLink>


          <NavLink 
            to="/contato"
            onClick={handleNavigation}
          >
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
                onClick={() => {
                  closeMenu();
                  handleNavigation();
                }}
              >
                Home
              </NavLink>



              <NavLink
                to="/produtos"
                onClick={() => {
                  closeMenu();
                  handleNavigation();
                }}
              >
                Produtos
              </NavLink>



              <NavLink
                to="/viagens"
                onClick={() => {
                  closeMenu();
                  handleNavigation();
                }}
              >
                Viagens
              </NavLink>



              <NavLink
                to="/gastronomia"
                onClick={() => {
                  closeMenu();
                  handleNavigation();
                }}
              >
                Gastronomia
              </NavLink>



              <NavLink
                to="/lifestyle"
                onClick={() => {
                  closeMenu();
                  handleNavigation();
                }}
              >
                Lifestyle
              </NavLink>



              <NavLink
                to="/sobre"
                onClick={() => {
                  closeMenu();
                  handleNavigation();
                }}
              >
                Sobre
              </NavLink>



              <NavLink
                to="/contato"
                onClick={() => {
                  closeMenu();
                  handleNavigation();
                }}
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