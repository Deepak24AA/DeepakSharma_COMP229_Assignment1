function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="card">
          <h2>React Portfolio Website</h2>

          <p>
            Responsive portfolio website developed using React, React Router,
            HTML, CSS, and JavaScript showcasing projects, education, and
            technical skills.
          </p>

          <div className="project-buttons">
            <a href="/" className="btn">
              Live Demo
            </a>

            <a
                href="https://github.com/Deepak24AA/DeepakSharma_COMP229_Assignment1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="card">
          <h2>Java Health Information System</h2>

          <p>
            Object-oriented Java application implementing inheritance,
            polymorphism, abstraction, and exception handling for managing
            healthcare information.
          </p>

          <div className="project-buttons">
            <a href="/" className="btn">
              Live Demo
            </a>

            <a
                href="https://github.com/Deepak24AA/DeepakSharma_COMP229_Assignment1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="card">
          <h2>C# Notification Manager</h2>

          <p>
            Windows Forms application developed in C# using delegates,
            events, and subscription management to simulate a notification
            system.
          </p>

          <div className="project-buttons">
            <a href="/" className="btn">
              Live Demo
            </a>

            <a
                href="https://github.com/Deepak24AA/DeepakSharma_COMP229_Assignment1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;