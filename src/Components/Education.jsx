import React from "react";
import '../Styles/education.css';

function Education(props) {
  const { EducationText, certificates, Schools } = props;

  return(
    <section id="education" className="education_section">
      <div className="education_description">
        <h2>Educación</h2>
      </div>
    </section>
  );
}

export default Education;
