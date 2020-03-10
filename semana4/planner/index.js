function insereTarefa() {

    const inputTarefa = document.querySelector("input");
    const novoTarefa = inputTarefa.value;

    const diaDaSemana = document.querySelector("select");
    const valorDia = document.getElementById(diaDaSemana.value);

    valorDia.innerHTML += '<li onclick="tarefaConcluida(event)">' + novoTarefa + '</li>'

    inputTarefa.value="";

    console.log("apertei o botao")
}

function tarefaConcluida(event) {
    const nomeVariavel = event.target;
    nomeVariavel.classList.toggle("classe-nova")
}

function limparLista(){

    const limparMain = document.querySelector("main");

    limparMain.innerHTML = '<div id="segunda">Segunda-Feira</div>'
    limparMain.innerHTML += '<div id="terca">Terça-Feira</div>'
    limparMain.innerHTML += '<div id="quarta">Quarta-Feira</div>'
    limparMain.innerHTML += '<div id="quinta">Quinta-Feira</div>'
    limparMain.innerHTML += '<div id="sexta">Sexta-Feira</div>'
    limparMain.innerHTML += '<div id="sabado">Sábado</div>'
    limparMain.innerHTML += '<div id="domingo">Domingo</div>'
}