// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRiEJnAvSbfmSKozZsd2OH2haoWk0oCkQ",
  authDomain: "getec-repo.firebaseapp.com",
  projectId: "getec-repo",
  storageBucket: "getec-repo.appspot.com",
  messagingSenderId: "188219353807",
  appId: "1:188219353807:web:8768de044401b52364a5ba",
  measurementId: "G-LCTXNDPPQR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
