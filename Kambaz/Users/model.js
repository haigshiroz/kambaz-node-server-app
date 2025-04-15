import mongoose from "mongoose";
import schema from "./schema.js"; // Schema we define

const model = mongoose.model("UserModel", schema); // Title the model "UserModel" (?)

export default model;