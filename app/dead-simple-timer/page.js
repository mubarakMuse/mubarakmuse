import React from "react";
import { getSEOTags } from "@/libs/seo";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "Dead Simple Timer - Mobile App",
  description: "A dead simple timer app for iOS. Clean, minimal, and easy to use.",
  keywords: ["timer app", "iOS timer", "simple timer", "mobile app"],
  canonicalUrlRelative: "/dead-simple-timer",
  openGraph: {
    title: "Dead Simple Timer - Mobile App",
    description: "A dead simple timer app for iOS. Clean, minimal, and easy to use.",
    url: "/dead-simple-timer",
  },
});

const DeadSimpleTimer = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-xl mx-auto px-6 py-6">
        <h1 className="text-xl font-bold mb-4">
          Dead Simple Timer
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          A dead simple timer app for iOS. Clean, minimal, and easy to use.
        </p>

        <div className="mb-6">
          <p className="text-sm leading-relaxed mb-4">
            Available on the App Store.
          </p>
        </div>

        <div className="mb-6 text-sm">
          <Link href="/dead-simple-timer/privacy" className="underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeadSimpleTimer;

