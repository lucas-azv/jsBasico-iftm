window.addEventListener("load", function () {
    document.getElementById("btnLogin").addEventListener("click", entrar);

    function entrar() {
        var user = document.getElementById("inputUser").value;
        var senha = document.getElementById("inputSenha").value;

        if (user === "" || senha === "") {
            alert("Por favor, preencha ambos usuário e senha. Não legal.");
        } else {
            alert("Campos preenchidos. Legal!");
            // Aqui você pode adicionar mais lógica para autenticar o usuário
        }
    }
    
});
