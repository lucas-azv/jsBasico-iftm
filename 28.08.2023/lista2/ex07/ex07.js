texto = prompt("insira um texto qualquer", "o rato roeu a roupa do rei de roma")
texto = texto.split(" ")

letra = prompt("insira uma letra", "r")
vetFiltrar = []

for(i = 0; i < texto.length; i++){
    primeiraLetra = texto[i].slice(0,1);
    if(primeiraLetra === letra){
        vetFiltrar.push(texto[i]);
    }   
}

for(i = 0; i < vetFiltrar.length; i++){
    document.write(`<p>${vetFiltrar[i]}</p>`);
}