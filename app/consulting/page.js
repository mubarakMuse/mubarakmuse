import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Software Consulting Services - Mubarak Muse",
  description: "General software consulting service specializing in building custom software solutions and AI integrations. Expert in full-stack development, AI integration, and technical architecture.",
  keywords: ["software consulting", "AI integration", "custom software development", "web development", "software engineer", "technical consulting"],
  canonicalUrlRelative: "/consulting",
});

const Consulting = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 tracking-tight">
              Software Consulting Services
            </h1>
            <p className="text-xl text-indigo-700 max-w-2xl mx-auto font-medium">
              Building custom software solutions and AI integrations to help your business grow and innovate
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 text-center">What I Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-blue-300 hover:border-purple-400 hover:shadow-xl transition-all hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Custom Software Development</h3>
                <p className="text-gray-700">
                  Build scalable web applications, APIs, and full-stack solutions tailored to your business needs. 
                  From concept to deployment, I help bring your ideas to life.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-indigo-300 hover:border-purple-400 hover:shadow-xl transition-all hover:scale-105">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">AI Integration</h3>
                <p className="text-gray-700">
                  Integrate AI capabilities into your existing systems or build new AI-powered features. 
                  Leverage modern AI tools to automate processes and enhance user experiences.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-purple-300 hover:border-indigo-400 hover:shadow-xl transition-all hover:scale-105">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">Technical Architecture</h3>
                <p className="text-gray-700">
                  Design and implement robust, scalable architectures for your software projects. 
                  Ensure your systems are maintainable, secure, and performant.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-pink-300 hover:border-purple-400 hover:shadow-xl transition-all hover:scale-105">
                <h3 className="text-xl font-semibold text-pink-700 mb-3">Code Review & Optimization</h3>
                <p className="text-gray-700">
                  Review existing codebases, identify improvements, and optimize performance. 
                  Help your team write better, more maintainable code.
                </p>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 text-center">Technologies I Work With</h2>
            <div className="bg-white rounded-xl p-8 border-2 border-indigo-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Languages & Frameworks</h4>
                  <p>JavaScript, TypeScript, Python, Java, Node.js, React, Next.js, Express, Spring Boot</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI & Machine Learning</h4>
                  <p>OpenAI API, LangChain, AI model integration, prompt engineering, AI-assisted development</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Databases</h4>
                  <p>PostgreSQL, MongoDB, DynamoDB, Redis, SQL</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cloud & DevOps</h4>
                  <p>AWS (Lambda, EC2, S3, CloudWatch), Docker, Kubernetes, CI/CD pipelines</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 shadow-lg text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="mb-6 max-w-xl mx-auto opacity-90">
              Have a project in mind? Let's discuss how I can help bring your vision to life.
            </p>
            <a
              href="mailto:Mubarak014@gmail.com?subject=Consulting Inquiry"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Consulting;

