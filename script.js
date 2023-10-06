function calculate() {
  let number1 = Number(document.querySelector("#num1").value);
  let number2 = Number(document.querySelector("#num2").value);
  let operator = document.querySelector("#operator").value;
  let res = document.querySelector("#result");
  let result;
  //console.log(number1, number2, operator);
  if (number1 == 0) {
    let text1 = document.querySelector("#text1");
    text1.classList.remove("d-none");
  }
  if (number2 == 0) {
    let text2 = document.querySelector("#text2");
    text2.classList.remove("d-none");
  }
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      break;
  }
  //console.log(result);
  res.value = result;
  //selecting the clear button
  let clearbtn = document.querySelector("#clear-btn");
  //adding eventhandler to clear button
  clearbtn.addEventListener("click", function () {
    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = "";
    res.value = "";
    document.querySelector("#num1").focus();
  });
}
