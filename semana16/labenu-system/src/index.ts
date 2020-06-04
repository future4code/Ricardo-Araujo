import {Student} from "./entities/Student";
import {Teacher} from "./entities/Teacher";
import {TEACHER_SPECIALTY} from "./entities/Teacher";
import {FullTimeMission} from "./entities/FullTimeMission";
import {NightMission} from "./entities/NightMission";
import * as moment from "moment";


// const alunoLegal = new Student(42, "Ricardo", "ricardo.ninja@labenu.com", 
//                             moment("24/09/1950", "DD/MM/YYYY"), ["Codar"]);

// console.log(alunoLegal.getAge());


// const newTeacher = new Teacher(100, "Joao", "joao@joao.com.br",
//                     [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TYPESCRIPT]);

// console.log(newTeacher.specialties);

// const hamilton = new FullTimeMission(4, moment("10/02/2020", "DD/MM/YYYY"), moment("21/08/2020", "DD/MM/YYYY"), 4);

// hamilton.setName("Hamilton");

// console.log(hamilton.getName());

const turmaDaNight = new NightMission(103893245, moment("29/02/2031", "DD/MM/YYYY"), moment("30/08/2013","DD/MM/YYYY"));

turmaDaNight.setName("ninjas-na-night");

console.log(turmaDaNight.getName());
