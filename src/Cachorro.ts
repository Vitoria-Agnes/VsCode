import { animal } from "./Animal";

export class Cachorro extends animal {
    emitirSom() {
        console.log(" O cachorro emite o som : AUAUAU");
    }
    locomocao() {
        console.log("O cachorro corre");
    }
    exibirDados() {
        console.log(`O nome do cachorro é: ${this.nome},
        idade ${this.idade}`)
    }

    
}