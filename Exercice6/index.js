const displayArea = document.getElementById("display");

function appendToDisplay(number) {
  displayArea.value += number;
}

function clearDisplay() {
  displayArea.value = "";
}

function calculateResult() {  
  if (displayArea.value.indexOf("+") !== -1) {
    let numbers = displayArea.value.split("+");
    let num1 = Number(numbers[0])
    let num2 = Number(numbers[1])
    let resultat = num1 + num2
    displayArea.value = resultat
  } else if (displayArea.value.indexOf("-") !== -1) {
    let numbers = displayArea.value.split("-");
    let num1 = Number(numbers[0])
    let num2 = Number(numbers[1])
    let resultat = num1 - num2
    displayArea.value = resultat
  } else if (displayArea.value.indexOf("*") !== -1) {
    let numbers = displayArea.value.split("*");
    let num1 = Number(numbers[0])
    let num2 = Number(numbers[1])
    let resultat = num1 * num2
    displayArea.value = resultat
  } else if (displayArea.value.indexOf("/") !== -1) {
    let numbers = displayArea.value.split("/");
    let num1 = Number(numbers[0])
    let num2 = Number(numbers[1])
    if (num2 === 0) {
      displayArea.value = "Division by zero is not allowed"
      return
  }
    let resultat = num1 / num2
    displayArea.value = resultat
  }
}
