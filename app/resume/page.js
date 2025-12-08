// Resume.js
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Resume = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 px-4">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-4xl mx-auto">
          <header className="text-center mb-8 pb-8 border-b border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mubarak Muse</h1>
            <p className="text-gray-600 mb-4">765-351-1316 | Mubarak014@gmail.com | Minneapolis, MN</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/mubarak-muse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                https://www.linkedin.com/in/mubarak-muse
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="https://github.com/mubarakMuse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                https://github.com/mubarakMuse
              </a>
            </div>
          </header>

          <section className="my-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">RELEVANT EXPERIENCE</h2>
            
            <div className="mb-8">
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Brighter Tunnel — Software Engineer</h3>
                  <p className="text-gray-600 text-sm md:text-base">Remote | Mar 2023 - Present</p>
                </div>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Built a Learning Management System for a large Sunday school to manage classes, teachers, and students using NextJS, NodeJS, and Cussor for AI-assisted coding.</li>
                  <li>Designed and implemented an EV fleet management web app using NodeJS, React, PostgreSQL, and AWS for charger tracking and operations.</li>
                  <li>Led technical interviewing for a client (PGLS), conducting interviews and advising on hiring decisions for full-stack, Machine Learning (ML), and mobile engineers.</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Amazon — Software Engineer</h3>
                  <p className="text-gray-600 text-sm md:text-base">Minneapolis, MN | Aug 2022 – Mar 2023</p>
                </div>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Built a Java, Kotlin + React full-stack logistics dashboard for Amazon Freight to streamline shipment tracking.</li>
                  <li>Developed a Python + AWS Lambda/Step Functions system to reroute trucks during disasters, with automated testing for reliability.</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Collective Health — Software Engineer</h3>
                  <p className="text-gray-600 text-sm md:text-base">San Francisco, CA | May 2018 – Oct 2021</p>
                </div>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Built backend services with Java, Spring Boot, NodeJS, GraphQL, and PostgreSQL to manage health benefit plans. Deployed via Kubernetes, Docker, AWS EC2, with CI/CD in Jenkins.</li>
                  <li>Developed a Python system integrating GitHub API, Airtable API, and GraphQL to automate medical code workflows. Deployed with Kubernetes Cron Jobs and monitored via Grafana.</li>
                  <li>Designed a scalable Java + PostgreSQL messaging system across 15+ REST APIs, improving reliability with continuous testing and deployment.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">EDUCATION</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900">University of Minnesota – Twin Cities</h3>
              <p className="text-gray-700">Bachelor of Science, Computer Science</p>
            </div>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">SKILLS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Languages & Frameworks:</h3>
                <p className="text-gray-700">Java, JavaScript, TypeScript, Node.js, Python, Next.js, React, AngularJS, Go, C++, Ruby on Rails, Spring Boot, DropWizard, Flask, Express, HTML, CSS, JSP, jQuery, Mockito</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Databases:</h3>
                <p className="text-gray-700">PostgreSQL, DynamoDB, Redis, AWS Aurora, Oracle, SQL</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cloud & DevOps:</h3>
                <p className="text-gray-700">Amazon Web Services (AWS) – Lambda, Step Functions, EC2, S3, CloudWatch, Bedrock, SQS/SNS, EventBridge; Docker, Kubernetes, Jenkins, Gradle, CI/CD pipelines</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tools & Practices:</h3>
                <p className="text-gray-700">GitHub, Git, Visual Studio Code, Hibernate, Maven, REST APIs, Postman, Swagger, Service-Oriented Architecture (SOA), Grafana, Datadog, Agile, Shell Scripting, UNIX/Linux</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Languages:</h3>
                <p className="text-gray-700">Arabic (Fluent), English (Fluent), Somali (Fluent), Spanish (Beginner)</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
