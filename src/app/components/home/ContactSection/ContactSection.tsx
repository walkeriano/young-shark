import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";
import { waLink } from "../../../lib/whatsapp";

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative bg-[#f7f7f5] py-24 px-6 overflow-hidden"
    >
      {/* BG texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #111 0px, #111 1px, transparent 1px, transparent 12px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#1a6eff]" />
          <span
            className="text-[#1a6eff] text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            Contacto
          </span>
          <div className="w-8 h-px bg-[#1a6eff]" />
        </div>

        <h2
          className="text-[#101010] leading-none mb-6"
          style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          50% de DSCTO
          <br />
          <span className="text-[#1a6eff]">EN TU PRIMERA COMPRA</span>
        </h2>

        <p
          className="text-[#101010]/40 text-lg mb-10 max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300 }}
        >
          Escribinos por WhatsApp para consultas sobre productos, talles, envíos y
          disponibilidad. Respondemos rápido.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={waLink("quiero hacer un pedido")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#1a6eff] text-white px-10 py-5 text-base font-semibold tracking-widest uppercase hover:bg-[#0f5ae0] transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#1a6eff]/20"
            style={{
              fontFamily: "Barlow Condensed, sans-serif",
              clipPath: "polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%)",
            }}
          >
            <MessageCircle size={20} />
            Escribir por WhatsApp
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Social */}
        <div className="mt-16 flex items-center justify-center gap-6 border-t border-black/8 pt-10">
          <a
            href="#"
            className="flex items-center gap-2 text-[#101010]/30 hover:text-[#1a6eff] transition-colors text-sm tracking-widest uppercase"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            <Instagram size={16} />
            @youngshark_ar
          </a>
          <div className="w-px h-4 bg-black/15" />
          <span
            className="text-[#101010]/20 text-sm tracking-widest uppercase"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            Buenos Aires, Argentina
          </span>
        </div>
      </div>
    </section>
  );
}
