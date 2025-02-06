import React, { useState } from "react";
import "../styles/PersonalDataStyle.css";
import { useNavigate } from "react-router-dom";

const PersonalDataComp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nameFirma: "",
    strasseNr: "",
    plz: "",
    ort: "",
    telefon: "",
    bemerkungen: "",
  });
  const [errors, setErrors] = useState({});

  // Eingabe-Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validierung der Pflichtfelder
  const validateForm = () => {
    const newErrors = {};
    if (!formData.nameFirma) newErrors.nameFirma = "Name/Firma ist erforderlich.";
    if (!formData.strasseNr) newErrors.strasseNr = "Straße & Nr ist erforderlich.";
    if (!formData.plz) newErrors.plz = "PLZ ist erforderlich.";
    if (!formData.ort) newErrors.ort = "Ort ist erforderlich.";
    if (!formData.telefon) newErrors.telefon = "Telefon ist erforderlich.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Keine Fehler
  };

  // Formular absenden
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulardaten:", formData);
      navigate("/"); // Beispiel: Zurück zur Hauptseite oder zu einem weiteren Schritt
    }
  };

  return (
    <div className="personal-data-form">
      <h2>Persönliche Daten</h2>
      <form onSubmit={handleSubmit}>
        {/* Name/Firma */}
        <div className="form-group">
          <label htmlFor="nameFirma">Name/Firma *</label>
          <input
            type="text"
            id="nameFirma"
            name="nameFirma"
            value={formData.nameFirma}
            onChange={handleChange}
          />
          {errors.nameFirma && <span className="error">{errors.nameFirma}</span>}
        </div>

        {/* Straße & Nr */}
        <div className="form-group">
          <label htmlFor="strasseNr">Straße & Nr *</label>
          <input
            type="text"
            id="strasseNr"
            name="strasseNr"
            value={formData.strasseNr}
            onChange={handleChange}
          />
          {errors.strasseNr && <span className="error">{errors.strasseNr}</span>}
        </div>

        {/* PLZ und Ort */}
        <div className="form-group">
          <label htmlFor="plz">PLZ *</label>
          <input
            type="text"
            id="plz"
            name="plz"
            value={formData.plz}
            onChange={handleChange}
          />
          {errors.plz && <span className="error">{errors.plz}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="ort">Ort *</label>
          <input
            type="text"
            id="ort"
            name="ort"
            value={formData.ort}
            onChange={handleChange}
          />
          {errors.ort && <span className="error">{errors.ort}</span>}
        </div>

        {/* Telefon */}
        <div className="form-group">
          <label htmlFor="telefon">Telefon *</label>
          <input
            type="text"
            id="telefon"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
          />
          {errors.telefon && <span className="error">{errors.telefon}</span>}
        </div>

        {/* Bemerkungen */}
        <div className="form-group">
          <label htmlFor="bemerkungen">Bemerkungen</label>
          <textarea
            id="bemerkungen"
            name="bemerkungen"
            value={formData.bemerkungen}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Weiter-Button */}
        <button type="submit">Weiter</button>
      </form>
    </div>
  );
};

export default PersonalDataComp;
