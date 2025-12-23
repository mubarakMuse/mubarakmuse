import React from "react";
import { getSEOTags } from "@/libs/seo";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "Dead Simple Timer - Privacy Policy",
  description: "Privacy Policy for Dead Simple Timer mobile app.",
  canonicalUrlRelative: "/dead-simple-timer/privacy",
  openGraph: {
    title: "Dead Simple Timer - Privacy Policy",
    description: "Privacy Policy for Dead Simple Timer mobile app.",
    url: "/dead-simple-timer/privacy",
  },
});

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-2 pb-4 border-b-2 border-[#64FFDA]">
          Privacy Policy for Dead Simple Timer
        </h1>
        <p className="text-gray-400 italic mb-8">
          <strong>Last Updated:</strong> December 23, 2025
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl text-[#64FFDA] mt-10 mb-4">Introduction</h2>
            <p className="text-[#E0E0E0] mb-4">
              Dead Simple Timer ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our mobile application (the "App").
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-[#64FFDA] mt-10 mb-4">Information We Collect</h2>
            <h3 className="text-xl text-[#64FFDA] mt-6 mb-3">Local Storage Only</h3>
            <p className="text-[#E0E0E0] mb-4">
              Dead Simple Timer stores the following information locally on your device:
            </p>
            <ul className="list-disc ml-8 mb-4 space-y-2 text-[#E0E0E0]">
              <li>Your last selected timer preset (15, 30, 45, or 60 minutes)</li>
              <li>Your app settings (vibration and sound preferences)</li>
            </ul>
            <p className="text-[#E0E0E0] mb-4">
              <strong className="text-white">This information is stored only on your device and is never transmitted to us or any third parties.</strong>
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-[#64FFDA] mt-10 mb-4">How We Use Information</h2>
            <p className="text-[#E0E0E0] mb-4">
              The information stored locally is used solely to:
            </p>
            <ul className="list-disc ml-8 mb-4 space-y-2 text-[#E0E0E0]">
              <li>Remember your preferred timer preset for convenience</li>
              <li>Remember your sound and vibration preferences</li>
              <li>Improve your user experience within the app</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-[#64FFDA] mt-10 mb-4">Data Sharing</h2>
            <p className="text-[#E0E0E0] mb-4">
              <strong className="text-white">We do not collect, share, or sell any personal information.</strong> All data remains on your device and is never transmitted to external servers or third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-[#64FFDA] mt-10 mb-4">Third-Party Services</h2>
            <p className="text-[#E0E0E0] mb-4">
              The app includes a link to Stripe for optional support payments. When you click this link, you will be redirected to Stripe's website, which has its own privacy policy. We do not have access to any information you provide to Stripe.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-[#64FFDA] mt-10 mb-4">Children's Privacy</h2>
            <p className="text-[#E0E0E0] mb-4">
              Our app does not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-[#64FFDA] mt-10 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-[#E0E0E0] mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-[#64FFDA] mt-10 mb-4">Your Rights</h2>
            <p className="text-[#E0E0E0] mb-4">
              Since all data is stored locally on your device, you have full control:
            </p>
            <ul className="list-disc ml-8 mb-4 space-y-2 text-[#E0E0E0]">
              <li>You can delete the app at any time, which will remove all stored data</li>
              <li>You can reset your preferences through the app settings</li>
            </ul>
          </div>

          <div className="bg-[rgba(100,255,218,0.1)] p-5 rounded-lg border-l-4 border-[#64FFDA] mt-8">
            <h2 className="text-2xl text-[#64FFDA] mb-4">Contact Us</h2>
            <p className="text-[#E0E0E0] mb-2">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-[#E0E0E0] mb-2">
              <strong className="text-white">Email:</strong> Mubarak014@gmail.com
            </p>
          </div>

          <hr className="my-10 border-t border-gray-700" />
          <p className="text-gray-400 text-sm text-center">
            <strong>Note:</strong> This app does not track users across apps or websites, as stated in our App Store listing.
          </p>
        </div>

        <div className="mt-8 text-sm">
          <Link href="/dead-simple-timer" className="underline text-[#64FFDA]">
            ← Back to Dead Simple Timer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

