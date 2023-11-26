window.addEventListener("load", function() {
    this.document.getElementById("btnCadastrar").addEventListener("click", cadastrarUsuario);

    function cadastrarUsuario() {
        user = document.getElementById("inputUser").value;
        pwd = document.getElementById("inputPwd").value;
        checkPwd = document.getElementById("inputCheckPwd").value;

        if(user == "" || pwd == "" || checkPwd == "") {
            alertWifi("Preencha todos os campos!",false,0,"",30,"");

        } else if(pwd != checkPwd) {
            alertWifi("As senhas não coincidem!",false,0,"",30,"");
        }
        else{
            var newUser = {nome: user, senha: pwd};
            var vetUsers = localStorage.getItem("vetUsers");

            if(!vetUsers) {
                var vet = [];
                vet.push(newUser);
                localStorage.setItem("vetUsers",JSON.stringify(vet));
                alertWifi("Usuário cadastrado com sucesso!",true,0,"",30,"");
            } else{
                vet = JSON.parse(vetUsers);
                vet.push(newUser);
                localStorage.setItem("vetUsers",JSON.stringify(vet));
            }
            alertWifi("Usuário cadastrado com sucesso!",false,0,"",30,"");
        }
    }

});
