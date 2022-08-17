import React from "react";
import '../AboutMe/aboutMe.css';

function AboutMe (props) {
  const { profession, avatar, ProfileText, social, hobbies } = props;

  return(
    <section id="aboutMe" className="aboutMe_section">
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
      <div className="aboutMe_description">
        <h2>
          Sobre Mí
        </h2>
        <p>
          {ProfileText}
        </p>
      </div>
      <div className="aboutMe_buttonCV">
        <button>DESCARGA MI CV</button>
      </div>
      <div className="aboutMe_hobbies">
        {
          hobbies &&
            hobbies.map((hobbie) => {
              const { icon } = hobbie;
              return(
                <div className="hobbies_icon" key={icon}>
                  <img src={hobbie.icon} alt={hobbie.name} />
                </div>
              )
            })
        }
      </div>
    </section>

  );
}

export default AboutMe;
