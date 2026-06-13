import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
import CONFIG from "../data/config.js";

const navLinks = [
  ["work", "Work"],
  ["services", "Services"],
  ["process", "Process"],
  ["about", "About"],
  ["contact", "Contact"],
];

export default function Nav({ theme, setTheme, menuOpen, setMenuOpen, active, go }) {
  return (
    <>
      <header className="nav">
        <button className="brand" onClick={() => go("home")} aria-label="Home">
          <span className="brand-dot" />
          {CONFIG.brand}
        </button>

        <nav className="nav-links">
          {navLinks.map(([id, label]) => (
            <button
              key={id}
              className={`nav-link ${active === id ? "active" : ""}`}
              onClick={() => go(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle colour theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="btn btn-primary nav-cta" onClick={() => go("contact")}>
            Start a project <ArrowRight size={16} />
          </button>
          <button
            className="icon-btn menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map(([id, label]) => (
          <button key={id} onClick={() => go(id)}>{label}</button>
        ))}
        <button className="btn btn-primary" onClick={() => go("contact")}>
          Start a project <ArrowRight size={16} />
        </button>
      </div>
    </>
  );
}
