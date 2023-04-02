import React from "react";

function Hero (props) {
  const { profession, avatar, social, technologies } = props;

  console.log(technologies);

  return(
    <section id="hero" className="hero">
      <h1>{profession}</h1>
      <div className="hero_avatar">
        <img src={avatar} alt="Imagen Avatar Kike"/>
      </div>
      <div className="hero_technologies">
        <div className="technologies_front">
          <h3>FrontEnd</h3>
          {
            technologies &&
            technologies.frontend.map((tech) => {
              const { name, logo } = tech;
              return(
                <article key={name}>
                  <img src={logo} alt={name} />
                  <p>{name}</p>
                </article>
              )
            })
          }
        </div>
        <div className="technologies_back">
          <h3>BackEnd</h3>
          {
            technologies &&
            technologies.backend.map((tech) => {
              const { name, logo } = tech;
              return(
                <article key={name}>
                  <img src={logo} alt={name} />
                  <p>{name}</p>
                </article>
              )
            })
          }
        </div>
        <div className="technologies_other">
          <h3>Complemento</h3>
          {
            technologies &&
            technologies.others.map((tech) => {
              const { name, logo } = tech;
              return(
                <article key={name}>
                  <img src={logo} alt={name} />
                  <p>{name}</p>
                </article>
              )
            })
          }
        </div>
      </div>
      <div className="hero_social">
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
      <div className="hero_buttonCV">
        <button>DESCARGA MI CV</button>
      </div>
    </section>

  );
}

export default Hero;
