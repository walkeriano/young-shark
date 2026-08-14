export const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export const MARCAS = [
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

export const CATEGORIES = [
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

export const PRODUCTS = [
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

export type Product = (typeof PRODUCTS)[number];

export const STATS = [
  { value: "3+", label: "Años en el mercado" },
  { value: "5K+", label: "Clientes activos" },
  { value: "50+", label: "Modelos disponibles" },
  { value: "98%", label: "Satisfacción" },
];
