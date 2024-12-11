import grades from "../Database/enrollments.js";
import * as dao from "./dao.js";
export default function GradesRoutes(app) {

    app.get("/api/grades/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const currentUser = req.session["currentUser"];
        
        const grade = await dao.findQuizGradeForUser(currentUser._id, quizId);
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
        
        currentUser
        const newGrade = dao.createGrade(grade);//(currentUser._id, quizId);
        res.json(newGrade);
    });

    app.put("/api/grades/:gradeId", async (req, res) => {
        const { gradeId } = req.params;
        const userId = req.session["currentUser"]._id;
        //const gradeId = req.body;
        const gradeUpdates = req.body;
        const status = await dao.updateGrade(gradeId, gradeUpdates);
        res.send(status);
    });
    
    app.get("/api/grades", (req, res) => {
        const grades = dao.findAllGrades();
        res.send(grades);
    });
    
}


