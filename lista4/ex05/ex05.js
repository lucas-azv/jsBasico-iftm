n = parseInt(prompt("informe quantas pessoas irão ao passeio:", "5"))
somaIdades = 0
nomes = [n]

document.write(`<h1>Lista de alunos: </h1>`)

for(i=0; i<n; i++){
    aluno = prompt(`insira o nome do ${i+1}o aluno`,`fulano ${i+1}`);
    document.write(`<p>${aluno}</p>`);
    nomes.push(aluno);
}

document.write(`<hr></hr>`)

for(i = 0; i < n; i++){
    idades = parseInt(prompt(`insira a idade do ${i+1}o aluno`, `${i+15}`));
    somaIdades += idades;
    mediaIdades = somaIdades/i+1;
}

indiceSorteado = parseInt(Math.random()*nomes.length)
nomeSorteado = nomes[indiceSorteado]


document.write(`<p>Média de idades: ${mediaIdades} anos</p>`)
document.write(`<p>Aluno sorteado: ${nomeSorteado}</p>`)




