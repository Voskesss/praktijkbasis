import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PraktischeInfo.css';

function PraktischeInfo() {
  return (
    <div className="praktische-info-page">
      <section className="hero-section">
        <div className="container">
          <h1>Praktische Informatie</h1>
          <p className="intro-text">
            Op deze pagina vind je alle praktische informatie over Praktijkbasis. Heb je na het lezen nog vragen? Neem dan gerust contact op.
          </p>
        </div>
      </section>

      <section className="location-section">
        <div className="container">
          <h2>Locatie en bereikbaarheid</h2>
          <div className="location-content">
            <div className="location-info">
              <p>
                Praktijkbasis bevindt zich in Darp, in een rustige groene omgeving. De praktijkruimte is een plek van privacy en stilte, makkelijk bereikbaar met de auto en met voldoende parkeergelegenheid voor de deur.
              </p>
              <address>
                <strong>Adres:</strong><br />
                Praktijkbasis<br />
                Dorlangenweg 1<br />
                7973 Darp<br />
                <strong>Telefoon:</strong> 06-12345678<br />
                <strong>E-mail:</strong> info@praktijkbasis.eu
              </address>
              <p>
                <strong>Bereikbaarheid:</strong><br />
                De praktijk is goed bereikbaar met de auto. Er is voldoende gratis parkeergelegenheid voor de deur. Met het openbaar vervoer kun je de praktijk bereiken door de bus te nemen naar halte X (op ongeveer 10 minuten loopafstand).
              </p>
            </div>
            <div className="location-map">
              {/* Hier zou een kaart kunnen komen, bijvoorbeeld via Google Maps embed */}
              <div className="map-placeholder">
                <p>Kaart van de locatie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hours-section">
        <div className="container">
          <h2>Openingstijden</h2>
          <div className="hours-content">
            <p>
              Afspraken kunnen op de volgende dagen en tijden plaatsvinden:
            </p>
            <ul className="hours-list">
              <li><strong>Maandag t/m vrijdag:</strong> 9:00 - 17:00 uur</li>
              <li><strong>Avonden:</strong> Op aanvraag mogelijk</li>
              <li><strong>Weekend:</strong> Niet beschikbaar</li>
            </ul>
            <p>
              Buiten deze tijden ben ik telefonisch niet altijd bereikbaar. Je kunt dan een bericht achterlaten of een e-mail sturen, dan neem ik zo snel mogelijk contact met je op.
            </p>
          </div>
        </div>
      </section>

      <section className="appointment-section">
        <div className="container">
          <h2>Afspraak maken</h2>
          <div className="appointment-content">
            <p>
              Je kunt op verschillende manieren een afspraak maken:
            </p>
            <ul className="appointment-list">
              <li><strong>Telefonisch:</strong> Bel naar 06-12345678 tijdens openingstijden</li>
              <li><strong>E-mail:</strong> Stuur een mail naar info@praktijkbasis.eu</li>
              <li><strong>Contactformulier:</strong> Vul het <Link to="/contact">contactformulier</Link> in op deze website</li>
            </ul>
            <p>
              Na je aanvraag neem ik binnen 2 werkdagen contact met je op om een afspraak in te plannen. Een kennismakingsgesprek is altijd mogelijk voordat je besluit om te starten met therapie.
            </p>
          </div>
        </div>
      </section>

      <section className="rates-section">
        <div className="container">
          <h2>Tarieven en vergoedingen</h2>
          <div className="rates-content">
            <div className="rates-table">
              <div className="rate-item">
                <div className="rate-name">Intake / kennismakingsgesprek</div>
                <div className="rate-price">€ 75,-</div>
                <div className="rate-duration">60 minuten</div>
              </div>
              <div className="rate-item">
                <div className="rate-name">Individuele sessie lichaamsgerichte traumatherapie</div>
                <div className="rate-price">€ 90,-</div>
                <div className="rate-duration">60 minuten</div>
              </div>
              <div className="rate-item">
                <div className="rate-name">Therapeutische wandeling</div>
                <div className="rate-price">€ 120,-</div>
                <div className="rate-duration">90-120 minuten</div>
              </div>
            </div>
            <div className="reimbursement-info">
              <h3>Vergoedingen</h3>
              <p>
                Lichaamsgerichte traumatherapie valt onder complementaire zorg en wordt niet vergoed vanuit de basisverzekering. Sommige zorgverzekeraars vergoeden (een deel van) de kosten vanuit een aanvullend pakket. Ik adviseer je om dit na te vragen bij je eigen zorgverzekeraar.
              </p>
              <p>
                Praktijkbasis is aangesloten bij beroepsvereniging X, waardoor vergoeding bij veel verzekeraars mogelijk is. Je ontvangt na elke sessie een factuur die je kunt indienen bij je zorgverzekeraar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="session-info-section">
        <div className="container">
          <h2>Duur van sessies en traject</h2>
          <div className="session-info-content">
            <p>
              Een individuele sessie lichaamsgerichte traumatherapie duurt ongeveer 60 minuten. Een therapeutische wandeling duurt 90 tot 120 minuten.
            </p>
            <p>
              De duur van het totale traject is afhankelijk van je persoonlijke situatie en doelen. Sommige mensen hebben voldoende aan 5-10 sessies, terwijl anderen baat hebben bij een langer traject. Na de intake bespreken we samen wat voor jou het beste lijkt en stellen we een behandelplan op. Dit plan evalueren we regelmatig en passen we indien nodig aan.
            </p>
          </div>
        </div>
      </section>

      <section className="cancellation-section">
        <div className="container">
          <h2>Annuleringsbeleid</h2>
          <div className="cancellation-content">
            <p>
              Als je verhinderd bent, kun je je afspraak tot 24 uur van tevoren kosteloos annuleren of verzetten. Bij annulering binnen 24 uur voor de afspraak wordt het volledige bedrag in rekening gebracht, tenzij er sprake is van overmacht.
            </p>
            <p>
              Annuleren kan telefonisch (ook via voicemail of sms) of per e-mail.
            </p>
          </div>
        </div>
      </section>

      <section className="preparation-section">
        <div className="container">
          <h2>Wat mee te nemen / voor te bereiden</h2>
          <div className="preparation-content">
            <p>
              Voor je eerste afspraak is het handig om het volgende mee te nemen:
            </p>
            <ul className="preparation-list">
              <li>Een geldig identiteitsbewijs</li>
              <li>Eventuele verwijsbrief van je huisarts (niet verplicht)</li>
              <li>Comfortabele kleding waarin je je vrij kunt bewegen</li>
            </ul>
            <p>
              Verder is het fijn als je van tevoren nadenkt over wat je uit de therapie zou willen halen en welke vragen je hebt. Maar maak je geen zorgen als je dit nog niet helder hebt - daar kunnen we samen naar kijken.
            </p>
          </div>
        </div>
      </section>

      <section className="questions-section">
        <div className="container">
          <h2>Overige vragen</h2>
          <div className="questions-content">
            <p>
              Heb je na het lezen van deze informatie nog vragen? Kijk dan op de pagina met <Link to="/faq">veelgestelde vragen</Link> of neem gerust <Link to="/contact">contact</Link> met me op. Ik help je graag verder.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PraktischeInfo;
