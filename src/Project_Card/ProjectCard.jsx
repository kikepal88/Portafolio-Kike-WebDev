import React from "react";

function ProjectCard (props) {
  const {
    name,
    description,
    img_desktop,
    url_repo,
    url_demo,
    technologies,
  } = props;

  return(
    <article key={name} className="project_container">
      <div className="container_imgs">
        <div className="imgs_desktop">
          <img src={img_desktop} alt={`Desktop_${name}`}/>
        </div>
      </div>
      <div className="container_description">
        <h3>{name}</h3>
        <p>{description}</p>
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
        <div className="hero_buttonCV">
          <a href={url_demo} target="_blank" rel="noreferrer">DEPLOY</a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
