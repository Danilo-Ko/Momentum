const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logOutForm = document.querySelector("#logout-form");
const logInScreen = document.querySelector("#screen-lock");

const USERNAME_KEY = "username";
const HIDDEN_KEY = "hidden";

function sayHello (username){
    greeting.classList.remove(HIDDEN_KEY);
    greeting.innerText = `${username}님 \r\n 오늘도 멋진 하루 보내세요!`;
}

function logInSubmit (event) {
    logInScreen.classList.remove(HIDDEN_KEY);
    event.preventDefault();
    const username = logInInput.value;
    logInInput.value = "";
    localStorage.setItem(USERNAME_KEY, username);
    logInForm.classList.add(HIDDEN_KEY);
    logOutForm.classList.remove(HIDDEN_KEY);  
    sayHello (username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    logInForm.classList.remove(HIDDEN_KEY);
    logOutForm.classList.add(HIDDEN_KEY);
    logInForm.addEventListener("submit", logInSubmit);
    logInScreen.classList.add(HIDDEN_KEY);
}else{
    logOutForm.classList.remove(HIDDEN_KEY);
    sayHello (savedUsername);
    logInScreen.classList.remove(HIDDEN_KEY);
}

function logOutSubmit (event) {
    logInScreen.classList.add(HIDDEN_KEY);
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_KEY);
    logOutForm.classList.add(HIDDEN_KEY);
    logInForm.classList.remove(HIDDEN_KEY);
}

logOutForm.addEventListener("click", logOutSubmit);
logInForm.addEventListener("submit", logInSubmit);