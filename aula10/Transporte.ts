export class Transporte { // SUPER classe - classe MÃE
// ATRIBUTO
    private _capacidade: number
    
// Método CONSTRUTOR
    constructor (capacidade: number){
        this._capacidade = capacidade
    }
// Métodos de ACESSOS - GET e SET
    public get capacidade(){
        return this._capacidade
    }

    public set capacidade(NovaCapacidade: number){
        this._capacidade = NovaCapacidade
    }
// Métodos de SUPORTE / AUXILIARES
    public visualizar(): void {
		
		console.log("\n\n****************************************************************");
		console.log("Dados do Meio de Transporte:");
		console.log("****************************************************************");
		console.log("Capacidade (número de passageiros): " + this._capacidade);
	}

}