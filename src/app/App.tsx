import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, ChevronRight, MessageCircle, Instagram, ArrowUpRight, Star } from "lucide-react";
import logo from "../assets/logo.png";
const WA_NUMBER = "51983552696";

function waLink(product: string) {
  const msg = encodeURIComponent(
    `Hola YOUNGSHARK! 🦈 Quiero saber más sobre: *${product}*. ¿Tienen disponibilidad?`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const MARCAS = [
  {
    id: "shorts",
    name: "Gymshark",
    desc: "Libertad de movimiento",
    img: "https://eu.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F7AHDT9aEwR8lI7qOzrUr3J%2F5b54f9e8243dacc8d51d95573cf688a0%2Fimage01.jpeg&w=3840&q=95",
    count: 8,
  },
  {
    id: "camisetas",
    name: "YoungLA",
    desc: "Performance & street",
    img: "https://cdn.shopify.com/s/files/1/1367/5201/files/GSxBratzShortGSDayglowPeachB6B3J_OBXB_6198_V2_3840x.jpg?v=1778834903",
    count: 12,
  },
  
  {
    id: "tirantes",
    name: "Purefit",
    desc: "Máxima ventilación",
    img: "https://purefitstore.com/cdn/shop/files/YLA5.20_c4b24877-470d-4ec5-a83a-64cca3f92b1e.webp?v=1774418497&width=990",
    count: 6,
  },
  {
    id: "zapatillas",
    name: "DarcSport",
    desc: "Rendimiento al límite",
    img: "https://controlledinsanity.com/cdn/shop/files/Screenshot2025-10-31at1.18.47PM.png?v=1761934736&width=1346s",
    count: 10,
  },
];

const CATEGORIES = [
  {
    id: "camisetas",
    name: "Camisetas",
    desc: "Performance & street",
    img: "https://cdn.shopify.com/s/files/1/1367/5201/files/GSxFrazettaPowerT_ShirtGSBlackA4C5B_BB2J_0368_3840x.jpg?v=1781518624",
    count: 12,
  },
  {
    id: "shorts",
    name: "Shorts",
    desc: "Libertad de movimiento",
    img: "https://cdn.shopify.com/s/files/1/1367/5201/files/GSxBratzShortGSDayglowPeachB6B3J_OBXB_6118_V2_3840x.jpg?v=1778834932",
    count: 8,
  },
  {
    id: "tirantes",
    name: "Tirantes",
    desc: "Máxima ventilación",
    img: "https://cdn.shopify.com/s/files/1/1367/5201/files/GSxFrazettaPowerStringerGSBlackA4C3R_BB2J_0324_3840x.jpg?v=1781518042",
    count: 6,
  },
  {
    id: "zapatillas",
    name: "Zapatillas",
    desc: "Rendimiento al límite",
    img: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ce454df5-99a4-49c6-acf0-d0db9aa185df/NIKE+AIR+MAX+90+PRM+TREBLE.png",
    count: 10,
  },
  {
    id: "gorros",
    name: "Gorros",
    desc: "Identidad & estilo",
    img: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8a78e03a-ebfb-4fe5-99dc-a1f25ac78745/M+NSW+TN+TEE.png",
    count: 5,
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Camiseta SHARK CORE",
    category: "Camisetas",
    price: "$8.500",
    oldPrice: "$10.200",
    badge: "NUEVO",
    stars: 5,
    img: "https://cdn.shopify.com/s/files/1/1367/5201/files/images-LightweightRegSeamlessTankBlackSilhouetteGreyA3B7V_BBMW_1064_3840x.jpg?v=1757943508",
    colors: ["#111", "#1a6eff", "#fff"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Short PREDATOR PRO",
    category: "Shorts",
    price: "$7.200",
    oldPrice: null,
    badge: "MÁS VENDIDO",
    stars: 5,
    img: "https://cdn.shopify.com/s/files/1/1367/5201/files/GSxBratzShortGSDayglowPeachB6B3J_OBXB_6119_V2_3840x.jpg?v=1778834930",
    colors: ["#111", "#fff"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 3,
    name: "Tirante APEX TANK",
    category: "Tirantes",
    price: "$5.900",
    oldPrice: "$7.000",
    badge: "OFERTA",
    stars: 4,
    img: "https://cdn.shopify.com/s/files/1/1367/5201/files/BlushSeamlessOmbreBlurredSSShrugGSFocusPinkSorbetYellowB6B1O_KDHQ_6560_2af1feeb-933d-4b4c-a810-4b03135ab7a1_3840x.jpg?v=1780321550",
    colors: ["#111", "#1a6eff"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Zapatilla SHARK X1",
    category: "Zapatillas",
    price: "$28.000",
    oldPrice: null,
    badge: "EXCLUSIVO",
    stars: 5,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop&auto=format",
    colors: ["#fff", "#111", "#1a6eff"],
    sizes: ["38", "39", "40", "41", "42", "43"],
  },
  {
    id: 5,
    name: "Gorro YOUNGSHARK SNAPBACK",
    category: "Gorros",
    price: "$3.800",
    oldPrice: "$4.500",
    badge: "NUEVO",
    stars: 4,
    img: "https://cdn.shopify.com/s/files/1/1367/5201/files/images-SharkheadCapGSHeavyBlueI1A6R_UCTN_0206_V1_3840x.jpg?v=1759484967",
    colors: ["#111", "#1a6eff", "#fff"],
    sizes: ["ÚNICA"],
  },
  {
    id: 6,
    name: "Camiseta DEEP OCEAN",
    category: "Camisetas",
    price: "$9.100",
    oldPrice: null,
    badge: "COLECCIÓN",
    stars: 5,
    img: "https://cdn.shopify.com/s/files/1/1367/5201/files/SummerTrainT_ShirtGSSuper_SetPinkA4C5I_KDFW_0323_3840x.jpg?v=1779183941",
    colors: ["#0a2a6e", "#1a6eff"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

const STATS = [
  { value: "3+", label: "Años en el mercado" },
  { value: "5K+", label: "Clientes activos" },
  { value: "50+", label: "Modelos disponibles" },
  { value: "98%", label: "Satisfacción" },
];

function SharkLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logo} alt="Shark Logo" className="w-48 h-16" />
    </div>
  );
}

function Navbar() {
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

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]"
    >
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/originals/da/24/a6/da24a6501387c6069075d6fd00a0ef5c.jpg"
          alt="Atleta entrenando"
          className="w-full h-full object-cover opacity-30"
          style={{ objectPosition: "60% center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
      </div>

      {/* Blue accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1a6eff]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
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
            className="text-white leading-none mb-6"
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "clamp(4rem, 11vw, 9rem)",
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
            }}
          >
            50% DSCTO
            <br />
            <span className="text-[#1a6eff]">TODO JULIO</span>
            <br />
            FIESTAS PATRIAS
          </h1>
          <p
            className="text-white/50 text-lg mb-10 max-w-md leading-relaxed"
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
              className="flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:border-[#1a6eff] hover:text-[#1a6eff]"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              <MessageCircle size={16} />
              Consultar en WhatsApp
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/8 pt-10">
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                className="text-[#1a6eff] leading-none mb-1"
                style={{ fontFamily: "Anton, sans-serif", fontSize: "2.5rem" }}
              >
                {s.value}
              </div>
              <div
                className="text-white/40 text-xs tracking-widest uppercase"
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
        <div className="w-px h-12 bg-white animate-pulse" />
        <span
          className="text-white text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center"
          style={{ fontFamily: "Barlow Condensed, sans-serif" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}

function Marcas() {
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
                Marcas asociadas
              </span>
            </div>
            <h2
              className="text-white leading-none"
              style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              LAS MEJORES MARCAS
              <br />
              DEL MUNDO
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
          {MARCAS.map((cat) => (
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

function Categories() {
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

function ProductCard({ p }: { p: (typeof PRODUCTS)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative bg-[#111] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#151515]">
        <img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60" />

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
            className="flex items-center gap-2 bg-[#1a6eff] text-white px-6 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-[#0f5ae0] transition-colors shadow-lg shadow-[#1a6eff]/30"
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
          className="text-white/40 text-[10px] tracking-widest uppercase mb-1"
          style={{ fontFamily: "Barlow Condensed, sans-serif" }}
        >
          {p.category}
        </div>
        <h3
          className="text-white text-base mb-2 leading-tight"
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
              className={i < p.stars ? "text-[#1a6eff] fill-[#1a6eff]" : "text-white/20"}
            />
          ))}
        </div>

        {/* Colors */}
        <div className="flex gap-1.5 mb-4">
          {p.colors.map((c) => (
            <div
              key={c}
              className="w-4 h-4 rounded-full border border-white/20"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        {/* Sizes */}
        <div className="flex gap-1.5 flex-wrap mb-4">
          {p.sizes.slice(0, 4).map((s) => (
            <span
              key={s}
              className="border border-white/15 text-white/50 text-[10px] px-2 py-0.5 tracking-wide"
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
              className="text-white text-xl leading-none"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              {p.price}
            </div>
            {p.oldPrice && (
              <div
                className="text-white/30 text-xs line-through mt-0.5"
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

function Products() {
  const [filter, setFilter] = useState("Todos");
  const cats = ["Todos", ...CATEGORIES.map((c) => c.name)];
  const filtered =
    filter === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="productos" className="bg-[#0a0a0a] py-24 px-6">
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
              className="text-white leading-none"
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
                    : "border-white/15 text-white/50 hover:border-white/40 hover:text-white"
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
            className="flex items-center gap-3 border border-white/20 text-white px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:border-[#1a6eff] hover:text-[#1a6eff] transition-all duration-200"
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

function About() {
  return (
    <section
      id="nosotros"
      className="relative bg-[#080808] py-24 px-6 overflow-hidden"
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
            className="text-white leading-none mb-8"
            style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            NACIMOS
            <br />
            PARA<br />
            <span className="text-[#1a6eff]">COMPETIR</span>
          </h2>

          <div
            className="space-y-5 text-white/50 leading-relaxed"
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent" />
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

function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative bg-[#080808] py-24 px-6 overflow-hidden"
    >
      {/* BG texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)",
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
          className="text-white leading-none mb-6"
          style={{ fontFamily: "Anton, sans-serif", fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          50% de DSCTO
          <br />
          <span className="text-[#1a6eff]">EN TU PRIMERA COMPRA</span>
        </h2>

        <p
          className="text-white/40 text-lg mb-10 max-w-lg mx-auto leading-relaxed"
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
            className="group flex items-center gap-3 bg-[#1a6eff] text-white px-10 py-5 text-base font-semibold tracking-widest uppercase hover:bg-[#0f5ae0] transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#1a6eff]/30"
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
        <div className="mt-16 flex items-center justify-center gap-6 border-t border-white/8 pt-10">
          <a
            href="#"
            className="flex items-center gap-2 text-white/30 hover:text-[#1a6eff] transition-colors text-sm tracking-widest uppercase"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            <Instagram size={16} />
            @youngshark_ar
          </a>
          <div className="w-px h-4 bg-white/15" />
          <span
            className="text-white/20 text-sm tracking-widest uppercase"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            Buenos Aires, Argentina
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/8 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <SharkLogo />

        <nav className="flex flex-wrap gap-8 justify-center">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() =>
                document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white/30 hover:text-white text-xs tracking-widest uppercase transition-colors"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <p
          className="text-white/20 text-xs tracking-wider"
          style={{ fontFamily: "Barlow, sans-serif" }}
        >
          © 2025 YOUNGSHARK. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-[#080808] min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <Hero />
      <Marcas/>
      <Categories />
      <Products />
      <About />
      <ContactSection />
      <Footer />

      {/* Floating WA button */}
      <a
        href={waLink("consulta general")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3.5 shadow-xl shadow-black/40 hover:bg-[#1db954] transition-all duration-200 hover:scale-105 group"
        style={{
          fontFamily: "Barlow Condensed, sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          fontWeight: 600,
          clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
        }}
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline uppercase tracking-widest">WhatsApp</span>
      </a>
    </div>
  );
}
