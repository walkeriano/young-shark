import { ArrowLeft, Heart, LogOut, PackageCheck, ShoppingBag, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import ActiveProductCard from "../../components/profile/ActiveProductCard/ActiveProductCard";
import OrderCard from "../../components/profile/OrderCard/OrderCard";
import ProfileSummary from "../../components/profile/ProfileSummary/ProfileSummary";
import SharkLogo from "../../components/shared/SharkLogo/SharkLogo";
import { ACTIVE_PRODUCTS, PROFILE_ORDERS } from "../../data/profile";

const STATS = [
  { label: "Compras realizadas", value: "08", icon: ShoppingBag },
  { label: "Pedidos activos", value: "02", icon: Truck },
  { label: "Productos recibidos", value: "11", icon: PackageCheck },
  { label: "Favoritos", value: "06", icon: Heart },
];

export default function UserProfile() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#101010]">
      <header className="border-b border-black/8 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
          <Link to="/" aria-label="Ir al inicio">
            <SharkLogo />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-black/50 transition-colors hover:text-[#155bd6] sm:flex"
            >
              <ArrowLeft size={15} /> Volver a la tienda
            </Link>
            <button
              type="button"
              aria-label="Cerrar sesión"
              className="flex h-10 w-10 items-center justify-center border border-black/10 text-black/45 transition-colors hover:border-[#155bd6] hover:text-[#155bd6]"
            >
              <LogOut size={17} />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#155bd6]">
              Mi cuenta
            </span>
            <h1
              className="mt-2 text-5xl leading-none sm:text-6xl"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              PERFIL DE USUARIO
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/45">
              Gestioná tus datos y consultá el estado de todas tus compras desde un solo lugar.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-4 border border-black/8 bg-white p-5">
                <div className="flex h-11 w-11 items-center justify-center bg-[#155bd6]/10 text-[#155bd6]">
                  <Icon size={19} />
                </div>
                <div>
                  <p
                    className="text-2xl leading-none"
                    style={{ fontFamily: "Anton, sans-serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-black/35">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <ProfileSummary />

          <div className="min-w-0 space-y-12">
            <section>
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#155bd6]">
                    En seguimiento
                  </span>
                  <h2
                    className="mt-1 text-3xl"
                    style={{ fontFamily: "Anton, sans-serif" }}
                  >
                    PEDIDOS ACTUALES
                  </h2>
                </div>
                <span className="text-xs text-black/35">{PROFILE_ORDERS.length} pedidos</span>
              </div>
              <div className="space-y-4">
                {PROFILE_ORDERS.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            </section>

            <section>
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#155bd6]">
                    Tu colección
                  </span>
                  <h2
                    className="mt-1 text-3xl"
                    style={{ fontFamily: "Anton, sans-serif" }}
                  >
                    MIS PRODUCTOS
                  </h2>
                </div>
                <button type="button" className="text-xs font-semibold text-[#155bd6]">
                  Ver historial
                </button>
              </div>
              <div className="grid gap-4 xl:grid-cols-2">
                {ACTIVE_PRODUCTS.map((product) => (
                  <ActiveProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
