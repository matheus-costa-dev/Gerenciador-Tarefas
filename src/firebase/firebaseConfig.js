// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP0cK0memG3r8VMkEH2bLXtIfWI-ZL2zo",
  authDomain: "gerenciador-tarefas-4a500.firebaseapp.com",
  projectId: "gerenciador-tarefas-4a500",
  storageBucket: "gerenciador-tarefas-4a500.firebasestorage.app",
  messagingSenderId: "824714272575",
  appId: "1:824714272575:web:2a65939847b62a4ecbbd8a",
  measurementId: "G-HYM4QPJ4KY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)