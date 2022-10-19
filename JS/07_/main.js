// Objetos
let pessoa = {
    firstName: 'Irmão do',
    lastName: 'Jorel',
    idade: 10,
    corDosOlhos: 'preto',
    hobbies: ['música', 'filmes', 'esportes'],
    endereco: {
        rua: 'Rua do bobos',
        numero: 0,
        cidade: 'São Paulo',
        estado: 'SP',
    },
};
console.log(pessoa);
console.log(pessoa.firstName);
console.log(pessoa.lastName, pessoa.idade);
console.log(pessoa.hobbies[1]);
console.log(pessoa.endereco.cidade);

// Atribuição via desestruturação
console.clear();
const {
    firstName,
    lastName,
    endereco: { cidade },
} = pessoa;
console.log(`${firstName} ${lastName} é de ${cidade}`);
