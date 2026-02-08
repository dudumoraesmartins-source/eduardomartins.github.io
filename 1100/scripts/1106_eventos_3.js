function seguir(event) {
    const coordenadas = {
        x: event.x,
        y: event.y,
    }
    const circulo = document.querySelector('.circulo')
    //console.log(circulo);
    circulo.style.top = coordenadas.y + "px";
    circulo.style.left = coordenadas.x + "px";
}

window.addEventListener("mousemove", seguir);