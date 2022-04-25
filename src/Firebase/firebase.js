// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyLIsqOXaj65GaRMtERau4uU7crU2jTSA",
  authDomain: "react-firebase-89d51.firebaseapp.com",
  projectId: "react-firebase-89d51",
  storageBucket: "react-firebase-89d51.appspot.com",
  messagingSenderId: "849054279671",
  appId: "1:849054279671:web:d7da8208301068a799b0f2",
  measurementId: "G-KTT24VCY3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)