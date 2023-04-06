import React from "react";
import ProjectCard from "../Project_Card/ProjectCard.jsx";

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
                img_desktop,
                url_repo,
                url_demo,
                technologies,
              } = project;
              return(
                <ProjectCard
                  key={name}
                  name={name}
                  description={description}
                  img_desktop={img_desktop}
                  url_repo={url_repo}
                  url_demo={url_demo}
                  technologies={technologies}
                />
              );
            })
        }
      </div>
    </section>
  );
}

export default Projects;
