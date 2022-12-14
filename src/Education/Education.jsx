import React from "react";

function activeShowList (key1, key2, key3) {
  document.getElementById(key1).classList.toggle('is-active');
  document.getElementById(key2).classList.toggle('is-active');
  document.getElementById(key3).classList.toggle('is-active');
}

function showCoursesList (e) {
  const target = e.target.id;
  console.log(target);
  if (target.includes("Web")) {
    activeShowList(`header_Web`, `arrow_Web`, `courses_Web`);
  } else if (target.includes("Eng")) {
    activeShowList(`header_Eng`, `arrow_Eng`, `courses_Eng`);
  } else if (target.includes("Des")) {
    activeShowList(`header_Des`, `arrow_Des`, `courses_Des`);
  }
}

function Education(props) {
  const { EducationText, Schools } = props;
  const certDesWeb = Schools && Schools[0].certificates;
  const certEnglish = Schools && Schools[1].certificates;
  const certDesign = Schools && Schools[2].certificates;
  const certs = certDesWeb && certDesWeb.concat(certEnglish, certDesign);

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
              const { name, key, certificates } = School;
              return(
                <div
                  id={`school_${key}`}
                  className="school_container"
                  key={name}
                  onClick={(e) => showCoursesList(e)}
                >
                  <div
                    id={`header_${key}`}
                    className="container_header"
                  >
                    <div className="header_description">
                      <h3
                        id={`h3_${key}`}
                      >
                        {name}
                      </h3>
                      <p
                        id={`p_${key}`}
                      >Cursos: {certificates.length}</p>
                    </div>
                    <div
                      id={`arrow_${key}`}
                      className="header_arrow"
                    >
                    </div>
                  </div>
                  <div
                    id={`courses_${key}`}
                    className="container_courses">
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
      <div className="education_certificates">
          <div className="certificates_container">
            {
              certs &&
                certs.map((cert) => {
                  const { name, url } = cert;
                  return(
                    <div className="certificates_image" key={name}>
                      <img src={url} alt={name} />
                    </div>
                  );
                })
            }
          </div>
      </div>
    </section>
  );
}

export default Education;
