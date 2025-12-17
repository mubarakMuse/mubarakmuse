import React from "react";
import Link from "next/link";
import Image from "next/image";
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
        <div className="flex items-center gap-4 mb-8">
          <Image
            src="/picofme.png"
            alt="Mubarak Muse"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <h1 className="text-xl font-bold">
            Mubarak Muse
          </h1>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">About</h2>
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              I'm a software engineer (formerly at Amazon and Collective Health) and entrepreneur based both in Minneapolis, Minnesota and San Francisco, California. I build products and help companies with technical challenges.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">Portfolio of Small Bets</h2>
          <div className="text-sm leading-relaxed space-y-3">
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="/software-engineers" className="underline">
                  Technical Recruiting via Paraform.com and Mock Interviews
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                I help Software Engineers find roles at tech companies and help them prep for their interviews.
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
                <a href="https://supakidapp.com" target="_blank" rel="noopener noreferrer" className="underline">
                  SupaKid app - a safer youtube kids Alternative
                </a>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Youtube kids is dangerous for kids. SupaKid is a safer alternative.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <a href="https://goldyphone.com" target="_blank" rel="noopener noreferrer" className="underline">
                  GoldyPhone.com - International Calling Service
                </a>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Make international calls to any phone number from your browser. No need to download an app.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="/islamic-studies" className="underline">
                  Ilmboost.com - Online Islamic Studies platform
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Structured, online Islamic education for the modern family.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="/ventures" className="underline">
                  Muse Ventures
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Investing in early-stage AI companies .
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
