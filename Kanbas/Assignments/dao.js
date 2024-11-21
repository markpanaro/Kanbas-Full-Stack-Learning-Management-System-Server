import Database from "../Database/index.js";
export function findAllAssignments() {
    return Database.assignments;
}

export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === courseId);
}
