import {
  ShoppingBag,
  Plane,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react";

export interface Category {
  id: number;
  title: string;
  description: string;
  icon: typeof ShoppingBag;
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Produtos",
    icon: ShoppingBag,
    description: "As melhores compras da internet.",
  },
  {
    id: 2,
    title: "Viagens",
    icon: Plane,
    description: "Destinos e experiências inesquecíveis.",
  },
  {
    id: 3,
    title: "Gastronomia",
    icon: UtensilsCrossed,
    description: "Lugares que realmente valem a visita.",
  },
  {
    id: 4,
    title: "Lifestyle",
    icon: Sparkles,
    description: "Tudo para deixar sua rotina mais leve.",
  },
];