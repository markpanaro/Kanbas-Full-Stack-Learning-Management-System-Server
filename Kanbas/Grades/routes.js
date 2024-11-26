import grades from "../Database/enrollments.js";
import * as dao from "./dao.js";
export default function GradesRoutes(app) {

    app.get("/api/grades/:quizId", (req, res) => {
        const { quizId } = req.params;
        const currentUser = req.session["currentUser"];
        const grade = dao.findQuizGradeForUser(currentUser._id, quizId);
        res.send(grade);
    });

    app.post("/api/grades/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const currentUser = req.session["currentUser"];
        const grade = {
            ...req.body,
            quizId: quizId,
            userId: currentUser._id,
        };
        console.log(currentUser);
        currentUser
        const newGrade = dao.createGrade(grade);//(currentUser._id, quizId);
        res.json(newGrade);
    });

    app.put("/api/grades/:gradeId", (req, res) => {
        const { gradeId } = req.params;
        const userId = req.session["currentUser"]._id;
        const gradeUpdates = req.body;
        const status = dao.updateGrade(gradeId, gradeUpdates);
        res.send(status);
    });
    
    app.get("/api/grades", (req, res) => {
        const grades = dao.findAllGrades();
        res.send(grades);
    });
    
}


