const n = parseInt(prompt("Informe quantas pessoas há no grupo", "5"));
let nomes = [];

document.write(`<h1>Ordem de Apresentação</h1>`);

for (let i = 0; i < n; i++) {
    const aluno = prompt(`Insira o nome do ${i + 1}º aluno`, `Fulano ${i + 1}`);
    nomes.push(aluno);
}

const nomesCopia = [...nomes];

for (let i = 0; i < n; i++) {
    const indice = Math.floor(Math.random() * nomesCopia.length);
    const aluno = nomesCopia[indice];
    document.write(`<p>${i + 1}º - ${aluno}</p>`);
    nomesCopia.splice(indice, 1);
}
