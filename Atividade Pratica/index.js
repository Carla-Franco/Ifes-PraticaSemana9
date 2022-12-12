const prompt = require('prompt-sync')();

var num1 = parseFloat(prompt("Digite o número 1: "));
var num2 = parseFloat(prompt("Digite o número 2: "));
var num3 = parseFloat(prompt("Digite o número 3: "));
var soma = num1 + num2 + num3;
console.log("A soma é: ", soma);
var media = soma / 3;
console.log("A média é: ", media);

