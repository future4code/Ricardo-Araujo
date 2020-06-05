import {Student} from "./entities/Student";
import {Teacher} from "./entities/Teacher";
import {TEACHER_SPECIALTY} from "./entities/Teacher";
import {FullTimeMission} from "./entities/FullTimeMission";
import {NightMission} from "./entities/NightMission";
import * as moment from "moment";
import { Students } from "./groups/Students";
import { Teachers } from "./groups/Teachers";
import { Missions } from "./groups/Missions";


function main(option:string):void{

    const myStudents = new Students;
    const myTeachers = new Teachers;
    const myMissions = new Missions;

    switch(option){
        case "createStudant":{

            const id: number = 42;
            const name: string = "Hulk";
            const email: string = "ricardo.ninja@labenu.com";
            const birthDate: moment.Moment = moment("24/09/1950", "DD/MM/YYYY");
            const hobbies: string[] = ["Codar"];

            const newStudent = new Student(id, name, email, birthDate, hobbies);
            myStudents.addStudent(newStudent);
            myStudents.writeFile();
        };
        case "createTeacher":{

            const id: number = 100;
            const name: string = "Igor";
            const email: string = "joao@joao.com.br";
            const specialties: TEACHER_SPECIALTY[] = [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TYPESCRIPT];

            const newTeacher = new Teacher(id, name, email, specialties);
            myTeachers.addTeacher(newTeacher);
            myTeachers.writeFile();
        };
        case "createFullTimeMission":{

            const name: string = "Hamilton";
            const id: number = 4;
            const startDate: moment.Moment = moment("10/02/2020", "DD/MM/YYYY");
            const endDate: moment.Moment = moment("21/08/2020", "DD/MM/YYYY");
            const currentModule: number | null = 4;


            const newMission = new FullTimeMission(id,startDate, endDate, currentModule);
            newMission.setName(name);
            //teria que adicionar os alunos e professores

            myMissions.addMission(newMission);
            myMissions.writeFile();
            break;
        };
        case "createNightMission":{

            const name: string = "Ninjas-na-night";
            const id:number = 103893245;
            const startDate: moment.Moment = moment("29/02/2031", "DD/MM/YYYY");
            const endDate: moment.Moment = moment("30/08/2013","DD/MM/YYYY");
            const currentModule: number | null = null;

            const newNightMission = new NightMission(id, startDate , endDate, currentModule);
            newNightMission.setName(name);
            //teria que adicionar os alunos e professores

            myMissions.addMission(newNightMission);
            myMissions.writeFile();
            break;
        };
        case "getStudentById" :{
            const id: number = 42;
            const getById = myStudents.readFile() as Student[];

            getById.forEach( (element:Student) => {
                if(element.id === id){

                    const student = new Student(
                        element.id,
                        element.name,
                        element.email,
                        element.birthDate,
                        element.hobbies
                    );
                    console.log(student.getAge());
                };
            });
            break;
        }
        default:{
            console.log("Não temos funções pra a opção selecionada");
            break;
        };
    };
};


main("getStudentById");