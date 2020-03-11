function publicar(){
    const titulo = document.getElementById("titulo");
    const conteudo = document.getElementById("conteudo");
    const autor = document.getElementById("autor");
    const areaposts = document.getElementById("posts");

    areaposts.innerHTML+='<div class="titulo">' + titulo.value + '</div>';
    areaposts.innerHTML+='<div class="conteudo">' + conteudo.value+ '</div>';
    areaposts.innerHTML+='<div class="autor">' + autor.value+ '</div>';
}
