import { useEffect, useRef } from 'react';
import '../styles/Certifications.css';

const Certifications = () => {
  const carouselRef = useRef(null);

  const certifications = [
    {
      title: "JavaScript Certification",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/z98GsNF.png"
    },
    {
      title: "PHP Certification",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/7RnRVEm.png"
    },
    {
      title: "Git & GitHub Certification",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/uzhqkDV.png"
    },
    {
      title: "Software Engineering Certification",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/S77t3EK.png"
    },
    {
      title: "HTML & CSS Certification",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/XN1kEqp.png"
    },    
    {
      title: "MySQL & MariaDB Certification",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/Vmz4nfH.png"
    },    
    {
      title: "React Certification",
      issuer: "Platzi",
      date: "2024",
      image: "https://i.imgur.com/anMfTCm.png"
    },    
    {
      title: "Astro Certification",
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
        <h2 className="certifications-section-title">Certifications</h2>
        <div className="carousel-container">
          <div className="carousel" ref={carouselRef}>
            {[...certifications, ...certifications].map((cert, index) => (
              <div key={index} className="certification-card">
                <img src={cert.image} alt={cert.title} />
                <h3>{cert.title}</h3>
                <p className="text-muted">
                  Issued by {cert.issuer}
                  <br />
                  Obtained: {cert.date}
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