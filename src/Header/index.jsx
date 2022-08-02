import React from "react";


function Header(props) {
  const { logo } = props;

  return(
    <header>
      <div>
        <img src={logo} alt="Logo Kike" />
      </div>
    </header>
  );
}

export default Header;
