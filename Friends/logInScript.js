const submitButton = document.querySelector("#submitButton");
const passwordInput = document.querySelector("#passwordInput");
const emailInput = document.querySelector("#emailInput");
const errorMessage = document.querySelector("#errorMessage");

function checkNull() {
  if (passwordInput.value === "" || emailInput.value === "") {
    errorMessage.style.display = "block";
    submitButton.disabled = true;
  }
}

submitButton.addEventListener("click", checkNull);
