const prompt = require('prompt-sync')();

var nome = prompt("Digite seu nome: ");
var sal_bruto = parseFloat(prompt("Digite seu salário bruto: "));
var irrf = sal_bruto * 0.10;
var sal_liquido = sal_bruto - irrf;
console.log("Salário líquido: R$", sal_liquido);