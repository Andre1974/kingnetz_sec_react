import "../styles/FooterStyle.css";

const FooterComp = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>
            André Semm
            <br />
            Wartburgstraße 47
            <br />
            99094 Erfurt
            <br />
            Telefon: 0361 / 644 17 636
            <br />
            E-Mail: <a href="mailto:anfrage@kingnetz.de">anfrage@kingnetz.de</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Rechtliches</h4>
          <ul>
            <li>
              <a href="/impressum">Impressum</a>
            </li>
            <li>
              <a href="/datenschutz">Datenschutz</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Folge uns</h4>
          <p>Facebook</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} André Semm. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};
export default FooterComp;