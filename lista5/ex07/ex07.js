function validarForm() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;
    var mensagemErro = document.getElementById("mensagemErro");
    var mensagemSucesso = document.getElementById("mensagemSucesso");

    mensagemErro.innerHTML = "";
    mensagemSucesso.innerHTML = "";

    if (login === "") {
        mensagemErro.innerHTML = "Por favor, insira um Login.";
        return false;
    }

    if (senha.length > 8) {
        mensagemErro.innerHTML = "A senha deve ter no máximo 8 caracteres.";
        document.getElementById("senha").value = "";
        document.getElementById("confirmarSenha").value = "";
        return false;
    }

    if (senha !== confirmarSenha) {
        mensagemErro.innerHTML = "As senhas não coincidem. Por favor, digite novamente.";
        document.getElementById("senha").value = "";
        document.getElementById("confirmarSenha").value = "";
        return false;
    }

    mensagemSucesso.innerHTML = "Todos os campos foram preenchidos corretamente.";
    return false;
}

function limparCampos() {
    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("confirmarSenha").value = "";
    document.getElementById("mensagemErro").innerHTML = "";
    document.getElementById("mensagemSucesso").innerHTML = "";
}
