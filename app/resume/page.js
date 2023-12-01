// Resume.js
import React from 'react';

const Resume = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
        <header className="text-center">
          <h1 className="text-4xl font-semibold">Mubarak Muse</h1>
          <p className="text-gray-500">+16128149554 | mubarak014@gmail.com</p>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/mubarak-muse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mx-2"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mubarakMuse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mx-2"
            >
              GitHub
            </a>
          </div>
        </header>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <p className="text-gray-700">
            Experienced software engineer with a strong background in full-stack development. Proficient in a wide range of technologies and programming languages, with a proven track record of delivering high-quality software solutions.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="mb-8">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Amazon</h3>
              <p className="text-gray-700">Software Engineer</p>
              <p className="text-gray-600">08/2022 - 03/2023</p>
              <ul className="list-disc ml-8">
                <li>{`Developed a full-stack logistics dashboard to provide real-time insights into Amazon's freight operations`}.</li>
                <li>Designed and implemented a system for bulk updating Amazon truck routes during national emergencies.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Collective Health, San Francisco, CA</h3>
              <p className="text-gray-700">Software Engineer</p>
              <p className="text-gray-600">05/2018 - 10/2021</p>
              <ul className="list-disc ml-8">
                <li>Engineered a scalable backend alerting infrastructure with 15+ APIs to replace email notifications for system outages, resulting in improved efficiency and reduced downtime.</li>
                <li>Managed and maintained three backend microservices (two Java and one Node.js) with 90+ endpoints to standardize and normalize plan and benefit data. This enabled robust plan configuration for 60+ clients.</li>
                <li>Spearheaded the standardization of testing and release processes for four backend services, leading to improved development efficiency and reduced errors.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Medtronic, Minneapolis, MN</h3>
              <p className="text-gray-700">Engineering Summer Intern</p>
              <p className="text-gray-600">05/2013 - 09/2013</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Code Tenderloin, San Francisco, CA (Volunteer)</h3>
              <p className="text-gray-700">Coding Bootcamp Teaching Assistant</p>
              <p className="text-gray-600">01/2020 - Present</p>
            </div>
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 pr-4">
              <ul className="list-disc ml-8">
                <li>Node.js</li>
                <li>React.js</li>
                <li>Java</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>SQL</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Git</li>
                <li>RESTful API</li>
                <li>Agile Scrum methodology</li>
                <li>Test-Driven Development (TDD)</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="list-disc ml-8">
                <li>Spring Boot</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>GitHub</li>
                <li>IntelliJ</li>
                <li>Visual Studio Code</li>
                <li>Hibernate</li>
                <li>Maven</li>
                <li>JUnit</li>
                <li>SOA (Service-Oriented Architecture)</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">University Of Minnesota (Twin Cities)</h3>
            <p className="text-gray-700">Bachelor of Science in Computer Science</p>
            <p className="text-gray-600">Graduated: May 2018</p>
          </div>
          {/* Add more education details here */}
        </section>
      </div>
    </div>
  );
};

export default Resume;
