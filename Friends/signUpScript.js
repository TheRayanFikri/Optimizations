const submitButton = document.querySelector("#submitButton");
const passwordInput = document.querySelector("#passwordInput");
const confirmPasswordInput = document.querySelector("#confirmPasswordInput");
const errorMessage = document.querySelector("#errorMessage");
const secondErrorMessage = document.querySelector("#secondErrorMessage");
const forbiddenSymbols = [
  "!",
  "@",
  "$",
  "#",
  " ^",
  "%",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  "  ",
  ",",
  " .",
  "*",
];
const usernameInput = document.querySelector("#usernameInput");
const thirdErrorMessage = document.querySelector("#thirdErrorMessage");
passwordInput.addEventListener("blur", (e) => {
  if (e.target.value.length < 6) {
    secondErrorMessage.style.display = "block";
    passwordInput.setAttribute("class", "erroredInput");
    submitButton.setAttribute("disabled", "true");
  } else {
    secondErrorMessage.style.display = "none";
    passwordInput.setAttribute("class", "");
    submitButton.removeAttribute("disabled");
  }
});

confirmPasswordInput.addEventListener("input", (e) => {
  if (e.target.value !== passwordInput.value) {
    errorMessage.style.display = "block";
    confirmPasswordInput.setAttribute("class", "erroredInput");
    submitButton.setAttribute("disabled", "true");
  } else {
    errorMessage.style.display = "none";
    confirmPasswordInput.setAttribute("class", "");
    submitButton.removeAttribute("disabled");
  }
});
usernameInput.addEventListener("input", (e) => {
  if (forbiddenSymbols.every((s) => !usernameInput.value.includes(s))) {
    thirdErrorMessage.style.display = "none";
    usernameInput.setAttribute("class", "");
    usernameInput.setAttribute("class", "goodInput");
    submitButton.setAttribute("disabled", "false");
  } else {
    usernameInput.setAttribute("class", "");
    thirdErrorMessage.style.display = "block";
    usernameInput.setAttribute("class", "erroredInput");
    submitButton.setAttribute("disabled", "true");
  }
});
