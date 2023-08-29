texto = prompt("Insira um texto qualquer", "À noite, vovô Kowalsky vê o ímã cair no pé do pinguim queixoso e vovó põe açúcar no chá de tâmaras do jabuti feliz.");
palavras = texto.split(" ");

palavrasOrdenadas = [];

for (i = 0; i < palavras.length; i++) {
    primeiraLetra = palavras[i].slice(0, 1).toLowerCase();
    if (!palavrasOrdenadas[primeiraLetra]) {
        palavrasOrdenadas[primeiraLetra] = [];
    }
    palavrasOrdenadas[primeiraLetra].push(palavras[i]);
}

resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = "";

for (letra in palavrasOrdenadas) {
    resultadoDiv.innerHTML += "<p>" + letra + ": " + palavrasOrdenadas[letra].join(", ") + "</p>";
}

