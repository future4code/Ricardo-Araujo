import { anoBissexto } from "./ex1";
import { isExportDeclaration } from "typescript";

describe("Ano bissexto", () => {
  it("É bissexto", () => {
    
    //preparação
    const num1=1600;
    const num2=2000;
    const num3=2400;
    const num4=2800;
    const num5=1996;
    const num6=2004;
    const num7=2008;
    const num8=2012;
    const num9=2016;
    
    //execução
    const True1 = anoBissexto(num1);
    const True2 = anoBissexto(num2);
    const True3 = anoBissexto(num3);
    const True4 = anoBissexto(num4);
    const True5 = anoBissexto(num5);
    const True6 = anoBissexto(num6);
    const True7 = anoBissexto(num7);
    const True8 = anoBissexto(num8);
    const True9 = anoBissexto(num9);

    //verificação
    expect(True1).toBe(true);
    expect(True2).toBe(true);
    expect(True3).toBe(true);
    expect(True4).toBe(true);
    expect(True5).toBe(true);
    expect(True6).toBe(true);
    expect(True7).toBe(true);
    expect(True8).toBe(true);
    expect(True9).toBe(true);
  });

  it("Não é bissexto", () => {
    
    //preparação
    const num1=1933;
    const num2=245;
    const num3=2010;
    const num4=1997;
    const num5=2015;
    const num6=2021;
    const num7=1991;
    const num8=314;
    const num9=634;
    
    //execução
    const False1 = anoBissexto(num1);
    const False2 = anoBissexto(num2);
    const False3 = anoBissexto(num3);
    const False4 = anoBissexto(num4);
    const False5 = anoBissexto(num5);
    const False6 = anoBissexto(num6);
    const False7 = anoBissexto(num7);
    const False8 = anoBissexto(num8);
    const False9 = anoBissexto(num9);

    //verificação
    expect(False1).toBe(false);
    expect(False2).toBe(false);
    expect(False3).toBe(false);
    expect(False4).toBe(false);
    expect(False5).toBe(false);
    expect(False6).toBe(false);
    expect(False7).toBe(false);
    expect(False8).toBe(false);
    expect(False9).toBe(false);
  });



});
