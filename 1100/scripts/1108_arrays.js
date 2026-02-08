const lista = ['Eduardo', 'Moraes', 'Martins'];

console.log(lista);

const js = lista[0];
const html = lista[1];
const css = lista[2];

console.log(css);

const body = document.querySelector('body');

/* LET pode ser reatribuído
const não pode, const será sempre uma variável imutável */


for (let index = 0; index < lista.length; index++) {
    const item = lista[index];
    body.innerHTML += '<li>' + lista[index] + '</li>';
    /*console.log("teste " + index);*/
}



const lista_2 = ['Teemo', 'Preta', 'Negao'];

function adicionarBody(item, index) {
    body.innerHTML += "<li>" + item + "</li>";
    //console.log(item, 'no index: ', index);
}

/* todo array, da para usar forEach */
lista_2.forEach(adicionarBody);


/* querySelectorAll
seleciona e suprime todos os elementos
retorna um array like (objeto q se parece com um array
*/
const links = document.querySelectorAll("nav a");
//console.log(links);

function logHref(item) {
    const href = item.href;
    console.log(href);
}

links.forEach(logHref);

console.log(links[links.length - 1]);


const lista_3 = ['Java Script', 'HTML', 'CSS'];
/* REMOVE O ÚLTIMO ELEMENTO E SALVA NA VARIAVEL ultimo */
const ultimo = lista.pop();
/* REMOVE OS PRIMEIROS ELEMENTOS E SALVA NA VARIÁVEL primeiro */
const primeiro = lista.shift();
console.log(ultimo);
console.log(primeiro);
console.log(lista_3);

/* adiciona item no final da lista */
lista.push('Grêmio')
console.log(lista_3);