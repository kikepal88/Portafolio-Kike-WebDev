import React from "react";

function AboutMe (props) {
  const { ProfileText, hobbies } = props;

  return(
    <section id="aboutMe" className="aboutMe">
      <div className="aboutMe_description">
        <h2 className="h2">
          Sobre Mí
        </h2>
        <p>
          {ProfileText}
        </p>
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
