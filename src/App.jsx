// App.jsx
// Hauptkomponente der Anwendung, die das Layout und die Bereiche der Webseite definiert
import NavComp from "./components/NavComp.jsx";
import HeroComp from "./components/HeroComp.jsx";
import FooterComp from "./components/FooterComp.jsx";
import ContentComp from "./components/ContentComp.jsx";
import SeminarShopComp from "./components/SeminareComp.jsx";
import ContactFormComp from "./components/ContactComp.jsx";

import "./App.css";

function App() {
  return (
    <div className="grid-layout">
      {/* Header mit Navigation */}
      <header id="header" className="header">
        <NavComp />
      </header>

      {/* Hero-Bereich */}
      <div id="hero" className="hero">
        <HeroComp />
      </div>

      {/* Content-Bereich 1 */}
      <div id="content1" className="content1">
        <ContentComp
          title="Schutz und Sicherheit für Ihr Unternehmen – Sofort und langfristig"
          textBlocks={[
            <p key="1">
              In der digitalen Welt von heute sind Unternehmen mehr denn je Ziel
              von <strong>Cyberangriffen</strong> wie Hackerangriffen oder
              Phishing-Versuchen.
            </p>,
            <p key="2">
              kingnetz.de Security bietet Schutz für kleine und mittelständische
              Unternehmen mit 10 bis 100 Mitarbeitern, unabhängig von Ihrer
              Branche.
            </p>,
            <p key="3">
              Unsere Leistungen sind darauf ausgelegt, Sie im Ernstfall schnell
              und effektiv zu unterstützen – als Ihre{" "}
              <strong>„digitale Feuerwehr“</strong>.
            </p>,
          ]}
          imgSrc="src/img/hack_1.png"
          imgPosition="left"
        />
      </div>

      {/* Content-Bereich 2 */}
      <div id="content2" className="content2">
        <ContentComp
          title="Unterstützung im Ernstfall – Ihr Weg zurück zur Sicherheit"
          textBlocks={[
            <p key="1">
              Ein <strong>Cyberangriff</strong> kann Unternehmen unvorbereitet
              treffen und erhebliche Schäden verursachen – von Datenverlust bis
              hin zum vollständigen Stillstand Ihrer Geschäftsprozesse.
            </p>,
            <p key="2">
              <strong>kingnetz.de Security</strong> reagiert schnell und
              gezielt, um die Auswirkungen eines Angriffs zu minimieren:
            </p>,
            <ul key="3">
              <li>
                <strong>Schnelle Wiederherstellung:</strong> Wir stellen die
                Funktionsfähigkeit Ihrer Systeme umgehend wieder her.
              </li>
              <li>
                <strong>Lücken schließen:</strong> Sicherheitslücken werden
                analysiert und dauerhaft beseitigt.
              </li>
              <li>
                <strong>Beweissicherung:</strong> Bei Bedarf unterstützen wir
                Sie bei der Dokumentation des Vorfalls für rechtliche Schritte.
              </li>
            </ul>,
            <p key="4">
              Verlassen Sie sich auf unsere Erfahrung und modernste
              Technologien, um Ihr Unternehmen wieder sicher und handlungsfähig
              zu machen.
            </p>,
          ]}
          imgSrc="src/img/death_2.jpeg"
          imgPosition="right"
        />
      </div>

      <div className="karte">
        <iframe
          width="500"
          height="500"
          src="https://cybermap.kaspersky.com/de/widget/dynamic/dark"
          frameborder="0"
          title="Cybermap"
        ></iframe>
      </div>

      {/* Content-Bereich 3 */}
      <div id="service" className="content3">
        <ContentComp
          title="Warum erst reagieren, wenn man vorbeugen kann?"
          textBlocks={[
            <p key="1">
              Unsere präventiven Maßnahmen schützen Ihr Unternehmen schon im
              Vorfeld vor potenziellen Angriffen:
            </p>,
            <ul key="2">
              <li>
                <strong>Individuelle Risikoanalyse:</strong> Identifikation und
                Bewertung Ihrer Schwachstellen.
              </li>
              <li>
                <strong>Technische Absicherung:</strong> Einrichtung von DMZ
                (demilitarisierten Zonen), Firewalls und regelmäßigen Updates.
              </li>
              <li>
                <strong>Mitarbeiter-Sensibilisierung:</strong> Schulungen und
                Simulationen, um die Sicherheitskultur in Ihrem Unternehmen zu
                stärken.
              </li>
            </ul>,
            <p key="3">
              Mit <strong>kingnetz.de Security</strong> erhalten Sie ein
              maßgeschneidertes Schutzkonzept, das Ihre IT-Sicherheit
              langfristig stärkt.
            </p>,
          ]}
          imgSrc="src/img/nerd_1.png"
          imgPosition="right"
        />
      </div>

      {/* Seminare-Bereich */}
      <section id="seminare" className="seminare">
        <SeminarShopComp />
      </section>

      {/* Kontakt-Bereich */}
      <section id="kontakt" className="kontakt">
        <ContactFormComp />
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <FooterComp />
      </footer>
    </div>
  );
}

export default App;
