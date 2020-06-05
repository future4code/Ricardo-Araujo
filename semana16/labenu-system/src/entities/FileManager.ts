import * as fs from "fs";

export abstract class FileManager{

    protected filePath:string;
    protected arrayFile:any[];

    public writeFile():void{
        try{
            console.log(this.filePath);
            fs.writeFileSync(this.filePath, JSON.stringify(this.arrayFile));
        }catch{
            console.log("Erro ao criar o arquivo!");
        };
    };

    public readFile():any{
        const data = fs.readFileSync(this.filePath);
        return JSON.parse(data.toString());
    };
};