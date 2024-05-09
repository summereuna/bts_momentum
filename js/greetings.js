const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const clockScreen = document.querySelector("#clock");
const todoFormScreen = document.querySelector("#todo-form");
const weatherScreen = document.querySelector("#weather");
const dateScreen = document.querySelector("#date");
const settingBtn = document.querySelector("#btn-setting");
const quoteScreen = document.querySelector("#quote-box");
const dDayScreen = document.querySelector("#dDay");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `We purple you ${username}💜`;

  greeting.classList.remove(HIDDEN_CLASSNAME);
  clockScreen.classList.remove(HIDDEN_CLASSNAME);
  todoFormScreen.classList.remove(HIDDEN_CLASSNAME);
  weatherScreen.classList.remove(HIDDEN_CLASSNAME);
  dateScreen.classList.remove(HIDDEN_CLASSNAME);
  settingBtn.classList.remove(HIDDEN_CLASSNAME);
  quoteScreen.classList.remove(HIDDEN_CLASSNAME);
  dDayScreen.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
