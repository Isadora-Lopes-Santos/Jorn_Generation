import { IEscritor } from "./IEscritor";
import { IPintor } from "./IPintor";
import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa implements IEscritor, IPintor{

// Atributos

//Método construtor
    constructor(nome: string){
        super(nome)
    }

//Metodos de acesso


//Métodos auxiliares
    public saudacao(): void {
        console.log("Olá, meu nome é ")
    }
    public escrever(): void {
        console.log("Escrevendo com o computador...");
    }
    public pintar(): void {
        console.log("Estou pintando...");
    }

}