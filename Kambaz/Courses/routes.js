import * as dao from "./dao.js";

export default function CourseRoutes(app) {
    const courses = (req, res) => {
        const courses = dao.findAllCourses();
        res.send(courses);
    };
    app.get("/api/courses", courses);


    const deleteCourse = (req, res) => {
        const { courseId } = req.params;
        const status = dao.deleteCourse(courseId);
        res.send(status);
    };
    app.delete("/api/courses/:courseId", deleteCourse)


    const updateCourse = (req, res) => {
        const { courseId } = req.params;
        const courseUpdates = req.body;
        const status = dao.updateCourse(courseId, courseUpdates);
        res.send(status);
    };
    app.put("/api/courses/:courseId", updateCourse);

}
