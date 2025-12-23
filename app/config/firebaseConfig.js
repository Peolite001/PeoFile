// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3shECHw8j0lZ5wV82I9GBj3rBDX2I07A",
  authDomain: "peofile-f925a.firebaseapp.com",
  projectId: "peofile-f925a",
  storageBucket: "peofile-f925a.firebasestorage.app",
  messagingSenderId: "1088174837153",
  appId: "1:1088174837153:web:38f44e54d928f3478d8fe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };