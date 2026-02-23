import React from 'react';
import '../styles/aboutcontent.css'; 

const AboutContent = () => {
  const services = [
    "Neugestaltung", "Pflasterarbeiten", "Zaunbau", 
    "Rollrasen verlegen", "Keller abdichten", "Brunnenbau", 
    "Hausmeisterservice", "Gartengestaltung"
  ];

  return (
    <div className="about-container" style={{margin: '80px'}}>
      {/* قسم الترحيب الرئيسي - Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <h1>Herzlich willkommen in der Welt der Gärten</h1>
          <p>Wir gestalten für Sie lebendige grüne Räume</p>
        </div>
      </section>

      {/* من نحن - Über Uns */}
      <section className="about-content">
        <div className="container">
          <h2>Über Uns - BROTHERS GARTENBAU</h2>
          <p>
            Willkommen bei <strong>BROTHERS GARTEN-LANDSCHAFTSBAU</strong>. 
            Wir sind Ihr kompetenter Partner für hochwertige Garten- und Landschaftsgestaltung in <strong>Stadtoldendorf</strong> und Umgebung. 
            Unser Ziel ist es, Ihre Wohnträume im Freien Wirklichkeit werden zu lassen – mit Leidenschaft, Fachkompetenz und Liebe zum Detail.
          </p>
        </div>
      </section>

      {/* الخدمات - Unsere Leistungen */}
      <section className="services-section">
        <div className="container">
          <h3>Unsere Leistungen für Sie</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">✔</div>
                <div className="service-text">{service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* دعوة للعمل - Call to Action */}
      <section className="cta-section">
        <h3>Sie wollen mehr erfahren? Sprechen Sie uns an!</h3>
        <p>Nutzen Sie unser Kontaktformular oder rufen Sie uns direkt an.</p>
        <button className="cta-button" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
          Zum Kontaktformular
        </button>
      </section>
    </div>
  );
};

export default AboutContent;