import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./alertMessage.js"

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
        //las lineas de arriba (17 y 18) se pueden hacer en una sola linea de codigo asi.
        //const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide()
        showMessage('Bienvenido '+ credentials.user.email)
        
    } catch (error) {
        if (error.code === 'auth/user-not-found'){
            showMessage('El correo ingresado no esta registrado', 'error')
        }
        else if (error.code === 'auth/wrong-password'){
            showMessage('Contraseña incorrecta', 'error')
        }
        else{showMessage('Algo salio Mal', 'error')}
        
    }
})