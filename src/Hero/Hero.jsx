import React from "react";

function Hero (props) {
  const { profession, avatar, social } = props;

  return(
    <section id="aboutMe" className="aboutMe">
      <h1>{profession}</h1>
      <div className="aboutMe_avatar">
        <img src={avatar} alt="Imagen Avatar Kike"/>
      </div>
      <div className="aboutMe_social">
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
      <div className="aboutMe_buttonCV">
        <button>DESCARGA MI CV</button>
      </div>
    </section>

  );
}

export default Hero;
