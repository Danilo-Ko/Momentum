const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function sayHello (username){
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${username}`;
}

function logInSubmit (event) {
    event.preventDefault();
    const username = logInInput.value;
    localStorage.setItem("username", username);
    logInForm.classList.add("hidden");
    sayHello (username);
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    logInForm.classList.remove("hidden");
    logInForm.addEventListener("submit", logInSubmit);
}else{
    sayHello (savedUsername);
}
