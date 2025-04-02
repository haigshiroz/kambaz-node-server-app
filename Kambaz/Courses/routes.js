import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";


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


    const getModulesForCourse = (req, res) => {
        const { courseId } = req.params;
        const modules = modulesDao.findModulesForCourse(courseId);
        res.json(modules);
    };
    app.get("/api/courses/:courseId/modules", getModulesForCourse);

    
    const createModule = (req, res) => {
        const { courseId } = req.params;
        const module = {
            ...req.body,
            course: courseId,
        };
        const newModule = modulesDao.createModule(module);
        res.send(newModule);
    };
    app.post("/api/courses/:courseId/modules", createModule);

}
