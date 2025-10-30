const leia = require('readline-sync') // require= Acessando


let nota1, nota2, media

nota1 = leia.questionFloat("Digite a primeira nota: ")

nota2 = leia.questionFloat("Digite a segunda nota: ")

// Processamento

media = (nota1 + nota2) / 2

// = -> atribuição
// == -> igualdade  5 == 5

if(media >= 6){
    console.log("\nParabéns, você passou!")
}
else if (media == 5){
    console.log("\nVocê está de exame!")

}
    else {
    console.log("\nVocê reprovou!")
    }
