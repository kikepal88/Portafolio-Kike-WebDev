import React from "react";

function ProjectCard (props) {
  const {
    name,
    description,
    img_desktop,
    url_demo,
    technologies,
  } = props;

  return(
    <article key={name} className="project_container">
      {
      url_demo ?
      <div className="container_imgs">
        <div className="imgs_desktop">
          <img src={img_desktop} alt={`Desktop_${name}`}/>
        </div>
      </div> :
      <div className="container_imgs">
        <div className="imgs_desktop">
          <img src={img_desktop} alt={`Desktop_${name}`} className="img_profesional"/>
        </div>
      </div>
      }
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
                  </span>
                )
              })
          }
        </div>
        {
        url_demo ?
        <div className="description_buttons">
          <a href={url_demo} target="_blank" rel="noreferrer">DEPLOY</a>
        </div> :
        <div>
        </div>
        }
      </div>
    </article>
  );
}

export default ProjectCard;
