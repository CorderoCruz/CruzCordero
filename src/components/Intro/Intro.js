import Navbar from "../Navbar/Navbar";
import "./Intro.css";

export default function Intro() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <section className='home-slide'>
        <div className='home-slide-container'>
          <p className='firstname'>CRUZ</p>
          <p className='lastname'>CORDERO</p>
          <p className='occupancy'>Full Stack Software Engineer</p>
          <p className='hook'>I have a passion for creating and learning!</p>
        </div>
      </section>
    </div>
  );
}
