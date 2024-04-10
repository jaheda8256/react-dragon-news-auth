// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb8_cwPdcQjmNEAK3IBHvTyvFniTYgd94",
  authDomain: "react-dragon-news-auth-e31db.firebaseapp.com",
  projectId: "react-dragon-news-auth-e31db",
  storageBucket: "react-dragon-news-auth-e31db.appspot.com",
  messagingSenderId: "188893772686",
  appId: "1:188893772686:web:39c78514ba46d3ec9142df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;