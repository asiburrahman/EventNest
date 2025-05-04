// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//don't do this in project
const firebaseConfig = {
  apiKey: "AIzaSyDST4AIMlvbzaLV69DRdMwpVSbv54pTHwA",
  authDomain: "react-password-auth.firebaseapp.com",
  projectId: "react-password-auth",
  storageBucket: "react-password-auth.firebasestorage.app",
  messagingSenderId: "520521128884",
  appId: "1:520521128884:web:601f623b718f1b0746b0e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);