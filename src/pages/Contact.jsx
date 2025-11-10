import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <section className="hero-section">
        <div className="container">
          <h1>Contact</h1>
          <p className="intro-text">
            Wil je meer informatie of een afspraak maken? Neem gerust contact met me op. Ik sta voor je klaar om je vragen te beantwoorden.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Contactgegevens</h2>
              <div className="info-item">
                <h3>Adres</h3>
                <address>
                  Praktijkbasis<br />
                  Dorlangenweg 1<br />
                  7973 Darp
                </address>
              </div>
              <div className="info-item">
                <h3>Telefoon</h3>
                <p>06-12345678</p>
                <p className="note">Bereikbaar op werkdagen van 9:00 tot 17:00 uur</p>
              </div>
              <div className="info-item">
                <h3>E-mail</h3>
                <p>info@praktijkbasis.eu</p>
              </div>
              <div className="info-item">
                <h3>Bereikbaarheid</h3>
                <p>
                  De praktijk is goed bereikbaar met de auto. Er is voldoende gratis parkeergelegenheid voor de deur. Met het openbaar vervoer kun je de praktijk bereiken door de bus te nemen naar halte X (op ongeveer 10 minuten loopafstand).
                </p>
              </div>
            </div>
            <div className="contact-form-container">
              <h2>Stuur een bericht</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Naam*</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail*</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefoonnummer</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Onderwerp*</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Bericht*</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <div className="form-group">
                  <p className="privacy-note">
                    Door dit formulier te versturen ga je akkoord met onze privacyvoorwaarden. Je gegevens worden vertrouwelijk behandeld en alleen gebruikt om contact met je op te nemen.
                  </p>
                </div>
                <button type="submit" className="submit-button">Versturen</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="response-section">
        <div className="container">
          <h2>Wat kun je verwachten?</h2>
          <div className="response-content">
            <p>
              Na het versturen van je bericht of het achterlaten van een voicemailbericht, neem ik binnen 2 werkdagen contact met je op. Ik bespreek graag je vragen en wensen, en indien gewenst kunnen we een afspraak inplannen voor een kennismakingsgesprek.
            </p>
            <p>
              Het kennismakingsgesprek is bedoeld om elkaar te ontmoeten, je vragen te beantwoorden en te bespreken of lichaamsgerichte traumatherapie bij jou past. Na dit gesprek kun je in alle rust beslissen of je wilt starten met therapie.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
