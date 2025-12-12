import coursesData from './courses.json';

/**
 * Get all courses from the catalog
 * @returns {Array} Array of all courses
 */
export function getAllCourses() {
  return coursesData.courses || [];
}

/**
 * Get a course by its slug
 * @param {string} slug - The course slug
 * @returns {Object|null} The course object or null if not found
 */
export function getCourseBySlug(slug) {
  const courses = getAllCourses();
  return courses.find(course => course.courseSlug === slug) || null;
}

/**
 * Get a course by its ID
 * @param {string} courseID - The course ID
 * @returns {Object|null} The course object or null if not found
 */
export function getCourseById(courseID) {
  const courses = getAllCourses();
  return courses.find(course => course.courseID === courseID) || null;
}
