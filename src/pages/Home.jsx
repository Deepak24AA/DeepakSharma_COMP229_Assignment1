import profilePic from "../assets/Deepak.png";

function Home() {
  return (
    <div className="page hero-section">
      <img
        src={profilePic}
        alt="Deepak Sharma"
        className="profile-img"
      />

      <h1>Deepak Sharma</h1>

      <h2>Health Informatics Technology Student</h2>

      <p>
        Welcome to my personal portfolio website.
      </p>

      <p>
        I am a Health Informatics Technology student at Centennial College
        with experience in healthcare, pharmacy, Java, C#, React, and
        database development.
      </p>

      <a href="/about" className="btn">
        Learn More About Me
      </a>

      <div className="resume-buttons">
        <a
          href="/DeepakSharma_COMP229_Assignment1/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View Resume
        </a>

        <a
          href="/DeepakSharma_COMP229_Assignment1/resume.pdf"
          download
          className="btn"
        >
          Download Resume
        </a>
      </div>

      <div className="skills-section">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <span>Java</span>
          <span>C#</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML &amp; CSS</span>
          <span>Oracle SQL</span>
          <span>Software Testing</span>
          <span>Healthcare IT</span>
        </div>
      </div>
    </div>
  );
}

export default Home;