function publicar(){
    const titulo = document.getElementById("titulo");
    const conteudo = document.getElementById("conteudo");
    const autor = document.getElementById("autor");
    const areaposts = document.getElementById("posts");

    const objeto = new classDePost (titulo.value, conteudo.value, autor.valeu);

    areaposts.innerHTML+='<div class="titulo">' + objeto.titulo + '</div>';
    areaposts.innerHTML+='<div class="conteudo">' + objeto.conteudo+ '</div>';
    areaposts.innerHTML+='<div class="autor">' + objeto.autor+ '</div>';
}

class classDePost{
    constructor (a,b,c){
        this.titulo=a;
        this.conteudo=b;
        this.autor=c;
    }
}

