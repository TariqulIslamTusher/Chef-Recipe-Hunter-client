// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_79PEPlQz99vndlbCPX_C8cMUijokTXE",
  authDomain: "tenth-chef-recipe-hunter.firebaseapp.com",
  projectId: "tenth-chef-recipe-hunter",
  storageBucket: "tenth-chef-recipe-hunter.appspot.com",
  messagingSenderId: "806560851280",
  appId: "1:806560851280:web:11de950add33342d59b855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;