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

  samChoice?: boolean;
  novelty?: boolean;

  samOpinion?: string;

  pros?: string[];
  cons?: string[];

  rating?: number;

  createdAt: Timestamp | null;
  updatedAt: Timestamp | null;
}

export type ProductInput = Omit<
  Product,
  "id" | "createdAt" | "updatedAt"
>;