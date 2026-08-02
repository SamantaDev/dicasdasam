import type { Timestamp } from "firebase/firestore";

export interface Product {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  affiliateLink: string;
  featured: boolean;
  createdAt: Timestamp | null;
  updatedAt: Timestamp | null;
}

export type ProductInput = Omit<Product, "id" | "createdAt" | "updatedAt">;
