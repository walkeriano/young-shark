import { ChevronRight, MessageCircle, ShoppingBag } from "lucide-react";
import { STATS } from "../../../data/home";
import { waLink } from "../../../lib/whatsapp";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#f7f7f5]"
    >
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/originals/da/24/a6/da24a6501387c6069075d6fd00a0ef5c.jpg"
          alt="Atleta entrenando"
          className="w-full h-full object-cover opacity-20"
          style={{ objectPosition: "60% center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f5] via-[#f7f7f5]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f7f5] via-transparent to-transparent" />
      </div>

      {/* Blue accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1a6eff]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.35) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#1a6eff]" />
            <span
              className="text-[#1a6eff] text-xs tracking-[0.3em] uppercase font-semibold"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              Colección 2026
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-[#101010] leading-none mb-6"
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(4rem, 11vw, 9rem)",
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
            }}
          >
            STYLO,
            <br />
            <span className="text-[#1a6eff]">MODA &</span>
            <br />
            CALIDAD
          </h1>
          <p
            className="text-[#101010]/50 text-lg mb-10 max-w-md leading-relaxed"
            style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300 }}
          >
            Tienda multimarca peruana diseñada para los que no se detienen. Calidad y garantía.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-3 bg-[#1a6eff] text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:bg-[#0f5ae0] hover:gap-5 group"
              style={{
                fontFamily: "Barlow Condensed, sans-serif",
                clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
              }}
            >
              <ShoppingBag size={16} />
              Ver Productos
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={waLink("consulta sobre colección 2025")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-black/20 text-[#101010] px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:border-[#1a6eff] hover:text-[#1a6eff]"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              <MessageCircle size={16} />
              Consultar en WhatsApp
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/8 pt-10">
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                className="text-[#1a6eff] leading-none mb-1"
                style={{ fontFamily: "Anton, sans-serif", fontSize: "2.5rem" }}
              >
                {s.value}
              </div>
              <div
                className="text-[#101010]/40 text-xs tracking-widest uppercase"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40">
        <div className="h-12 w-px bg-black animate-pulse" />
        <span
          className="text-[#101010] text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center"
          style={{ fontFamily: "Barlow Condensed, sans-serif" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
