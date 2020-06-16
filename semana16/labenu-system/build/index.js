"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./entities/Student");
const Teacher_1 = require("./entities/Teacher");
const Teacher_2 = require("./entities/Teacher");
const FullTimeMission_1 = require("./entities/FullTimeMission");
const NightMission_1 = require("./entities/NightMission");
const moment = require("moment");
const Students_1 = require("./groups/Students");
const Teachers_1 = require("./groups/Teachers");
const Missions_1 = require("./groups/Missions");
function main(option) {
    const myStudents = new Students_1.Students;
    const myTeachers = new Teachers_1.Teachers;
    const myMissions = new Missions_1.Missions;
    switch (option) {
        case "createStudant":
            {
                const id = 42;
                const name = "Hulk";
                const email = "ricardo.ninja@labenu.com";
                const birthDate = moment("24/09/1950", "DD/MM/YYYY");
                const hobbies = ["Codar"];
                const newStudent = new Student_1.Student(id, name, email, birthDate, hobbies);
                myStudents.addStudent(newStudent);
                myStudents.writeFile();
            }
            ;
        case "createTeacher":
            {
                const id = 100;
                const name = "Igor";
                const email = "joao@joao.com.br";
                const specialties = [Teacher_2.TEACHER_SPECIALTY.BACKEND, Teacher_2.TEACHER_SPECIALTY.TYPESCRIPT];
                const newTeacher = new Teacher_1.Teacher(id, name, email, specialties);
                myTeachers.addTeacher(newTeacher);
                myTeachers.writeFile();
            }
            ;
        case "createFullTimeMission":
            {
                const name = "Hamilton";
                const id = 4;
                const startDate = moment("10/02/2020", "DD/MM/YYYY");
                const endDate = moment("21/08/2020", "DD/MM/YYYY");
                const currentModule = 4;
                const newMission = new FullTimeMission_1.FullTimeMission(id, startDate, endDate, currentModule);
                newMission.setName(name);
                myMissions.addMission(newMission);
                myMissions.writeFile();
                break;
            }
            ;
        case "createNightMission":
            {
                const name = "Ninjas-na-night";
                const id = 103893245;
                const startDate = moment("29/02/2031", "DD/MM/YYYY");
                const endDate = moment("30/08/2013", "DD/MM/YYYY");
                const currentModule = null;
                const newNightMission = new NightMission_1.NightMission(id, startDate, endDate, currentModule);
                newNightMission.setName(name);
                myMissions.addMission(newNightMission);
                myMissions.writeFile();
                break;
            }
            ;
        case "getStudentById": {
            const id = 42;
            const getById = myStudents.readFile();
            getById.forEach((element) => {
                if (element.id === id) {
                    const student = new Student_1.Student(element.id, element.name, element.email, element.birthDate, element.hobbies);
                    console.log(student.getAge());
                }
                ;
            });
            break;
        }
        default:
            {
                console.log("Não temos funções pra a opção selecionada");
                break;
            }
            ;
    }
    ;
}
;
main("getStudentById");
//# sourceMappingURL=index.js.map