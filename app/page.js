import React from "react";
import Link from "next/link";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Mubarak Muse - Entrepreneur & Software Engineer",
  description: "Home for launching and building business ideas, products, and ventures. Software engineer, entrepreneur, and builder based in Minneapolis, Minnesota.",
  keywords: ["Mubarak Muse", "entrepreneur", "software engineer", "business ideas", "products", "ventures", "Minneapolis"],
  canonicalUrlRelative: "/",
});

const Profile = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-xl mx-auto px-6 py-6">
        <h1 className="text-xl font-bold mb-8">
          Mubarak Muse
        </h1>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">About</h2>
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              I'm a software engineer and entrepreneur based in Minneapolis, Minnesota. I build products and help companies with technical challenges.
            </p>
            <p>
              This is my home for launching and testing business ideas, products, and ventures.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">Venture Portfolio</h2>
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="/brighter-tunnel" className="underline">
                  BrighterTunnel
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Live technical screening interview service for businesses - A Karat.com alternative
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="/software-engineers" className="underline">
                  Technical Recruiting & Mock Interviews
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                I place top 1% engineers and help you pass the hardest interviews.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <a href="https://supakidapp.com" target="_blank" rel="noopener noreferrer" className="underline">
                  SupaKid
                </a>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Kids app platform for learning and entertainment.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <a href="https://goldyphone.com" target="_blank" rel="noopener noreferrer" className="underline">
                  Goldy
                </a>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Phone services and solutions platform.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="/consulting" className="underline">
                  AI & Software Consulting
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Building MVPs and AI workflows for startups.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="/software-engineers" className="underline">
                  SWE Job search via paraform
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Help software engineers find jobs - Access to 176+ roles on paraform.com and free practice coding interviews
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="/islamic-studies" className="underline">
                  Online Islamic Studies
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Structured, online Islamic education for the modern family.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="/lullaby-fresh" className="underline">
                  Lullaby Fresh
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                The pre-toss diaper neutralizer spray. Stop the smell before it starts.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="/ventures" className="underline">
                  Muse Ventures
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Investing in early-stage AI companies in SF and NYC.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="/apartments" className="underline">
                  City Apartment Directory
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                The only list of new move-in specials in your city.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">Links</h2>
          <div className="text-sm space-y-2">
            <p>
              <a href="/resume" className="underline">Resume</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/mubarak-muse/" target="_blank" rel="noopener noreferrer" className="underline">
                LinkedIn
              </a>
            </p>
            <p>
              <a href="https://twitter.com/mubarakmuse_" target="_blank" rel="noopener noreferrer" className="underline">
                Twitter
              </a>
            </p>
            <p>
              <a href="https://github.com/mubarakmuse" target="_blank" rel="noopener noreferrer" className="underline">
                GitHub
              </a>
            </p>
            <p>
              <a href="mailto:Mubarak014@gmail.com" className="underline">Email</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
