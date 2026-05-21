import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getSEOTags } from "@/libs/seo";
import picOfMe from "../picofme.png";
import interviewImage from "./bt-interview.png";

export const metadata = getSEOTags({
  title: "Recruiting on Paraform - Mubarak Muse",
  description:
    "176+ SWE roles at high-growth startups via Paraform. Free 45-min mock interviews. Former Amazon engineer, 900+ screens at Karat.",
  keywords: [
    "software engineer jobs",
    "Paraform",
    "mock coding interview",
    "startup jobs",
    "Mubarak Muse",
  ],
  canonicalUrlRelative: "/software-engineers",
  openGraph: {
    title: "Recruiting on Paraform - Mubarak Muse",
    description: "Job matching and free mock interviews for software engineers.",
    url: "/software-engineers",
  },
});

const PARAFORM_FORM =
  "https://www.paraform.com/forms/cldwr0h5i0003l20fp3dfbwxh";
const MOCK_INTERVIEW =
  "https://cal.com/mubarak-muse-14pidz/45-min-mock-coding-interview";
const RESUME_EMAIL =
  "mailto:mubarak014@gmail.com?subject=Resume for SWE Roles&body=Hi Mubarak,%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThanks!";

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

const SoftwareEngineers = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-lg px-6 py-12 sm:py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gray-500 transition-colors hover:text-gray-900"
        >
          ← Mubarak Muse
        </Link>

        <header className="mb-10 flex items-start gap-4">
          <Image
            src={picOfMe}
            alt="Mubarak Muse"
            width={72}
            height={72}
            className="shrink-0 rounded-full object-cover ring-2 ring-gray-100"
            unoptimized
          />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Recruiting on Paraform
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Ex-Amazon, 900+ interviews at{" "}
              <ExternalLink href="https://www.karat.com">Karat</ExternalLink>. I match
              engineers to high-growth startups and run free mock screens.
            </p>
          </div>
        </header>

        <ul className="mb-8 space-y-3">
          <li>
            <article className="rounded-lg border border-gray-100 bg-gray-50/80 px-4 py-4">
              <h2 className="text-sm font-semibold">Job matching</h2>
              <p className="mt-1.5 text-sm text-gray-600">
                176+ open SWE roles.{" "}
                <ExternalLink href={PARAFORM_FORM}>Apply on Paraform</ExternalLink>
                {" "}or{" "}
                <a
                  href={RESUME_EMAIL}
                  className="font-medium text-gray-900 underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900"
                >
                  email your resume
                </a>
                .
              </p>
            </article>
          </li>
          <li>
            <article className="rounded-lg border border-gray-100 bg-gray-50/80 px-4 py-4">
              <h2 className="text-sm font-semibold">Free mock interview</h2>
              <p className="mt-1.5 text-sm text-gray-600">
                45 minutes, live coding.{" "}
                <ExternalLink href={MOCK_INTERVIEW}>Book on Cal.com →</ExternalLink>
              </p>
            </article>
          </li>
        </ul>

        <p className="mb-10 text-sm text-gray-500">
          Read:{" "}
          <Link
            href="/blog"
            className="font-medium text-gray-900 underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900"
          >
            Blog →
          </Link>
        </p>

        <div className="overflow-hidden rounded-lg border border-gray-100 ring-1 ring-gray-100">
          <Image
            src={interviewImage}
            alt="Interview dashboard"
            width={800}
            height={400}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SoftwareEngineers;
