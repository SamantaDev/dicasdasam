import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import type { Product, ProductInput } from "../types/Product";

const productsCollection = collection(db, "products");

export async function getProducts(): Promise<Product[]> {
  const productsQuery = query(productsCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(productsQuery);

  return snapshot.docs.map((productDocument) => ({
    id: productDocument.id,
    ...(productDocument.data() as Omit<Product, "id">),
  }));
}

export async function getProduct(id: string): Promise<Product | null> {
  const productDocument = await getDoc(doc(db, "products", id));

  if (!productDocument.exists()) {
    return null;
  }

  return {
    id: productDocument.id,
    ...(productDocument.data() as Omit<Product, "id">),
  };
}

export async function createProduct(product: ProductInput): Promise<string> {
  const productDocument = await addDoc(productsCollection, {
    ...product,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return productDocument.id;
}

export async function updateProduct(id: string, product: Partial<ProductInput>): Promise<void> {
  await updateDoc(doc(db, "products", id), {
    ...product,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteProduct(id: string): Promise<void> {
  await deleteDoc(doc(db, "products", id));
}
