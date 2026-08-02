import type { Timestamp } from "firebase/firestore";

export interface Product {

  id: string;


  title: string;

  category: string;


  type?:
    | "product"
    | "restaurant"
    | "hotel"
    | "experience";



  shortDescription: string;

  description: string;



  image: string;



  affiliateLink?: string;



  price?: string;



  coupon?: string;


  benefit?: string;



  location?: string;



  featured: boolean;



  samChoice?: boolean;


  novelty?: boolean;



  samOpinion?: string;



  pros?: string[];


  cons?: string[];



  createdAt: Timestamp | null;


  updatedAt: Timestamp | null;

}



export type ProductInput = Omit<
  Product,
  "id" | "createdAt" | "updatedAt"
>;