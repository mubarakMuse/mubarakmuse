import React from "react"
import Link from "next/link"
import { getSEOTags } from "@/libs/seo"
import {
  profile,
  experience,
  skills,
  projects,
  education,
  additional,
} from "@/data/resume"

export const metadata = getSEOTags({
  title: "Mubarak Muse — Resume | Lead Software Engineer",
  description:
    "Lead Software Engineer with 8 years at Brighter Tunnel, Amazon, Collective Health, and Karat. Python, Java, TypeScript, AWS, healthcare AI, microservices, and full-stack product development.",
  keywords: [
    "Mubarak Muse resume",
    "lead software engineer resume",
    "healthcare software engineer",
    "AWS engineer resume",
    "Python TypeScript engineer",
    "Brighter Tunnel",
    "Amazon",
    "Collective Health",
    "prior authorization AI",
    "microservices",
  ],
  canonicalUrlRelative: "/resume",
  openGraph: {
    title: "Mubarak Muse — Resume | Lead Software Engineer",
    description:
      "8 years building production systems in healthcare, logistics, and AI-native products.",
    url: "/resume",
  },
})

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 border-b border-gray-200 pb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
        {title}
      </h2>
      {children}
    </section>
  )
}

function Role({ role }) {
  return (
    <div className="mb-6">
      <h3 className="text-base font-bold text-gray-900">
        {role.company} — {role.title}
        {role.isVolunteer && (
          <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-rose-600">
            Volunteer
          </span>
        )}
      </h3>
      <p className="text-sm text-gray-600">
        {role.location} | {role.dates}
      </p>
      {role.summary && (
        <p className="mt-2 text-sm leading-relaxed text-gray-700">
          {role.summary}
        </p>
      )}
    </div>
  )
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
          <h1 className="text-2xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-sm font-medium text-indigo-600">
            {profile.title}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            {profile.location} | {profile.openTo} | {profile.phone} |{" "}
            <a href={`mailto:${profile.email}`} className="underline">
              {profile.email}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              linkedin.com/in/mubarak-muse
            </a>
            {" | "}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              github.com/mubarakMuse
            </a>
            {" | "}
            <a
              href="/Mubarak_Muse_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Download PDF
            </a>
          </p>
        </header>

        <Section title="Professional summary">
          <p className="text-sm leading-relaxed text-gray-700">
            {profile.summary}
          </p>
        </Section>

        <Section title="Experience">
          {experience.map((role) => (
            <Role key={role.company} role={role} />
          ))}
        </Section>

        <Section title="Technical skills">
          <div className="space-y-3 text-sm leading-relaxed text-gray-700">
            <p>
              <span className="font-semibold text-gray-900">Languages:</span>{" "}
              {skills.languages.join(", ")}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Backend & Data:</span>{" "}
              {skills.backend.join(", ")}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Cloud & DevOps:</span>{" "}
              {skills.cloud.join(", ")}
            </p>
            <p>
              <span className="font-semibold text-gray-900">AI:</span>{" "}
              {skills.ai.join(", ")}
            </p>
          </div>
        </Section>

        <Section title="Projects">
          {projects.map((item) => (
            <div key={item.slug} className="mb-6 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {item.company}
              </p>
              <h3 className="mt-1 text-sm font-bold text-gray-900">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                {item.summary}
              </p>
              {item.stack && (
                <p className="mt-2 text-xs text-gray-500">{item.stack}</p>
              )}
            </div>
          ))}
        </Section>

        <Section title="Education">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">
              {education.school}
            </span>
            <br />
            {education.degree}
          </p>
        </Section>

        <Section title="Additional">
          <ul className="space-y-1 text-sm text-gray-700">
            <li>Languages: {additional.languages.join(" | ")}</li>
            <li>Interests: {additional.interests}</li>
          </ul>
        </Section>
      </div>
    </div>
  )
}

export default Resume
