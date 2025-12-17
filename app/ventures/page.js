import React from "react";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Muse Ventures - Early-Stage AI Investment",
  description: "Investing in early-stage AI companies in San Francisco and New York City. Supporting innovative AI startups with capital, technical expertise, and network access.",
  keywords: ["venture capital", "AI investment", "early stage funding", "startup investment", "AI startups", "venture studio", "San Francisco", "New York", "AI companies"],
  canonicalUrlRelative: "/ventures",
  openGraph: {
    title: "Muse Ventures - Early-Stage AI Investment",
    description: "Investing in early-stage AI companies in San Francisco and New York City. Supporting innovative AI startups with capital, expertise, and network.",
    url: "/ventures",
  },
});

const Ventures = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-xl mx-auto px-6 py-6">
        <h1 className="text-xl font-bold mb-4">
          Muse Ventures
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Investing in early-stage AI companies in SF and NYC.
        </p>

        <div className="mb-10">
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              Muse Ventures invests in early-stage AI companies building the future. We focus on startups in San Francisco and New York City that are solving real problems with AI.
            </p>
            <p>
              Beyond capital, we provide technical expertise, strategic guidance, and access to our network of engineers, entrepreneurs, and operators.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <a 
            href="mailto:Mubarak014@gmail.com?subject=Muse Ventures Inquiry" 
            className="inline-block bg-black text-white px-6 py-2 rounded text-sm font-semibold hover:bg-gray-800"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ventures;



