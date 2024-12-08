import Database from "../Database/index.js";
import model from "./model.js";
export function findAllQuizzes() {
    return Database.quizzes;
}

export function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
    //const { quizzes } = Database;
    //return quizzes.filter((quiz) => quiz.course === courseId);
}

export function createQuiz(quiz) {
    delete quiz._id
    return model.create(quiz);
    //const newQuiz = { ...quiz, _id: Date.now().toString() };
    //Database.quizzes = [...Database.quizzes, newQuiz];
    //return newQuiz;
}

export function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId });
    //const { quizzes } = Database;
    //Database.quizzes = quizzes.filter((quiz) => quiz._id !== quizId);
}

export function updateQuiz(quizId, quizUpdates) {
    return model.updateOne({ _id: quizId }, quizUpdates);
    //const { quizzes } = Database;
    //const quiz = quizzes.find((quiz) => quiz._id === quizId);
    //Object.assign(quiz, quizUpdates);
    //return quiz;
}
