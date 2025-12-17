import React from "react";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "City Apartment Directory - New Move-In Specials",
  description: "The only list of new move-in specials in your city. Find the best apartment deals, move-in specials, and rental discounts in one place.",
  keywords: ["apartment directory", "move-in specials", "apartment deals", "rental discounts", "apartment finder", "city apartments"],
  canonicalUrlRelative: "/apartments",
});

const Apartments = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-xl mx-auto px-6 py-6">
        <h1 className="text-xl font-bold mb-4">
          City Apartment Directory
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          The only list of new move-in specials in your city.
        </p>

        <div className="mb-10">
          <div className="text-sm leading-relaxed space-y-3">
            <p>
              Finding an apartment with move-in specials shouldn't be a scavenger hunt. We compile all the latest move-in deals, discounts, and special offers from apartments in your city.
            </p>
            <p>
              Save time and money by seeing all available specials in one place—no more calling dozens of buildings or missing out on limited-time offers.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <a 
            href="mailto:Mubarak014@gmail.com?subject=Apartment Directory Inquiry" 
            className="inline-block bg-black text-white px-6 py-2 rounded text-sm font-semibold hover:bg-gray-800"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </div>
  );
};

export default Apartments;


