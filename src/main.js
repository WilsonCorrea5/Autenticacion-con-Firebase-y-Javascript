import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { auth } from './app/firebase.js'
// console.log('Hello world');
import './app/signupForm.js'
import './app/logout.js'

onAuthStateChanged(auth, async (user) => {
    if (user) {
        condition
    } else {
        
    }
});