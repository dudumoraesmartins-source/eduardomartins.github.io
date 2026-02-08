const element = document.querySelector("button");

function somar() {
    /* se a minha div contiver um ID usar sempre "#nome_do_id" com # e " aspas duplas */
    const div = document.querySelector("#numero");
    const total = Number(div.innerText) + 1;
    //console.log(total);
    if (total < 10) { 
        div.innerText = total;
    } else {
        console.log('Não é possível adicionar mais!');
    }
}

if (element) {
    element.addEventListener('click', somar);
}