export function checaPalindromo(frase) {

    const fraseInvertida = frase.split('').reverse().join('');    

    if(frase.toLocaleLowerCase()===fraseInvertida.toLocaleLowerCase()){
        return true;
    }else{
        return false;
    }
//fiquei na duvida se deveria checar se é uma frase mesmo, pois se eu colocar uma letra apenas vai retornar true.
}
