window.addEventListener("load", function () {
    document.getElementById("btnLogin").addEventListener("click", verificarLogin);
});

function verificarLogin() {
    const user = document.getElementById("inputUser").value;
    const pwd = document.getElementById("inputPwd").value;

    if (isInputInvalid(user, pwd)) {
        alertWifi("Preencha todos os campos!", false, 0, "", 30, "");
        return;
    }

    const vetUsers = getStoredUsers();
    if (vetUsers === null) {
        alertWifi("Nenhum usuário cadastrado", false, 0, "", 30, "");
        return;
    }

    if (isUserValid(user, pwd, vetUsers)) {
        console.log("deu certo");
        alertWifi("Usuário logado com sucesso!", false, 0, "", 30, "");
        window.location.href = "../jogo.html";
    } else {
        console.log("deu errado brother");
        alertWifi("Usuário ou senha incorretos!", false, 0, "", 30, "");
    }
}

function isInputInvalid(user, pwd) {
    return user === "" || pwd === "";
}

function getStoredUsers() {
    const vetUsers = localStorage.getItem("vetUsers");
    return vetUsers ? JSON.parse(vetUsers) : null;
}

function isUserValid(user, pwd, vetUsers) {
    return vetUsers.some(v => user === v.nome && pwd === v.senha);
}
