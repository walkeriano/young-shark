import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../../../data/home";
import { waLink } from "../../../lib/whatsapp";
import ProductCard from "./ProductCard";

export default function Products() {
  const [filter, setFilter] = useState("Todos");
  const cats = ["Todos", ...CATEGORIES.map((c) => c.name)];
  const filtered =
    filter === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="productos" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#1a6eff]" />
              <span
                className="text-[#1a6eff] text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                Productos
              </span>
            </div>
            <h2
              className="text-[#101010] leading-none"
              style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              NUESTRA
              <br />
              COLECCIÓN
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-200 border ${
                  filter === c
                    ? "bg-[#1a6eff] border-[#1a6eff] text-white"
                    : "border-black/15 text-[#101010]/50 hover:border-black/40 hover:text-[#101010]"
                }`}
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href={waLink("catálogo completo")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-black/20 text-[#101010] px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:border-[#1a6eff] hover:text-[#1a6eff] transition-all duration-200"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            Ver catálogo completo por WhatsApp
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
