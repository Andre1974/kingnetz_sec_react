// ContentComp.jsx
// Wiederverwendbare Komponente zur Darstellung eines Inhaltsbereichs mit Bild und Text
import React from "react";
import "../styles/ContentStyle.css";

const ContentComp = ({ title, textBlocks, imgSrc, imgPosition = "left" }) => {
  return (
    <div className={`content-comp ${imgPosition === "left" ? "img-left" : "img-right"}`}>
      {/* Bildbereich */}
      <div className="content-comp-img" style={{ backgroundImage: `url(${imgSrc})` }}></div>

      {/* Textbereich */}
      <div className="content-comp-text">
        <h2>{title}</h2>
        {textBlocks.map((block) => block)}
      </div>
    </div>
  );
};

export default ContentComp;
