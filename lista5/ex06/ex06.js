function calcular(operacao){
    valor1 = parseFloat(document.getElementById("1stNumb").value);
    valor2 = parseFloat(document.getElementById("2ndNumb").value);

    resultadoOperacao = document.getElementById("resultado");

    if(isNaN(valor1) || isNaN(valor2)){
        alert("Você precisa inserir um valor para prosseguir");
        resultadoOperacao.value = "";
        return;
    }

    if(operacao === '+'){
        resultadoOperacao.value = valor1 + valor2;
    } else if(operacao === '-'){
        resultadoOperacao.value = valor1 - valor2;
    } else if(operacao === '*'){
        resultadoOperacao.value = valor1 * valor2;
    } else if(operacao === '/'){
        if(valor2 == 0){
            alert("insira um número válido para a divisão")
        } else{
            resultadoOperacao.value = valor1 / valor2;
        }
    }
}