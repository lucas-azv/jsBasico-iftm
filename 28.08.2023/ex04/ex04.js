nome = prompt("insira seu nome completo")

nome = nome.toLowerCase()

nome = nome.split(" ")

nome[0] = nome[0].toUpperCase()

nome = nome.join(" ")

alert(nome)