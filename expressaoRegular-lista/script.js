window.addEventListener("load", function () {
  document
    .getElementById("btnValidaNasc")
    .addEventListener("click", validarDataNascimento);
  document.getElementById("btnValidaCpf").addEventListener("click", validarCPF);
  document
    .getElementById("btnValidaMatricula")
    .addEventListener("click", validarMatricula);
  document
    .getElementById("btnValidaDisc")
    .addEventListener("click", validarDisciplina);
  document
    .getElementById("btnValidaDisc2")
    .addEventListener("click", validarDisciplina2);
  document
    .getElementById("btnValidaDisc3")
    .addEventListener("click", validarDisciplina3);
  document
    .getElementById("btnValidaCampus")
    .addEventListener("click", validarCampus);
  document
    .getElementById("btnValidaTel")
    .addEventListener("click", validarTelefone);
    document
    .getElementById("btnValidaTel2")
    .addEventListener("click", validarTelefone2);
    document
    .getElementById("btnValidaFaturamento")
    .addEventListener("click", validarFaturamento);
    document
    .getElementById("btnValidaCronometro")
    .addEventListener("click", validarCronometro);

  function validarDataNascimento() {
    var inputDataNasc = document.getElementById("dataNascimento").value;
    var padraoNasc =
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(?:[0-9]{2})?[0-9]{2}$/;

    if (padraoNasc.test(inputDataNasc)) {
      alert("Data de Nascimento válida!");
    } else {
      alert("Formato de Data de Nascimento inválido!");
    }
  }
  function validarCPF() {
    var inputCPF = document.getElementById("cpf").value;
    var padraoCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if (padraoCPF.test(inputCPF)) {
      alert("CPF válido!");
    } else {
      alert("Formato de CPF inválido!");
    }
  }
  function validarMatricula() {
    var inputMatricula = document.getElementById("nMatricula").value;
    var padraoMatricula = /^(iftm|IFTM)-\d{3}\/\d{3}-[a-zA-Z0-9]$/;

    if (padraoMatricula.test(inputMatricula)) {
      alert("Número de matrícula válido!");
    } else {
      alert("Formato de número de matrícula inválido!");
    }
  }
  function validarDisciplina() {
    var inputDisciplina = document.getElementById("disc").value;
    var padraoDisciplina = /^MT-\d{2}\.\d{3}-IFTM$/i;

    if (padraoDisciplina.test(inputDisciplina)) {
      alert("Código de disciplina válido!");
    } else {
      alert("Formato de  código de disciplina inválido!");
    }
  }
  function validarDisciplina2() {
    var inputDisciplina2 = document.getElementById("disc2").value;
    var padraoDisciplina = /^MT-\d{2}\.\d{3}-IFTM$/;

    if (padraoDisciplina.test(inputDisciplina2)) {
      alert("Código de disciplina válido!");
    } else {
      alert("Formato de  código de disciplina inválido!");
    }
  }
  function validarDisciplina3() {
    var inputDisciplina3 = document.getElementById("disc3").value;
    var padraoDisciplina = /^MT-\d{2}\.\d{3}- *IFTM$/i;

    if (padraoDisciplina.test(inputDisciplina3)) {
      alert("Código de disciplina válido!");
    } else {
      alert("Formato de  código de disciplina inválido!");
    }
  }
  function validarCampus() {
    var inputCampus = document.getElementById("campus").value;
    var padraoCampus = /^IFTM campus Uberlândia( Centro)?$/i;

    if (padraoCampus.test(inputCampus)) {
      alert("nome de campus válido!");
    } else {
      alert("Formato de nome de campus inválido!");
    }
  }
  function validarTelefone(){
    var inputTelefone = document.getElementById("telefone").value;
    var padraoTelefone = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;

    if (padraoTelefone.test(inputTelefone)) {
      alert("Telefone válido!");
    } else {
      alert("Formato de telefone inválido!");
    }
}
function validarTelefone2(){
    var inputTelefone2 = document.getElementById("telefone2").value;
    var padraoTelefone = /^\(\d{2,3}\)\s?\d{4,5}-\d{4}$/;

    if (padraoTelefone.test(inputTelefone2)) {
      alert("Telefone válido!");
    } else {
      alert("Formato de telefone inválido!");
    }
}
function validarFaturamento(){
    var inputFaturamento = document.getElementById("faturamento").value;
    var padraoFaturamento = /^R\$\d{1,3}(?:\.\d{3})*(?:,\d{1,2})?$/;

    if (padraoFaturamento.test(inputFaturamento)) {
      alert("Valor válido!");
    } else {
      alert("Formato inválido!");
    }
}
function validarCronometro(){
    var inputCronometro = document.getElementById("cronometro").value;
    var padraoCronometro = /^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d):(?:[0-9]\d|[1-9])$/;

    if (padraoCronometro.test(inputCronometro)) {
      alert("Cronômetro válido!");
    } else {
      alert("Formato inválido!");
    }
}
});
