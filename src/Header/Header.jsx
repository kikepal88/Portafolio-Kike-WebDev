import React from "react";

function showMobileMenu () {
  document.getElementById('header_icon-menu').classList.toggle('icon-close');
  document.getElementById('header_menu-nav').classList.toggle('is-active');
}

function Header(props) {
  const { logo } = props;

  return(
    <header>
      <section className="header">
        <div className="header_logo">
          <img src={logo} alt="Logo Kike" className="img"/>
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
                <a href="#aboutMe"><h3>Sobre Mí</h3></a>
              </li>
              <li>
                <a href="#projects"><h3>Proyectos</h3></a>
              </li>
              <li>
                <a href="#education"><h3>Educación</h3></a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Header;
