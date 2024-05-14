// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAya6agj0AwKXyQ9LwUXIMsznmuyyBAF9g",

  authDomain: "blog-project-a67dd.firebaseapp.com",

  projectId: "blog-project-a67dd",

  storageBucket: "blog-project-a67dd.appspot.com",

  messagingSenderId: "474074335492",

  appId: "1:474074335492:web:c369e266ab6e8ba294a851",

  measurementId: "G-6J591DRZTW",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}