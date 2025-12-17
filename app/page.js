import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getSEOTags } from "@/libs/seo";
import picOfMe from "./picofme.png";

export const metadata = getSEOTags({
  title: "Mubarak Muse - Entrepreneur & Software Engineer",
  description: "Software engineer (formerly at Amazon and Collective Health) and entrepreneur building products, helping startups, and investing in early-stage AI companies. Based in Minneapolis, Minnesota and San Francisco, California.",
  keywords: ["Mubarak Muse", "entrepreneur", "software engineer", "Amazon", "Collective Health", "startup founder", "AI investor", "technical recruiting", "Minneapolis", "San Francisco", "portfolio", "small bets"],
  canonicalUrlRelative: "/",
  openGraph: {
    title: "Mubarak Muse - Entrepreneur & Software Engineer",
    description: "Software engineer and entrepreneur building products, helping startups, and investing in early-stage AI companies.",
    url: "/",
  },
});

const Profile = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-xl mx-auto px-6 py-6">
        <div className="flex items-center gap-4 mb-8">
          <Image
            src={picOfMe}
            alt="Mubarak Muse"
            width={80}
            height={80}
            className="rounded-full object-cover"
            unoptimized
          />
          <h1 className="text-xl font-bold">
            Mubarak Muse
          </h1>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">About</h2>
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              Software engineer (formerly at Amazon and Collective Health) and entrepreneur. Building products and helping startups.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">Portfolio of Small Bets</h2>
          <div className="text-sm leading-relaxed space-y-3">
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="/brighter-tunnel" className="underline">
                  BrighterTunnel
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Technical screening interviews as a service.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <a href="https://supakidapp.com" target="_blank" rel="noopener noreferrer" className="underline">
                  SupaKid
                </a>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                A safer YouTube Kids alternative.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <a href="https://goldyphone.com" target="_blank" rel="noopener noreferrer" className="underline">
                  GoldyPhone
                </a>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                International calling from your browser.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="https://ilmboost.com" className="underline">
                  Ilmboost
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Online Islamic education platform.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <Link href="/software-engineers" className="underline">
                  Technical Recruiting & Mock Interviews
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Helping engineers find roles and prep for interviews.
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
                <Link href="/ventures" className="underline">
                  Muse Ventures
                </Link>
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Investing in early-stage AI companies.
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
