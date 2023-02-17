// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE4Ss2viP76evjxH03daDDlSgzSInVGFM",
  authDomain: "webb-235f0.firebaseapp.com",
  databaseURL: "https://webb-235f0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webb-235f0",
  storageBucket: "webb-235f0.appspot.com",
  messagingSenderId: "535953968153",
  appId: "1:535953968153:web:1433aeaf952e8c065a6e88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth()
//exporterar vidare till index.js
export {auth, app, db}