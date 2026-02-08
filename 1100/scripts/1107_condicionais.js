/* if (false) {
    console.log('Não executado');
} 

if (true) {
    console.log('Código executado');
} else {
    console.log('Não executado');
}
*/

//const condicao = Boolean("");
const condicao = 0;
// 0 , null, undefined -> sempre retorna false
console.log(Boolean(condicao));


const condicao_1 = document.querySelector("body");
console.log(condicao_1);
console.log(Boolean(condicao_1));

const elemento = document.querySelector("p");
if (elemento) {
    elemento.addEventListener("click");
}

/* VERIFICAR MAIS DE UMA CONDICAO
|| -> OU -> VERDADEIRO OU FALSO E EXECUTA
&& -> E -> TUDO VERDADEIRO PARA EXECUTAR
*/

const elemento_1 = document.querySelector("p");
const elemento_2 = document.querySelector("p");

if (elemento_1 || document.querySelector("body")) {
    console.log("teste");
}

if (elemento_2 && document.querySelector("body")) {
    console.log("teste");
}


/* OPERADORES DE COMPARAÇÃO 
===   -> igual
!==   -> não igual
>
<
>=
<=
*/
console.log('JavaScript' === 'javascript');
console.log('20' !== 20);
console.log(30 !== 20);
document.querySelector('.texto') !== null; 

// comparar números
10 > 5;
20 < 10;
10 >= 10;
20 <= 30;