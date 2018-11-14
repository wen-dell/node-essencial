function objetos1() {
    var pessoa = Object();
    pessoa.nome = "Ricardo";
    pessoa.hello = function() {
        return "Hello Pessoa!";
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

function objetos2() {
    var pessoa = {
        nome: 'Ricardo',
        hello: function() {
            return "Hello Pessoa!";
        }
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objetos1();
objetos2();

function Pessoa() {
    this.nome = "Ricardo";
    this.hello = function() {
        return "Hello Pessoa!";
    }
}

function objetos3() {
    var pessoa = new Pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objetos3();