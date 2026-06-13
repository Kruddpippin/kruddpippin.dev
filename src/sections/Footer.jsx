import { ArrowUp } from "lucide-react";
import CONFIG from "../data/config.js";

export default function Footer({ go }) {
  return (
    <footer className="footer wrap">
      <span>
        © {new Date().getFullYear()} {CONFIG.brand}. Built fast, on purpose.
      </span>
      <button className="back-top-link" onClick={() => go("home")}>
        Back to top <ArrowUp size={14} />
      </button>
    </footer>
  );
}
