import React from "react";

function Footer (props) {
  const { logo, social } = props;

  return(
    <footer>
      <section className="footer">
        <div className="footer_logo">
          <img src={logo} alt="Logo Kike" className="img"/>
        </div>
        <div className="footer_social">
          {
            social &&
              social.map((socialMedia) => {
                const { url } = socialMedia;
                return(
                  <a
                    href={socialMedia.url}
                    key={url}
                    className="social_icon"
                  >
                    <img src={socialMedia.image} alt={socialMedia.name} />
                  </a>
                )
              })
          }
        </div>
        <p>©Copyright todos los derechos reservados
  Construido con el 💙</p>
      </section>
    </footer>
  );
}

export default Footer;