function mostrarResultado(event){
    nota1 = parseFloat(document.getElementById("nota1Bim").value)
    nota2 = parseFloat(document.getElementById("nota2Bim").value)

    soma = nota1 + nota2

    if(soma >= 60.0){
        alert(`Aprovado`)
        alert(`Sua nota final foi de ${soma} pontos`)
    } else{
        alert(`Reprovado`)
        alert(`Sua nota final foi de ${soma} pontos`)
        alert(`Faltaram ${60.0 - soma} pontos`)
    }
}