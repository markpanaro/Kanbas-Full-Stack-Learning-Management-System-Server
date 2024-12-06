import enrollments from "../Database/enrollments.js";
import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
export default function EnrollmentRoutes(app) {
    app.post("/api/enrollments/:courseId", async (req, res) => {
        const { courseId } = req.params;
        const currentUser = req.session["currentUser"];
        currentUser
        const newEnrollment = await dao.enrollUserInCourse(currentUser._id, courseId);
        //res.send(newEnrollment);
        //const enrollment = courseDao.findCoursesForEnrolledUser(currentUser, courseId);
        res.json(newEnrollment);
    });

    app.delete("/api/enrollments/:courseId/", async (req, res) => {
        const { courseId } = req.params;
        const currentUser = req.session["currentUser"];
        currentUser
        const deleteEnrollment = await dao.unenrollUserFromCourse(currentUser._id, courseId);
        //res.send(newEnrollment);
        //const enrollment = courseDao.findCoursesForEnrolledUser(currentUser, courseId);
        //res.json(deleteEnrollment);
    });


    app.get("/api/enrollments", async (req, res) => {
        const enrollments = await dao.findAllEnrollments();
        res.send(enrollments);
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