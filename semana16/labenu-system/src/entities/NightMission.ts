import {Mission} from "./Mission";


export class NightMission extends Mission {
    

    public setName(name: string) {
      if (name.indexOf("-na-night") !== -1) {
        super.setName(name);
      }else{
          console.log("Nome não atribuido na turma por não conter o sufixo -na-night");
      };
    };
};