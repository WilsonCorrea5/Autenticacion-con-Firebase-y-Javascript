import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { auth } from "./firebase.js"
const signinForm = document.querySelector('#login-form')

signinForm.addEventListener('submit', async e =>{
    e.preventDefault()

    const email = signinForm['login-email'].value;
    const password = signinForm['login-password'].value; 
    
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)
        //close Sigin Modal and refresh
        const signinModal = document.querySelector('#signinModal')
        const modal = bootstrap.Modal.getInstance(signinModal)
        modal.hide()
        
    } catch (error) {
        console.log(error)
    }
})