window.addEventListener("load", function() {
    document.getElementById("btnValidar").addEventListener("click", validarString);

    function validarString() {
        var padrao = /^\w{4}$/;
        var info = document.getElementById("txt").value;

        if (padrao.test(info)) {
            alert("Válido");
        } else {
            alert("Inválido");
        }
    }
});
