import "./Projects.css";

import ManoloImg from "../../images/product-images/manolo/manolo-image.png";
import MadelineImg from "../../images/product-images/madeline/madeline-image.png";

import ProjectInfo from "./ProjectCard/ProjectInfo";

const projects = [
  {
    id: 1,
    name: "Manolo Barbershop",
    description:
      "Currently working for Manolo Barbershop as a focused front end developer with a little bit of help on the backend. I am helping create a good and responsive website for the establishment. My responsibilities consist of using React.js to create an organized and scalable application later in the future, CSS for the styling and responsiveness, Apollo Server to make GraphQL queries and mutations to connect to our backend database using MongoDB, and stripe npm with JWT for the shop section of the application.",
    image: ManoloImg,
    repoLink: "https://github.com/SklylerF/manolo-barber-shop",
    deployedLink: "https://manolo-barbershop.herokuapp.com/",
  },
  {
    id: 2,
    name: "Madeline's Nail Boutique",
    description:
      "Madeline's Nail Boutique Website was made for for a nail shop located in San Bernardino, CA. For one of my classes projects, my peers and I wanted to look for a client for our second project. We stumbled across this nail shop that that we saw potential to create a better website for the shop owner. We decide to create her a website with the option to implement the ability for her clients to request an appointment straight from her website and for her to be able to view her appointments from her website as well using an authentication system. During this project, my peers and I had extensive experience using create, read, update, and delete operations (CRUD). We also gained experience using databases and creating an API to allow us to connect the front end of our application to our backend database of the shop owner's appointments.",
    image: MadelineImg,
    repoLink: "https://github.com/SklylerF/Madelines-nail-boutique",
    deployedLink: "https://madelines-nail-boutique.herokuapp.com/",
  },
];

export default function Projects() {
  return (
    <div className='projects-slide'>
      <div className='project-slide-title'>
        <h2>Projects</h2>
      </div>
      <section className='project-container'>
        {projects.map((project) => {
          return <ProjectInfo projects={project} key={projects.id} />;
        })}
      </section>
    </div>
  );
}
