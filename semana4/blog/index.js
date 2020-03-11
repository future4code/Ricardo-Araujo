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

function publicar(){
        const titulo = document.getElementById("titulo");
        const conteudo = document.getElementById("conteudo");
        const autor = document.getElementById("autor");
        const areaposts = document.getElementById("posts");
    
        const objeto = new classDePost (titulo.value, conteudo.value, autor.value);
    
        let arrayObjeto = [objeto.titulo, objeto.conteudo,objeto.autor];


        areaposts.innerHTML+='<div class="titulo">' + arrayObjeto[0] + '</div>';
        areaposts.innerHTML+='<div class="conteudo">' + arrayObjeto[1]+ '</div>';
        areaposts.innerHTML+='<div class="autor">' + arrayObjeto[2]+ '</div>';

        titulo.value="";
        conteudo.value="";
        autor.value="";
    }
    
    class classDePost{
        constructor (a,b,c){
            this.titulo=a;
            this.conteudo=b;
            this.autor=c;
        }
    }

//não entendi para que preciso do array.

