import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

import "./ProjectInfo.css";

export default function ProjectInfo({ projects }) {
  const [flip, setFlip] = useState(false);
  const flipCard = () => {
    setFlip(!flip);
  };

  return (
    <div className='project'>
      <h2>{projects.name}</h2>
      <div className='project-content'>
        <div className={`card ${flip ? "flip" : ""}`} onClick={flipCard}>
          {flip ? (
            <div className='card-back'>
              <div className='back-links'>
                <img src={projects.image}></img>
                <div className='links-container'>
                  <a title='Github Repository' href={projects.repoLink}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a title='Deployed Application' href={projects.deployedLink}>
                    <FontAwesomeIcon icon={faPlane} />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className='card-front'>
              <img src={projects.image}></img>
            </div>
          )}
        </div>

        <div className='project-description'>
          <h3>Description</h3>
          {projects.description}
        </div>
      </div>
    </div>
  );
}
