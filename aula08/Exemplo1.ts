// DECLARÇÃO da função
export function somar(a:number, b:number): number {
    // Lógica da function
    let resultado: number = a + b  // 2 + 2 => resultado = 4

    return resultado
}

export function logar(usuario: number | string): void{ // | => Pipe / || => ou

    if (typeof(usuario) === "number" )// typeof => tipo de objeto
        console.log("\nVocê está acessando o Insta pelo seu celular");
    else
        console.log("\nVocê está acessando o Insta pelo seu E-mail");
}
/*

 = : atribuição
 == : igualdade => 5 é igual a '5'
 === : identico => 5 é igual a '5' e eles tem o mesmo tipo?

*/

export function transformarNumeroCinco(valor: number): string{
    let texto: string

    if(valor === 5){
        texto = "Valor digitado é cinco"
    } else {
        texto = "Você digitou um número diferente de cinco"
    }
    return texto

}