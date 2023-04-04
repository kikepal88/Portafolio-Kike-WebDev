import React from "react";

function AboutMe (props) {
  const { ProfileText } = props;

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
    </section>
  );
}

export default AboutMe;
