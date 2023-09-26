personagem = document.getElementById("boy");
mensagem = document.getElementById("msg");
let alegreTimeout; // Variável para controlar o timeout da classe "alegre"

trocarPersonagem('pensativo', 'zzzzzzz')

personagem.addEventListener("mouseover", function () { trocarPersonagem('assustado', 'o que você quer?') });
personagem.addEventListener("mouseout", function () { trocarPersonagem('pensativo', 'zzzzzzz') });
personagem.addEventListener("click", pedirNome);

function trocarPersonagem(tipo, texto) {
    personagem.src = `img/${tipo}.png`;
    mensagem.innerHTML = `${texto}`;
}

function pedirNome() {
    nome = prompt("Qual é o seu nome?")

    if (nome === "" || nome === null) {
        trocarPersonagem('nervoso', 'Não me faça perder meu tempo');
        personagem.classList.remove("alegre");
        personagem.classList.add("nervoso");
        nervosoTimeout = setTimeout(() => {
            personagem.classList.remove("alegre");
        }, 50000);
    } else {
        clearTimeout(alegreTimeout); // Limpa o timeout anterior, se houver
        trocarPersonagem('alegre', `${nome}, seja bem-vindo`);
        personagem.classList.add("alegre");
        alegreTimeout = setTimeout(() => {
            personagem.classList.remove("alegre");
        }, 50000);
    }
}

personagem.addEventListener("mouseleave", function () {
    personagem.classList.remove("alegre");
    personagem.classList.remove("nervoso");
    clearTimeout(alegreTimeout);
    clearTimeout(nervosoTimeout); // Limpa o timeout ao sair
});
