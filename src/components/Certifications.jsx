import { useEffect, useRef } from 'react';
import '../styles/Certifications.css';
import { useTranslation } from 'react-i18next';

const Certifications = () => {
  const carouselRef = useRef(null);
  const { t } = useTranslation();

  const certifications = [
    {
      title: "JavaScript",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/z98GsNF.png"
    },
    {
      title: "PHP",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/7RnRVEm.png"
    },
    {
      title: "Git & GitHub",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/uzhqkDV.png"
    },
    {
      title: "Software Engineering",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/S77t3EK.png"
    },
    {
      title: "HTML & CSS",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/XN1kEqp.png"
    },    
    {
      title: "MySQL & MariaDB",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/Vmz4nfH.png"
    },    
    {
      title: "React",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/anMfTCm.png"
    },    
    {
      title: "Astro",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/x1ZPB0w.png"
    }
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    let isHovered = false;

    const handleMouseEnter = () => {
      isHovered = true;
      carousel.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      isHovered = false;
      if (!isHovered) {
        carousel.style.animationPlayState = 'running';
      }
    };

    const cards = carousel.querySelectorAll('.certification-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <h2 className="certifications-section-title">{t('certifications.title')}</h2>
        <div className="carousel-container">
          <div className="carousel" ref={carouselRef}>
            {[...certifications, ...certifications].map((cert, index) => (
              <div key={index} className="certification-card">
                <img src={cert.image} alt={cert.title} />
                <h3>{cert.title}</h3>
                <p className="text-muted">
                  {t('certifications.issuedBy')} {cert.issuer}
                  <br />
                  {t('certifications.obtained')} {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;