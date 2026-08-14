import { PRODUCTS } from "./home";

export type OrderStatus = "Preparando" | "En camino" | "Entregado";

export type ProfileOrder = {
  id: string;
  date: string;
  status: OrderStatus;
  progress: number;
  estimatedDelivery: string;
  total: string;
  products: Array<{
    id: number;
    name: string;
    image: string;
    size: string;
    quantity: number;
  }>;
};

export const PROFILE_USER = {
  name: "Matías Rivera",
  email: "matias.rivera@email.com",
  phone: "+51 983 552 696",
  memberSince: "Marzo 2025",
  location: "Lima, Perú",
  avatar:
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop&auto=format",
};

export const ACTIVE_PRODUCTS = [
  {
    ...PRODUCTS[0],
    selectedSize: "M",
    purchasedAt: "12 Jul 2026",
  },
  {
    ...PRODUCTS[3],
    selectedSize: "41",
    purchasedAt: "28 Jun 2026",
  },
  {
    ...PRODUCTS[4],
    selectedSize: "ÚNICA",
    purchasedAt: "03 Jun 2026",
  },
];

export const PROFILE_ORDERS: ProfileOrder[] = [
  {
    id: "YS-20481",
    date: "18 Jul 2026",
    status: "En camino",
    progress: 72,
    estimatedDelivery: "22–23 Jul",
    total: "$15.700",
    products: [
      {
        id: PRODUCTS[1].id,
        name: PRODUCTS[1].name,
        image: PRODUCTS[1].img,
        size: "M",
        quantity: 1,
      },
      {
        id: PRODUCTS[0].id,
        name: PRODUCTS[0].name,
        image: PRODUCTS[0].img,
        size: "L",
        quantity: 1,
      },
    ],
  },
  {
    id: "YS-20466",
    date: "16 Jul 2026",
    status: "Preparando",
    progress: 28,
    estimatedDelivery: "24–25 Jul",
    total: "$9.100",
    products: [
      {
        id: PRODUCTS[5].id,
        name: PRODUCTS[5].name,
        image: PRODUCTS[5].img,
        size: "M",
        quantity: 1,
      },
    ],
  },
];
