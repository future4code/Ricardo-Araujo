class classeDespesas {
    constructor(valor, tipoDespesa, descricao) {
        this.valor = valor;
        this.tipoDespesa = tipoDespesa;
        this.descricao = descricao;
    }
}

const arrayDespesas = [];

function cadastrar() {
    const valor = document.getElementById("valor");
    const tipoDespesa = document.getElementById("tipoDespesa");
    const descricao = document.getElementById("descricao");


    if (valor.value !== "" && tipoDespesa.value !== "" && descricao.value !== "") {
        const objeto = new classeDespesas(valor.value, tipoDespesa.value, descricao.value);
        arrayDespesas.push(objeto);

        console.log(arrayDespesas);

        valor.value="";
        tipoDespesa.value="";
        descricao.value="";

        mostrarExtrato()
    } else {
        alert("Digite valores validos");
    }

    
}

function filtraValores(){
    const filtroTipo = document.getElementById("filtroTipoDespesa");
    const filtroMax = document.getElementById("filtroValorMax");
    const filtroMin = document.getElementById("filtroValorMin");
    const post = document.getElementById("areaTexto");

    const arrayFiltro = arrayDespesas.filter((elemento,index,array)=>{
        return elemento.tipoDespesa === filtroTipo.value &&
        elemento.valor>= filtroMin.value && 
        elemento.valor<= filtroMax.value;
    })

    arrayFiltro.forEach((elemento, index, array) => {
        post.innerHTML += elemento.valor;
        post.innerHTML += elemento.tipoDespesa;
        post.innerHTML += elemento.descricao;
    })

    console.log(arrayFiltro);
}

function mostrarExtrato(){
    const areaTexto = document.getElementById("extrato")

        areaTexto.innerHTML = ""

    arrayDespesas.forEach((elemento, index, array) => {
        areaTexto.innerHTML += elemento.valor;
        areaTexto.innerHTML += elemento.tipoDespesa;
        areaTexto.innerHTML += elemento.descricao;
    })

}