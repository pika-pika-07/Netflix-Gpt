// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD6m97sYgDMZqjUTbU6ykOYKGAI333jrU",
  authDomain: "netflixgpt-4aeee.firebaseapp.com",
  projectId: "netflixgpt-4aeee",
  storageBucket: "netflixgpt-4aeee.appspot.com",
  messagingSenderId: "34559260451",
  appId: "1:34559260451:web:19720cef3101745b87be96",
  measurementId: "G-DTGHW9N8QS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
