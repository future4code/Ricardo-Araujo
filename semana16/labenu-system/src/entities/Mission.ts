import * as moment from "moment";
import {Teacher} from "./Teacher";
import {Student} from "./Student";

export abstract class Mission{
    
    private name: string
    private teachers: Teacher[] = []
    private students:  Student[] = []
    
    constructor(
        private id: number,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private currentModule?: number
                ){}

    public getId(): number {
        return this.id;
    };

    public getName(): string {
        return this.name;
    };

    public getStartDate(): moment.Moment {
        return this.startDate;
    };

    public getEndDate(): moment.Moment {
        return this.endDate;
    };

    public getCurrentModule(): number | undefined {
        return this.currentModule;
    };

    public addTeacher(teacher: Teacher) {
        this.teachers.push(teacher);
    };

    public addStudent(student: Student) {
        this.students.push(student);
    };

    public setName(name: string) {
        this.name = name;
    };
};