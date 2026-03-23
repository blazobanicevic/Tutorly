const registerBttn = document.getElementById('register');

const loginBttn = document.getElementById('login');

const container = document.getElementById('container');

registerBttn.addEventListener('click', () => {
    container.classList.add("active");
})

loginBttn.addEventListener('click', () => {
    container.classList.remove("active");
})