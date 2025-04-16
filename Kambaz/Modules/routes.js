import * as modulesDao from "./dao.js";


export default function ModuleRoutes(app) {
    const getModule = async (req, res) => {
        const { courseId } = req.params;
        const modules = await modulesDao.findModulesForCourse(courseId);
        res.json(modules);
    };
    app.get("/api/courses/:courseId/modules", getModule);


    const deleteModule = async (req, res) => {
        const { moduleId } = req.params;
        const status = await modulesDao.deleteModule(moduleId);
        res.send(status);
    };
    app.delete("/api/modules/:moduleId", deleteModule);


    const updateModule = async (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const status = await modulesDao.updateModule(moduleId, moduleUpdates);
        res.send(status);
    };
    app.put("/api/modules/:moduleId", updateModule);
}
