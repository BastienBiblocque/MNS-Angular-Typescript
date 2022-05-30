"use strict";
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const button = document.getElementById('button');
const resultat = document.getElementById('resultat');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => { doAction(); });
function doAction() {
    const number1Value = Number(number1 === null || number1 === void 0 ? void 0 : number1.value);
    const number2Value = Number(number2 === null || number2 === void 0 ? void 0 : number2.value);
    resultat.innerHTML = addition(number1Value, number2Value).toString();
}
function addition(a, b) {
    return a + b;
}
