function testeArray() {
    var numeros = [1, 2, 3];
    numeros.push(4);
    numeros.push(5);
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }

    for (let i in numeros) {
        console.log(numeros[i]);
    }

    for (let numero of numeros) {
        console.log(numero);
    }
}

testeArray();