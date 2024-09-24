import '../styles/About.css';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-section-title">{t('about.title')}</h2>
        <div className="about-content">
          <div className="education">
            <h3>{t('about.education')}</h3>
            <div className="education-item">
              <h4>{t('about.bachelor')}</h4>
              <p className="text-muted">
                {t('about.highschool')}
                <br />
                {t('about.graduatedDate')}
              </p>
            </div>
            <div className="education-item">
              <h4>{t('about.engineer')}</h4>
              <p className="text-muted">
                {t('about.university')}
                <br />
              </p>
            </div>
          </div>
          <div className="about-text">
            <p
            dangerouslySetInnerHTML={{
              __html: t('about.description1', {
                role: `<span class="highlight">${t('common.fullStackDeveloper')}</span>`,
                react: `<span class="highlight">${t('React')}</span>`,
                node: `<span class="highlight">${t('Node JS')}</span>`,
                mysql: `<span class="highlight">${t('MySQL')}</span>`,
              }),
            }}
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: t('about.description2', {
                github: `<span class="highlight">${t('GitHub')}</span>`,
              }),
            }}
          ></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;