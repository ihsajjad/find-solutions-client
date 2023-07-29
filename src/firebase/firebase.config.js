// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWVSkp1naSRknNP95QAqdHNEstrmlp2RU",
  authDomain: "find-solutions-47047.firebaseapp.com",
  projectId: "find-solutions-47047",
  storageBucket: "find-solutions-47047.appspot.com",
  messagingSenderId: "159425172503",
  appId: "1:159425172503:web:d8226599599c36acfd7852",
  measurementId: "G-PSM1XNP8W5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
