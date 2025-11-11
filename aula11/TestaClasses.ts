import { Ciclista } from "./Ciclista"
import { Nadador } from "./Nadador"

export function main (){

    const nadador: Nadador = new Nadador ('Thompson')
    const ciclista: Ciclista = new Ciclista('Israel')
// Instanciando classe abstrata (não vai)
//const atleta: Nadador = new Nadador('Ntalia')

    nadador.aquecer()
    nadador.nadar()
    nadador.visualizar()

    ciclista.aquecer()
    ciclista.pedalar()
    ciclista.visualizar()
}

main()