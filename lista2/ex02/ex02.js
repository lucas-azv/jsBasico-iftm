nome = prompt("insira seu nome completo")

nomeSeparado = nome.split(" ")
nomeJunto = nomeSeparado.join("")

//document.write(nome + " " + " - " + nomeJunto.length + " letras, " + nome.length + " caracteres totais")
document.write(`${nome}, ${nomeJunto.length} letras, ${nome.length} caracteres totais`)
