import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


// Read
export function enrollments() {
    const { enrollments } = Database;
    return enrollments;
}

// Create
export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

// Delete
export function unenrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((e) => e.user !== userId || e.course !== courseId);
    return Database.enrollments;
}