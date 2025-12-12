import React from "react";
import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import { getAllCourses } from "./courseUtils";
import AccessButton from "./components/AccessButton";

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
            {courses.map((course) => (
              <div key={course.courseID} className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <Link href={`/islamic-studies/${course.courseSlug}`} className="block group">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {course.courseTitle}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {course.courseDescription}
                  </p>
                  <span className="inline-block mt-3 text-sm text-gray-500 group-hover:text-gray-700">
                    View Course →
                  </span>
                </Link>
              </div>
            ))}
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
