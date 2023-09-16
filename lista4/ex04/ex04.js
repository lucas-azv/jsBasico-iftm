n = prompt("insira um numero inteiro")
m = prompt("insira outro numero inteiro")

numero = parseInt(Math.random() * n) + 1

if(numero >= m){
    document.write(numero)
}