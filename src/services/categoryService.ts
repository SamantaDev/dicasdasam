import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore";

import { db } from "../firebase/firebase";
import type { Category, CategoryInput } from "../types/Category";

const categoriesCollection = collection(db, "categories");

export async function getCategories(): Promise<Category[]> {
  const categoriesQuery = query(categoriesCollection, orderBy("order", "asc"));
  const snapshot = await getDocs(categoriesQuery);

  return snapshot.docs.map((categoryDocument) => ({ id: categoryDocument.id, ...(categoryDocument.data() as Omit<Category, "id">) }));
}

export async function getCategory(id: string): Promise<Category | null> {
  const categoryDocument = await getDoc(doc(db, "categories", id));
  return categoryDocument.exists() ? { id: categoryDocument.id, ...(categoryDocument.data() as Omit<Category, "id">) } : null;
}

export async function createCategory(category: CategoryInput): Promise<string> {
  const categoryDocument = await addDoc(categoriesCollection, { ...category, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
  return categoryDocument.id;
}

export async function updateCategory(id: string, category: Partial<CategoryInput>): Promise<void> {
  await updateDoc(doc(db, "categories", id), { ...category, updatedAt: serverTimestamp() });
}

export async function deleteCategory(id: string): Promise<void> {
  await deleteDoc(doc(db, "categories", id));
}
