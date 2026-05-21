import React from "react";
import Link from "next/link";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Mubarak Muse - Resume | Senior Software Engineer",
  description:
    "Senior Software Engineer with 7+ years at Amazon, Collective Health, Brighter Tunnel, and Karat. Python, Java, TypeScript, AWS serverless, and full-stack product development.",
  keywords: [
    "Mubarak Muse",
    "resume",
    "senior software engineer",
    "Amazon",
    "Collective Health",
    "Brighter Tunnel",
    "Karat",
    "AWS",
    "Python",
    "TypeScript",
  ],
  canonicalUrlRelative: "/resume",
  openGraph: {
    title: "Mubarak Muse - Resume | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in AWS serverless, distributed backends, and full-stack products.",
    url: "/resume",
  },
});

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 border-b border-gray-200 pb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Role({ company, title, location, dates, bullets }) {
  return (
    <div className="mb-6">
      <h3 className="text-base font-bold text-gray-900">
        {company} — {title}
      </h3>
      <p className="text-sm text-gray-600">
        {location} | {dates}
      </p>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-700">
        {bullets.map((bullet) => (
          <li key={bullet.slice(0, 40)}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

const Resume = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-xl px-6 py-12 sm:py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gray-500 transition-colors hover:text-gray-900"
        >
          ← Mubarak Muse
        </Link>

        <header className="mb-8 border-b border-gray-200 pb-8">
          <h1 className="text-2xl font-bold tracking-tight">Mubarak Muse</h1>
          <p className="mt-2 text-sm text-gray-600">
            Minneapolis, MN | 765-351-1316 |{" "}
            <a href="mailto:Mubarak014@gmail.com" className="underline">
              Mubarak014@gmail.com
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a
              href="https://www.linkedin.com/in/mubarak-muse"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              linkedin.com/in/mubarak-muse
            </a>
            {" | "}
            <a
              href="https://github.com/mubarakMuse"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              github.com/mubarakMuse
            </a>
          </p>
        </header>

        <Section title="Professional summary">
          <p className="text-sm leading-relaxed text-gray-700">
            Senior Software Engineer with 7+ years of experience across logistics,
            healthcare, education, and EV. Proven track record designing event-driven
            AWS serverless systems, distributed backend services, and full-stack
            products from zero to one. Expert in Python, Java, TypeScript, and
            Node.js with deep AWS expertise.
          </p>
        </Section>

        <Section title="Experience">
          <Role
            company="Brighter Tunnel"
            title="Senior Software Engineer"
            location="Remote"
            dates="Mar 2023 – Present"
            bullets={[
              "Served as founding/lead engineer for multiple client engagements — owned systems from zero to one, made independent architectural decisions, and delivered full-stack features end-to-end.",
              "Developed an EV fleet management platform using Node.js, TypeScript, React, PostgreSQL, and AWS — designed core data models, scalable REST APIs, and deployment infrastructure including charger telemetry ingestion and real-time dashboards.",
              "Built a Learning Management System with multi-tenant APIs for class, teacher, and student management using Next.js, Node.js, Supabase, and OpenAI, designed to onboard new institutional clients with minimal friction.",
            ]}
          />
          <Role
            company="Amazon"
            title="Software Engineer"
            location="Minneapolis, MN"
            dates="Feb 2022 – Mar 2023"
            bullets={[
              "Developed a disaster-response freight rerouting system using Python, AWS Lambda, and Step Functions — designed state machine orchestration for complex workflow logic and leveraged SQS for async processing with automated reliability testing, improving resilience of a critical fulfillment pipeline.",
              "Built a full-stack logistics dashboard for Amazon Freight (Java, Kotlin, TypeScript, React) with structured REST APIs serving internal and partner teams tracking live shipment data at scale.",
            ]}
          />
          <Role
            company="Collective Health"
            title="Software Engineer"
            location="San Francisco, CA"
            dates="May 2018 – Oct 2021"
            bullets={[
              "Developed two Java Spring Boot microservices (30+ API endpoints) and a Node.js/Express service with React frontend to manage enterprise health benefit plans for large employer clients.",
              "Designed a scalable messaging system spanning 15+ REST APIs using Java, PostgreSQL, and Twilio API — introduced continuous testing and CI/CD practices that improved uptime and reduced cross-team incidents.",
              "Built a Python automation system integrating GitHub, Airtable, and GraphQL APIs to automate medical code workflows, deployed via Kubernetes Cron Jobs and monitored via Grafana and Datadog.",
              "Deployed all services via Kubernetes, Docker, and AWS EC2 using Jenkins for CI/CD pipelines.",
            ]}
          />
          <Role
            company="Karat"
            title="Interview Engineer"
            location="Remote"
            dates="May 2022 – Sep 2025"
            bullets={[
              "Conducted 900+ technical screening interviews on behalf of companies including Intuit and Walmart, evaluating full-stack, backend, and data engineering candidates.",
            ]}
          />
        </Section>

        <Section title="Technical skills">
          <div className="space-y-3 text-sm leading-relaxed text-gray-700">
            <p>
              <span className="font-semibold text-gray-900">Languages:</span> Python,
              Java, TypeScript, JavaScript, Node.js, Go, C++, Ruby on Rails
            </p>
            <p>
              <span className="font-semibold text-gray-900">Frameworks:</span> Spring
              Boot, Express, Next.js, React, Flask, DropWizard, GraphQL, REST APIs
            </p>
            <p>
              <span className="font-semibold text-gray-900">Cloud & DevOps:</span> AWS
              (Lambda, Step Functions, EC2, S3, SQS/SNS, EventBridge, CloudFormation,
              CloudWatch, Bedrock), Docker, Kubernetes, Jenkins, GitHub Actions, CI/CD
            </p>
            <p>
              <span className="font-semibold text-gray-900">Databases:</span> PostgreSQL,
              DynamoDB, Redis, AWS Aurora, Supabase, Oracle
            </p>
            <p>
              <span className="font-semibold text-gray-900">Observability & tools:</span>{" "}
              Datadog, Grafana, Postman, Swagger, Twilio API, OpenAI, Anthropic, Stripe
            </p>
          </div>
        </Section>

        <Section title="Projects">
          <div className="mb-5">
            <h3 className="text-sm font-bold text-gray-900">
              Inbox Concierge | React, Express, Google OAuth, OpenAI, Supabase
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-700">
              AI-driven Gmail organizer that classifies email threads into custom buckets
              via OpenAI, with Google OAuth auth and deployed on Railway and Netlify.
            </p>
          </div>
          <div className="mb-5">
            <h3 className="text-sm font-bold text-gray-900">
              Oxboro Health | Anthropic API, Next.js, Supabase, Railway
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-700">
              AI-powered healthcare assistant for parents, leveraging Anthropic models for
              intelligent chat and specialized health assessments with persistent state via
              Supabase.
            </p>
          </div>
          <div className="mb-5">
            <h3 className="text-sm font-bold text-gray-900">
              GoldyPhone | Next.js, Supabase, Twilio API, Stripe
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-700">
              Browser-based VoIP application enabling global calling via Twilio API with
              Stripe payment processing and Supabase for authentication and storage.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900">
              Supakid | Flutter, Supabase, RevenueCat
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-700">
              Cross-platform iOS alternative to YouTube Kids — live on the Apple App Store
              with RevenueCat subscription management and Supabase for auth and storage.
            </p>
          </div>
        </Section>

        <Section title="Education">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">
              University of Minnesota – Twin Cities
            </span>
            <br />
            Bachelor of Science, Computer Science
          </p>
        </Section>

        <Section title="Languages">
          <p className="text-sm text-gray-700">
            Arabic (Fluent) | English (Fluent) | Somali (Fluent) | Spanish (Beginner)
          </p>
        </Section>
      </div>
    </div>
  );
};

export default Resume;
