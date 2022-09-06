import { animal } from "./Animal";

export class Cavalo extends animal{
    emitirSom() {
        console.log("O Cavalo emite o som : RIRIRIRIR .");
    }
    locomocao() {
        console.log("O Cavalo corre.");
    }
    exibirDados() {
        console.log(`O nome do Cavalo é: ${this.nome},
        idade ${this.idade} `);
    }
}
