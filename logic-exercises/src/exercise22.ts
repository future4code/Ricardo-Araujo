/*
Anagrama

Escreva uma função que recebe duas strings s e t e define se t é um anagrama de s. 
Ou seja, se com as mesmas letras de s, é possível escrever t.

ex.
**Input:** `s = "anagrama", t = "nagarama"`
**Output:** `true`

ex.
**Input:** `s = "gato", t = "toga"`
**Output:** `true`

ex.
**Input:** `s = "gato", t = "rato"`
**Output:** `false`
*/

export function checkAnagrams(t: string, s:string):boolean{
    const sortedT = t.toLowerCase().split("").sort();
    const sortedS = s.toLowerCase().split("").sort();

    return (sortedT.join() === sortedS.join() ? true : false);
};