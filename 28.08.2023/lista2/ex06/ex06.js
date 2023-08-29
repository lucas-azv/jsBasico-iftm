texto = prompt("insira um texto qualquer")

texto = texto.split(" ")
primeiraPalavra = texto[0]
ultimaPalavra = texto[texto.length - 1]

alert(`${primeiraPalavra} ${ultimaPalavra}`)