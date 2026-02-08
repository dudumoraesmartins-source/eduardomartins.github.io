const nome = "O Senhor dos Anéis";
const ano = 1954;
const autor = "J. R. R. Tolkien";

const nomeFilme = "O Senhor dos Anéis";
const anoFilme = 2001;
const diretorFilme = "Peter Jackson";

const livro = {
    nome: "O Senhor dos Anéis",
    ano: 1954,
    autor: "J. R. R. Tolkien",
    diretor: "Peter Jackson"
};

console.log(livro);

console.log(2026 - livro.ano);

console.log(livro.nome === nome);



const preco = 2.99;
const precoArredondado = 'R$ ' + preco.toFixed();
console.log(precoArredondado);

/*
const texto = document.querySelector("p");
const texto = {
    innerHTML: "Esse texto."
}*/


console.log(autor.length);

/* METODO */
console.log(autor.toUpperCase());
console.log(autor.toLowerCase());

console.log(3);
/* preco.toFixed(); 
retorna string 
preciso passar um number para trocar o tipo*/
console.log(Number(preco.toFixed()) + 3);


const decimal = 122.99;
const total = decimal.toFixed().length.toFixed().length;
console.log(total);