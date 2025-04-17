import mongoose from "mongoose";


const enrollmentSchema = new mongoose.Schema(
    {
        _id: String,
        course: { type: String, ref: "CourseModel" }, // contains ID to a Course
        user: { type: String, ref: "UserModel" }, // Contains ID to a User
        grade: Number,
        letterGrade: String,
        enrollmentDate: Date,
        status: {
            type: String,
            enum: ["ENROLLED", "DROPPED", "COMPLETED"],
            default: "ENROLLED",
        },
    },
    { collection: "enrollments" }
);

export default enrollmentSchema;