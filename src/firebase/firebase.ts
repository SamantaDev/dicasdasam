import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQDEX2AcBeSuFLAKvmDzfAfkHE4fgr7uc",
  authDomain: "dicas-da-sam.firebaseapp.com",
  projectId: "dicas-da-sam",
  storageBucket: "dicas-da-sam.firebasestorage.app",
  messagingSenderId: "960407100440",
  appId: "1:960407100440:web:1cc2b6acad49557563b76d",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
