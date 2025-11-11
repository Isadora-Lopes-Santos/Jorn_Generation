import { Estudante } from "./Estudante";

export function main(){

    const estudante: Estudante = new Estudante('Irineu')

    estudante.visualizar()
    estudante.escrever()

}

main()