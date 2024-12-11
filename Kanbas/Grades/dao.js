import Database from "../Database/index.js";
import model from "./model.js";

export function findAllGrades(userId, courseId) {
    return Database.grades;
}


export function findQuizGradeForUser(userId, quizId) {
    return model.find({ user: userId, quiz: quizId });

    //const { grades } = Database;

    //const quizGrade = grades.filter((grade) =>
    //    grade.userId === userId && grade.quizId === quizId);

    //return quizGrade;
}
export function createGrade(grade) {
    delete grade._id
    return model.create(grade);
    //const newGrade = { ...grade, _id: Date.now().toString() };
    //Database.grades = [...Database.grades, newGrade];
    //return newGrade;
}

//export function updateGrade(gradeId, gradeUpdates) {
export function updateGrade(gradeId, gradeUpdates) {
    
    return model.updateOne({ _id: gradeId }, gradeUpdates);
    //const { grades } = Database;
    //const grade = grades.find((grade) => grade._id === gradeId);
    //Object.assign(grade, gradeUpdates);
    //return grade;
}