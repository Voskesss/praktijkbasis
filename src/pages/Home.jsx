import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import siskaPortret from '../assets/images/Siska Greving 21-aangepast.jpg';
import overSiska from '../assets/images/over-siska-energetische-therapie.jpg';
import mijnMissie from '../assets/images/mijn-missie-energetisch-aangepast.jpg';
import wandeling from '../assets/images/therapeutische-wandeling.jpg';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="decorative-flower-1 animate-float"></div>
        <div className="decorative-heart"></div>
        <div className="container hero-container">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">Welkom bij Praktijk basSIS</h1>
          </div>
          
          <div className="hero-portrait-wrapper">
            <div className="hero-portrait">
              <img src={siskaPortret} alt="Siska Greving, lichaamsgericht traumatherapeut" />
            </div>
          </div>
          
          <div className="hero-info-wrapper">
            <div className="hero-info">
              <p className="hero-info-text">Een plek van rust en herstel</p>
              <p className="hero-info-text">Lichaamsgerichte traumatherapie</p>
            </div>
            <div className="hero-cta-wrapper">
              <Link to="/contact" className="cta-button">Maak een afspraak</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="decorative-flower-2"></div>
        <div className="decorative-wood-heart animate-float"></div>
        <div className="container">
          <h2>Over Siska</h2>
          <div className="about-content">
            <div className="about-image">
              <img src={overSiska} alt="Siska Greving, lichaamsgericht traumatherapeut" />
            </div>
            <div className="about-text">
              <p>Mijn naam is Siska Greving en ik ben een lichaamsgericht traumatherapeut die werkt vanuit menselijk helende waarden. Ik geloof dat ieder mens waardevol is, dat er ruimte moet zijn voor vergeving en dat we in verbondenheid mogen leven.</p>
              <p>Vanuit deze waarden begeleid ik jongeren en volwassenen op hun weg naar herstel en balans, zodat ze weer vertrouwen kunnen vinden in zichzelf en de ander.</p>
              <Link to="/over-mij" className="read-more">Lees meer over mij</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="therapy-section">
        <div className="decorative-butterfly animate-float"></div>
        <div className="decorative-water"></div>
        <div className="container">
          <h2>Lichaamsgerichte Traumatherapie</h2>
          <div className="therapy-content">
            <div className="therapy-text">
              <p>In mijn praktijk bied ik lichaamsgerichte traumatherapie aan. Tijdens de sessies luister ik niet alleen naar jouw verhaal, maar ook naar de taal van je lichaam – zo ontdekken we samen wat je nodig hebt om te helen.</p>
              <p>We werken in een veilige omgeving aan het verwerken van trauma, het vinden van innerlijke rust en het herstellen van balans in je leven. Alles gebeurt in jouw tempo en met respect voor jouw grenzen.</p>
              <Link to="/therapie" className="read-more">Lees meer over de therapie</Link>
            </div>
            <div className="therapy-image">
              <img src={mijnMissie} alt="Lichaamsgerichte Traumatherapie" />
            </div>
          </div>
        </div>
      </section>

      <section className="walks-section">
        <div className="decorative-flower-3 animate-float"></div>
        <div className="container">
          <h2>Therapeutische Wandelingen</h2>
          <div className="walks-content">
            <div className="walks-image">
              <img src={wandeling} alt="Therapeutische Wandeling in Drenthe" />
            </div>
            <div className="walks-text">
              <p>Naast therapiesessies in mijn praktijk, bied ik ook therapeutische wandelingen aan in de natuur. Tijdens deze wandelingen combineren we de helende kracht van de natuur met lichaamsgerichte traumatherapie.</p>
              <p>De wandelingen vinden plaats in de prachtige omgeving van Drenthe en zijn geschikt voor iedereen die behoefte heeft aan rust, reflectie en heling in een natuurlijke omgeving.</p>
              <Link to="/wandelingen" className="read-more">Lees meer over de wandelingen</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="decorative-flower-3"></div>
        <div className="container">
          <div className="section-header">
            <h2>Ervaringen</h2>
            <p>Wat anderen zeggen over hun traject bij Praktijk basSIS</p>
          </div>
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Bij jou voel ik me veilig en voel en weet ik dat het geen zin heeft mijn maskers te dragen, omdat je er toch wel door heen kijkt. Hierdoor ontstaat er een soort van rust, en vertrouwen waardoor ik mijn angst, boosheid en pijn aan durf te kijken."</p>
                <div className="testimonial-author">- Een cliënt</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Siska is een warme, zachte vrouw, die niet oordeelt, waardoor ik me open durf te stellen."</p>
                <div className="testimonial-author">- Esther</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Ik heb me nog nooit zo begrepen gevoeld. Dat doet veel. Ik was niet voorbereid op zoveel begrip. Jij durft duidelijk te zijn en daardoor voel ik me gezien."</p>
                <div className="testimonial-author">- Een cliënt</div>
              </div>
            </div>
          </div>
          <div className="testimonials-cta">
            <Link to="/ervaringen" className="text-link">Lees meer ervaringen <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="decorative-heart-wood animate-float"></div>
        <div className="container">
          <div className="values-content">
            <div className="values-text">
              <h2>Wat mij drijft</h2>
              <p>Bij Praktijk basSIS geloof ik in universele waarden die voor iedereen herkenbaar zijn:</p>
              <ul className="values-list">
                <li>Ieder mens is waardevol en mag er helemaal zijn</li>
                <li>Er is ruimte om fouten te maken, los te laten en te helen</li>
                <li>Vertrouwen in jezelf, in de ander en in iets groters</li>
                <li>Niemand staat boven de ander, we zijn gelijkwaardig</li>
              </ul>
              <p className="values-quote">Je hoeft het niet alleen te dragen. Er is altijd hoop op herstel.</p>
              <Link to="/over-mij" className="cta-button">Meer over mijn aanpak</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="decorative-flower-1"></div>
        <div className="container">
          <h2>Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Neem contact op</h3>
              <p><strong>Email:</strong> info@praktijkbasis.eu</p>
              <p><strong>Telefoon:</strong> 06-12345678</p>
              <p><strong>Adres:</strong> Dorlangenweg 1, 7973 Darp</p>
              <Link to="/contact" className="read-more">Meer contactinformatie</Link>
            </div>
            <div className="contact-form">
              <h3>Stuur een bericht</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Naam</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Bericht</label>
                  <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-button">Versturen</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
