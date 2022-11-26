// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCg5vOXyxJuKkKxFT7KMj4xP3Zmwtn9Us",
  authDomain: "assignment-12-d1455.firebaseapp.com",
  projectId: "assignment-12-d1455",
  storageBucket: "assignment-12-d1455.appspot.com",
  messagingSenderId: "184620142728",
  appId: "1:184620142728:web:eb3bea6d67bfc51a6f0f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// apiKey: process.env.REACT_APP_apiKey,
// authDomain: process.env.REACT_APP_authDomain,
// projectId: process.env.REACT_APP_projectId,
// storageBucket: process.env.REACT_APP_storageBucket,
// messagingSenderId: process.env.REACT_APP_messagingSenderId,
// appId: process.env.REACT_APP_appId