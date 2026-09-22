// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1XnYb_l6eFr2fRLPPzBaMTTl2WpgO2Dg",
  authDomain: "meuprojetofb-4191c.firebaseapp.com",
  projectId: "meuprojetofb-4191c",
  storageBucket: "meuprojetofb-4191c.firebasestorage.app",
  messagingSenderId: "477794317249",
  appId: "1:477794317249:web:6d0385ae6baadf8c4b3540",
  measurementId: "G-QZ4JJZCLNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);