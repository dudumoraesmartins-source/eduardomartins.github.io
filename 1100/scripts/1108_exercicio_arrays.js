const links = document.querySelectorAll('nav a');

function ativarLink(item) {
    const href = item.href;
    const url = document.location.href;

    console.log(href);
    console.log(url);
    console.log(item);

    if (href === url) {
        item.style.backgroundColor = "black";
        item.style.color = "white";
    }
}

/* a cada linha do seletor links vai lá e executa a função ativar link */
/* da forma como tá escrito, o for each vai executar 3 vezes */
links.forEach(ativarLink);