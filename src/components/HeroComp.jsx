import "../styles/HeroStyle.css";

const HeroComp = () => {
  return (
    <div className="hero_container">
      {/* Bild mit Abschatter */}
      <div className="hero_img_wrapper">
        <div className="hero_img_right">
          <div className="hero_abschatter">
            <h1 className="hero_h1">CyberSecurity Erfurt | kingnetz</h1>
            <div  className="">Cyber Sicherheit für Ihr Unternehmen.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
