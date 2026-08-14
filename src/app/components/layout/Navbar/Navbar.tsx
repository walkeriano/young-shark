import { useEffect, useState } from "react";
import { LogIn, Menu, MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
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
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-black/8" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <SharkLogo />

        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => scrollTo(l.href)}
                className="text-[#101010]/70 hover:text-[#101010] text-sm font-medium tracking-widest uppercase transition-colors duration-200"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="flex items-center gap-2 border border-[#1a6eff] px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#1a6eff] transition-all duration-200 hover:bg-[#1a6eff] hover:text-white"
            style={{
              fontFamily: "Barlow Condensed, sans-serif",
              clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
            }}
          >
            <LogIn size={15} />
            Iniciar sesión
          </Link>
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
          className="md:hidden text-[#101010] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#f7f7f5] border-t border-black/8 px-6 py-6 flex flex-col gap-6">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-[#101010] text-left text-lg tracking-widest uppercase"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              {l.label}
            </button>
          ))}
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-2 border border-[#1a6eff] px-5 py-3 text-sm font-semibold uppercase tracking-wider text-[#1a6eff] transition-colors hover:bg-[#1a6eff] hover:text-white"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            <LogIn size={16} />
            Login
          </Link>
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
