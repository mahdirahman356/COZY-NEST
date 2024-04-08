// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmyg4abHHiy1NQtk66PYP3JVG7IsucuIE",
  authDomain: "cozynest-project.firebaseapp.com",
  projectId: "cozynest-project",
  storageBucket: "cozynest-project.appspot.com",
  messagingSenderId: "606398532343",
  appId: "1:606398532343:web:1ceb9d788038270bdf61f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth