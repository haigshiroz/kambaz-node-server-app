import * as modulesDao from "./dao.js";


export default function ModuleRoutes(app) {
    const deleteModule = (req, res) => {
        const { moduleId } = req.params;
        const status = modulesDao.deleteModule(moduleId);
        res.send(status);
    };
    app.delete("/api/modules/:moduleId", deleteModule);


    const updateModule = (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const status = modulesDao.updateModule(moduleId, moduleUpdates);
        res.send(status);
    };
    app.put("/api/modules/:moduleId", updateModule);
}
