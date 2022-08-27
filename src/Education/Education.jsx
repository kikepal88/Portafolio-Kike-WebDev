import React from "react";

function Education(props) {
  const { EducationText, Schools } = props;

  return(
    <section id="education" className="education">
      <div className="education_description">
        <h2>Educación</h2>
        <p>{EducationText}</p>
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
      <div className="education_schools">
        {
          Schools &&
            Schools.map((School) => {
              const { name, certificates } = School;
              return(
                <div className="school_container" key={name}>
                  <div className="container_header">
                    <h3>{name}</h3>
                    <p>Cursos: {certificates.length}</p>
                    <div className="header_arrow"></div>
                  </div>
                  <div className="container_courses">
                    {
                      certificates &&
                        certificates.map((certificate) => {
                          const { name } = certificate;
                          return(
                            <div className="courses_name" key={name}>
                              <p>{name}</p>
                            </div>
                          );
                        })
                    }
                  </div>
                </div>
              );
            })
          }
      </div>
    </section>
  );
}

export default Education;
