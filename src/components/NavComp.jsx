import React, { useState, useEffect } from "react";
import "../styles/NavStyle.css";

const NavComp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funktion für das Scrollen mit Offset
  const handleSmoothScroll = (event) => {
    if (event.target.tagName === "A" && event.target.hash) {
      event.preventDefault();
      const targetId = event.target.hash.slice(1); // Extrahiere ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 80; // Höhe des Offsets (z. B. Navigation)
        const topPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          offset;

        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="nav_container">
      {/* Logo */}
      <a href="/" className="nav_logo" aria-label="Kingnetz Security Logo"></a>

      {/* Hamburger Toggle Button */}
      <button
        className="nav_toggle"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
      >
        ☰
      </button>

      {/* Navigation */}
      <div className={`nav_top ${isMenuOpen ? "nav_menu--open" : ""}`}>
        <ul>
          <li>
            <a href="#header" onClick={closeMenu}>
              Startseite
            </a>
          </li>
          <li>
            <a href="#content1" onClick={closeMenu}>
              Über uns
            </a>
          </li>
          <li>
            <a href="#service" onClick={closeMenu}>
              Service
            </a>
          </li>
          <li>
            <a href="#seminare" onClick={closeMenu}>
              Seminare
            </a>
          </li>
          <li>
            <a href="#kontakt" onClick={closeMenu}>
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavComp;
