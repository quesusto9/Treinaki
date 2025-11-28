const form = document.querySelector('form')
const login = document.getElementById('login')


login.addEventListener('click', abrir)


function abrir() {
    form.classList.toggle('abrir')
}
