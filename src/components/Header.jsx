import "../style/Header.css";
import RevBoost_logo from "../assets/RevBoost_logo.png";
function Header({ restaurant }) {
  return (
    <div className="restaurant-header">
      <img
        src={RevBoost_logo}
        alt="vedas"
        className="restaurant-logo"
        loading="lazy"
      />

      <h1 className="restaurant-name"></h1>

      <p className="restaurant-subtitle">Tell us about your experience</p>
    </div>
  );
}

export default Header;
