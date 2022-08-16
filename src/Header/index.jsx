import React from "react";
import './header.css';

function showMobileMenu () {
  document.getElementById('header_icon-menu').classList.toggle('icon-close');
  document.getElementById('header_menu-nav').classList.toggle('is-active');
}

function Header(props) {
  const { logo } = props;

  return(
    <header>
      <section className="header_section">
        <div className="header_logo">
          <img src={logo} alt="Logo Kike" />
        </div>
        <i
          id="header_icon-menu"
          className="header_menu-icon"
          onClick={showMobileMenu}>
        </i>
        <div id="header_menu-nav" className="header_menu-nav">
          <nav>
            <ul>
              <li>
                <a href="#about"><h3>SOBRE MÍ</h3></a>
              </li>
              <li>
                <a href="#education"><h3>EDUCACIÓN</h3></a>
              </li>
              <li>
                <a href="#projects"><h3>PROYECTOS</h3></a>
              </li>
              <li>
                <a href="#technologies"><h3>TECNOLOGÍAS</h3></a>
              </li>
              <li>
                <a href="#contact"><h3>HABILIDADES</h3></a>
              </li>
              <li>
                <a href="#contact"><h3>CONTACTO</h3></a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Header;
