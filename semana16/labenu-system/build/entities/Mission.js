"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = void 0;
class Mission {
    constructor(id, startDate, endDate, currentModule) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.currentModule = currentModule;
        this.teachers = [];
        this.students = [];
    }
    getId() {
        return this.id;
    }
    ;
    getName() {
        return this.name;
    }
    ;
    getStartDate() {
        return this.startDate;
    }
    ;
    getEndDate() {
        return this.endDate;
    }
    ;
    getCurrentModule() {
        return this.currentModule;
    }
    ;
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    ;
    addStudent(student) {
        this.students.push(student);
    }
    ;
    setName(name) {
        this.name = name;
    }
    ;
}
exports.Mission = Mission;
;
//# sourceMappingURL=Mission.js.map