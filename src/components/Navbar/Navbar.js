import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

const linkedInUrl = "https://www.linkedin.com/in/cruz-cordero-7a214123a/";
const githubUrl = "https://github.com/CorderoCruz";

export default function Navbar() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header className='navbar-container'>
      <a className='main-name' to='/'>
        <a>CRUZ</a>
      </a>
      <nav ref={navRef}>
        <div className='links'>
          <a className='main-name-two' to='/'>
            <a>CRUZ</a>
          </a>
          <div className='link-responsive-nav'>
            <a href={linkedInUrl}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={githubUrl}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a to='/contact'>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a>
              {/* This will download my resume */}
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
          </div>
          <button className='nav-btn nav-close-btn' onClick={showNav}>
            <FaTimes />
          </button>
        </div>
      </nav>
      <button className='nav-btn' onClick={showNav}>
        <FaBars />
      </button>
    </header>
  );
}
