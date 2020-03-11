function insereTarefa() {

    const inputTarefa = document.querySelector("input");
    const novoTarefa = inputTarefa.value;

    if(novoTarefa!==""){

    const diaDaSemana = document.querySelector("select");
    const valorDia = document.getElementById(diaDaSemana.value);

    valorDia.innerHTML += '<li onclick="tarefaConcluida(event)">' + novoTarefa + '</li>'

    inputTarefa.value="";
    }

    console.log("apertei o botao")
}

function tarefaConcluida(event) {
    const nomeVariavel = event.target;
    nomeVariavel.classList.toggle("riscada")
}

function limparLista(){

    const limparMain = document.querySelector("main");

    limparMain.innerHTML = '<div id="segunda"><p>Segunda-Feira</p></div>'
    limparMain.innerHTML += '<div id="terca"><p>Terça-Feira</p></div>'
    limparMain.innerHTML += '<div id="quarta"><p>Quarta-Feira</p></div>'
    limparMain.innerHTML += '<div id="quinta"><p>Quinta-Feira</p></div>'
    limparMain.innerHTML += '<div id="sexta"><p>Sexta-Feira</p></div>'
    limparMain.innerHTML += '<div id="sabado"><p>Sábado</p></div>'
    limparMain.innerHTML += '<div id="domingo"><p>Domingo</p></div>'
}

alert("não esta pronta a versão mobile :/ ");