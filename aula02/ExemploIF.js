const leia = require('readline-sync') // require= Acessando


let idade

// Entrada de dados
console.log("Digite sua idade: ")
idade = leia.questionInt()

// Processando -IF
if(idade < 18){
    console.log("Você não pode dirigir!")
}
else {
    console.log("\nVocê pode dirigir!")
}

