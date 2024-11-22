import assignments from "../Database/assignments.js";
import * as dao from "./dao.js";
export default function AssignmentRoutes(app) {
    app.get("/api/assignments", (req, res) => {
        const assignments = dao.findAllAssignments();
        res.send(assignments);
    });

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await dao.deleteAssignment(assignmentId);
        res.send(status);
    });

    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await dao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    });

}

