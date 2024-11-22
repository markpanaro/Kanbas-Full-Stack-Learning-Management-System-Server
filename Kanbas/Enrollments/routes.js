import enrollments from "../Database/enrollments.js";
import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
export default function EnrollmentRoutes(app) {
    app.post("/api/enrollments/:courseId", async (req, res) => {
        const { courseId } = req.params;
        const currentUser = req.session["currentUser"];
        currentUser
        const newEnrollment = dao.enrollUserInCourse(currentUser._id, courseId);
        //res.send(newEnrollment);
        //const enrollment = courseDao.findCoursesForEnrolledUser(currentUser, courseId);
        res.json(newEnrollment);
    });

    app.delete("/api/enrollments/:courseId/", async (req, res) => {
        const { courseId } = req.params;
        const currentUser = req.session["currentUser"];
        currentUser
        const deleteEnrollment = dao.unenrollUserFromCourse(currentUser._id, courseId);
        //res.send(newEnrollment);
        //const enrollment = courseDao.findCoursesForEnrolledUser(currentUser, courseId);
        //res.json(deleteEnrollment);
    });
}


/*
app.post("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignment = {
        ...req.body,
        course: courseId,
    };
    const newAssignment = assignmentsDao.createAssignment(assignment);
    res.send(newAssignment);
});


        const newModule = modulesDao.createModule(module);
        res.send(newModule);
*/