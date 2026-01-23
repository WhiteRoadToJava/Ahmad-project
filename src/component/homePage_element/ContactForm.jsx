import React from "react";
import "../../styles/contactForm.css";
const ContactForm = () => {
  return (
    <div className="contactForm-container">
      <h1 className="con">Sie wollen mehr erfahren? Sprechen Sie uns an!</h1>
      <form className="contactForm">
        <h2>Kontaktformular</h2>
        <div className="input-field name">
          <label htmlFor="name">Name:</label>
          <div className="name-field">
            <input type="text" placeholder="Vorname" />
            <input type="text" placeholder="Nackname" />
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="email">E-Mail:</label>
          <input type="email" placeholder="E-Mail" />
        </div>
        <div className="input-field">
          <label htmlFor="phone">Telefon:</label>
          <input type="phone" placeholder="+49 1577 9878532" />
        </div>
        <div className="input-field">
          <label htmlFor="message">Ihre Nachricht *:</label>
          <textarea
            className="textarea-field"
            maxLength={600}
            placeholder=""
          ></textarea>
        </div>
        <div>
                <button className="submit-button">Senden</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
