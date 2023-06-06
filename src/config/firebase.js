// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj_C1QUVIDKDWdyahQUkCk4C3x0qbjWqM",
  authDomain: "compras-1f651.firebaseapp.com",
  projectId: "compras-1f651",
  storageBucket: "compras-1f651.appspot.com",
  messagingSenderId: "794323794678",
  appId: "1:794323794678:web:d949c52eecd83fc5f90ad7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
