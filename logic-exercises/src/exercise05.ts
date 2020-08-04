/*
Escreva uma função que receba um horário expressado em segundos e transforme-o para o formato: `{hora}h {minuto}m {segundo}s`. Exemplos:

**Entrada**           **Saída**

30                     `"30s"`

350                   `"5m 50s"`

3725                 `"1h 02m 05s"`



*/

// function secondToFullTime(valueInSecond:number){

//     if(valueInSecond<0){
//         return "not number";
//     };

//     if(valueInSecond<=60){
//         return `${valueInSecond} seg`
//     };

//     const seconds = valueInSecond%60;

//     let minutes = Number((valueInSecond/60).toString().split(".")[0]);

//     if(minutes<60){
//         return `${minutes}min ${seconds}sec`
//     };

//     const hours = Number((minutes / 60).toString().split(".")[0]);
//     minutes = minutes - (60*hours);



//     return `${hours}h ${minutes}min ${seconds}sec`;
// };

// console.log(secondToFullTime(3660));


class secondToFullTime{

    valueInSeconds:number;

    constructor(valueInSeconds:number){
        this.valueInSeconds = valueInSeconds;
    }

    private trimToInt(value:number):number{
        const int = value.toString().split(".")[0];
        return Number(int);
    };

    private sec():number{
        const sec = this.valueInSeconds%60;
        return sec;
    };

    private min():number{
        const min = this.valueInSeconds/60

        return this.trimToInt(min);
    };

    private hour():number{
        const hours = this.valueInSeconds/3600;
        return this.trimToInt(hours);
    };

    public convert():string{
        
        const sec = this.sec();
        const minTotal = this.min();
        const hour = this.hour();

        if(sec<0){
          return "not a valid time";
        };

        if(hour > 0){
            const min = this.min() - (hour*60);

            return `${hour} h ${min} min ${sec} sec`;
        };

        if(minTotal>0){
            return `${minTotal} min ${sec} sec`;
        };

        const result = `${sec} sec`
        return result;
    };

};

const teste5 = new secondToFullTime(3661).convert();

console.log(teste);