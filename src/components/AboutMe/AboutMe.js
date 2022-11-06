import "./AboutMe.css";
import ProfilePicture from "../../images/Profile-Picture-transparent.jpg";

export default function AboutMe() {
  return (
    <div>
      <div className='aboutme-container'>
        <div className='aboutme-left'>
          <h2>About Me</h2>
          <p>
            Hello there! My name is Cruz Cordero and welcome to my portfolio. I have earned my certificate in the University of California, Riverside
            Coding Bootcamp in full stack web development.
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
