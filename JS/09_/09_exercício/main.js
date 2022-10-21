var valores = [17, 43, 8, 4, 97, 56, 29, 69];

valores.forEach(minhaFuncao);

function minhaFuncao(valor) {
    //console.log(valor)
    if (valor % 2 == 0) {
        console.log(`Esse é par ${valor}`);
    } else
    
        console.log(`Esse é ímpar ${valor}`);
}