// while
var contador = 1;
while (contador <= 50) {
    console.log(`Valor = ${contador} `);
    contador++;
}

// do-while
var i = 10,
    text = ""
do{
    text = `O número é ${i}\n`;
    i--;
} while (i > 0);
console.log(text);

//for
for( var i = 1; i <= 100; i++) {
    if ( i % 2 == 0)
    console.log(`${i}`);
}