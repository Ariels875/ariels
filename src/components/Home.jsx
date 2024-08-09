import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Home.css';
function Home() {
  return (
    <section id="home" className="section home">
      <div className="container home-content">
        <div className="home-text">
          <h1 className="section-title">Ariel Castro</h1>
          <h2 className="text-muted">Full-Stack Developer</h2>
          <p>
            I&apos;m a passionate full-stack developer with a strong background in building modern web applications. 
            With expertise in both front-end and back-end technologies, I love crafting intuitive user experiences 
            and solving complex problems to create efficient, scalable solutions.
          </p>
          <div className="cta-container">
            <a href="https://drive.google.com/file/d/1UczOA9BSFoYcKUaw6oNR-p4_EyaBYnK4/view?usp=drive_link" className="cta-button" target="_blank">Download CV</a>
            <div className="social-links">
              <a href="https://github.com/ariels875" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/ariels875" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="home-image">
          <img src="https://i.imgur.com/fli08dk.png" width="300" height="300" alt="Ariel Castro" />
        </div>
      </div>
    </section>
  );
}

export default Home;