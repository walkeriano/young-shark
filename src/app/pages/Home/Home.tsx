import About from "../../components/home/About/About";
import Brands from "../../components/home/Brands/Brands";
import Categories from "../../components/home/Categories/Categories";
import ContactSection from "../../components/home/ContactSection/ContactSection";
import Hero from "../../components/home/Hero/Hero";
import Products from "../../components/home/Products/Products";
import Footer from "../../components/layout/Footer/Footer";
import Navbar from "../../components/layout/Navbar/Navbar";
import QuickAccessMenu from "../../components/layout/QuickAccessMenu/QuickAccessMenu";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f5]" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <Hero />
      <Brands />
      <Categories />
      <Products />
      <About />
      <ContactSection />
      <Footer />
      <QuickAccessMenu />
    </div>
  );
}
