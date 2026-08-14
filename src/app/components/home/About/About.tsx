import { MessageCircle } from "lucide-react";
import { waLink } from "../../../lib/whatsapp";

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative bg-[#f7f7f5] py-24 px-6 overflow-hidden"
    >
      {/* Diagonal accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#0d1a33] opacity-40 hidden md:block"
        style={{ clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      />
      <div className="absolute right-0 top-0 h-full w-1 bg-[#1a6eff]/20 hidden md:block" />

      <div className="max-w-7xl mx-auto relative grid md:grid-cols-2 gap-16 items-center">
        {/* Left copy */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#1a6eff]" />
            <span
              className="text-[#1a6eff] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              Nuestra historia
            </span>
          </div>

          <h2
            className="text-[#101010] leading-none mb-8"
            style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            NACIMOS
            <br />
            PARA<br />
            <span className="text-[#1a6eff]">COMPETIR</span>
          </h2>

          <div
            className="space-y-5 text-[#101010]/50 leading-relaxed"
            style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300 }}
          >
            <p>
              YOUNGSHARK nació de la frustración de atletas que no encontraban ropa
              deportiva que combinara rendimiento real con identidad visual fuerte.
              Cansados de las opciones genéricas, decidimos crear la nuestra.
            </p>
            <p>
              Cada prenda está diseñada con atletas activos, testada bajo condiciones
              reales de entrenamiento. Sin compromisos entre performance y estética —
              tenés las dos o no te interesa.
            </p>
            <p>
              Somos una marca joven, argentina, hambrienta. Un tiburón no para.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={waLink("quiero conocer más sobre la marca")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1a6eff] text-white px-7 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#0f5ae0] transition-colors"
              style={{
                fontFamily: "Barlow Condensed, sans-serif",
                clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
              }}
            >
              <MessageCircle size={15} />
              Hablar con el equipo
            </a>
          </div>
        </div>

        {/* Right image stack */}
        <div className="relative">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=700&h=900&fit=crop&auto=format"
              alt="Atleta YOUNGSHARK entrenando"
              className="w-full object-cover"
              style={{ maxHeight: "520px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-[#1a6eff] p-5 hidden md:block">
            <div
              className="text-white text-3xl leading-none"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              100%
            </div>
            <div
              className="text-white/70 text-xs tracking-widest uppercase mt-1"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              Diseño propio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
