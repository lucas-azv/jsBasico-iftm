window.addEventListener('load', () => {
    const numeroSorteado = parseInt(Math.random() * 27) + 1;
    const imagemCarta = document.getElementById("imagemCarta");

    imagemDado.src = `carta${numeroSorteado}.png`;
});