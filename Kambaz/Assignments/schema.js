import mongoose from "mongoose";


const assignmentSchema = new mongoose.Schema({
    _id: String,
    title: String,
    course: { type: String, ref: "CourseModel" }, // contains ID to a Course
    date_available: Date,
    date_due: Date,
    date_until: Date,
    points: Number,
    description: String,
    assignment_group: {
        type: String,
        enum: ["ASSIGNMENTS", "QUIZZES", "EXAM", "PROJECT"],
        default: "ASSIGNMENTS",
    },
    display_grade_as: {
        type: String,
        enum: ["PERCENTAGE", "POINTS", "COMPLETENE_INCOMPLETE", "LETTER_GRADE", "GPA_SCALE", "NOT_GRADED"],
        default: "PERCENTAGE",
    },
    submission_type: {
        type: String,
        enum: ["NO_SUBMISSION", "ONLINE", "ON_PAPER", "EXTERNAL_TOOL", "LUCID"],
        default: "ONLINE",
    }
},
    { collection: "assignments" }
);

export default assignmentSchema;
