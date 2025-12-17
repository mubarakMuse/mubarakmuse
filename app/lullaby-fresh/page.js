import React from "react";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Lullaby Fresh - Pre-Toss Diaper Neutralizer Spray",
  description: "The pre-toss diaper neutralizer spray. Stop the smell before it starts. Eliminate diaper odor instantly with our natural, safe formula.",
  keywords: ["diaper spray", "diaper odor", "baby products", "diaper neutralizer", "odor eliminator", "baby care"],
  canonicalUrlRelative: "/lullaby-fresh",
});

const LullabyFresh = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-xl mx-auto px-6 py-6">
        <h1 className="text-xl font-bold mb-4">
          Lullaby Fresh
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          The pre-toss diaper neutralizer spray. Stop the smell before it starts.
        </p>

        <div className="mb-10">
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              Tired of diaper odor? Lullaby Fresh is a pre-toss spray that neutralizes smells instantly. Spray before you toss—no more stinky diaper pails or trash cans.
            </p>
            <p>
              Our natural, safe formula works immediately to eliminate odors at the source, making diaper disposal clean and simple.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <a 
            href="mailto:Mubarak014@gmail.com?subject=Lullaby Fresh Inquiry" 
            className="inline-block bg-black text-white px-6 py-2 rounded text-sm font-semibold hover:bg-gray-800"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </div>
  );
};

export default LullabyFresh;


