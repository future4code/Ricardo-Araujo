// function publicar(){
//     const titulo = document.getElementById("titulo");
//     const conteudo = document.getElementById("conteudo");
//     const autor = document.getElementById("autor");
//     const areaposts = document.getElementById("posts");

//     const objeto = new classDePost (titulo.value, conteudo.value, autor.valeu);

//     areaposts.innerHTML+='<div class="titulo">' + objeto.titulo + '</div>';
//     areaposts.innerHTML+='<div class="conteudo">' + objeto.conteudo+ '</div>';
//     areaposts.innerHTML+='<div class="autor">' + objeto.autor+ '</div>';
// }

// class classDePost{
//     constructor (a,b,c){
//         this.titulo=a;
//         this.conteudo=b;
//         this.autor=c;
//     }
// }

function publicar() {
    const titulo = document.getElementById("titulo");
    const conteudo = document.getElementById("conteudo");
    const imagem = document.getElementById("imagem");
    const autor = document.getElementById("autor");
    const areaposts = document.getElementById("posts");

    const objeto = new classDePost(titulo.value, conteudo.value, imagem.value, autor.value);

    let arrayObjeto = [objeto.titulo, objeto.conteudo, objeto.autor];

    areaposts.innerHTML += '<div class="titulo">' + arrayObjeto[0] + '</div>';
    areaposts.innerHTML += '<div class="conteudo">' + arrayObjeto[1] + '</div>';

    if (imagem.value !== "") {
        if (imagem.value.includes(".jpg")) {
            const corpo = document.querySelector("body");
            areaposts.innerHTML += "<img src=" + imagem.value + ' alt="imagem" >';
            imagem.value = "";

        } else {
            alert("Não é uma imagem");
            imagem.value = "";
        }

    }

    areaposts.innerHTML += '<div class="autor">' + arrayObjeto[2] + '</div>';

    titulo.value = "";
    conteudo.value = "";
    autor.value = "";

}

class classDePost {
    constructor(titulo, conteudo, imagem, autor) {
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.imagem = imagem;
        this.autor = autor;
    }
}

//não entendi para que preciso do array.