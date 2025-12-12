import React from "react";
import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import { getAllCourses, getCourseImageUrl } from "./courseUtils";
import AccessButton from "./components/AccessButton";
import CourseImage from "./components/CourseImage";

export const metadata = getSEOTags({
  title: "Online Islamic Studies - Mubarak Muse",
  description: "Structured, online Islamic education for the modern family. Learn Islamic studies from qualified teachers in a flexible, accessible format.",
  keywords: ["Islamic studies", "online Islamic education", "Quran classes", "Islamic learning", "Muslim education", "online religious education"],
  canonicalUrlRelative: "/islamic-studies",
});

const IslamicStudies = () => {
  const courses = getAllCourses();

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Header with login/logout */}
        <div className="flex justify-end mb-8">
          <AccessButton />
        </div>

        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-3 text-gray-900">
            Online Islamic Studies
          </h1>
          <p className="text-base text-gray-600">
            Structured, online Islamic education for the modern family.
          </p>
        </div>

        <div className="mb-12">
          <div className="text-base leading-relaxed space-y-4 text-gray-700">
            <p>
              We provide structured, comprehensive Islamic education online. Our curriculum is designed for modern families who want authentic Islamic knowledge that fits into their busy lives.
            </p>
            <p>
              Learn from qualified teachers, study at your own pace, and connect with a community of learners committed to understanding their faith.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Available Courses</h2>
          <div className="space-y-6">
            {courses.map((course) => {
              const isAvailable = course.status === "Available Now";
              const CourseCard = (
                <div key={course.courseID} className={`p-6 border rounded-lg transition-colors ${
                  isAvailable 
                    ? 'border-gray-200 hover:border-gray-300' 
                    : 'border-gray-200 bg-gray-50 opacity-75'
                }`}>
                  <div className="flex gap-4">
                    {course.courseImage && (
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                        <CourseImage
                          src={getCourseImageUrl(course.courseImage)}
                          alt={course.courseImageAlt || course.courseTitle}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className={`text-lg font-semibold ${
                          isAvailable ? 'text-gray-900' : 'text-gray-600'
                        }`}>
                          {course.courseTitle}
                        </h3>
                        {!isAvailable && (
                          <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full whitespace-nowrap">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-sm leading-relaxed text-gray-600 mb-3">
                        {course.courseDescription}
                      </p>
                      {isAvailable ? (
                        <Link 
                          href={`/islamic-studies/${course.courseSlug}`}
                          className="inline-block text-sm text-gray-900 hover:text-gray-700 font-medium"
                        >
                          View Course →
                        </Link>
                      ) : (
                        <span className="inline-block text-sm text-gray-400">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );

              return isAvailable ? (
                <Link key={course.courseID} href={`/islamic-studies/${course.courseSlug}`} className="block">
                  {CourseCard}
                </Link>
              ) : (
                CourseCard
              );
            })}
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <a 
            href="mailto:Mubarak014@gmail.com?subject=Islamic Studies Inquiry" 
            className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default IslamicStudies;
