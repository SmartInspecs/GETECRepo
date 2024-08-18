// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "dotenv/config";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "getec-repo",
  storageBucket: "getec-repo.appspot.com",
  messagingSenderId: "188219353807",
  appId: "1:188219353807:web:8768de044401b52364a5ba",
  measurementId: "G-LCTXNDPPQR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
