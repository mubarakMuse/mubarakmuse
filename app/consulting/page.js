import React from "react";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "AI & Software Consulting - Mubarak Muse",
  description: "Building MVPs and AI workflows for startups. Expert in full-stack development, AI integration, and technical architecture. Former Amazon and Collective Health engineer.",
  keywords: ["AI consulting", "software consulting", "MVP development", "AI workflows", "startup consulting", "custom software development", "full-stack development", "Next.js", "AWS"],
  canonicalUrlRelative: "/consulting",
  openGraph: {
    title: "AI & Software Consulting - Mubarak Muse",
    description: "Building MVPs and AI workflows for startups. Expert in full-stack development, AI integration, and technical architecture.",
    url: "/consulting",
  },
});

const Consulting = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-xl mx-auto px-6 py-6">
        <h1 className="text-xl font-bold mb-2">
          AI & Software Consulting
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Building MVPs and AI workflows for startups.
        </p>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">What I Offer</h2>
          <div className="space-y-4">
            <div>
              <p className="mb-1 text-sm font-semibold">
                Custom Software Development
              </p>
              <p className="mb-1 text-sm leading-relaxed">
                Build scalable web applications, APIs, and full-stack solutions.
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold">
                AI Integration
              </p>
              <p className="mb-1 text-sm leading-relaxed">
                Integrate AI capabilities into existing systems or build new AI-powered features.
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold">
                Technical Architecture
              </p>
              <p className="mb-1 text-sm leading-relaxed">
                Design and implement robust, scalable architectures.
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold">
                Code Review & Optimization
              </p>
              <p className="mb-1 text-sm leading-relaxed">
                Review codebases, identify improvements, and optimize performance.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Technologies I Work With</h2>
          <div className="text-sm space-y-3">
            <div>
              <p className="mb-1 text-sm font-semibold">Languages & Frameworks</p>
              <p className="text-sm">JavaScript, TypeScript, Python, Java, Node.js, React, Next.js, Express, Spring Boot</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold">AI & Machine Learning</p>
              <p className="text-sm">OpenAI API, LangChain, AI model integration, prompt engineering, AI-assisted development</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold">Databases</p>
              <p className="text-sm">PostgreSQL, MongoDB, DynamoDB, Redis, SQL</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold">Cloud & DevOps</p>
              <p className="text-sm">AWS (Lambda, EC2, S3, CloudWatch), Docker, Kubernetes, CI/CD pipelines</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Let's Work Together</h2>
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

