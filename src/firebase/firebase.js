import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT7c71oERHUVrmzom7wTP4ggr8TuoUR-U",
  authDomain: "dog-skin-disease.firebaseapp.com",
  projectId: "dog-skin-disease",
  storageBucket: "dog-skin-disease.firebasestorage.app",
  messagingSenderId: "644397746448",
  appId: "1:644397746448:web:c1afefd725f0dbecb77d95",
  measurementId: "G-CYR1FJPMQ1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };