document.write(`<h1>Números da mega da virada oficial 2023</h1>`)

//prompt("insira as informações do seu cartao de credito para prosseguir")

numeros = []
for (i = 1; i <= 60; i++) {
    numeros.push(i);
}

for (i = 0; i < 6; i++) {
    indice = Math.round(Math.random() * numeros.length - 1);
    document.write(`${numeros[indice]} `);
    numeros.splice(indice, 1);
}