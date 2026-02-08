/* um método é uma função dentro de um objeto 
console -> é objeto
log -> é método
console.log();
*/

const curso = {
    /* propriedade */
    nome: 'JavaScript',
    /* isso vira um método */
    completar() {
        console.log('Curso Completo');
    },
};

console.log(curso.nome);

/*completar vira método*/
curso.completar();


const ativar = document.querySelector('.ativar');


/** @param {MouseEvent} event */
function ativarAoClick(event) {
    console.log('Clicou em: ', ativar);
    console.log(event);
    console.log(event.timeStamp);
    console.log(event.x);
    console.log(event.y);
    console.log(event.currentTarget);
}

ativar.addEventListener('click', ativarAoClick);
console.log(ativar);




const botao = document.querySelector('.botao');

function mostrar() {
    const texto = document.querySelector('.texto');
    /*console.log(texto);*/
    texto.classList.toggle("ativar");
}

botao.addEventListener('click', mostrar);


/* window é o objeto que representa a janela do browser e contém o dom.
recebe também eventos globais*/


console.log(window);
console.log(window.innerHeight);
const larguratela = window.innerWidth;


/* RETORNA AS COORDENADAS X E Y DO MOUSE CORRENDO NA TELA */
function coordenadaMouse(event) {
    const coordenadas = {
        x: event.x,
        y: event.y
    }
    console.log(coordenadas);
}
window.addEventListener('mousemove', coordenadaMouse);



/* RETORNA O QUANDO A TELA FOI SCROLADA, PARA BAIXO OU PARA CIMA - NECESSÁRIO ATIVAR
HEIGHT NO BODY */
function scroll() {
    console.log("Usou o Scroll");
    console.log(window.scrollY);
}
window.addEventListener("scroll", scroll);