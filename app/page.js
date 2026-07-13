import React from "react"
import Link from "next/link"
import Image from "next/image"
import { getSEOTags } from "@/libs/seo"
import { renderPersonSchema, renderProfilePageSchema } from "@/components/PersonSchema"
import ToptalBadge from "@/components/ToptalBadge"
import {
  profile,
  experience,
  skills,
  projects,
  companyColors,
  education,
  additional,
} from "@/data/resume"
import picOfMe from "./picofme.png"

export const metadata = getSEOTags({
  title: "Mubarak Muse — Lead Software Engineer | Healthcare AI, AWS, Full-Stack",
  description:
    "Lead Software Engineer with 8 years at Brighter Tunnel, Amazon, and Collective Health. Expert in Python, Java, TypeScript, AWS microservices, healthcare data (CPT/ICD, prior auth), and AI-native products. Minneapolis — open to SF & NYC.",
  keywords: [
    "Mubarak Muse",
    "lead software engineer",
    "senior software engineer",
    "healthcare software engineer",
    "healthcare AI",
    "prior authorization",
    "CPT ICD-10",
    "AWS microservices",
    "distributed systems",
    "FastAPI",
    "Spring Boot",
    "Python engineer",
    "TypeScript engineer",
    "full-stack engineer",
    "Brighter Tunnel",
    "Amazon software engineer",
    "Collective Health",
    "LLM pipelines",
    "agentic AI",
    "LangChain",
    "GraphQL API",
    "PostgreSQL",
    "Kubernetes",
    "Terraform",
    "Minneapolis software engineer",
    "San Francisco software engineer",
    "New York software engineer",
    "healthcare data",
    "benefit plans",
    "microservices",
    "software engineer resume",
    "software engineer portfolio",
  ],
  canonicalUrlRelative: "/",
  openGraph: {
    title: "Mubarak Muse — Lead Software Engineer",
    description:
      "8 years building production systems in healthcare, logistics, and AI. Microservices, AWS, and full-stack product engineering.",
    url: "/",
  },
})

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: profile.github,
    external: true,
  },
  {
    label: "Resume PDF",
    href: "/Mubarak_Muse_Resume.pdf",
    external: true,
  },
  {
    label: "Full resume",
    href: "/resume",
    external: false,
  },
]

function ExternalLink({ href, children, className = "" }) {
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  if (href.startsWith("/") && !href.endsWith(".pdf")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

function SkillGroup({ label, items }) {
  return (
    <div>
      <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ExperienceCard({ role }) {
  return (
    <article className="relative border-l-2 border-slate-200 pl-6 pb-10 last:pb-0">
      <span
        className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white bg-indigo-500 ring-2 ring-indigo-100"
        aria-hidden
      />
      <header>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h3 className="text-lg font-semibold text-slate-900">{role.company}</h3>
          {role.isVolunteer && (
            <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-700">
              Volunteer
            </span>
          )}
          <span className="text-slate-400" aria-hidden>
            ·
          </span>
          <p className="font-medium text-indigo-600">{role.title}</p>
        </div>
        <p className="mt-0.5 text-sm text-slate-500">
          {role.location} · {role.dates}
        </p>
        {role.summary && (
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {role.summary}
          </p>
        )}
      </header>
    </article>
  )
}

function ProjectCard({ project }) {
  const companyTagClass =
    companyColors[project.company] ?? "bg-slate-100 text-slate-800"

  const stackItems = project.stack ? project.stack.split(", ") : []

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <span
        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${companyTagClass}`}
      >
        {project.company}
      </span>
      <h3 className="mt-3 text-base font-semibold text-slate-900">
        {project.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {project.summary}
      </p>
      {stackItems.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {stackItems.map((item) => (
            <li
              key={item}
              className="rounded-md bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

const Home = () => {
  return (
    <>
      {renderPersonSchema()}
      {renderProfilePageSchema()}

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
        <div className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
          {/* Hero */}
          <header className="mb-14">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Image
                  src={picOfMe}
                  alt={`${profile.name} — ${profile.title}`}
                  width={96}
                  height={96}
                  className="h-24 w-24 shrink-0 rounded-2xl object-cover ring-4 ring-white shadow-md"
                  priority
                  unoptimized
                />
                <div className="flex-1">
                  <p className="mb-1 text-sm font-medium uppercase tracking-wider text-indigo-600">
                    {profile.title}
                  </p>
                  <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {profile.name}
                  </h1>
                  <p className="mt-2 text-slate-600">
                    {profile.location} · {profile.openTo}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    <a
                      href={`tel:${profile.phone.replace(/-/g, "")}`}
                      className="hover:text-indigo-600"
                    >
                      {profile.phone}
                    </a>
                    {" · "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="hover:text-indigo-600"
                    >
                      {profile.email}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex justify-center sm:justify-end">
                <ToptalBadge />
              </div>
            </div>

            <p className="mt-8 text-base leading-relaxed text-slate-700">
              {profile.summary}
            </p>

            <nav
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Contact and profile links"
            >
              {contactLinks.map((link) => (
                <ExternalLink
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  {link.label}
                </ExternalLink>
              ))}
            </nav>
          </header>

          {/* Experience */}
          <section className="mb-14" aria-labelledby="experience-heading">
            <h2
              id="experience-heading"
              className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-400"
            >
              Experience
            </h2>
            <div>
              {experience.map((role) => (
                <ExperienceCard key={role.company} role={role} />
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-14" aria-labelledby="skills-heading">
            <h2
              id="skills-heading"
              className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-400"
            >
              Tech Stack
            </h2>
            <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <SkillGroup label="Languages" items={skills.languages} />
              <SkillGroup label="Backend & Data" items={skills.backend} />
              <SkillGroup label="Cloud & DevOps" items={skills.cloud} />
              <SkillGroup label="AI" items={skills.ai} />
            </div>
          </section>

          {/* Projects */}
          <section className="mb-14" aria-labelledby="projects-heading">
            <h2
              id="projects-heading"
              className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-400"
            >
              Projects
            </h2>
            <ul className="space-y-4">
              {projects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </section>

          {/* Education & Additional */}
          <section className="mb-14 grid gap-8 sm:grid-cols-2" aria-labelledby="education-heading">
            <div>
              <h2
                id="education-heading"
                className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400"
              >
                Education
              </h2>
              <p className="font-semibold text-slate-900">{education.school}</p>
              <p className="text-sm text-slate-600">{education.degree}</p>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                Additional
              </h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <span className="font-medium text-slate-800">Languages: </span>
                  {additional.languages.join(" · ")}
                </li>
                <li>
                  <span className="font-medium text-slate-800">Interests: </span>
                  {additional.interests}
                </li>
              </ul>
            </div>
          </section>

          <footer className="border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
            <p>© {new Date().getFullYear()} {profile.name}</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Home
