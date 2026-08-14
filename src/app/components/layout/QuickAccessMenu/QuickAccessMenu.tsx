import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Layers3,
  Menu,
  Shirt,
  Tags,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import { CATEGORIES, MARCAS } from "../../../data/home";

type MenuSection = {
  id: string;
  label: string;
  description: string;
  icon: typeof Tags;
  items: string[];
};

const MENU_SECTIONS: MenuSection[] = [
  {
    id: "marcas",
    label: "Marcas",
    description: "Firmas seleccionadas",
    icon: Tags,
    items: MARCAS.map((brand) => brand.name),
  },
  {
    id: "categorias",
    label: "Categorías",
    description: "Explorá por producto",
    icon: Layers3,
    items: CATEGORIES.map((category) => category.name),
  },
  {
    id: "hombre",
    label: "Hombre",
    description: "Colección masculina",
    icon: UserRound,
    items: ["Camisetas", "Shorts", "Tirantes", "Zapatillas", "Accesorios"],
  },
  {
    id: "mujer",
    label: "Mujer",
    description: "Colección femenina",
    icon: UsersRound,
    items: ["Tops", "Leggings", "Shorts", "Camisetas", "Accesorios"],
  },
];

function goToProducts() {
  document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" });
}

export default function QuickAccessMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(MENU_SECTIONS[0].id);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const currentSection =
    MENU_SECTIONS.find((section) => section.id === activeSection) ?? MENU_SECTIONS[0];

  return (
    <aside
      className="fixed inset-y-0 right-0 z-[60] flex h-screen items-stretch"
      aria-label="Acceso rápido al catálogo"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="relative z-10 flex h-full w-12 flex-col items-center justify-center gap-5 border-l border-white/15 bg-[#155bd6] py-8 text-white shadow-2xl shadow-[#155bd6]/25 transition-colors hover:bg-[#0f4fbd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:w-14"
        aria-expanded={isOpen}
        aria-controls="quick-access-panel"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.38em] [writing-mode:vertical-rl]"
          style={{ fontFamily: "Barlow Condensed, sans-serif" }}
        >
          Explorar
        </span>
        {isOpen ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
      </button>

      <div
        id="quick-access-panel"
        className={`absolute right-12 top-0 h-screen w-[min(36rem,calc(100vw-3rem))] overflow-y-auto border-l border-white/15 bg-[#155bd6] shadow-2xl shadow-[#155bd6]/30 transition-all duration-300 sm:right-14 ${
          isOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-6 opacity-0 pointer-events-none"
        }`}
      >
        <div className="grid min-h-full grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <div className="flex min-h-full flex-col border-r border-white/15 p-3 sm:p-6">
            <div className="px-3 pb-8 pt-5 sm:pt-8">
              <span
                className="text-[10px] uppercase tracking-[0.3em] text-white/65"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                Navegación rápida
              </span>
              <h2
                className="mt-1 text-xl text-white"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                EXPLORÁ LA TIENDA
              </h2>
            </div>

            <nav className="my-auto space-y-2" aria-label="Secciones del catálogo">
              {MENU_SECTIONS.map((section) => {
                const Icon = section.icon;
                const active = activeSection === section.id;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onMouseEnter={() => setActiveSection(section.id)}
                    onFocus={() => setActiveSection(section.id)}
                    onClick={() => setActiveSection(section.id)}
                    className={`group flex w-full items-center gap-3 border-l-2 px-3 py-4 text-left transition-all ${
                      active
                        ? "border-white bg-white/15"
                        : "border-transparent hover:border-white/50 hover:bg-white/[0.08]"
                    }`}
                    aria-current={active ? "true" : undefined}
                  >
                    <Icon
                      size={18}
                      className={active ? "text-white" : "text-white/55"}
                    />
                    <span className="min-w-0 flex-1">
                      <span
                        className="block text-sm font-semibold uppercase tracking-wider text-white"
                        style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                      >
                        {section.label}
                      </span>
                      <span className="block truncate text-[11px] text-white/55">
                        {section.description}
                      </span>
                    </span>
                    <ChevronRight
                      size={15}
                      className={`transition-transform ${
                        active ? "translate-x-0 text-white" : "-translate-x-1 text-white/40"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            <p
              className="px-3 pb-5 pt-8 text-[10px] uppercase tracking-[0.24em] text-white/40"
              style={{ fontFamily: "Barlow Condensed, sans-serif" }}
            >
              YOUNGSHARK · Performance store
            </p>
          </div>

          <div className="relative flex min-h-full items-center overflow-hidden p-4 sm:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/15 blur-3xl" />
            <div className="relative w-full">
              <div className="mb-5 flex items-center gap-3 border-b border-white/15 pb-4">
                <Shirt size={17} className="text-white" />
                <div>
                  <p
                    className="text-sm font-semibold uppercase tracking-[0.18em] text-white"
                    style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                  >
                    {currentSection.label}
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/55">Ver colección</p>
                </div>
              </div>

              <ul className="space-y-1">
                {currentSection.items.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => {
                        goToProducts();
                        setIsOpen(false);
                      }}
                      className="group/item flex w-full items-center justify-between py-2 text-left text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                    >
                      <span>{item}</span>
                      <ChevronRight
                        size={14}
                        className="translate-x-1 text-white opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
