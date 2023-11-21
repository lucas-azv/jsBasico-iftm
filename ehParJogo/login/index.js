window.addEventListener("load", function () {
document.getElementById("btnLogin").addEventListener("click", verificarLogin);
function verificarLogin() {

var user = document.getElementById("inputUser").value;
var pwd = document.getElementById("inputPwd").value;

if(user == "" || pwd == "") {
    alertWifi("Preencha todos os campos!",false,0,"",30,"");
} else{
        var vetUsers = localStorage.getItem("vetUsers");

        if(!vetUsers) {
            alertWifi("Nenhum usuário cadastrado",false,0,"",30,"");
        } else{
            vetUsers = JSON.parse(vetUsers);
            var achou = false;
            for (i = 0; i < vetUsers.length; i++) {
                if (user == vetUsers[i].nome && pwd == vetUsers[i].senha) {
                    achou = true;
                    break;
                }
            }
            
            if (achou) {
                console.log("deu certo");
                alertWifi("Usuário logado com sucesso!", false, 0, "", 30, "");
                    window.location.href = "../jogo.html";
            } else {
                console.log("deu errado brother");
                alertWifi("Usuário ou senha incorretos!", false, 0, "", 30, "");
            }       
        }
    }
}
});