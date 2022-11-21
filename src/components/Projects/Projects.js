import { useState } from "react";
import { CSSTransition } from "react-transition-group";

//Importing for madeline's nail boutique
import Madeline from "../../images/product-images/madeline/one.png";

//importing for manolo barbershop
import Manolo from "../../images/product-images/manolo/one.PNG";

import "./Projects.css";

export default function Projects() {
  const [showFront, setShowFront] = useState(true);

  return (
    <div className='projects-container'>
      <div className='title-container'>
        <h2 className='project-title'>Projects</h2>
      </div>
      <div className='project-container'>
        <div className='project'>
          <h2>Madeline's Nail Boutique</h2>
          <div className='project-content'>
            <div className='card-container'>
              <div className='card'>
                <div className='card-back'>Back</div>
                <div className='card-front'>Front</div>
              </div>
            </div>
            <div className='project-description'>
              <p>This is some boiler plate to get the description of the project</p>
            </div>
          </div>
        </div>
        <div className='project'>
          <h2>Manolo Barbershop</h2>
          <div className='project-content'></div>
        </div>
      </div>
    </div>
  );
}
