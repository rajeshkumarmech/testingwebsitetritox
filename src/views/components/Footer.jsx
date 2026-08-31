import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../models/siteModel";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Link to="/" className="footer-brand">
            <span className="brand-letter">T</span>
            <span>Tritox Technologies</span>
          </Link>

          <p>
            Specialized quote preparation and operational support for Farmers
            Insurance agencies.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>

          {NAV_ITEMS.slice(0, 4).map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h4>Company</h4>

          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Tritox Technologies. All rights reserved.</p>
        <p>Quote preparation support made simpler.</p>
      </div>
    </footer>
  );
}

export default Footer;