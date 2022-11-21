import Intro from ".././components/Intro/Intro";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import "../index.css";

export default function LandingPage() {
  return (
    <div>
      <div>
        <Intro />
      </div>
      <div className='content'>
        <div>
          <AboutMe />
        </div>
        <div>
          <Projects />
        </div>
      </div>
    </div>
  );
}
