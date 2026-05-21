import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getSEOTags } from "@/libs/seo";
import picOfMe from "./picofme.png";

export const metadata = getSEOTags({
  title: "Mubarak Muse",
  description:
    "Software engineer (formerly at Amazon and Collective Health) and entrepreneur. Building products and helping startups. Based in Minneapolis, Minnesota and San Francisco, California.",
  keywords: [
    "Mubarak Muse",
    "entrepreneur",
    "software engineer",
    "Amazon",
    "Collective Health",
    "startup founder",
    "technical recruiting",
    "Minneapolis",
    "San Francisco",
    "portfolio",
    "small bets",
  ],
  canonicalUrlRelative: "/",
  openGraph: {
    title: "Mubarak Muse - Entrepreneur & Software Engineer",
    description:
      "Software engineer and entrepreneur building products and helping startups.",
    url: "/",
  },
});

const portfolio = [
  {
    title: "BrighterTunnel",
    href: "https://brightertunnel.com",
    external: true,
    description: "AI service company — helping companies do more with AI.",
  },
  {
    title: "Technical interview services",
    href: "/technical-interviews",
    external: false,
    description: "First-round technical screens for hiring teams.",
  },
  {
    title: "Recruiting on Paraform",
    href: "/software-engineers",
    external: false,
    description: "Helping engineers land roles at high-growth startups.",
  },
  {
    title: "GoldyPhone",
    href: "https://goldyphone.com",
    external: true,
    description: "International calling from your browser.",
  },
  {
    title: "SupaKid",
    href: "https://supakidapp.com",
    external: true,
    description: "A safer YouTube Kids alternative.",
  },
];

const links = [
  { label: "Blog", href: "/blog", external: false },
  { label: "Resume", href: "/resume", external: false },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mubarak-muse/",
    external: true,
  },
  { label: "Twitter", href: "https://twitter.com/mubarakmuse_", external: true },
  { label: "GitHub", href: "https://github.com/mubarakmuse", external: true },
  { label: "Email", href: "mailto:Mubarak014@gmail.com", external: false },
];

function EntryLink({ href, external, children, onDarkCard = false }) {
  const className = onDarkCard
    ? "font-medium text-gray-100 underline decoration-gray-400 underline-offset-2 transition-colors hover:decoration-white"
    : "font-medium text-gray-900 underline decoration-gray-300 underline-offset-2 transition-colors hover:decoration-gray-900";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="mb-3 text-lg font-bold text-gray-900">{title}</h2>
      {children}
    </section>
  );
}

function EntryCard({ title, href, external, description, fadeIndex = 0 }) {
  const onDarkCard = fadeIndex % 2 === 0;

  return (
    <article
      className={`rounded-lg border px-4 py-3.5 transition-shadow hover:shadow-md ${
        onDarkCard
          ? "border-gray-600 bg-gray-700"
          : "border-gray-200 bg-white"
      }`}
    >
      <h3 className="text-sm font-semibold">
        <EntryLink href={href} external={external} onDarkCard={onDarkCard}>
          {title}
          {external && (
            <span
              className={`ml-1 text-[10px] font-normal ${onDarkCard ? "opacity-60" : "opacity-50"}`}
              aria-hidden
            >
              ↗
            </span>
          )}
        </EntryLink>
      </h3>
      {description && (
        <p
          className={`mt-1.5 text-sm leading-relaxed ${
            onDarkCard ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      )}
    </article>
  );
}

const Profile = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-lg px-6 py-12 sm:py-16">
        <header className="mb-12 flex items-center gap-4">
          <Image
            src={picOfMe}
            alt="Mubarak Muse"
            width={72}
            height={72}
            className="rounded-full object-cover ring-2 ring-gray-100"
            unoptimized
          />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Mubarak Muse</h1>
          </div>
        </header>

        <Section title="About">
          <p className="text-sm leading-relaxed text-gray-700">
            Software engineer (formerly at Amazon and Collective Health) and
            entrepreneur. Building products and helping startups.
          </p>
        </Section>

        <Section title="Portfolio of Small Bets">
          <ul className="space-y-3">
            {portfolio.map((item, index) => (
              <li key={item.title}>
                <EntryCard {...item} fadeIndex={index} />
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Links">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <EntryLink href={link.href} external={link.external}>
                  {link.label}
                </EntryLink>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default Profile;
