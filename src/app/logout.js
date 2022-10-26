import { signOut } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./alertMessage.js"

const logout = document.querySelector('#logout')

logout.addEventListener('click', async () => {
    await signOut(auth)
    showMessage('Sesion Finalizada')
    console.log('Sesion finalizada')
})