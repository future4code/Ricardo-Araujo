import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("São Palíndromo", () => {
    
    //preparacao
      const frase1 = "arara";
      const frase2 = "asa";
      const frase3 = "mirim";
      const frase4 = "121";
      const frase5 = "MiRim";
      const frase6 = "Arara";

    //execucao
      const testFrase1 = checaPalindromo(frase1);
      const testFrase2 = checaPalindromo(frase2);
      const testFrase3 = checaPalindromo(frase3);
      const testFrase4 = checaPalindromo(frase4);
      const testFrase5 = checaPalindromo(frase5);
      const testFrase6 = checaPalindromo(frase6);

    //verificacao
      expect(testFrase1).toBe(true);
      expect(testFrase2).toBe(true);
      expect(testFrase3).toBe(true);
      expect(testFrase4).toBe(true);
      expect(testFrase5).toBe(true);
      expect(testFrase6).toBe(true);  
  });

  it("Não são Palíndrono", () => {
    
    //preparacao
      const frase1 = "agua";
      const frase2 = "BoLa";
      const frase3 = "sUper";
      const frase4 = "11120";
      const frase5 = "FOFO";
      const frase6 = "Amora";

    //execucao
      const testFrase1 = checaPalindromo(frase1);
      const testFrase2 = checaPalindromo(frase2);
      const testFrase3 = checaPalindromo(frase3);
      const testFrase4 = checaPalindromo(frase4);
      const testFrase5 = checaPalindromo(frase5);
      const testFrase6 = checaPalindromo(frase6);

    //verificacao
      expect(testFrase1).toBe(false);
      expect(testFrase2).toBe(false);
      expect(testFrase3).toBe(false);
      expect(testFrase4).toBe(false);
      expect(testFrase5).toBe(false);
      expect(testFrase6).toBe(false);  
  });


});
