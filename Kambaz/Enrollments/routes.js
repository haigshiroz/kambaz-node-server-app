import * as dao from "./dao.js";


export default function EnrollmentRoutes(app) {
    const enrollments = (req, res) => {
        const enrollments = dao.enrollments();
        res.send(enrollments);
    };
    app.get("/api/enrollments/", enrollments);


    const createEnrollment = (req, res) => {
        const { userId, courseId } = req.params;
        const newEnrollment = dao.enrollUserInCourse(userId, courseId);
        res.send(newEnrollment);
    };
    app.post("/api/enrollments/:userId/:courseId", createEnrollment);


    const deleteEnrollment = (req, res) => {
        const { userId, courseId } = req.params;
        const status = dao.unenrollUserInCourse(userId, courseId);
        res.send(status);
    };
    app.delete("/api/enrollments/:userId/:courseId", deleteEnrollment)
}
