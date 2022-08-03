import React from "react";
import './header.css';


function Header(props) {
  const { logo } = props;

  return(
    <header>
      <section className="header_section">
        <div className="header_logo">
          <img src={logo} alt="Logo Kike" />
        </div>
        <div className="header_menu">
          <i id="header__icon-menu" className="header__icon-menu" onclick="showMobileMenu()"></i>
          <div id="header_menu_nav" className="header_menu_nav">
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
                  <a href="#contact"><h3>CONTACTO</h3></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
