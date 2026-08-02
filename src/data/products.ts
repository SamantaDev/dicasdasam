import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: "1",
    title: "Air Fryer Philips Walita",
    category: "Cozinha",
    shortDescription: "Uma das melhores Air Fryers do mercado.",
    description: "Uma das melhores Air Fryers do mercado.",
    image: "/images/products/airfryer.jpg",
    affiliateLink: "https://google.com",
    featured: true,
    createdAt: null,
    updatedAt: null,
  },

  {
    id: "2",
    title: "Kindle Paperwhite",
    category: "Tecnologia",
    shortDescription: "Ideal para quem ama leitura.",
    description: "Ideal para quem ama leitura.",
    image: "/images/products/kindle.jpg",
    affiliateLink: "https://google.com",
    featured: true,
    createdAt: null,
    updatedAt: null,
  },

  {
    id: "3",
    title: "Fone Bluetooth JBL",
    category: "Tecnologia",
    shortDescription: "Excelente qualidade de som.",
    description: "Excelente qualidade de som.",
    image: "/images/products/fone.jpg",
    affiliateLink: "https://google.com",
    featured: false,
    createdAt: null,
    updatedAt: null,
  },
];