class Pessoa {

    constructor() {
        this.nome = "Ricardo";
    }

    hello() {
        return "Hello Pessoa!";
    }

}

function objetos4() {
    var pessoa = new Pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objetos4();