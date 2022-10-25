const loggedOut = document.querySelectorAll('.logged-out')
const loggedin = document.querySelectorAll('.logged-in')

console.log(loggedOut, loggedin);

export const loginCheck = user => {

    if (user) {
        loggedOut.forEach(link => link.style.display = 'none')
        loggedin.forEach(link => link.style.display = 'block')
    } else {
        loggedOut.forEach(link => link.style.display = 'block')
        loggedin.forEach(link => link.style.display = 'none')
    }

}

