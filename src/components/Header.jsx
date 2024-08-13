import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ArielsIcon, MenuIcon } from './Icons';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = document.body.scrollTop;
    const sections = ['home', 'about', 'projects', 'certifications', 'contact'];
    
    // Actualizar la sección activa
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }

    // Actualizar el estado de scroll
    setIsScrolled(scrollPosition > 100);
  }, []);

  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll);
    return () => document.body.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const NavLink = ({ href, children }) => (
    <a href={href} className={activeSection === href.slice(1) ? 'active' : ''}>
      {children}
    </a>
  );

  NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo">
          <ArielsIcon />
          <span>Ariels875</span>
        </a>
        <nav className="nav">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#certifications">Certifications</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="mobile-menu">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div className="mobile-nav">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#certifications">Certifications</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;