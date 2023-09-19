function pegarTexto(event) {
    event.preventDefault();
    var texto = document.getElementById("txtNome").value.trim();
    if (texto === "") {
        alert("Insira um texto");
    } else {
        texto = texto.toUpperCase();
        alert(texto);
    }
}