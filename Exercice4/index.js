const button = document.getElementById("myButton");
const body = document.querySelector("body");

function showMessage() {
  const div = document.createElement("div");
  const message = document.createElement("p");
  message.innerText = "Bonjour, vous avez cliqué sur le bouton !";
  div.appendChild(message);
  body.appendChild(div);
}

button.addEventListener("click", showMessage);
