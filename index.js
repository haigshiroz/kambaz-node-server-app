import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import PathParameters from './Lab5/PathParameters.js';

const app = express()

Lab5(app);
Hello(app);
PathParameters(app);

app.listen(process.env.PORT || 4000)
