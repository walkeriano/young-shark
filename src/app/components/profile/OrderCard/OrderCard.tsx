import { Box, ChevronRight, MapPin, Truck } from "lucide-react";
import type { ProfileOrder } from "../../../data/profile";

export default function OrderCard({ order }: { order: ProfileOrder }) {
  return (
    <article className="border border-black/10 bg-white p-5 shadow-sm sm:p-6">
      <header className="flex flex-col justify-between gap-4 border-b border-black/8 pb-5 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="text-lg text-[#101010]"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              PEDIDO {order.id}
            </span>
            <span className="bg-[#155bd6]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#155bd6]">
              {order.status}
            </span>
          </div>
          <p className="mt-1 text-xs text-black/35">Realizado el {order.date}</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#155bd6]"
        >
          Ver detalle <ChevronRight size={15} />
        </button>
      </header>

      <div className="grid gap-6 py-5 md:grid-cols-[1fr_13rem]">
        <div className="flex gap-3 overflow-x-auto">
          {order.products.map((product) => (
            <div key={product.id} className="flex min-w-52 items-center gap-3">
              <img
                src={product.image}
                alt={product.name}
                className="h-20 w-16 shrink-0 bg-[#f1f1ef] object-cover"
              />
              <div className="min-w-0">
                <p className="line-clamp-2 text-sm font-semibold leading-tight text-[#101010]">
                  {product.name}
                </p>
                <p className="mt-2 text-xs text-black/40">
                  Talle {product.size} · Cant. {product.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-black/8 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <span className="text-[10px] uppercase tracking-widest text-black/35">Total</span>
          <p
            className="mt-1 text-2xl text-[#101010]"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            {order.total}
          </p>
        </div>
      </div>

      <div className="border-t border-black/8 pt-5">
        <div className="mb-3 flex items-center justify-between gap-4 text-xs">
          <span className="flex items-center gap-2 font-semibold text-black/65">
            {order.status === "En camino" ? <Truck size={16} /> : <Box size={16} />}
            {order.status}
          </span>
          <span className="flex items-center gap-1.5 text-black/40">
            <MapPin size={14} /> Entrega estimada {order.estimatedDelivery}
          </span>
        </div>
        <div className="h-1.5 overflow-hidden bg-black/8">
          <div
            className="h-full bg-[#155bd6] transition-all"
            style={{ width: `${order.progress}%` }}
          />
        </div>
      </div>
    </article>
  );
}
