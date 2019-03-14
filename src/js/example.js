import $ from 'jquery';



export function getInputs() {
  var number1 = parseInt($("#input1").val());
  var number2 = parseInt($("#input2").val());
  var operator = $("input:radio[name=operator]:checked").val();
  var array = [number1, number2, operator];
  return array;
}




export function add(num1, num2) {
  return num1 + num2;
}
export function subtract(num1, num2) {
  return num1 - num2;
}
export function multiply(num1, num2) {
  return num1 * num2;
}
export function divide(num1, num2) {
  return num1 / num2;
}

export function math() {
  const array = getInputs();
  const num1 = array[0];
  const num2 = array[1];
  const operator = array[2];
  let total;
  if (operator == "add") {
    total = add(num1, num2);
  } else if (operator == "subtract") {
    total = subtract(num1, num2);
  } else if (operator == "multiply") {
    total = multiply(num1, num2);
  } else if (operator == "divide") {
    total = divide(num1, num2);
  }
  return total;
}
