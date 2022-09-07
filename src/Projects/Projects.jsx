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
                  <div className="container_description">
                    <p>{description}</p>
                    <div className="description_buttons">
                      <div className="buttons">
                        <button>REPO</button>
                      </div>
                      <div className="buttons">
                        <button>DEMO</button>
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
