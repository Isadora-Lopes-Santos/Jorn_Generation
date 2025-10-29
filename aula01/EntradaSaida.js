// Importando a biblioteca
const leia = require('readline-sync') // require= Acessando

// Declarando variaveis
let nome, distancia 

// Entrada de dados
console.log("Digite o seu nome: ")
nome = leia.question() //numero inteiro

console.log("\nDigite a distância percorrida em sua corrida: ")
distancia = leia.questionFloat() //numero quebrado (com virgula, mas le os sem também)

// Saída de dados
console.log("\nBom dia, " + nome)
console.log("\nA distância percorrida foi de: " + distancia)