class classeDespesas {
    constructor(valor, tipoDespesa, descricao) {
        this.valor = valor;
        this.tipoDespesa = tipoDespesa;
        this.descricao = descricao;
    }
}

const arrayDespesas = [];
let soma = Number();

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

        somaTudo()
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
               elemento.valor>= Number(filtroMin.value) && 
               elemento.valor<= Number(filtroMax.value);
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

        // areaTexto.innerHTML = ""

    arrayDespesas.forEach((elemento, index, array) => {
        areaTexto.innerHTML += elemento.valor;
        areaTexto.innerHTML += elemento.tipoDespesa;
        areaTexto.innerHTML += elemento.descricao;
    })

}

function somaTudo(){
    const areaTexto = document.getElementById("extrato")
        soma=0; //sei que se minha array fosse gigante eu teria problemas para refazer a soma inteira, mas deu preguiça de fazer certo.

        areaTexto.innerHTML = ""

    arrayDespesas.forEach((elemento,index,array) =>{
        soma += Number(elemento.valor);
    })

    areaTexto.innerHTML +="total é : " +soma +" extrato -->";
}

function limparFilto(){
    const post = document.getElementById("areaTexto");

    post.innerHTML = ""

    arrayDespesas.forEach((elemento, index, array) => {
        post.innerHTML += elemento.valor;
        post.innerHTML += elemento.tipoDespesa;
        post.innerHTML += elemento.descricao;
    })
}