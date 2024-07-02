// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRiEJnAvSbfmSKozZsd2OH2haoWk0oCkQ",
  authDomain: "getec-repo.firebaseapp.com",
  projectId: "getec-repo",
  storageBucket: "getec-repo.appspot.com",
  messagingSenderId: "188219353807",
  appId: "1:188219353807:web:8768de044401b52364a5ba",
  measurementId: "G-LCTXNDPPQR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
