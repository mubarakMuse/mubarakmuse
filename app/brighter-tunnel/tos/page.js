import React from "react";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Terms of Service - BrighterTunnel",
  description: "Terms of Service for BrighterTunnel technical screening services",
  keywords: ["BrighterTunnel", "terms of service", "technical screening"],
  canonicalUrlRelative: "/brighter-tunnel/tos",
});

const BrighterTunnelTOS = () => {
  return (
    <div className="bg-white text-black min-h-screen">
        <div className="max-w-xl mx-auto px-6 py-6">
          <h1 className="text-xl font-bold mb-4">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-8" suppressHydrationWarning>Last updated: December 8, 2025</p>

          <div className="text-sm leading-relaxed space-y-6">
            <section>
              <h2 className="text-lg font-bold mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using BrighterTunnel's technical screening services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">2. Service Description</h2>
              <p>
                BrighterTunnel provides technical screening and interview services for businesses seeking to evaluate software engineering candidates. Our services include live technical interviews, detailed candidate reports, and video recordings of interview sessions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">3. Use of Service</h2>
              <p>You agree to use BrighterTunnel's services only for lawful purposes and in accordance with these Terms of Service. You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the service to screen candidates in violation of any applicable employment laws</li>
                <li>Share interview recordings or reports with unauthorized parties</li>
                <li>Use the service to discriminate against candidates based on protected characteristics</li>
                <li>Attempt to reverse engineer or extract proprietary information from our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">4. Payment and Billing</h2>
              <p>
                Payment terms will be specified in your service agreement. All fees are due as agreed upon in your contract. We reserve the right to suspend or terminate services for non-payment.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">5. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of candidate information, interview content, and proprietary business information shared during the course of our services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">6. Limitation of Liability</h2>
              <p>
                BrighterTunnel provides screening services as a tool to assist in your hiring process. We do not guarantee specific hiring outcomes, and our recommendations are advisory in nature. You are responsible for making final hiring decisions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">7. Intellectual Property</h2>
              <p>
                All content, reports, and materials provided by BrighterTunnel are proprietary and confidential. You may use these materials solely for your internal hiring decisions and may not distribute or share them without our written consent.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">8. Termination</h2>
              <p>
                Either party may terminate the service agreement with appropriate notice as specified in your contract. Upon termination, all outstanding fees must be paid, and confidential materials must be returned or destroyed.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Material changes will be communicated to active clients. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">10. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:mubarak@brightertunnel.com" className="underline">
                  mubarak@brightertunnel.com
                </a>
              </p>
            </section>
          </div>
          <div className="mt-8">
            <a href="/brighter-tunnel" className="underline text-sm">← Back to BrighterTunnel</a>
          </div>
        </div>
    </div>
  );
};

export default BrighterTunnelTOS;

