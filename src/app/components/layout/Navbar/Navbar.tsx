import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { NAV_LINKS } from "../../../data/home";
import { waLink } from "../../../lib/whatsapp";
import SharkLogo from "../../shared/SharkLogo/SharkLogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080808]/95 backdrop-blur-md border-b border-white/8" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <SharkLogo />

        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => scrollTo(l.href)}
                className="text-white/70 hover:text-white text-sm font-medium tracking-widest uppercase transition-colors duration-200"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={waLink("consulta general")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1a6eff] text-white px-5 py-2.5 text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover:bg-[#0f5ae0] hover:scale-105"
            style={{ fontFamily: "Barlow Condensed, sans-serif", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#080808] border-t border-white/8 px-6 py-6 flex flex-col gap-6">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-white text-left text-lg tracking-widest uppercase"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              {l.label}
            </button>
          ))}
          <a
            href={waLink("consulta general")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1a6eff] text-white px-5 py-3 text-sm font-semibold tracking-wider uppercase w-full justify-center"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            <MessageCircle size={16} />
            Contactar por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
