import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { auth } from './app/firebase.js'
import { loginCheck } from "./app/loginCheck.js"
// console.log('Hello world');
import './app/signupForm.js'
import './app/logout.js'
import './app/loginCheck.js'

onAuthStateChanged(auth, async (user) => {

    loginCheck(user)
    // if (user) {
    //     loginCheck(user)
    // } else {
        
    // }
});