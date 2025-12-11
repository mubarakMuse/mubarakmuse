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
          <h2 className="text-lg font-bold mb-4">Projects</h2>
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
                <Link href="/consulting" className="underline">
                  Software Consulting
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                General software consulting service - Building software and AI integration solutions for businesses
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="/software-engineers" className="underline">
                  SWE Job search via paraform
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Help software engineers find jobs - Access to 176+ roles on paraform.com and ree practice coding interviews
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
