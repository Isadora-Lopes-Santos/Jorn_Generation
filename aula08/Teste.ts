import { logar, somar, transformarNumeroCinco } from "./Exemplo1"

// CHAMADA das funções
let valor: number = somar(10, 10)
let valor1: number = somar(6,11)

//let login: string | number = "irineu@hotmail.com"

console.log("O resultado da soma é: " + valor)
console.log("O resultado da soma é: " + valor1)

//logar(login)
logar("irineu@gmail.com")

let NumeroEmTexto: string = transformarNumeroCinco(8)
console.log(NumeroEmTexto)
