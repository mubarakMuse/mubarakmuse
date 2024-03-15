import React from 'react';
// import ButtonCheckout from './ButtonCheckout'; // Use this button for your checkout/sign-up process.
import img from "@/app/picofme.png"
import Image from 'next/image';
import Link from 'next/link';
const TafseerCourses = () => {
  const courses = [
    {
      id: 'high-school',
      title: 'High School Tafseer (online available)',
      day: 'Sundays',
      time: '12:30 PM - 2:30 PM Minnesota (5:30 PM - 7:30 PM UK Time)',
      location: 'Minneapolis, MN [in-person or Online via Zoom]',
      ages: '13-18 years old',
      cost: '$50/Month',
      link: 'https://forms.gle/n8RNvsL8Jtvzbneb9',
      buttonText: 'Sign Up Here'
    },
    {
      id: 'middle-school',
      title: 'Middle School Tafseer',
      day: 'Mondays',
      time: '6:30 PM - 8:00 PM Minnesota',
      location: 'Minneapolis, MN 55404 [in-person only]',
      ages: '10-13 years old',
      cost: '$50/Month',
      contact: 'Call 612-814-9445',
      link: 'https://forms.gle/VC2e3QghBJW24D1v7',
      buttonText: 'Sign Up Here'
    }
   
  ];

  return (
    <section className="bg-white py-16 px-4">
      <Link href="/" className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
            clipRule="evenodd"
          />
        </svg>{" "}
        Back
      </Link>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Tafseer Classes Enrollment</h2>
          <p className="mt-4 text-xl text-gray-600">{"Select the class that best fits your child's age group."}</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {courses.map((course) => (
            <div key={course.id} className="bg-blue-100 rounded-xl p-8 shadow-lg transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">{course.title}</h3>
              <div className="text-black mb-4">
                <p>Day: {course.day}</p>
                <p>Time: {course.time}</p>
                <p>Location: {course.location}</p>
                <p>Ages: {course.ages}</p>
                <p>Cost: {course.cost}</p>
              </div>
              <a href={course.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mt-4 transition duration-300 ease-in-out hover:bg-blue-700">
                {course.buttonText}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
        <Image src={img} alt={`${"sdaa"}`} className="w-24 h-24 rounded-full mx-auto mb-3"/>

          <p className="text-gray-600">For more information, please contact us at <a href="tel:+16128149445" className="text-blue-600 hover:underline">+1 612-814-9445</a> or email us at <a href="mailto:Mubarak014@gmail.com" className="text-blue-600 hover:underline">Mubarak014@gmail.com</a>.</p>
        </div>
      </div>
    </section>
  );
};

export default TafseerCourses;
