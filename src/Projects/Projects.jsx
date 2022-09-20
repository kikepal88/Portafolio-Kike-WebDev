import React from "react";

function Projects (props) {
  const { ProjectsText, Projects } = props;

  return(
    <section id="projects" className="projects">
      <div className="projects_description">
        <h2>Proyectos</h2>
        <p>{ProjectsText}</p>
      </div>
      <div className="projects_project">
        {
          Projects &&
            Projects.map((project) => {
              const {
                name,
                description,
                img_mobile,
                img_desktop,
                url_repo,
                url_demo,
                technologies,
              } = project;
              return(
                <article key={name} className="project_container">
                  <div className="container_imgs">
                    <div className="imgs_mobile">
                      <img src={img_mobile} alt={`Mobile_${name}`}/>
                    </div>
                    <div className="imgs_desktop">
                      <img src={img_desktop} alt={`Desktop_${name}`}/>
                    </div>
                  </div>
                  <div className="img_iterator">
                    <article className="iterator_img">
                      <img src="https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/mobile2.svg?alt=media&token=4b7196a5-f4e6-41f9-a0d7-288b11bd3a1f" alt="icono phone"/>
                    </article>
                    <article className="iterator_img">
                      <img src="https://firebasestorage.googleapis.com/v0/b/base-de-imagenes-proyectos.appspot.com/o/display.svg?alt=media&token=38ed380f-bc20-4032-95de-859117916d26" alt="icono display"/>
                    </article>
                    <span></span>
                  </div>
                  <div className="container_description">
                    <p>{description}</p>
                    <div className="description_buttons">
                      <div className="buttons">
                        <a href={url_repo} target="_blank" rel="noreferrer">
                          <button>REPO</button>
                        </a>
                      </div>
                      <div className="buttons">
                        <a href={url_demo} target="_blank" rel="noreferrer">
                          <button>DEMO</button>
                        </a>
                      </div>
                    </div>
                    <div className="description_technologies">
                      {
                        technologies &&
                          technologies.map((technology) => {
                            const { name, logo } = technology;
                            return(
                              <span key={name} className="technologies_container">
                                <div className="technologies_icon">
                                  <img key={name} src={logo} alt={name} />
                                </div>
                                <p>{name}</p>
                              </span>
                            )
                          })
                      }
                    </div>
                  </div>
                </article>
              );
            })
        }
      </div>
    </section>
  );
}

export default Projects;
