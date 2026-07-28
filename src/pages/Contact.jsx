import React, { useEffect, useState } from "react";
import axios from "axios";
import "./contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const [contact, setContact] = useState({});
  const [form, setForm] = useState({
  name: "",
  email: "",
  description: "",
});

useEffect(() => {
  axios
    .get("https://portfolio-backend-ws00.onrender.com/api/contact")
    .then((res) => {
      setContact(res.data);
    })
    .catch((err) => console.log(err));
}, []);

const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      "https://portfolio-backend-ws00.onrender.com/api/messages",
      form
    );

    alert("Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      description: "",
    });
  } catch (err) {
    console.log(err);
    alert("Failed to send message");
  }
};

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>
          Feel free to contact me for internships, freelance work, or full-time
          opportunities.
        </p>

        <div className="contact-card">
          <div className="contact-info">
            <div className="info-box">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email</h3>
                <p>{contact.email}</p>
              </div>
            </div>

            <div className="info-box">
              <FaPhoneAlt className="icon" />
              <div>
                <h3>Mobile</h3>
                <p>{contact.mobile}</p>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Address</h3>
                <p>{contact.address}</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="contact-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2950/2950655.png"
              alt="Contact"
            />
          </div>
          <div className="contact-form">
       <h2>Send Message</h2>

       <form onSubmit={handleSubmit}>
       <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        value={form.name}
        onChange={handleChange}
        required
       />

       <input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        value={form.email}
        onChange={handleChange}
        required
       />

       <textarea
        name="description"
        rows="6"
        placeholder="Write Your Message"
        value={form.description}
        onChange={handleChange}
        required
       ></textarea>

       <button type="submit" className="send-btn">
        Send Message
       </button>
       </form>
       </div>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;