import React from "react";
import Image from "next/image";
import BrighterTunnelHeader from "./components/BrighterTunnelHeader";
import BrighterTunnelFooter from "./components/BrighterTunnelFooter";
import interviewImage from "./bt-interview.png";

const BrighterTunnel = () => {
  return (
    <>
      <BrighterTunnelHeader />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight">
              Technical Screening That <span className="text-blue-600">Actually Works</span>
              </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Stop wasting your senior engineers' time on unqualified candidates. We screen applicants so you only interview the top 20% who can actually code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
              <a
                href="https://cal.com/brighter-tunnel/15min"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Book a 15-Min Demo
              </a>
              <p className="text-sm sm:text-base text-gray-500">No credit card required</p>
            </div>
            
            <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <Image
                src={interviewImage}
                alt="BrighterTunnel Candidate Report Dashboard"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Your Engineering Team is Expensive.<br className="hidden sm:block" /> Screening Shouldn't Be.
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Every hour your lead engineer spends interviewing an unqualified candidate costs you valuable sprint time and delays product delivery. We act as your technical gatekeeper, filtering out 80% of candidates before they reach your team.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl mb-4">⏱️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Save 15+ Hours Per Week</h3>
                <p className="text-gray-600">
                  Your engineers focus on building, not screening. We handle the technical vetting so you only see qualified candidates.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Higher Quality Candidates</h3>
                <p className="text-gray-600">
                  Our human-led interviews assess real coding skills, not just resume keywords. You get candidates who can actually code.
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 sm:col-span-2 lg:col-span-1">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Reports</h3>
                <p className="text-gray-600">
                  Every interview includes a comprehensive "Hire/No Hire" report with video recordings, so you know exactly what you're getting.
                </p>
              </div>
            </div>
          </div>
              </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 sm:mb-16">
              How It Works
            </h2>
            <div className="space-y-8 sm:space-y-12">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">You Send Us Candidates</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Forward resumes or candidate profiles. We handle the rest—scheduling, communication, and technical assessment.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">We Conduct Live Technical Interviews</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our experienced engineers conduct real-time coding interviews. We test data structures, algorithms, system design, and practical problem-solving skills.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">You Get Actionable Reports</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Receive detailed "Hire/No Hire" recommendations with video recordings, code samples, and specific feedback. Only the top 20% make it to your team.
                  </p>
                </div>
              </div>
            </div>
          </div>
              </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-gray-50 py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16">
              What Candidates Say
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-base sm:text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "Thank you for the engaging interview... I truly enjoyed answering your insightful questions and working through both the DSA and the Pandas questions."
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-sm sm:text-base">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Samarth</div>
                    <div className="text-sm text-gray-500">Candidate</div>
                  </div>
                </div>
      </div>

              <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-base sm:text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "Thank you Mubarak for the interview, I really appreciate it. I enjoyed the session and had a good time."
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-600 font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-sm sm:text-base">
                    D
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dedan I.</div>
                    <div className="text-sm text-gray-500">Candidate</div>
                  </div>
                </div>
        </div>
      </div>
    </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Reclaim Your Engineering Sprints?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
              See how BrighterTunnel can save your team 15+ hours per week while improving candidate quality.
            </p>
            <a
              href="https://cal.com/brighter-tunnel/15min"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 sm:px-10 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book a 15-Min Demo
            </a>
            <p className="text-sm sm:text-base text-gray-400 mt-4">No credit card required • Cancel anytime</p>
          </div>
        </section>
      </div>
      <BrighterTunnelFooter />
    </>
  );
};

export default BrighterTunnel;
