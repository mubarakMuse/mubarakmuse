// Resume.js
import React from 'react';
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Mubarak Muse - Resume | Software Engineer",
  description: "Software engineer resume with experience at Amazon, Collective Health, and BrighterTunnel. Full-stack developer specializing in Java, JavaScript, Python, and AWS.",
  keywords: ["Mubarak Muse", "resume", "software engineer", "full-stack developer", "Amazon", "Minneapolis", "BrighterTunnel"],
  canonicalUrlRelative: "/resume",
});

const Resume = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-xl mx-auto px-6 py-6">
        <header className="text-center mb-8 pb-8 border-b border-gray-200">
          <h1 className="text-2xl font-bold mb-4">Mubarak Muse</h1>
          <p className="text-sm mb-4">765-351-1316 | Mubarak014@gmail.com | Minneapolis, MN</p>
          <div className="flex justify-center gap-4 flex-wrap text-sm">
            <a
              href="https://www.linkedin.com/in/mubarak-muse"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
            <span>|</span>
            <a
              href="https://github.com/mubarakMuse"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>
          </div>
        </header>

        <section className="my-8">
          <h2 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">RELEVANT EXPERIENCE</h2>
          
          <div className="mb-8">
            <div className="mb-6">
              <div className="mb-2">
                <h3 className="text-base font-bold">Brighter Tunnel — Software Engineer</h3>
                <p className="text-sm text-gray-600">Remote | Mar 2023 - Present</p>
              </div>
              <ul className="list-disc ml-6 space-y-2 text-sm">
                <li>Built a Learning Management System for a large Sunday school to manage classes, teachers, and students using NextJS, NodeJS, and Cussor for AI-assisted coding.</li>
                <li>Designed and implemented an EV fleet management web app using NodeJS, React, PostgreSQL, and AWS for charger tracking and operations.</li>
                <li>Led technical interviewing for a client (PGLS), conducting interviews and advising on hiring decisions for full-stack, Machine Learning (ML), and mobile engineers.</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="mb-2">
                <h3 className="text-base font-bold">Amazon — Software Engineer</h3>
                <p className="text-sm text-gray-600">Minneapolis, MN | Aug 2022 – Mar 2023</p>
              </div>
              <ul className="list-disc ml-6 space-y-2 text-sm">
                <li>Built a Java, Kotlin + React full-stack logistics dashboard for Amazon Freight to streamline shipment tracking.</li>
                <li>Developed a Python + AWS Lambda/Step Functions system to reroute trucks during disasters, with automated testing for reliability.</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="mb-2">
                <h3 className="text-base font-bold">Collective Health — Software Engineer</h3>
                <p className="text-sm text-gray-600">San Francisco, CA | May 2018 – Oct 2021</p>
              </div>
              <ul className="list-disc ml-6 space-y-2 text-sm">
                <li>Built backend services with Java, Spring Boot, NodeJS, GraphQL, and PostgreSQL to manage health benefit plans. Deployed via Kubernetes, Docker, AWS EC2, with CI/CD in Jenkins.</li>
                <li>Developed a Python system integrating GitHub API, Airtable API, and GraphQL to automate medical code workflows. Deployed with Kubernetes Cron Jobs and monitored via Grafana.</li>
                <li>Designed a scalable Java + PostgreSQL messaging system across 15+ REST APIs, improving reliability with continuous testing and deployment.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">EDUCATION</h2>
          <div className="mb-4">
            <h3 className="text-base font-semibold">University of Minnesota – Twin Cities</h3>
            <p className="text-sm">Bachelor of Science, Computer Science</p>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">SKILLS</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Languages & Frameworks:</h3>
              <p>Java, JavaScript, TypeScript, Node.js, Python, Next.js, React, AngularJS, Go, C++, Ruby on Rails, Spring Boot, DropWizard, Flask, Express, HTML, CSS, JSP, jQuery, Mockito</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Databases:</h3>
              <p>PostgreSQL, DynamoDB, Redis, AWS Aurora, Oracle, SQL</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cloud & DevOps:</h3>
              <p>Amazon Web Services (AWS) – Lambda, Step Functions, EC2, S3, CloudWatch, Bedrock, SQS/SNS, EventBridge; Docker, Kubernetes, Jenkins, Gradle, CI/CD pipelines</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tools & Practices:</h3>
              <p>GitHub, Git, Visual Studio Code, Hibernate, Maven, REST APIs, Postman, Swagger, Service-Oriented Architecture (SOA), Grafana, Datadog, Agile, Shell Scripting, UNIX/Linux</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Languages:</h3>
              <p>Arabic (Fluent), English (Fluent), Somali (Fluent), Spanish (Beginner)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
