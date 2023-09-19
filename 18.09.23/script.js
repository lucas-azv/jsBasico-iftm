personagem = document.getElementById("boy");
mensagem = document.getElementById("msg");

trocarPersonagem('pensativo', 'zzzzzzz')

personagem.addEventListener("mouseover", function () { trocarPersonagem('assustado', 'o que você quer?') });
personagem.addEventListener("mouseout", function () { trocarPersonagem('pensativo', 'zzzzzzz') });
personagem.addEventListener("click", pedirNome);

function trocarPersonagem(tipo, texto) {
    personagem.src = `img/${tipo}.png`;
    mensagem.innerHTML = `${texto}`
}

function pedirNome() {
    nome = prompt("Qual é o seu nome?")

    if (nome === "" || nome === null) {
        trocarPersonagem('nervoso', 'Não me faça perder meu tempo')
    } else {
        trocarPersonagem('alegre', `${nome}, seja bem-vindo`)
        personagem.classList.add("alegre")
    }
}


