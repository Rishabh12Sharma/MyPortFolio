import React, { useState } from "react";
import "../styles/Contact.css"; // Make sure to style this in your Contact.css file

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      setFormStatus({ success: true, message: "Message sent successfully!" });
    } else {
      setFormStatus({ success: false, message: "Something went wrong." });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="form-textarea"
          />
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>

      {formStatus && (
        <div
          className={`form-status ${formStatus.success ? "success" : "error"}`}
        >
          {formStatus.message}
        </div>
      )}
    </section>
  );
}

export default Contact;
