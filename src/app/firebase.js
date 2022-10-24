// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMIupNbLdCOoG2L57Y953nfWAzHsvAm-s",
  authDomain: "fir-auth-ad047.firebaseapp.com",
  projectId: "fir-auth-ad047",
  storageBucket: "fir-auth-ad047.appspot.com",
  messagingSenderId: "458970994405",
  appId: "1:458970994405:web:091fd49fdb8783d78da60c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
