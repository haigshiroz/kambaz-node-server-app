import * as assignmentsDao from "./dao.js";


export default function AssignmentRoutes(app) {
    const deleteAssignment = (req, res) => {
        const { assignmentId } = req.params;
        const status = assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
    };
    app.delete("/api/assignments/:assignmentId", deleteAssignment);


    const updateAssignment = (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    };
    app.put("/api/assignments/:assignmentId", updateAssignment);
}
