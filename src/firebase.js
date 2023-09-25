import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb5XLCpbSqDQfXCHjjAXT5kxviPjQdk94",
  authDomain: "chat-final-a5067.firebaseapp.com",
  projectId: "chat-final-a5067",
  storageBucket: "chat-final-a5067.appspot.com",
  messagingSenderId: "442645628275",
  appId: "1:442645628275:web:092a56a78d198678a0b106",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
