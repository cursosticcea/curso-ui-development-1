

class Aluno {
    constructor(id, nome, idade){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    isMaiorIdade(){
        return this.idade >= 18;
    }
}