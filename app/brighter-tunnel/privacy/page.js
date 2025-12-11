import React from "react";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Privacy Policy - BrighterTunnel",
  description: "Privacy Policy for BrighterTunnel technical screening services",
  keywords: ["BrighterTunnel", "privacy policy", "data protection", "technical screening"],
  canonicalUrlRelative: "/brighter-tunnel/privacy",
});

const BrighterTunnelPrivacy = () => {
  return (
    <div className="bg-white text-black min-h-screen">
        <div className="max-w-xl mx-auto px-6 py-6">
          <h1 className="text-xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8" suppressHydrationWarning>Last updated: December 8, 2025</p>

          <div className="text-sm leading-relaxed space-y-6">
            <section>
              <h2 className="text-lg font-bold mb-3">1. Introduction</h2>
              <p>
                BrighterTunnel ("we," "our," or "us") is committed to protecting your privacy and the privacy of candidates we screen on your behalf. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our technical screening services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">2. Information We Collect</h2>
              <h3 className="text-sm font-semibold mb-2">From Clients:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Company name and contact information</li>
                <li>Billing and payment information</li>
                <li>Candidate information you provide for screening</li>
                <li>Communication records and preferences</li>
              </ul>
              
              <h3 className="text-sm font-semibold mb-2 mt-4">From Candidates:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name, contact information, and resume details</li>
                <li>Interview responses and code samples</li>
                <li>Video recordings of interview sessions</li>
                <li>Assessment results and technical evaluations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">3. How We Use Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Conduct technical interviews and assessments</li>
                <li>Generate detailed candidate reports for our clients</li>
                <li>Provide video recordings and interview documentation</li>
                <li>Process payments and manage service agreements</li>
                <li>Communicate with clients and candidates about our services</li>
                <li>Improve our screening processes and service quality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">4. Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent personal information to third parties. We may share information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With the client who requested the candidate screening</li>
                <li>With service providers who assist in delivering our services (under strict confidentiality agreements)</li>
                <li>When required by law or to protect our legal rights</li>
                <li>With candidate consent or as otherwise permitted by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure storage, and access controls.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">6. Data Retention</h2>
              <p>
                We retain candidate information and interview materials for as long as necessary to provide our services and comply with legal obligations. Client data is retained according to the terms of our service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">7. Candidate Rights</h2>
              <p>Candidates have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access their personal information we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of their information (subject to legal and contractual obligations)</li>
                <li>Withdraw consent for processing (where applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">8. Cookies and Tracking</h2>
              <p>
                We may use cookies and similar tracking technologies to improve our website functionality and user experience. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">10. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Material changes will be communicated to clients and posted on our website with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3">12. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights regarding personal information, please contact us at{" "}
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

export default BrighterTunnelPrivacy;

