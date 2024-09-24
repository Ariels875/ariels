import { MailIcon, PhoneIcon, LocateIcon, GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import '../styles/Contact.css';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-section-title">{t('contact.title')}</h2>
        <div className="contact-content">
          <h2>
            {t('contact.description')}.
          </h2>
          <div className="contact-info">
            <a className="contact-item" href="mailto:ascastro875@gmail.com">
              <MailIcon />
              <span>ascastro875@gmail.com</span>
            </a>
            <a className="contact-item" href="tel:+593990518579">
              <PhoneIcon />
              <span>+593 990 518 579</span>
            </a>
            <a className="contact-item" href="https://maps.app.goo.gl/ZJ77dR7EK7jRW7FH9">
              <LocateIcon />
              <span>Ecuador, Otavalo</span>
            </a>
            <a className="contact-item" href="https://github.com/Ariels875">
              <GithubIcon />
              <span>Ariels875</span>
            </a>
            <a className="contact-item" href="https://www.linkedin.com/in/ariels875/">
              <LinkedinIcon />
              <span>ariels875</span>
            </a>
            <a className="contact-item" href="https://www.instagram.com/ariels875/">
              <InstagramIcon />
              <span>@ariels875</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
