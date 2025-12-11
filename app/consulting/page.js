import React from "react";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Software Consulting Services - Mubarak Muse",
  description: "General software consulting service specializing in building custom software solutions and AI integrations. Expert in full-stack development, AI integration, and technical architecture.",
  keywords: ["software consulting", "AI integration", "custom software development", "web development", "software engineer", "technical consulting"],
  canonicalUrlRelative: "/consulting",
});

const Consulting = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-xl mx-auto px-6 py-6">
        <h1 className="text-xl font-bold mb-8">
          Software Consulting Services
        </h1>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">What I Offer</h2>
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold">
                Custom Software Development
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Build scalable web applications, APIs, and full-stack solutions tailored to your business needs. 
                From concept to deployment, I help bring your ideas to life.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                AI Integration
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Integrate AI capabilities into your existing systems or build new AI-powered features. 
                Leverage modern AI tools to automate processes and enhance user experiences.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                Technical Architecture
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Design and implement robust, scalable architectures for your software projects. 
                Ensure your systems are maintainable, secure, and performant.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                Code Review & Optimization
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Review existing codebases, identify improvements, and optimize performance. 
                Help your team write better, more maintainable code.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">Technologies I Work With</h2>
          <div className="text-sm space-y-4">
            <div>
              <p className="mb-2 text-sm font-semibold">Languages & Frameworks</p>
              <p className="text-sm">JavaScript, TypeScript, Python, Java, Node.js, React, Next.js, Express, Spring Boot</p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">AI & Machine Learning</p>
              <p className="text-sm">OpenAI API, LangChain, AI model integration, prompt engineering, AI-assisted development</p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">Databases</p>
              <p className="text-sm">PostgreSQL, MongoDB, DynamoDB, Redis, SQL</p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">Cloud & DevOps</p>
              <p className="text-sm">AWS (Lambda, EC2, S3, CloudWatch), Docker, Kubernetes, CI/CD pipelines</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-4">Let's Work Together</h2>
          <p className="mb-2 text-sm leading-relaxed">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>
          <p className="text-sm">
            <a href="mailto:Mubarak014@gmail.com?subject=Consulting Inquiry" className="underline">
              Mubarak014@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consulting;

