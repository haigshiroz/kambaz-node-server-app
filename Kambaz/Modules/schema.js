import mongoose from "mongoose";


const schema = new mongoose.Schema(
    {
        _id: String,
        name: String,
        description: String,

        // "CourseModel" comes from the name we gave in /Courses/model.js
        // Says that course has a key that refers to something in CourseModel
        course: { type: String, ref: "CourseModel" }, 
    },
    { collection: "modules" }
);

export default schema;