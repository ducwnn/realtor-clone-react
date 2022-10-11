// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGvbMAD78C0Q6shWKFKzXn8oo642G7k74",
  authDomain: "realtor-clone-react-48bdc.firebaseapp.com",
  projectId: "realtor-clone-react-48bdc",
  storageBucket: "realtor-clone-react-48bdc.appspot.com",
  messagingSenderId: "591724096552",
  appId: "1:591724096552:web:fd9bcc5330c9b71bf1191d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();