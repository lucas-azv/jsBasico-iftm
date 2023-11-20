window.addEventListener("load", function () {
document.getElementById("btnEntrar").addEventListener("click", verificarlogin);
function verificarlogin() {
}
var user = document.getElementById("inputUser").value;
var pwd = document.getElementById("inputPwd").value;
var checkPwd = document.getElementById("inputCheckPwd").value;

if(user == "" || pwd == "") {
    alertWifi("Preencha todos os campos!",false,0,"",30,"");
} else{
        var vetUsers = localStorage.getItem("vetUsers");

        if(!vetUsers) {
            alertWifi("Nenhum usuário cadastrado",false,0,"",30,"");
        } else{
            vetUsers = JSON.parse(vetUsers);
            var achou = false;
            for(i = 0; i < vetUsers.length; i++) {
                if(user == vetUsers[i].nome && pwd == vetUsers[i].senha) {
                    achou = true;
                    break;
                }
                if(achou == true) {
                    alertWifi("Usuário logado com sucesso!",true,0,"",30,"");
                } else{
                    alertWifi("Usuário ou senha incorretos!",false,0,"",30,"");
                }
            }
        }
    }
});