import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as assignmentsDao from "../Assignments/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";


export default function CourseRoutes(app) {
    const courses = async (req, res) => {
        const courses = await dao.findAllCourses();
        res.send(courses);
    };
    app.get("/api/courses", courses);


    const createCourse = async (req, res) => {
        // Create course
        const course = await dao.createCourse(req.body);

        // Enroll the user who made the course
        const currentUser = req.session["currentUser"];
        if (currentUser) {
            await enrollmentsDao.enrollUserInCourse(currentUser._id, course._id);
        }

        // Return the course
        res.json(course);
    };
    app.post("/api/courses", createCourse);


    const deleteCourse = async (req, res) => {
        const { courseId } = req.params;
        const status = await dao.deleteCourse(courseId);
        await enrollmentsDao.unenrollAllUsersFromCourse(courseId);
        res.send(status);
    };
    app.delete("/api/courses/:courseId", deleteCourse)


    const updateCourse = async (req, res) => {
        const { courseId } = req.params;
        const courseUpdates = req.body;
        const status = await dao.updateCourse(courseId, courseUpdates);
        res.send(status);
    };
    app.put("/api/courses/:courseId", updateCourse);


    const getModulesForCourse = async (req, res) => {
        const { courseId } = req.params;
        const modules = await modulesDao.findModulesForCourse(courseId);
        res.json(modules);
    };
    app.get("/api/courses/:courseId/modules", getModulesForCourse);


    const createModule = async (req, res) => {
        const { courseId } = req.params;
        const module = {
            ...req.body,
            course: courseId,
        };
        const newModule = await modulesDao.createModule(module);
        res.send(newModule);
    };
    app.post("/api/courses/:courseId/modules", createModule);


    const getAssignmentsForCourse = async (req, res) => {
        const { courseId } = req.params;
        const assignments = await assignmentsDao.findAssignmentsForCourse(courseId);
        res.json(assignments);
    };
    app.get("/api/courses/:courseId/assignments", getAssignmentsForCourse);


    const createAssignment = async (req, res) => {
        const { courseId } = req.params;
        const assignment = {
            ...req.body,
            course: courseId,
        };
        const newAssignment = await assignmentsDao.createAssignment(assignment);
        res.send(newAssignment);
    };
    app.post("/api/courses/:courseId/assignments", createAssignment);

    // const findPeopleForCourse = async (req, res) => {
    //     const { courseId } = req.params;

    //     const people = await dao.findPeopleForCourse(courseId)
    //     res.send(people)
    // };
    // app.get("/api/courses/:courseId/people", findPeopleForCourse);


    const findUsersForCourse = async (req, res) => {
        const { cid } = req.params;
        const users = await enrollmentsDao.findUsersForCourse(cid);
        res.json(users);
    };
    app.get("/api/courses/:cid/users", findUsersForCourse);
}
