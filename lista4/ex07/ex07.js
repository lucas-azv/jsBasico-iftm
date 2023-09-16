window.addEventListener('load', () => {
    const numeroSorteado = parseInt(Math.random() * 6) + 1;
    const imagemDado = document.getElementById("imagemDado");

    imagemDado.src = `dado${numeroSorteado}.png`;
});
