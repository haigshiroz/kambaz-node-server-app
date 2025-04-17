import model from "./model.js";


// Find (by user)
export async function findCoursesForUser(userId) {
    // Populate makes it so that instead of finding course IDs, we get the actual courses
    const enrollments = await model.find({ user: userId }).populate("course");
    return enrollments.map((enrollment) => enrollment.course);
}


// Find (by course)
export async function findUsersForCourse(courseId) {
    // Populate makes it so that instead of getting the user IDs, we get the actual users
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
}

// Create
export function enrollUserInCourse(user, course) {
    return model.create({ user, course, _id: `${user}-${course}` });
}

// Delete
export function unenrollUserInCourse(user, course) {
    return model.deleteOne({ user, course });
}

// Delete all enrollments from a course
export function unenrollAllUsersFromCourse(courseId) {
    return model.deleteMany({ course: courseId })
}