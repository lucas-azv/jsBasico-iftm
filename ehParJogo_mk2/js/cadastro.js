window.addEventListener("load", function () {
    document.getElementById("btnCadastro").addEventListener("click", entrar);

    function entrar() {
        var user = document.getElementById("inputUser").value;
        var senha = document.getElementById("inputSenha").value;
        var confirma = document.getElementById("confirmaSenha").value;

        if (user === "" || senha === "" || confirma === "") {
            alert("Por favor, preencha ambos usuário e senha. Não legal.");
        } else {
            if(senha = confirma){
                var usuario = {nome: user, senha: senha}
            }
            // Aqui você pode adicionar mais lógica para autenticar o usuário
        }
    }

});
