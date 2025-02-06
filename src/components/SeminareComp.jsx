import React, { useState } from "react";
import "../styles/SeminareShopStyle.css";

const seminare = [
  {
    id: 1,
    titel: "Grundlagen der IT-Sicherheit",
    beschreibung:
      "Einführung in grundlegende Sicherheitskonzepte, Bedrohungen und sinnvolle Schutzmaßnahmen.",
    dauer: "6 Stunden à 40 Minuten",
    preis: 1200,
    zielgruppe: "Mitarbeitende mit geringen Vorkenntnissen",
  },
  {
    id: 2,
    titel: "Phishing erkennen und vermeiden",
    beschreibung:
      "Sensibilisierung für Phishing-Angriffe, typische Methoden und praktische Abwehrmaßnahmen.",
    dauer: "5 Stunden à 40 Minuten",
    preis: 1000,
    zielgruppe: "Alle Mitarbeitende",
  },
  {
    id: 3,
    titel: "Sicherer Umgang mit Passwörtern",
    beschreibung:
      "Erstellung starker Passwörter, Verwendung von Passwort-Managern und Einführung in 2FA.",
    dauer: "4 Stunden à 40 Minuten",
    preis: 800,
    zielgruppe: "Mitarbeitende mit wenig technischer Erfahrung",
  },
  {
    id: 4,
    titel: "Datensicherung und Wiederherstellung",
    beschreibung:
      "Standardmethoden für Backups und deren Wiederherstellung sowie Einführung eines Notfallplans.",
    dauer: "6 Stunden à 40 Minuten",
    preis: 1200,
    zielgruppe: "IT-Fachpersonal und Führungskräfte",
  },
  {
    id: 5,
    titel: "Sicheres mobiles Arbeiten",
    beschreibung:
      "Standards für die sichere Nutzung von Unternehmensdaten bei Homeoffice und mobilem Arbeiten.",
    dauer: "5 Stunden à 40 Minuten",
    preis: 1000,
    zielgruppe: "Mitarbeitende mit mobilen Arbeitsplätzen",
  },
  {
    id: 6,
    titel: "Einführung in KI-gestützte Abwehr",
    beschreibung:
      "Einsatz von KI-Tools zur automatisierten Bedrohungserkennung und Gefahrenabwehr.",
    dauer: "6 Stunden à 40 Minuten",
    preis: 1200,
    zielgruppe: "IT-Fachpersonal und technikaffine Mitarbeitende",
  },
];

const SeminareComp = () => {
  const [warenkorb, setWarenkorb] = useState([]); // Zustand für den Warenkorb
  const [istFormularAngezeigt, setIstFormularAngezeigt] = useState(false); // Zustand für die Anzeige des Formulars
  const [istAnfrageAbgeschlossen, setIstAnfrageAbgeschlossen] = useState(false); // Zustand für abgeschlossene Anfrage

  // Seminar zum Warenkorb hinzufügen
  const zumWarenkorbHinzufügen = (seminar) => {
    if (!warenkorb.find((item) => item.id === seminar.id)) {
      setWarenkorb([...warenkorb, seminar]);
    }
  };

  // Seminar aus dem Warenkorb entfernen
  const ausWarenkorbEntfernen = (id) => {
    setWarenkorb(warenkorb.filter((item) => item.id !== id));
  };

  // Gesamtkosten berechnen
  const gesamtpreisBerechnen = () => {
    return warenkorb.reduce((summe, item) => summe + item.preis, 0);
  };

  // Anfrage absenden
  const anfrageAbsenden = (e) => {
    e.preventDefault(); // Verhindert Seiten-Reload
    setIstAnfrageAbgeschlossen(true); // Anfrage abgeschlossen
    setWarenkorb([]); // Warenkorb zurücksetzen

    // Nach 3 Sekunden zurück zur Seminarübersicht
    setTimeout(() => {
      setIstAnfrageAbgeschlossen(false);
      setIstFormularAngezeigt(false);
    }, 3000);
  };

  return (
    <div className="seminar-shop">
      <h2 className="seminar-shop-h2">Übersicht der Schulungsthemen 2025 | IT Sicherheit | kingnetz.de</h2>

      {/* Seminar-Liste */}
      <div className="seminar-list">
        {seminare.map((seminar) => (
          <div key={seminar.id} className="seminar-item">
            <h3>{seminar.titel}</h3>
            <p>{seminar.beschreibung}</p>
            <p>
              <strong>Dauer:</strong> {seminar.dauer}
            </p>
            <p>
              <strong>Preis:</strong> {seminar.preis} € (netto)
            </p>
            <p>
              <strong>Empfohlen für:</strong> {seminar.zielgruppe}
            </p>
            <button
              onClick={() => zumWarenkorbHinzufügen(seminar)}
              className={
                warenkorb.some((item) => item.id === seminar.id) ? "selected" : ""
              }
            >
              {warenkorb.some((item) => item.id === seminar.id)
                ? "Ausgewählt"
                : "Infos anfragen"}
            </button>
          </div>
        ))}
      </div>

      {/* Umschalten zwischen Warenkorb und Formular */}
      {!istFormularAngezeigt ? (
        <div className="cart">
          <h2>Ich wünsche Unverbindliche Infos zu...</h2>
          {warenkorb.length === 0 ? (
            <p>Kein Seminar ausgewählt.</p>
          ) : (
            <>
              <ul>
                {warenkorb.map((item) => (
                  <li key={item.id}>
                    {item.titel} - {item.preis} €
                    <button onClick={() => ausWarenkorbEntfernen(item.id)}>
                      Entfernen
                    </button>
                  </li>
                ))}
              </ul>
              <h3>
                Preis je Lehrgang (max. 10 Teilnehmer): {gesamtpreisBerechnen()} € (netto)
              </h3>
              <button
                className="order-button"
                onClick={() => setIstFormularAngezeigt(true)}
              >
                Unverbindliche Anfrage/Beratung
              </button>
            </>
          )}
        </div>
      ) : istAnfrageAbgeschlossen ? (
        <div className="confirmation">
          <h2>Vielen Dank für Ihr Interesse!</h2>
          <p>
            Wir setzen uns umgehend mit Ihnen in Verbindung.
          </p>
        </div>
      ) : (
        <div className="personal-info">
          <h2>Persönliche Angaben</h2>
          <form className="personal-form" onSubmit={anfrageAbsenden}>
            <div>
              <label>
                Firma / Ansprechpartner:
                <input type="text" name="name" required />
              </label>
            </div>
            <div>
              <label>
                Telefon:
                <input type="text" name="telefon" required />
              </label>
            </div>
            <div>
              <label>
                E-Mail:
                <input type="email" name="email" required />
              </label>
            </div>
            <div className="form-buttons">
              <button
                type="button"
                onClick={() => setIstFormularAngezeigt(false)}
              >
                Zurück
              </button>
              <button type="submit">Anfrage absenden</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SeminareComp;
