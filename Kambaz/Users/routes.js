import * as dao from "./dao.js";

let currentUser = null;

export default function UserRoutes(app) {
    const createUser = (req, res) => { };
    app.post("/api/users", createUser);


    const deleteUser = (req, res) => { };
    app.delete("/api/users/:userId", deleteUser);


    const findAllUsers = (req, res) => { };
    app.get("/api/users", findAllUsers);


    const findUserById = (req, res) => { };
    app.get("/api/users/:userId", findUserById);


    const updateUser = (req, res) => {
        const userId = req.params.userId;
        const userUpdates = req.body;
        dao.updateUser(userId, userUpdates);
        currentUser = dao.findUserById(userId);
        res.json(currentUser);
    };
    app.put("/api/users/:userId", updateUser);


    const signup = (req, res) => {
        const user = dao.findUserByUsername(req.body.username);
        if (user) {
            res.status(400).json({ message: "Username already in use" });
            return;
        }
        currentUser = dao.createUser(req.body);
        res.json(currentUser);
    };
    app.post("/api/users/signup", signup);


    const signin = (req, res) => {
        const { username, password } = req.body;
        currentUser = dao.findUserByCredentials(username, password);
        // Pending error checking
        res.json(currentUser);
    };
    app.post("/api/users/signin", signin);


    const signout = (req, res) => {
        currentUser = null;
        res.sendStatus(200);
    };
    app.post("/api/users/signout", signout);


    const profile = (req, res) => {
        res.json(currentUser);
    };
    app.post("/api/users/profile", profile);
}
