import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { CATEGORIES } from "../../../data/home";

export default function Categories() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-[#080808] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#1a6eff]" />
              <span
                className="text-[#1a6eff] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                Categorías
              </span>
            </div>
            <h2
              className="text-white leading-none"
              style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              TODO LO QUE
              <br />
              NECESITÁS
            </h2>
          </div>
          <p
            className="hidden md:block text-white/40 text-sm max-w-xs text-right leading-relaxed"
            style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300 }}
          >
            Cinco categorías, un solo propósito: llevarte al próximo nivel.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActive(cat.id)}
              onMouseLeave={() => setActive(null)}
              onClick={() =>
                document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative group overflow-hidden aspect-[3/4] bg-[#111]"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  active === cat.id ? "opacity-80" : "opacity-60"
                }`}
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.3) 60%, transparent 100%)",
                }}
              />
              {active === cat.id && (
                <div className="absolute inset-0 border border-[#1a6eff]/60 pointer-events-none" />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div
                  className="text-white text-xl mb-1"
                  style={{ fontFamily: "Anton, sans-serif", letterSpacing: "0.02em" }}
                >
                  {cat.name}
                </div>
                <div
                  className="text-white/40 text-xs tracking-wider mb-2"
                  style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                >
                  {cat.desc}
                </div>
                <div
                  className={`text-[#1a6eff] text-xs tracking-widest uppercase flex items-center gap-1 transition-all duration-300 ${
                    active === cat.id ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                >
                  {cat.count} modelos <ChevronRight size={12} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
