// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAYESpPHZo-sqr-dAWI-Q5JrnnSaWbHRDU",
  authDomain: "angular-37dcd.firebaseapp.com",
  projectId: "angular-37dcd",
  storageBucket: "angular-37dcd.appspot.com",
  messagingSenderId: "535679939317",
  appId: "1:535679939317:web:3328601bece7306c438bbc",
  measurementId: "G-VEKD5995FL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
