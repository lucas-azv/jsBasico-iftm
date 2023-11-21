window.addEventListener("load", function() {
    document.getElementById("btnCadastrar").addEventListener("click", cadastrarUsuario);

    function cadastrarUsuario() {
        var user = document.getElementById("inputUser").value;
        var pwd = document.getElementById("inputPwd").value;
        var checkPwd = document.getElementById("inputCheckPwd").value;

        if (user == "" || pwd == "" || checkPwd == "") {
            alertWifi("Preencha todos os campos!", false, 0, "", 30, "");

        } else if (pwd != checkPwd) {
            alertWifi("As senhas não coincidem!", false, 0, "", 30, "");

        } else if (user.split(' ').length > 1) {
            alertWifi("Nome de usuário inválido", false, 0, "", 30, "");

        } else {
            var vetUsers = localStorage.getItem("vetUsers");

            if (!vetUsers) {
                var vet = [];
                vet.push({ nome: user, senha: pwd });
                localStorage.setItem("vetUsers", JSON.stringify(vet));
                alertWifi("Usuário cadastrado com sucesso!", true, 0, "", 30, "");
                setTimeout(function() {
                    window.location.href = "../login/index.html";
                }, 3000);

            } else {
                vet = JSON.parse(vetUsers);

                var usuarioExistente = vet.some(function(existingUser) {
                    return existingUser.nome === user;
                });

                if (usuarioExistente) {
                    alertWifi("Usuário já cadastrado.", false, 0, "", 30, "");

                } else {
                    vet.push({ nome: user, senha: pwd });
                    localStorage.setItem("vetUsers", JSON.stringify(vet));
                    alertWifi("Usuário cadastrado com sucesso!", false, 0, "", 30, "");
                    setTimeout(function() {
                        window.location.href = "../login/index.html";
                    }, 3000);
                }
            }
        }
    }
});
