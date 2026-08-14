import { NAV_LINKS } from "../../../data/home";
import SharkLogo from "../../shared/SharkLogo/SharkLogo";

export default function Footer() {
  return (
    <footer className="bg-[#efefec] border-t border-black/8 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <SharkLogo />

        <nav className="flex flex-wrap gap-8 justify-center">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() =>
                document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-[#101010]/30 hover:text-[#101010] text-xs tracking-widest uppercase transition-colors"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <p
          className="text-[#101010]/20 text-xs tracking-wider"
          style={{ fontFamily: "Barlow, sans-serif" }}
        >
          © 2025 YOUNGSHARK. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
