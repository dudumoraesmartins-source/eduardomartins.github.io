// ATIVAR LINKS DO MENU
const links = document.querySelectorAll('.header-menu a');
//console.log(links);


function ativarLink(link) {
    //console.log(link);
    const url = window.location.href;
    // ou const url = location;
    const href = link.href;
    //console.log(window.location.href);
    //if(url === href) {
    if (url.includes(href)) {
        link.classList.add("ativo");
        //console.log(link);
    }
}

links.forEach(ativarLink);


// Ativar Items do Orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
    //console.log(parametro);
}

parametros.forEach(ativarProduto);
//console.log(parametros);


// Perguntas Frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    resposta.classList.toggle("ativa");
    //classList -> Original: <dd id="pergunta3" class="font-2-s cor-9"
    //ativar classList -> Ativado: <dd id="pergunta3" class="font-2-s cor-9 ativa"
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute('aria-expanded', 'true');
    //console.log(pergunta);
    //console.log(controls);
    //console.log(resposta);
}



function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
    //console.log(pergunta);
}

perguntas.forEach(eventosPerguntas);
console.log(perguntas);





// Galeria de Bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");
//console.log(galeria, galeriaContainer);

function trocarImagem(event) {
    const img = event.currentTarget;
    //const footer = document.querySelector('footer');
    const media = window.matchMedia('(min-width: 1000px)').matches;
    //console.log(media);
    if (media) {
        galeriaContainer.prepend(img);
    }
    //console.log(img);
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação
if (window.SimpleAnime) {
    new window.SimpleAnime();
}