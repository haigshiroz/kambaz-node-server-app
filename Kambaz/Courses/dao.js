// import Database from "../Database/index.js";
import model from "./model.js";
import * as enrollmentsModel from "../Enrollments/model.js";

import { v4 as uuidv4 } from "uuid";


export function findAllCourses() {
    return model.find();
}

// export function findCoursesForUser(userId) {
//     const { courses, enrollments } = Database;

//     const enrolledCourses = courses.map(
//         (course) => ({
//             ...course,
//             isEnrolled: enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id),
//         }
//         ));
//     return enrolledCourses;
// }


export function createCourse(course) {
    const newCourse = { ...course, _id: uuidv4() };
    return model.create(newCourse);
}


export function deleteCourse(courseId) {
    return model.deleteOne({ _id: courseId });
}


export function updateCourse(courseId, courseUpdates) {
    return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}

// export function findPeopleForCourse(courseId) {
//     const { users, enrollments } = Database;

//     const people = users.filter((usr) => enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === courseId))
//     return people;
// }