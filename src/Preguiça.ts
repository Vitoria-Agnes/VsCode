import { animal } from "./Animal";

export class Preguiça extends animal{
    emitirSom() {
        console.log("A preguiça emite o som : zzzzz .");
    }
    locomocao() {
        console.log("O Bicho preguiça não corre, porque tem preguiça.");
    }
    exibirDados() {
        console.log(`O nome da preguiça é:
        ${this.nome},idade é:${this.idade}`);
} 
}