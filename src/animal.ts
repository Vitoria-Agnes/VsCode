export abstract class animal {
    
    nome: string
    idade: number
    expVida: number

      constructor(

        nome: string,
        idade: number,
        expVida: number
        ){
        this.nome= nome
        this.idade = idade
        this.expVida = expVida
        }


       Som(){
        console.log (`Esse animal emite o Som:`)
    }
        abstract emitirSom(): void
        abstract locomocao(): void
        abstract exibirDados(): void
    }