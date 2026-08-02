import type { Timestamp } from "firebase/firestore";

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
  description: string;
  order: number;
  active: boolean;
  createdAt: Timestamp | null;
  updatedAt: Timestamp | null;
}

export type CategoryInput = Omit<Category, "id" | "createdAt" | "updatedAt">;
