import '../styles/Projects.css';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-section-title">{t('projects.title')}</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="https://i.imgur.com/eRyW7Pc.png" alt={t('projects.chat.imageAlt')} className="project-image" />
            <div className="project-card-content">
              <h3>{t('projects.chat.title')}</h3>
              <p className="text-muted">
                {t('projects.chat.description')}
              </p>
              <div className="project-links">
                <a href="https://arielschat.onrender.com/" className="btn btn-primary">{t('projects.liveSite')}</a>
                <a href="https://github.com/Ariels875/Real-Time-Chat" className="btn btn-secondary">{t('projects.sourceCode')}</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="https://i.imgur.com/RZLEEXA.png" alt={t('projects.menu.imageAlt')}className="project-image" />
            <div className="project-card-content">
              <h3>{t('projects.menu.title')}</h3>
              <p className="text-muted">
                {t('projects.menu.description')}
              </p>
              <div className="project-links">
                <a href="https://menu-chifa-amazonas.pages.dev/" className="btn btn-primary">{t('projects.liveSite')}</a>
                <a href="https://github.com/Ariels875/Restaurant-Menu" className="btn btn-secondary">{t('projects.sourceCode')}</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="https://i.imgur.com/Fo03rIM.png" alt={t('projects.mpiq.imageAlt')} className="project-image" />
            <div className="project-card-content">
              <h3>{t('projects.mpiq.title')}</h3>
              <p className="text-muted">
               {t('projects.mpiq.description')}
              </p>
              <div className="project-links">
                <a href="https://mpiq-clone.pages.dev/" className="btn btn-primary">{t('projects.liveSite')}</a>
                <a href="https://github.com/Ariels875/MPIQ-clone" className="btn btn-secondary">{t('projects.sourceCode')}</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Projects;