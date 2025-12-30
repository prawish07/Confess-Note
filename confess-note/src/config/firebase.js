// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase,set,ref,onValue} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpMV8qKFM8828_joer5UdDbYBjU4R0KZo",
  authDomain: "confess-note-74a9f.firebaseapp.com",
  databaseURL: "https://confess-note-74a9f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "confess-note-74a9f",
  storageBucket: "confess-note-74a9f.firebasestorage.app",
  messagingSenderId: "1049685660270",
  appId: "1:1049685660270:web:95d501ff15c16c4cff0c7f",
  measurementId: "G-XJD7B3VQ99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database=getDatabase(app)
export{database,set,ref,onValue}