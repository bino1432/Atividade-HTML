const temp = require('./Exercicio3')

const farenheit = temp.CforF(30)
const kevin = temp.FforK(65)
const Celsius = temp.KforC(300)

console.log("a temperatura de Celsius para farenheit é ", farenheit)
console.log("a temperatura de farenheit para Kelvin é ", kevin)
console.log("a temperatura de Kelvin para Celsius é ", Celsius)