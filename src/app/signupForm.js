import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./alertMessage.js";

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
        //close Signup Modal and refresh
        const signupModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()
        
        showMessage('Welcome ' + userCredentials.user.email)
    } catch (error) {
        console.log(error.code, error.message)

        if (error.code === 'auth/email-already-in-use'){
            showMessage('El correo ingresado ya fue registrado antes', 'error')
        }
        else if (error.code === 'auth/invalid-email'){
            showMessage('Correo Invalido', 'error')
        }
        else if (error.code === 'auth/weak-password'){
            showMessage('Contraseña es debil', 'error')
        }
        else{showMessage('Algo salio Mal', 'error')}


    }
})