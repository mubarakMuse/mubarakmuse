import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getSEOTags } from "@/libs/seo";
import interviewImage from "./bt-interview.png";
import womenInterviewingImage from "./women initerviewing .jpg";
import pgLogo from "./pglogo-light.svg";

export const metadata = getSEOTags({
  title: "Technical Interviews as a Service - Mubarak Muse",
  description:
    "First-round technical screening for hiring teams. I conduct 60-minute live coding interviews so your engineers only meet qualified candidates.",
  keywords: [
    "technical screening",
    "coding interviews",
    "technical interviews",
    "hiring",
    "recruiting",
    "interview as a service",
  ],
  canonicalUrlRelative: "/technical-interviews",
  openGraph: {
    title: "Technical Interviews as a Service - Mubarak Muse",
    description:
      "First-round technical screening interviews — a side service I offer as an individual engineer.",
    url: "/technical-interviews",
  },
});

const INTRO_CALL = "https://cal.com/brighter-tunnel/15min";

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="mb-3 text-lg font-bold text-gray-900">{title}</h2>
      {children}
    </section>
  );
}

function BenefitCard({ title, description }) {
  return (
    <article className="rounded-lg border border-gray-100 bg-gray-50/80 px-4 py-3">
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{description}</p>
    </article>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-gray-900 underline decoration-gray-300 underline-offset-2 transition-colors hover:decoration-gray-900"
    >
      {children}
    </a>
  );
}

const TechnicalInterviews = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-lg px-6 py-12 sm:py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gray-500 transition-colors hover:text-gray-900"
        >
          ← Mubarak Muse
        </Link>

        <header className="mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
            Side service
          </p>
          <h1 className="text-2xl font-bold tracking-tight">
            Technical interviews as a service
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            First-round technical screening for startups and hiring teams — offered
            individually by me, outside my day-to-day work.
          </p>
        </header>

        <Section title="About me">
          <p className="text-sm leading-relaxed text-gray-700">
            I&apos;m Mubarak. I spent 8+ years as a software engineer at Amazon and
            Collective Health, then worked as an Interview Engineer at{" "}
            <ExternalLink href="https://www.karat.com">Karat</ExternalLink>, where I
            conducted 900+ technical interviews.
          </p>
        </Section>

        <Section title="What I do">
          <div className="space-y-3 text-sm leading-relaxed text-gray-700">
            <p>
              I run 60-minute live technical interviews to filter out unqualified
              candidates before they reach your team. You interview the ones who pass
              onsite.
            </p>
            <p>
              <span className="font-semibold text-gray-900">$50 per interview</span>{" "}
              — less than the hourly cost of pulling senior engineers off product work.
            </p>
            <p>
              <ExternalLink href={INTRO_CALL}>Book a 15-min intro call →</ExternalLink>
            </p>
          </div>
        </Section>

        <div className="mb-12 overflow-hidden rounded-lg border border-gray-100">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.loom.com/embed/6efae528343742f4a900a2c11cc60c50"
              title="How technical screening works"
              frameBorder="0"
              allowFullScreen
              className="absolute left-0 top-0 h-full w-full"
            />
          </div>
        </div>

        <div className="mb-12 overflow-hidden rounded-lg border border-gray-100 ring-1 ring-gray-100">
          <Image
            src={interviewImage}
            alt="Technical interview report dashboard"
            width={800}
            height={400}
            className="h-auto w-full"
          />
        </div>

        <Section title="Benefits">
          <ul className="space-y-3">
            <li>
              <BenefitCard
                title="Save 15+ hours per week"
                description="Your engineers stay focused on building. I handle first-round technical vetting."
              />
            </li>
            <li>
              <BenefitCard
                title="Higher quality onsite interviews"
                description="Human-led screens assess real coding ability—not just resume keywords."
              />
            </li>
            <li>
              <BenefitCard
                title="Detailed reports"
                description='Hire / No Hire recommendation with written feedback and video recording.'
              />
            </li>
          </ul>
        </Section>

        <Section title="How it works">
          <ol className="space-y-3">
            {[
              {
                title: "You send candidates",
                body: "Forward resumes. I handle scheduling and the live assessment.",
              },
              {
                title: "I run a 60-minute technical interview",
                body: "Live coding focused on data structures, algorithms, and practical problem solving.",
              },
              {
                title: "You interview qualified candidates",
                body: 'You receive a Hire / No Hire report, feedback, and a recording.',
              },
            ].map((step, i) => (
              <li key={step.title}>
                <article className="rounded-lg border border-gray-100 bg-gray-50/80 px-4 py-3">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                    {step.body}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </Section>

        <div className="mb-12 overflow-hidden rounded-lg border border-gray-100 ring-1 ring-gray-100">
          <Image
            src={womenInterviewingImage}
            alt="Technical interview in progress"
            width={800}
            height={400}
            className="h-auto w-full"
          />
        </div>

        <Section title="Testimonials">
          <ul className="space-y-4">
            <li className="rounded-lg border border-gray-100 bg-gray-50/80 px-4 py-3">
              <p className="text-sm italic leading-relaxed text-gray-700">
                &ldquo;Thank you for the engaging interview... I truly enjoyed answering
                your insightful questions and working through both the DSA and the
                Pandas questions.&rdquo;
              </p>
              <p className="mt-2 text-sm text-gray-500">— Samarth, candidate</p>
            </li>
            <li className="rounded-lg border border-gray-100 bg-gray-50/80 px-4 py-3">
              <p className="text-sm italic leading-relaxed text-gray-700">
                &ldquo;Thank you Mubarak for the interview, I really appreciate it. I
                enjoyed the session and had a good time.&rdquo;
              </p>
              <p className="mt-2 text-sm text-gray-500">— Dedan I., candidate</p>
            </li>
          </ul>
        </Section>

        <Section title="Case study">
          <div className="mb-4">
            <Image
              src={pgLogo}
              alt="Piedmont Global logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-700">
            I helped{" "}
            <ExternalLink href="https://piedmontglobal.com/">Piedmont Global</ExternalLink>{" "}
            build out their software team — 38 candidates across 4 roles, saving their
            engineers hours of first-round screens.
          </p>
        </Section>

        <div className="rounded-lg border border-gray-900 bg-gray-900 px-4 py-4 text-center">
          <p className="mb-3 text-sm text-gray-300">
            Interested in first-round technical screening?
          </p>
          <ExternalLink href={INTRO_CALL}>
            <span className="text-sm font-semibold text-white">
              Book a 15-min intro call →
            </span>
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default TechnicalInterviews;
