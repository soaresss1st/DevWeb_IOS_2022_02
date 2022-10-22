//criação da classe carro
class carro {
    constructor(nome,ano,rodas,porta,janelas){
        this.nome = nome;
        this.ano = ano;
        this.porta = porta;
        this.janelas = janelas
    }

    //Método que retorna a idade do meu carro
    idadeCarro(anoAtual){
        return anoAtual - this.ano;
    }
}

//Criação de objetos que herda as caracteristicas da classe carro
let carro1 = new carro("Celta", 2001, 2, 4)
let carro2 = new carro("Veloster", 2016, 3, 4)

//Apresentar os objetos no console.log
console.log(carro1)
console.log(carro1.nome)

ver exemplo = carro1.ano - 
ver exemplo