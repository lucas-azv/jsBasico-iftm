document.addEventListener("DOMContentLoaded", function() {
    const numeroElement = document.getElementById('numero');
    const cronometroElement = document.getElementById('cronometro');
    const contadorAcertos = document.getElementById('contadorAcertos');
    const contadorErros = document.getElementById('contadorErros');
    const aproveitamentoAcertos = document.getElementById('aproveitamentoAcertos');
    const numParesSorteados = document.getElementById('numParesSorteados');

    let intervalNumeros;
    let intervalCronometro;
    let tempoPassado = 0;
    let cronometroAtivo = false;
    let acertos = 0;
    let erros = 0;
    let totalNumeros = 0;

    function iniciarCronometro() {
        cronometroAtivo = true;
        intervalCronometro = setInterval(function() {
            tempoPassado++;
            cronometroElement.textContent = `Tempo: ${tempoPassado}s`;
        }, 1000);
    }

    function pausarCronometro() {
        cronometroAtivo = false;
        clearInterval(intervalCronometro);
    }

    function zerarCronometro() {
        tempoPassado = 0;
        cronometroElement.textContent = 'Tempo: 0s';
    }

    function atualizarRodape() {
        const percentualAcertos = totalNumeros !== 0 ? ((acertos / totalNumeros) * 100).toFixed(2) : 0;
        const resultadoAcertos = `Acertos: ${acertos} (${percentualAcertos}%)`;
        document.getElementById('resultadoAcertos').textContent = resultadoAcertos;
        document.getElementById('contadorErros').textContent = erros;
        document.getElementById('numParesSorteados').textContent = totalNumeros;
    }

    function gerarNumeroAleatorio() {
        const dificuldadeSelect = document.getElementById('diffSelect');
        const iniciarButton = document.getElementById('iniciar');
        const pausarButton = document.getElementById('pausar');
        const pararButton = document.getElementById('parar');

        iniciarButton.disabled = true;
        pausarButton.disabled = false;
        pararButton.disabled = false;
        dificuldadeSelect.disabled = true;

        let tempo = 1000;

        switch (dificuldadeSelect.value) {
            case 'facil':
                tempo = 2000;
                break;
            case 'medio':
                tempo = 1000;
                break;
            case 'dificil':
                tempo = 500;
                break;
        }

        intervalNumeros = setInterval(function() {
            const numeroAleatorio = Math.floor(Math.random() * 100);
            numeroElement.textContent = numeroAleatorio;
            totalNumeros++;

            numeroElement.onclick = function() {
                if (numeroAleatorio % 2 === 0) {
                    acertos++;
                } else {
                    erros++;
                }
                atualizarRodape();
            };
        }, tempo);

        if (!cronometroAtivo) {
            iniciarCronometro();
        }
    }

    function pausarJogo() {
        clearInterval(intervalNumeros);
        pausarCronometro();
    }

    function pararJogo() {
        clearInterval(intervalNumeros);
        clearInterval(intervalCronometro);
        zerarCronometro();
        numeroElement.textContent = '';
        cronometroAtivo = false;

        const dificuldadeSelect = document.getElementById('diffSelect');
        const iniciarButton = document.getElementById('iniciar');
        const pausarButton = document.getElementById('pausar');
        const pararButton = document.getElementById('parar');

        iniciarButton.disabled = false;
        pausarButton.disabled = true;
        pararButton.disabled = true;
        dificuldadeSelect.disabled = false;
        acertos = 0;
        erros = 0;
        totalNumeros = 0;
        atualizarRodape();
    }

    document.getElementById('iniciar').addEventListener('click', gerarNumeroAleatorio);
    document.getElementById('pausar').addEventListener('click', pausarJogo);
    document.getElementById('parar').addEventListener('click', pararJogo);
}
);
