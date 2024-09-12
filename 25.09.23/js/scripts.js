document.getElementById("votosCand1").innerHTML = 0;
document.getElementById("votosCand2").innerHTML = 0;
document.getElementById("votosCand3").innerHTML = 0;
document.getElementById("votosCand4").innerHTML = 0;

let vetorVotos = [0, 0, 0, 0];
let candidato1 = document.getElementById("candidato1");
let candidato2 = document.getElementById("candidato2");
let candidato3 = document.getElementById("candidato3");
let candidato4 = document.getElementById("candidato4");

candidato1.addEventListener("click", function() { addVotosCandidato(1); });
candidato2.addEventListener("click", function() { addVotosCandidato(2); });
candidato3.addEventListener("click", function() { addVotosCandidato(3); });
candidato4.addEventListener("click", function() { addVotosCandidato(4); });

function addVotosCandidato(nroCandidato) {
    vetorVotos[nroCandidato - 1]++;
    document.getElementById(`votosCand${nroCandidato}`).innerHTML = vetorVotos[nroCandidato - 1];
}
