import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-section-title">My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="https://i.imgur.com/eRyW7Pc.png" alt="Real time chat" className="project-image" />
            <div className="project-card-content">
              <h3>Arielschat</h3>
              <p className="text-muted">
                A full-stack web application that contains a real time chat with authentication built with Node.js, and SQLite.
              </p>
              <div className="project-links">
                <a href="https://arielschat.onrender.com/" className="btn btn-primary">Live Site</a>
                <a href="https://github.com/Ariels875/Real-Time-Chat" className="btn btn-secondary">Source Code</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="https://i.imgur.com/RZLEEXA.png" alt="Menu" className="project-image" />
            <div className="project-card-content">
              <h3>Restaurant Menu</h3>
              <p className="text-muted">
                A front-end web application that contains a restaurant menu built with Astro.
              </p>
              <div className="project-links">
                <a href="https://menu-chifa-amazonas.pages.dev/" className="btn btn-primary">Live Site</a>
                <a href="https://github.com/Ariels875/Restaurant-Menu" className="btn btn-secondary">Source Code</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="https://i.imgur.com/SLPEmZi.png" alt="Library" className="project-image" />
            <div className="project-card-content">
              <h3>Library</h3>
              <p className="text-muted">
                A full-stack web application that contains a library system built with Node.js and MySql.
              </p>
              <div className="project-links">
                <a href="#" className="btn btn-primary">Live Site</a>
                <a href="https://github.com/Ariels875/arielslibrary" className="btn btn-secondary">Source Code</a>
              </div>
            </div>
          </div>
          {/* Repeat for other projects */}
        </div>
      </div>
    </section>
  );
}

export default Projects;