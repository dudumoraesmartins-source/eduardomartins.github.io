function livro (nome, ano, autor) {
    nome = nome.toUpperCase();
    lancamento = 2050 - ano;
    /*console.log(nome, lancamento, autor);*/
    const frase = nome + " por " + autor;
    const objeto = {
        nome: nome,
        ano: ano,
        autor: autor,
        frase,
    };
    return objeto;
}


const retorno = livro('eduardo', 1995, 'dudu');

/*const nome_ = retorno.nome;
const ano_ = retorno.ano;
const autor_ = retorno.autor;*/

/*console.log(nome_ + ' por ' + autor_);*/

console.log(retorno);
console.log(retorno.frase);

/*var variavel = livro.nome + ' por ' + livro.autor;
console.log(variavel)*/




/* outra forma de fazer */

function livro_2 (nome, ano, autor) {
    return {
        nome: nome.toUpperCase(),
        ano: 2050 - ano,
        frase: nome + " por " + autor,
    };
}


const retorno_2 = livro_2('eduardo', 1995, 'dudu');
console.log(retorno_2);