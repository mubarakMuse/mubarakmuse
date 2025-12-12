import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSEOTags } from "@/libs/seo";
import QuizComponent from "../components/QuizComponent";
import CourseAccess from "../CourseAccess";
import AccessButton from "../components/AccessButton";
import LoginBanner from "../components/LoginBanner";
import CourseImage from "../components/CourseImage";
import { getCourseBySlug, getAllCourses, getCourseImageUrl } from "../courseUtils";

// Generate static params for all courses at build time
export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    slug: course.courseSlug,
  }));
}

// Generate metadata for each course
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found - Islamic Studies",
    };
  }

  return getSEOTags({
    title: `${course.courseTitle} - Online Islamic Studies`,
    description: course.courseDescription,
    keywords: ["Islamic studies", "online Islamic education", course.courseTitle],
    canonicalUrlRelative: `/islamic-studies/${slug}`,
  });
}

// Transform section - keep quiz as array to support multiple questions
const transformSection = (section) => {
  if (!section) return null;
  const transformed = { ...section };
  // Keep quiz as array to support multiple questions per section
  if (Array.isArray(section.quiz)) {
    transformed.quiz = section.quiz;
  } else if (section.quiz) {
    // If it's a single quiz object, wrap it in an array for consistency
    transformed.quiz = [section.quiz];
  } else {
    transformed.quiz = [];
  }
  return transformed;
};

// Helper function to convert YouTube URL to embed URL
const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;
  
  // Handle youtu.be format: https://youtu.be/VIDEO_ID
  const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (youtuBeMatch) {
    return `https://www.youtube.com/embed/${youtuBeMatch[1]}`;
  }
  
  // Handle youtube.com format: https://www.youtube.com/watch?v=VIDEO_ID
  const youtubeMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }
  
  // If already an embed URL, return as is
  if (url.includes('youtube.com/embed/')) {
    return url;
  }
  
  return null;
};

// Helper function to convert Loom URL to embed URL
const getLoomEmbedUrl = (url) => {
  if (!url) return null;
  
  // Handle loom.com/share format: https://www.loom.com/share/VIDEO_ID
  const loomShareMatch = url.match(/loom\.com\/share\/([a-zA-Z0-9_-]+)/);
  if (loomShareMatch) {
    return `https://www.loom.com/embed/${loomShareMatch[1]}`;
  }
  
  // If already an embed URL, return as is
  if (url.includes('loom.com/embed/')) {
    return url;
  }
  
  return null;
};

// Helper function to render content with proper formatting
const renderContent = (content) => {
  if (!content || !Array.isArray(content)) return null;
  
  return content.map((item, index) => {
    switch (item.type) {
      case "paragraph":
        // Parse bold text
        const parts = item.text.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={index} className="text-base leading-relaxed text-gray-700 mb-4">
            {parts.map((part, i) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={i} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
              }
              return <span key={i}>{part}</span>;
            })}
          </p>
        );
      case "heading":
        return (
          <h3 key={index} className="text-lg font-semibold mt-8 mb-4 text-gray-900">
            {item.text}
          </h3>
        );
      case "list":
        return (
          <ul key={index} className="mb-6 space-y-2">
            {item.items.map((listItem, i) => {
              const parts = listItem.split(/(\*\*.*?\*\*)/g);
              return (
                <li key={i} className="text-base leading-relaxed text-gray-700 flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <span>
                    {parts.map((part, j) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return <strong key={j} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
                      }
                      return <span key={j}>{part}</span>;
                    })}
                  </span>
                </li>
              );
            })}
          </ul>
        );
      case "quote":
        return (
          <blockquote key={index} className="my-8 pl-6 border-l-4 border-gray-300 italic text-base text-gray-700 bg-gray-50 py-4 rounded-r">
            {item.text}
          </blockquote>
        );
      case "video":
        const embedUrl = getYouTubeEmbedUrl(item.src);
        if (!embedUrl) {
          // Fallback: show as a link if URL conversion fails
          return (
            <div key={index} className="my-8">
              <a
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {item.alt || "Watch Video"}
              </a>
            </div>
          );
        }
        return (
          <div key={index} className="my-8">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={embedUrl}
                title={item.alt || "Video"}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {item.alt && (
              <p className="text-sm text-gray-600 mt-2 text-center">{item.alt}</p>
            )}
          </div>
        );
      case "loom video":
        const loomEmbedUrl = getLoomEmbedUrl(item.src);
        if (!loomEmbedUrl) {
          // Fallback: show as a link if URL conversion fails
          return (
            <div key={index} className="my-8">
              <a
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {item.alt || "Watch Loom Video"}
              </a>
            </div>
          );
        }
        return (
          <div key={index} className="my-8">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={loomEmbedUrl}
                title={item.alt || "Loom Video"}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {item.alt && (
              <p className="text-sm text-gray-600 mt-2 text-center">{item.alt}</p>
            )}
          </div>
        );
      default:
        return null;
    }
  });
};

const CoursePage = async ({ params }) => {
  const { slug } = await params;
  const courseDataRaw = getCourseBySlug(slug);

  // If course not found, show 404
  if (!courseDataRaw) {
    notFound();
  }

  // Transform course data from JSON format
  const courseData = {
    courseTitle: courseDataRaw.courseTitle,
    courseDescription: courseDataRaw.courseDescription,
    courseImage: courseDataRaw.courseImage,
    courseImageAlt: courseDataRaw.courseImageAlt,
    status: courseDataRaw.status || "Available Now",
    whatYouWillLearn: courseDataRaw.whatYouWillLearn || [],
    sections: (courseDataRaw.sections || []).map(transformSection).filter(Boolean),
  };

  const isAvailable = courseData.status === "Available Now";

  return (
    <CourseAccess courseTitle={courseData.courseTitle}>
      <div className="bg-white text-black min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-8">
          {/* Header with back button and login/logout */}
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
            <Link href="/islamic-studies" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              ← Back to Courses
            </Link>
            <AccessButton />
          </div>
          
          {/* Coming Soon Banner */}
          {!isAvailable && (
            <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r">
              <div className="flex items-center gap-2">
                <span className="text-lg">⏳</span>
                <div>
                  <p className="text-sm font-medium text-yellow-900">Coming Soon</p>
                  <p className="text-xs text-yellow-700 mt-1">This course is currently under development and will be available soon.</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Login Banner - shown when not logged in and course is available */}
          {isAvailable && <LoginBanner courseTitle={courseData.courseTitle} slug={slug} />}

          {/* Course Header */}
          <div className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              {courseData.courseImage && (
                <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                  <CourseImage
                    src={getCourseImageUrl(courseData.courseImage)}
                    alt={courseData.courseImageAlt || courseData.courseTitle}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-3 text-gray-900">
                  {courseData.courseTitle}
                </h1>
                <p className="text-base text-gray-600 leading-relaxed">
                  {courseData.courseDescription}
                </p>
              </div>
            </div>
          </div>

          {/* What You Will Learn */}
          {courseData.whatYouWillLearn.length > 0 && (
            <div className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">What You Will Learn</h2>
              <ul className="space-y-3">
                {courseData.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="text-sm leading-relaxed text-gray-700 flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Course Sections - only show if course is available */}
          {isAvailable ? (
            <div className="space-y-16">
              {courseData.sections.map((section) => (
              <div key={section.sectionNumber} id={`section-${section.sectionNumber}`} className="scroll-mt-8">
                <div className="mb-6 pb-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Section {section.sectionNumber}: {section.sectionTitle}
                  </h2>
                </div>
                
                {section.vocab && section.vocab.length > 0 && (
                  <div className="mb-8 p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                    <h3 className="text-sm font-semibold mb-4 text-gray-900 uppercase tracking-wide">Key Vocabulary</h3>
                    <div className="grid gap-3">
                      {section.vocab.map((vocabItem, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-2 text-sm">
                          <span className="font-semibold text-gray-900">{vocabItem.term}</span>
                          <span className="text-gray-600">— {vocabItem.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-6 mb-8">
                  {renderContent(section.content || [])}
                </div>
                
                {section.quiz && Array.isArray(section.quiz) && section.quiz.length > 0 && (
                  <div className="mt-10">
                    <QuizComponent 
                      quiz={section.quiz}
                      sectionNumber={section.sectionNumber}
                    />
                  </div>
                )}
              </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-gray-600 mb-4">This course content will be available soon.</p>
              <a 
                href="mailto:Mubarak014@gmail.com?subject=Course Inquiry"
                className="text-sm text-gray-900 hover:text-gray-700 underline"
              >
                Contact us for updates
              </a>
            </div>
          )}

          {/* Quiz Section - only show if course is available */}
          {isAvailable && courseData.sections.some(s => s.quiz && Array.isArray(s.quiz) && s.quiz.length > 0) && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Ready to Test Your Knowledge?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Take the complete course quiz with all questions from all sections.
                </p>
                <Link
                  href={`/islamic-studies/${slug}/quiz`}
                  className="inline-block px-6 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Take Complete Quiz →
                </Link>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">
                  Questions about this course?
                </p>
                <a 
                  href={`mailto:Mubarak014@gmail.com?subject=${encodeURIComponent(courseData.courseTitle)} Course Inquiry`}
                  className="text-sm text-gray-900 hover:text-gray-700 underline"
                >
                  Contact Us
                </a>
              </div>
              <Link 
                href="/islamic-studies" 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                ← Back to All Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CourseAccess>
  );
};

export default CoursePage;
