const prompt = require('prompt-sync')();

var modelo_carro = prompt("Digite o modelo do carro: ");
var num_km = parseFloat(prompt("Digite o KM percorrido: "));
var litros_combustivel = parseFloat(prompt("Digite quantos litros de combustível foi gasto: "));
console.log("O consumo do carro: ", modelo_carro, " é de: ", num_km / litros_combustivel, " km/litro.");