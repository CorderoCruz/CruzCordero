import "./AboutMe.css";
import ProfilePicture from "../../images/Profile-Picture-transparent.jpg";

const technologies = [
  "HTML/CSS",
  "BootstrapCSS",
  "TailwindCSS",
  "JavaScript",
  "JQuery",
  "MySQL",
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "GraphQL",
  "Github",
  "Git",
];

export default function AboutMe() {
  return (
    <div>
      <div className='aboutme-container'>
        <div className='aboutme-left'>
          <div className='aboutme-text-container'>
            <h2>About Me </h2>
          </div>
          <p>
            Hello there! My name is Cruz Cordero and welcome to my portfolio. I have earned my certificate from the University of California,
            Riverside Coding Bootcamp in full stack web development. I gained extensive experience in developing web applications using some of the
            latest technologies such as...
          </p>
          <div className='experience-container'>
            {technologies.map((tech) => {
              return <h3 className='tech'>{tech}</h3>;
            })}
          </div>
          <p>
            I started programming when I was in high school but It was something I never took seriously. It was fun while I was doing it but at the
            time I wanted to work in the physics field. So I pursued a degree in physics at California State University, San Bernardino.
            Unfortunately, I had no choice but to drop out of school due to financial reasons. A couple of years go by and my interest in tech grew
            greater, until one day I decided to join the Bootcamp because I believed that it was now or never from my point of view. Now that I have
            earned my certificate, although it was one of the hardest things I have done, I am glad I did it and can not wait for what is next in my
            journey with tech.
          </p>
          <p>
            Since I graduated I have been sharpening my skills with the technologies that I have listed above. I believe that there is always
            something new in this industry and there will never be enough time to know everything there is to know in tech, but I can make sure that I
            am always doing the best I can in every possible scenario, academically, professionally, or just in general. There is always room for
            improvement!
          </p>
        </div>
        <div className='aboutme-right'>
          <div className='image-container'>
            <img src={ProfilePicture}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
