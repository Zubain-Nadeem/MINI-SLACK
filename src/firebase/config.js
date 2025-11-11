// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 👇 yeh config tumhare Firebase Console se milega
const firebaseConfig = {
  apiKey: "AIzaSyCDkol_AKZeit9nERupP4NoR7sxIJqVS04",
  authDomain: "mini-slack-779fb.firebaseapp.com",
  projectId: "mini-slack-779fb",
  storageBucket: "mini-slack-779fb.firebasestorage.app",
  messagingSenderId: "754521938469",
  appId: "1:754521938469:web:609e57dc8e8de642513dcc",
  measurementId: "G-4CG25QEFZ2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
