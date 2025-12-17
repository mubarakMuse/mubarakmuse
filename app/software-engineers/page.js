import React from "react";
import Image from "next/image";
import { getSEOTags } from "@/libs/seo";
import interviewImage from "./bt-interview.png";

export const metadata = getSEOTags({
  title: "Software Engineer Recruiting & Mock Interviews - Mubarak Muse",
  description: "Get access to 176+ open software engineer roles via Paraform.com, free 45-minute mock coding interviews, and career advice. Former Amazon engineer with 900+ technical interviews conducted at Karat.",
  keywords: ["software engineer jobs", "mock coding interview", "career help", "job search", "technical interview practice", "Paraform", "Karat", "Amazon engineer", "coding interview prep"],
  canonicalUrlRelative: "/software-engineers",
  openGraph: {
    title: "Software Engineer Recruiting & Mock Interviews - Mubarak Muse",
    description: "Get access to 176+ open software engineer roles, free mock coding interviews, and career advice from a senior software engineer.",
    url: "/software-engineers",
  },
});

const SoftwareEngineers = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-xl mx-auto px-6 py-6">
        <h1 className="text-xl font-bold mb-8">
          Helping Software Engineers
        </h1>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">Who am I</h2>
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              I'm Mubarak. I've been a software engineer for 8+ years. I worked at Amazon and Collective Health, and I was an Interview Engineer at{" "}
              <a href="https://www.karat.com" target="_blank" rel="noopener noreferrer" className="underline">
                Karat
              </a>
              {" "}where I did more than 900 technical interviews.
            </p>
            <p>
              Now I help SWE engineers find jobs through <a href="https://www.paraform.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Paraform.com </a> and I also run other internet businesses.

            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">How I can help</h2>
          
          <div className="mb-6">
            <p className="mb-2 text-sm font-semibold">
              1. Job matching
            </p>
            <p className="mb-2 text-sm leading-relaxed">
              I have access to 176+ software engineer roles. Want me to help match you? Fill out this form:{" "}
              <a 
                href="https://www.paraform.com/forms/cldwr0h5i0003l20fp3dfbwxh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                paraform.com/forms/cldwr0h5i0003l20fp3dfbwxh
              </a>
            </p>
            <p className="mb-2 text-sm leading-relaxed">
              Or just email me your resume:{" "}
              <a href="mailto:mubarak014@gmail.com?subject=Resume for SWE Roles&body=Hi Mubarak,%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThanks!" className="underline font-semibold">mubarak014@gmail.com</a>
            </p>
          </div>

          <div className="mb-6">
            <p className="mb-2 text-sm font-semibold">
              2. Free mock interview
            </p>
            <p className="mb-2 text-sm leading-relaxed">
              Need practice before your real interview? Book a free 45-minute mock coding interview with me.
            </p>
            <p className="text-sm">
              <a 
                href="https://cal.com/mubarak-muse-14pidz/45-min-mock-coding-interview" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                cal.com/mubarak-muse-14pidz/45-min-mock-coding-interview
              </a>
            </p>
          </div>
        </div>

        <div className="mb-10">
          <Image
            src={interviewImage}
            alt="Interview dashboard"
            width={800}
            height={400}
            className="w-full h-auto mb-6"
          />
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">Roles I'm recruiting for now</h2>
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold">
                <a 
                  href="https://www.paraform.com/share/agave-(yc-w22)/cma1lh5bg0001k70ddjq31k8h" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Agave (YC W22) - Software Engineer
                </a>
              </p>
              <p className="mb-1 text-sm text-gray-600">Full-time • On-site • San Francisco, CA • $130K - $240K</p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <a 
                  href="https://www.paraform.com/share/owner/cmgmu1x0p00aijo0cmdnhxqi4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Owner - Software Engineer, Fullstack
                </a>
              </p>
              <p className="mb-1 text-sm text-gray-600">Full-time • Remote • United States/Canada • $160K - $190K</p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <a 
                  href="https://www.paraform.com/share/highbeam/cmf67du2s010tkz0ce36ujll5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Highbeam - Software Engineer
                </a>
              </p>
              <p className="mb-1 text-sm text-gray-600">Full-time • On-site • New York/Toronto • $180K - $220K</p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">
                <a 
                  href="https://www.paraform.com/share/banquet-health/cmedk9fwi02hijo0ckava2zmb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Banquet Health - Senior/Staff Software Engineer
                </a>
              </p>
              <p className="mb-1 text-sm text-gray-600">Full-time • Hybrid • San Francisco, CA/New York, NY • $180K - $220K</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">Helpful reads</h2>
          <div className="mb-6">
            <p className="mb-2 text-sm">
              <a 
                href="https://nextplayso.substack.com/p/the-guide-to-getting-a-job-with-cold" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline"
              >
                How to get a job with cold email →
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareEngineers;

