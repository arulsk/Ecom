
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIjaCyhjuNojvAKQRP0LOvoRRB681V5Xs",
  authDomain: "eshop-c6ae4.firebaseapp.com",
  projectId: "eshop-c6ae4",
  storageBucket: "eshop-c6ae4.appspot.com",
  messagingSenderId: "584840269200",
  appId: "1:584840269200:web:061ca9bdfab7aef94a7715",
  measurementId: "G-Z21410PYY7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore





