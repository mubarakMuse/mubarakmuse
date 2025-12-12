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

/**
 * Convert course image path to public URL
 * @param {string} imagePath - The image path from JSON
 * @returns {string} The public URL path
 */
export function getCourseImageUrl(imagePath) {
  if (!imagePath) return null;
  
  // Handle relative paths like ./app/islamic-studies/images/file.png
  if (imagePath.startsWith('./app/islamic-studies/images/')) {
    return imagePath.replace('./app/islamic-studies/images/', '/islamic-studies/images/');
  }
  
  // Handle paths that already start with /
  if (imagePath.startsWith('/')) {
    return imagePath;
  }
  
  // Handle just filename
  if (!imagePath.includes('/')) {
    return `/islamic-studies/images/${imagePath}`;
  }
  
  // Default: extract filename and use it
  const filename = imagePath.split('/').pop();
  return `/islamic-studies/images/${filename}`;
}
