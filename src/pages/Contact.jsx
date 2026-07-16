import React from "react";
import "./contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
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
                <p>veenasahu310@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              <FaPhoneAlt className="icon" />
              <div>
                <h3>Mobile</h3>
                <p>+91 896608 7102</p>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Address</h3>
                <p>Rajnandgaon, Chhattisgarh, India</p>
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
        </div>
      </div>
    </section>
  );
}

export default Contact;