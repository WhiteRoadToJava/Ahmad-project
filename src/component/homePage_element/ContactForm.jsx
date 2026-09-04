import React, { useState } from "react";
import "../../styles/contactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    // Honeypot: real users never see or fill this field (hidden via CSS).
    // Bots that auto-fill every input will fill it, so we use it to
    // silently drop the submission instead of sending it via EmailJS.
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    name: false,
    message: false,
    email: false,
    phone: false,
  });
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const newErrors = {
      name: !contactForm.firstname || !contactForm.lastname,
      email: !contactForm.email,
      phone: !contactForm.phone,
      message: !contactForm.message,
    };
    setError(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Honeypot triggered: pretend to succeed without actually sending,
    // so bots don't learn to detect and route around this check.
    if (contactForm.website) {
      resetAll();
      return;
    }

    if (!validate()) {
      return;
    }

    setLoading(true);

    // Instead of updating state (which is async), create the data object here
    const templateParams = {
      firstname: contactForm.firstname,
      lastname: contactForm.lastname,
      email: contactForm.email,
      phone: contactForm.phone,
      message: contactForm.message,
      // You can also format a "full_message" here if your template needs it:
      full_details: `Name: ${contactForm.firstname} ${contactForm.lastname}\nPhone: ${contactForm.phone}\nMessage: ${contactForm.message}`
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams, // Pass the fresh object
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatusMessage("The message was sent successfully!");
          setLoading(false);
          resetAll();
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setLoading(false);
          setStatusMessage("The message was not sent. Please try again.");
        }
      );
  };

  const resetAll = () => {
    setContactForm({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
      website: "",
    });
    setError({
      name: false,
      message: false,
      email: false,
      phone: false,
    });
  };

  return (
    <div className="contactForm-container">
      <h1 className="con">Sie wollen mehr erfahren? Sprechen Sie uns an!</h1>
      <form className="contactForm" onSubmit={sendEmail}>
        <h2>Kontaktformular</h2>

        {/* Honeypot field: hidden from real users, bots tend to fill every
            input they find. Not display:none, since some bots skip those. */}
        <input
          type="text"
          name="website"
          value={contactForm.website}
          onChange={(e) => setContactForm({ ...contactForm, website: e.target.value })}
          style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
        />
        
        <div className="input-field name">
          <label>Name:</label>
          <div className="name-field">
            <input
              name="firstname"
              value={contactForm.firstname}
              onChange={(e) => {
                setError({ ...error, name: false });
                setContactForm({ ...contactForm, firstname: e.target.value });
              }}
              type="text"
              placeholder="Vorname"
            />
            <input
              name="lastname"
              value={contactForm.lastname}
              onChange={(e) => {
                setContactForm({ ...contactForm, lastname: e.target.value });
                setError({ ...error, name: false });
              }}
              type="text"
              placeholder="Nachname"
            />
          </div>
          {error.name && <p className="lbl-error">Bitte füllen Sie den Namen aus</p>}
        </div>

        <div className="input-field">
          <label>E-Mail:</label>
          <input
            name="email"
            value={contactForm.email}
            onChange={(e) => {
              setContactForm({ ...contactForm, email: e.target.value });
              setError({ ...error, email: false });
            }}
            type="email"
            placeholder="E-Mail"
          />
          {error.email && <p className="lbl-error">Bitte füllen Sie die E-Mail aus</p>}
        </div>

        <div className="input-field">
          <label>Telefon:</label>
          <input
            onChange={(e) => {
              setContactForm({ ...contactForm, phone: e.target.value });
              setError({ ...error, phone: false });
            }}
            name="phone"
            value={contactForm.phone}
            type="text"
            placeholder="+49 1577 9878532"
          />
          {error.phone && <p className="lbl-error">Bitte füllen Sie die Telefonnummer aus</p>}
        </div>

        <div className="input-field">
          <label>Ihre Nachricht *:</label>
          <textarea
            name="message"
            value={contactForm.message}
            onChange={(e) => {
              setContactForm({ ...contactForm, message: e.target.value });
              setError({ ...error, message: false });
            }}
            rows="5"
            className="textarea-field"
            maxLength={600}
          ></textarea>
          {error.message && <p className="lbl-error">Bitte füllen Sie die Nachricht aus</p>}
        </div>

        <div>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Wird gesendet..." : "Senden"}
          </button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;