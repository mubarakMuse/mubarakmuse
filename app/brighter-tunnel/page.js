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

        <nav className="mb-8 text-sm">
          <a href="#who-are-we" className="underline mr-4">Who are we</a>
          <a href="#what-we-do" className="underline mr-4">What we do</a>
          <a href="#benefits" className="underline mr-4">Benefits</a>
          <a href="#how-it-works" className="underline mr-4">How it works</a>
          <a href="#testimonials" className="underline mr-4">Testimonials</a>
          <a href="#case-study" className="underline">Case Study</a>
        </nav>

        <div id="who-are-we" className="mb-10">
          <h2 className="text-lg font-bold mb-4">Who are we</h2>
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              We are former FAANG engineers who also worked at{" "}
              <a href="https://www.karat.com" target="_blank" rel="noopener noreferrer" className="underline">
                Karat
              </a>
              {" "}as interview engineers.
            </p>
            <p>
              Our experience at top tech companies and as technical interviewers gives us deep insight into what makes a great software engineer and how to assess technical skills effectively.
            </p>
          </div>
        </div>

        <div id="what-we-do" className="mb-10">
          <h2 className="text-lg font-bold mb-4">What we do</h2>
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              We specialize at the first round technical screen interview. We conduct 60-minute technical interviews to filter out unqualified candidates.
            </p>
            <p>
              Companies then interview the qualified candidates in the final onsite rounds. This saves your senior engineers time and lets them focus on building.
            </p>
            <p>
              Each interview costs $50—less than the hourly rate of in-house engineers.
            </p>
            <p className="mt-4">
              Ready to save your team time?{" "}
              <a 
                href="https://cal.com/brighter-tunnel/15min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline font-bold"
              >
                Book an intro call to learn more (15 min)
              </a>
            </p>
          </div>
        </div>

        <div className="mb-10">
          <Image
            src={interviewImage}
            alt="BrighterTunnel interview dashboard"
            width={800}
            height={400}
            className="w-full h-auto mb-6"
          />
        </div>

        <div id="benefits" className="mb-10">
          <h2 className="text-lg font-bold mb-4">Benefits</h2>
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold">
                Save 15+ hours per week
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Your engineers focus on building, not screening. We handle the technical vetting so you only see qualified candidates.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                Higher quality candidates
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Our human-led interviews assess real coding skills, not just resume keywords. You get candidates who can actually code.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                Detailed reports
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Every interview includes a comprehensive "Hire/No Hire" report with video recordings, so you know exactly what you're getting.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm">
            <a 
              href="https://cal.com/brighter-tunnel/15min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline font-bold"
            >
              Book an intro call to learn more (15 min) →
            </a>
          </p>
        </div>

        <div id="how-it-works" className="mb-10">
          <h2 className="text-lg font-bold mb-4">How it works</h2>
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold">
                1. You send us candidates
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Forward resumes or candidate profiles. We handle the rest—scheduling, communication, and technical assessment.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                2. We conduct 60-minute technical interviews
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Our experienced engineers conduct live coding interviews. We test data structures, algorithms, system design, and practical problem-solving skills.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                3. You interview qualified candidates onsite
              </p>
              <p className="mb-2 text-sm leading-relaxed">
                Receive detailed "Hire/No Hire" recommendations with video recordings, code samples, and specific feedback. You then interview the qualified candidates in your final onsite rounds.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <Image
            src={womenInterviewingImage}
            alt="Technical interview in progress"
            width={800}
            height={400}
            className="w-full h-auto mb-6"
          />
        </div>

        <div id="testimonials" className="mb-10">
          <h2 className="text-lg font-bold mb-4">Testimonials</h2>
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm italic leading-relaxed">
                "Thank you for the engaging interview... I truly enjoyed answering your insightful questions and working through both the DSA and the Pandas questions."
              </p>
              <p className="text-sm text-gray-600">— Samarth, Candidate</p>
            </div>
            <div>
              <p className="mb-2 text-sm italic leading-relaxed">
                "Thank you Mubarak for the interview, I really appreciate it. I enjoyed the session and had a good time."
              </p>
              <p className="text-sm text-gray-600">— Dedan I., Candidate</p>
            </div>
          </div>
        </div>

        <div id="case-study" className="mb-10">
          <h2 className="text-lg font-bold mb-4">Case Study</h2>
          <div className="mb-4">
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
              Earlier this year, we worked with{" "}
              <a 
                href="https://piedmontglobal.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline"
              >
                Piedmont Global
              </a>
              {" "}to build their initial software development team. We conducted technical screening interviews for 4 different roles.
            </p>
            <p>
              We interviewed 38 candidates total—a mix of both US candidates and international candidates. Our technical interviews helped Piedmont Global identify qualified candidates who could actually code, saving their engineering team significant time in the hiring process.
            </p>
            <p>
              Each candidate received a 60-minute technical interview where we assessed their coding skills, problem-solving abilities, and technical knowledge. We provided detailed "Hire/No Hire" reports with video recordings, allowing Piedmont Global to make informed decisions about which candidates to bring in for their final onsite rounds.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-2 text-sm leading-relaxed">
            Ready to save your team time? Book an intro call to learn more (15 min):
          </p>
          <p className="text-sm">
            <a 
              href="https://cal.com/brighter-tunnel/15min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline font-bold"
            >
              cal.com/brighter-tunnel/15min
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
