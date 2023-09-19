function mostrarResultado(event){
    nota1 = parseFloat(document.getElementById("nota1Bim").value)
    nota2 = parseFloat(document.getElementById("nota2Bim").value)

    soma = nota1 + nota2

    if(soma >= 60.0){
        alert("Aprovado")
    } else{
        alert("Reprovado")
    }
}