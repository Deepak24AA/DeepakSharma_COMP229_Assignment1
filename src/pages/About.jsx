function About() {
  return (
    <div className="page">
      <h1>About Me</h1>

      <div className="card">
        <p>
          My name is Deepak Sharma. I am a Health Informatics Technology
          student at Centennial College with a strong background in pharmacy,
          healthcare workflow, and information technology.
        </p>

        <p>
          I am interested in building practical digital health solutions using
          web development, databases, Java, C#, React, and healthcare
          information systems.
        </p>

        <br />

        <a
          href="/DeepakSharma_COMP229_Assignment1/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View My Resume
        </a>
      </div>
    </div>
  );
}

export default About;