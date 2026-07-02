import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you for your message!");
    navigate("/");
  }

  return (
    <div className="page">
      <h1>Contact Me</h1>

      <div className="card">
        <h2>Let's Connect</h2>

        <p>Email: dsharmarpht@gmail.com</p>
        <p>Phone: +1 (416) 723-2829</p>
        <p>Location: Brampton, Ontario, Canada</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="tel" placeholder="Contact Number" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Message" rows="5" required></textarea>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;