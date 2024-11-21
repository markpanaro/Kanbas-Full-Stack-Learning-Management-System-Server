import assignments from "../Database/assignments.js";
import * as dao from "./dao.js";
export default function AssignmentRoutes(app) {
    app.get("/api/assignments", (req, res) => {
        const assignments = dao.findAllAssignments();
        res.send(assignments);
    });
    
}

