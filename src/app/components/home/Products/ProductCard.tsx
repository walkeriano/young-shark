import { useState } from "react";
import { MessageCircle, Star } from "lucide-react";
import type { Product } from "../../../data/home";
import { waLink } from "../../../lib/whatsapp";

export default function ProductCard({ p }: { p: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative bg-white overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f1f1ef]">
        <img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span
            className="bg-[#1a6eff] text-white text-[10px] px-2.5 py-1 tracking-widest uppercase"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            {p.badge}
          </span>
        </div>

        {/* WA hover CTA */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href={waLink(`${p.name} — Talle: consultar`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1a6eff] text-white px-6 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-[#0f5ae0] transition-colors shadow-lg shadow-[#1a6eff]/20"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle size={14} />
            Consultar por WS
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div
          className="text-[#101010]/40 text-[10px] tracking-widest uppercase mb-1"
          style={{ fontFamily: "Barlow Condensed, sans-serif" }}
        >
          {p.category}
        </div>
        <h3
          className="text-[#101010] text-base mb-2 leading-tight"
          style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700 }}
        >
          {p.name}
        </h3>

        {/* Stars */}
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < p.stars ? "text-[#1a6eff] fill-[#1a6eff]" : "text-[#101010]/20"}
            />
          ))}
        </div>

        {/* Colors */}
        <div className="flex gap-1.5 mb-4">
          {p.colors.map((c) => (
            <div
              key={c}
              className="w-4 h-4 rounded-full border border-black/20"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        {/* Sizes */}
        <div className="flex gap-1.5 flex-wrap mb-4">
          {p.sizes.slice(0, 4).map((s) => (
            <span
              key={s}
              className="border border-black/15 text-[#101010]/50 text-[10px] px-2 py-0.5 tracking-wide"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <div
              className="text-[#101010] text-xl leading-none"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              {p.price}
            </div>
            {p.oldPrice && (
              <div
                className="text-[#101010]/30 text-xs line-through mt-0.5"
                style={{ fontFamily: "Barlow, sans-serif" }}
              >
                {p.oldPrice}
              </div>
            )}
          </div>
          <a
            href={waLink(p.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#1a6eff] text-xs font-semibold tracking-widest uppercase border-b border-[#1a6eff]/50 pb-0.5 hover:border-[#1a6eff] transition-colors"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            <MessageCircle size={12} />
            WS
          </a>
        </div>
      </div>
    </div>
  );
}
