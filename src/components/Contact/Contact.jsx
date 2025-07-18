import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact-section">
      <div>
        <img src="/assets/contact.webp" alt="Contact" className="contact-img" />
      </div>

      <div className="contact-info">
        <div>
          <h1 className="contact-title">Contacto</h1>
        </div>
        <div>
          <h2 className="contact-subtitle">
            Puedes Seguirme en mis Redes Sociales
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
