// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCirw0JS5ItSSwGi7IpOu6tU9wvxPQIO9k",
  authDomain: "project-s-cfba1.firebaseapp.com",
  projectId: "project-s-cfba1",
  storageBucket: "project-s-cfba1.appspot.com",
  messagingSenderId: "233096286530",
  appId: "1:233096286530:web:622d5fda1797f5d4e438db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// apiKey: process.env.REACT_APP_apiKey,
// authDomain: process.env.REACT_APP_authDomain,
// projectId: process.env.REACT_APP_projectId,
// storageBucket: process.env.REACT_APP_storageBucket,
// messagingSenderId: process.env.REACT_APP_messagingSenderId,
// appId: process.env.REACT_APP_appId
export default app;
