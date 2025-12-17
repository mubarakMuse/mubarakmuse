import React from "react";
import Image from "next/image";
import { getSEOTags } from "@/libs/seo";
import interviewImage from "./bt-interview.png";
import womenInterviewingImage from "./women initerviewing .jpg";
import pgLogo from "./pglogo-light.svg";
import brighterTunnelLogo from "./brighter_tunnel_logo.png";

export const metadata = getSEOTags({
  title: "BrighterTunnel - Technical Screening That Actually Works",
  description: "Stop wasting your senior engineers' time on unqualified candidates. We screen applicants so you only interview the top 20% who can actually code. Technical screening service for hiring managers.",
  keywords: ["technical screening", "coding interviews", "candidate screening", "technical interviews", "hiring", "recruiting", "technical assessment", "coding assessment"],
  canonicalUrlRelative: "/brighter-tunnel",
  openGraph: {
    title: "BrighterTunnel - Technical Screening That Actually Works",
    description: "Stop wasting your senior engineers' time on unqualified candidates. We screen applicants so you only interview the top 20% who can actually code.",
    url: "/brighter-tunnel",
  },
});

const BrighterTunnel = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-xl mx-auto px-6 py-6">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src={brighterTunnelLogo}
              alt="BrighterTunnel logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <h1 className="text-xl font-bold">
              BrighterTunnel
            </h1>
          </div>
          <p className="text-sm text-gray-600">
            First round technical screening interviews as a service
          </p>
        </div>

        <nav className="mb-6 text-sm">
          <a href="#who-are-we" className="underline mr-4">Who are we</a>
          <a href="#what-we-do" className="underline mr-4">What we do</a>
          <a href="#benefits" className="underline mr-4">Benefits</a>
          <a href="#how-it-works" className="underline mr-4">How it works</a>
          <a href="#testimonials" className="underline mr-4">Testimonials</a>
          <a href="#case-study" className="underline">Case Study</a>
        </nav>

        <div id="who-are-we" className="mb-6">
          <h2 className="text-lg font-bold mb-2">Who are we</h2>
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              Former FAANG engineers who also worked at{" "}
              <a href="https://www.karat.com" target="_blank" rel="noopener noreferrer" className="underline">
                Karat
              </a>
              {" "}as interview engineers.
            </p>
          </div>
        </div>

        <div id="what-we-do" className="mb-6">
          <h2 className="text-lg font-bold mb-2">What we do</h2>
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              We conduct 60-minute technical interviews to filter out unqualified candidates. You then interview the qualified ones onsite.
            </p>
            <p>
              $50 per interview—less than the hourly rate of in-house engineers.
            </p>
            <p className="mt-4">
              <a 
                href="https://cal.com/brighter-tunnel/15min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline font-bold"
              >
                Book an intro call (15 min)
              </a>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <Image
            src={interviewImage}
            alt="BrighterTunnel interview dashboard"
            width={800}
            height={400}
            className="w-full h-auto mb-4"
          />
        </div>

        <div id="benefits" className="mb-6">
          <h2 className="text-lg font-bold mb-2">Benefits</h2>
          <div className="space-y-4">
            <div>
              <p className="mb-1 text-sm font-semibold">
                Save 15+ hours per week
              </p>
              <p className="mb-1 text-sm leading-relaxed">
                Your engineers focus on building. We handle technical vetting.
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold">
                Higher quality candidates
              </p>
              <p className="mb-1 text-sm leading-relaxed">
                Human-led interviews assess real coding skills, not just resume keywords.
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold">
                Detailed reports
              </p>
              <p className="mb-1 text-sm leading-relaxed">
                "Hire/No Hire" reports with video recordings included.
              </p>
            </div>
          </div>
        </div>

        <div id="how-it-works" className="mb-6">
          <h2 className="text-lg font-bold mb-2">How it works</h2>
          <div className="space-y-4">
            <div>
              <p className="mb-1 text-sm font-semibold">
                1. You send us candidates
              </p>
              <p className="mb-1 text-sm leading-relaxed">
                Forward resumes. We handle scheduling and assessment.
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold">
                2. We conduct 60-minute technical interviews
              </p>
              <p className="mb-1 text-sm leading-relaxed">
                Live coding interviews testing data structures, algorithms, and system design.
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold">
                3. You interview qualified candidates onsite
              </p>
              <p className="mb-1 text-sm leading-relaxed">
                Receive "Hire/No Hire" reports with video recordings and feedback.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <Image
            src={womenInterviewingImage}
            alt="Technical interview in progress"
            width={800}
            height={400}
            className="w-full h-auto mb-4"
          />
        </div>

        <div id="testimonials" className="mb-6">
          <h2 className="text-lg font-bold mb-2">Testimonials</h2>
          <div className="space-y-4">
            <div>
              <p className="mb-1 text-sm italic leading-relaxed">
                "Thank you for the engaging interview... I truly enjoyed answering your insightful questions and working through both the DSA and the Pandas questions."
              </p>
              <p className="text-sm text-gray-600">— Samarth, Candidate</p>
            </div>
            <div>
              <p className="mb-1 text-sm italic leading-relaxed">
                "Thank you Mubarak for the interview, I really appreciate it. I enjoyed the session and had a good time."
              </p>
              <p className="text-sm text-gray-600">— Dedan I., Candidate</p>
            </div>
          </div>
        </div>

        <div id="case-study" className="mb-6">
          <h2 className="text-lg font-bold mb-2">Case Study</h2>
          <div className="mb-2">
            <Image
              src={pgLogo}
              alt="Piedmont Global logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              We worked with{" "}
              <a 
                href="https://piedmontglobal.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline"
              >
                Piedmont Global
              </a>
              {" "}to build their software development team. We interviewed 38 candidates across 4 roles, helping them identify qualified candidates and save engineering time.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm">
            <a 
              href="https://cal.com/brighter-tunnel/15min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline font-bold"
            >
              Book an intro call (15 min)
            </a>
          </p>
        </div>

        <div className="mb-6 text-sm">
          <a href="/brighter-tunnel/privacy" className="underline mr-4">Privacy</a>
          <a href="/brighter-tunnel/tos" className="underline">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default BrighterTunnel;
