var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var resultSpan = document.getElementById('result');

function add() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
    let result = num1 + num2;
    resultSpan.textContent = result;
    } else {
    resultSpan.textContent = "Entradas inválidas";
    }
}
function sub() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
    let result = num1 - num2;
    resultSpan.textContent = result;
    } else {
    resultSpan.textContent = "Entradas inválidas";
    }
}
function mult() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
    let result = num1 * num2;
    resultSpan.textContent = result;
    } else {
    resultSpan.textContent = "Entradas inválidas";
    }
}
function divi() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
    let result = num1 / num2;
    resultSpan.textContent = result;
    } else {
    resultSpan.textContent = "Entradas inválidas";
    }
}