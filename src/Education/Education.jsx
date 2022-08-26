import React from "react";

function Education(props) {
  const { EducationText, certificates, Schools } = props;

  return(
    <section id="education" className="education">
      <div className="education_description">
        <h2>Educación</h2>
        <p>
          Mis estudios en Desarrollo Web están enfocados en Front-End y los desarrollé estudiando en Platzi, donde he realizado más de 50 cursos sobre tecnologías Web, diseño UX/UI, entre otros.
        </p>
      </div>
      <div className="education_platzi">
        <div className="platzi_icon">
          <div className="icon_logo">
            <img src="https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/isotipoPlatzi.png?alt=media&token=435a33c6-0d08-4f20-abe8-bb0e9af3cfe7" alt="Logo Platzi"/>
          </div>
          <div className="icon_name">
            <img src="https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/logotipo-platzi.png?alt=media&token=981226a5-a15d-4c7b-aa51-e9eef1dda0e0" alt="Platzi"/>
          </div>
        </div>
        <div className="platzi_button">
          <button>VER PERFIL DE PLATZI</button>
        </div>
      </div>
    </section>
  );
}

export default Education;
