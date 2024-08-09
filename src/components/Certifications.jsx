import { useEffect, useRef } from 'react';
import '../styles/Certifications.css';

const Certifications = () => {
  const carouselRef = useRef(null);

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
            <div className="certification-card">
              <img
                src="https://i.imgur.com/anMfTCm.png"
                alt="React Certification"
              />
              <h3>React Certification</h3>
              <p className="text-muted">
                Issued by Platzi
                <br />
                Obtained: June 2024
              </p>
            </div>
            <div className="certification-card">
              <img
                src="https://i.imgur.com/x1ZPB0w.png"
                alt="Astro Certification"
              />
              <h3>Astro Certification</h3>
              <p className="text-muted">
                Issued by Platzi
                <br />
                Obtained: April 2024
              </p>
            </div>
            <div className="certification-card">
              <img
                src="https://i.imgur.com/Vmz4nfH.png"
                alt="MySQL Certification"
              />
              <h3>MySQL Certification</h3>
              <p className="text-muted">
                Issued by Platzi
                <br />
                Obtained: February 2024
              </p>
            </div>
            <div className="certification-card">
              <img
                src="https://i.imgur.com/7RnRVEm.png"
                alt="PHP Certification"
              />
              <h3>PHP Certification</h3>
              <p className="text-muted">
                Issued by Platzi
                <br />
                Obtained: March 2024
              </p>
            </div>
            <div className="certification-card">
              <img
                src="https://i.imgur.com/fMeC6SP.png"
                alt="Python Certification"
              />
              <h3>Python Certification</h3>
              <p className="text-muted">
                Issued by Platzi
                <br />
                Obtained: February 2024
              </p>
            </div>
            <div className="certification-card">
              <img
                src="https://i.imgur.com/XN1kEqp.png"
                alt="HTML & CSS Certification"
              />
              <h3>HTML & CSS Certification</h3>
              <p className="text-muted">
                Issued by Platzi
                <br />
                Obtained: February 2024
              </p>
            </div>
            <div className="certification-card">
              <img
                src="https://i.imgur.com/S77t3EK.png"
                alt="Software Engineering Certification"
              />
              <h3>Software Engineering Certification</h3>
              <p className="text-muted">
                Issued by Platzi
                <br />
                Obtained: February 2024
              </p>
            </div>
            <div className="certification-card">
              <img
                src="https://i.imgur.com/uzhqkDV.png"
                alt="Git & GitHub Certification"
              />
              <h3>Git & GitHub Certification</h3>
              <p className="text-muted">
                Issued by Platzi
                <br />
                Obtained: February 2024
              </p>
            </div>
            <div className="certification-card">
              <img
                src="https://i.imgur.com/z98GsNF.png"
                alt="JavaScript Certification"
              />
              <h3>JavaScript Certification</h3>
              <p className="text-muted">
                Issued by Platzi
                <br />
                Obtained: February 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;