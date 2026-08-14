import { ArrowUpRight } from "lucide-react";
import type { ACTIVE_PRODUCTS } from "../../../data/profile";

type ActiveProduct = (typeof ACTIVE_PRODUCTS)[number];

export default function ActiveProductCard({ product }: { product: ActiveProduct }) {
  return (
    <article className="group grid grid-cols-[6.5rem_1fr] overflow-hidden border border-black/10 bg-white shadow-sm">
      <div className="overflow-hidden bg-[#f1f1ef]">
        <img
          src={product.img}
          alt={product.name}
          className="h-full min-h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-col justify-between p-4">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[#155bd6]">
            {product.category}
          </p>
          <h3 className="mt-1 truncate text-sm font-semibold text-[#101010]">{product.name}</h3>
          <p className="mt-2 text-xs text-black/40">
            Talle {product.selectedSize} · Comprado {product.purchasedAt}
          </p>
        </div>
        <button
          type="button"
          className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-black/50 transition-colors hover:text-[#155bd6]"
        >
          Ver producto <ArrowUpRight size={14} />
        </button>
      </div>
    </article>
  );
}
