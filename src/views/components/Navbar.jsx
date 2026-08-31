import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../models/siteModel";
import { useMobileMenuController } from "../../controllers/navigationController";

function Navbar() {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenuController();

  return (
    <header className="navbar">
      <div className="container nav-wrapper">
        <Link to="/" className="brand" onClick={closeMenu}>
            <img
    src="/tritox_logo.png"
    alt="Tritox Technologies"
    className="brand-logo"
  />
        </Link>

        <nav className={`nav-links ${isMenuOpen ? "menu-open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="nav-cta" onClick={closeMenu}>
          Free Trial
        </Link>

        <button
          type="button"
          className="menu-button"
          onClick={toggleMenu}
          aria-label="Open navigation menu"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;