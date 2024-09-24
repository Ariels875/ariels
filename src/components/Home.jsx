import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Home.css';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <section id="home" className="section home">
      <div className="home-content">
        <div className="home-text">
          <h1 className="section-title">Ariel Sidney Castro Garcés</h1>
          <h2 className="text-muted">{t('home.role')}</h2>
          <p>
          {t('home.description')}
          </p>
          <div className="cta-container">
            <a href="https://drive.google.com/file/d/1-xJ-4w7eUzwpJa9CL66im45eXrh7n4Xu/view?usp=drive_link" className="cta-button" target="_blank">{t('home.downloadCV')}</a>
            <div className="social-links">
              <a href="https://github.com/ariels875" target="_blank" rel="noopener noreferrer">
                <FaGithub size={28} />
              </a>
              <a href="https://linkedin.com/in/ariels875" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} />
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