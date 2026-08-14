import { MessageCircle } from "lucide-react";
import About from "./components/home/About/About";
import Brands from "./components/home/Brands/Brands";
import Categories from "./components/home/Categories/Categories";
import ContactSection from "./components/home/ContactSection/ContactSection";
import Hero from "./components/home/Hero/Hero";
import Products from "./components/home/Products/Products";
import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/Navbar/Navbar";
import { waLink } from "./lib/whatsapp";

export default function App() {
  return (
    <div className="bg-[#080808] min-h-screen" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <Hero />
      <Brands />
      <Categories />
      <Products />
      <About />
      <ContactSection />
      <Footer />
      <a
        href={waLink("consulta general")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
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
