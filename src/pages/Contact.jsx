function Contact() {
  return (
    <div className="page">
      <h1>Contact Me</h1>

      <div className="card">

        <h2>Let's Connect</h2>

        <p>
          I am always interested in discussing new opportunities,
          internships, and technology projects.
        </p>

        <br />

        <p>
          <strong>Email:</strong><br />
          dsharmarpht@gmail.com
        </p>

        <br />

        <p>
          <strong>Phone:</strong><br />
          +1 (416) 723-2829
        </p>

        <br />

        <p>
          <strong>Location:</strong><br />
          Brampton, Ontario, Canada
        </p>

        <br />

        <a
          className="btn"
          href="mailto:dsharmarpht@gmail.com"
        >
          Send Email
        </a>

      </div>
    </div>
  );
}

export default Contact;