// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "travelnest-mern-project.firebaseapp.com",
  projectId: "travelnest-mern-project",
  storageBucket: "travelnest-mern-project.appspot.com",
  messagingSenderId: "869682675641",
  appId: "1:869682675641:web:2a8d6d0630a46d12de8068"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);