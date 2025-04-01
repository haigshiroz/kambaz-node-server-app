let todos = [
    { id: 1, title: "Task 1", completed: false, description: "Description 1" },
    { id: 2, title: "Task 2", completed: true, description: "Description 2" },
    { id: 3, title: "Task 3", completed: false, description: "Description 3" },
    { id: 4, title: "Task 4", completed: true, description: "Description 4" },
];

export default function WorkingWithArrays(app) {
    app.get("/lab5/todos", (req, res) => {
        const { completed } = req.query;

        // If there's a user query (and that query is completed)
        if (completed !== undefined) {
            const completedBool = completed === "true"; // Convert from string
            const completedTodos = todos.filter(
                (t) => t.completed === completedBool);
            res.json(completedTodos);
            return;
        }

        // Else, just return all todos
        res.json(todos);
    });

    app.get("/lab5/todos/create", (req, res) => {
        // Create new todo
        const newTodo = {
            id: new Date().getTime(),
            title: "New Task",
            completed: false,
        };

        // Add to list
        todos.push(newTodo);

        // Return total list
        res.json(todos);
    });

    app.get("/lab5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        res.json(todo);
    });

    app.get("/lab5/todos/:id/delete", (req, res) => {
        const { id } = req.params;
        const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
        if (todoIndex === -1) {
            console.log("Item with id " + id + " not found.");
            res.json(todos);
            return;
        }
        todos.splice(todoIndex, 1);
        res.json(todos);
    });

    app.get("/lab5/todos/:id/title/:newTitle", (req, res) => {
        const { id, newTitle } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        if (todo === undefined) {
            console.log("Item with id " + id + " not found.");
            res.json(todos);
            return;
        }
        todo.title = newTitle;
        res.json(todos);
    });

    app.get("/lab5/todos/:id/description/:newDescription", (req, res) => {
        const { id, newDescription } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        if (todo === undefined) {
            console.log("Item with id " + id + " not found.");
            res.json(todos);
            return;
        }
        todo.description = newDescription;
        res.json(todos);
    });

    app.get("/lab5/todos/:id/completed/:newCompleted", (req, res) => {
        const { id, newCompleted } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        if (todo === undefined) {
            console.log("Item with id " + id + " not found.");
            res.json(todos);
            return;
        }
        todo.completed = newCompleted === "true";
        res.json(todos);
    });

};
