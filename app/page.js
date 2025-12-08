import React from "react";
import Image from "next/image";
import Link from "next/link";
import img from "@/app/picofme.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Mubarak Muse - Entrepreneur & Software Engineer",
  description: "Home for launching and building business ideas, products, and ventures. Software engineer, entrepreneur, and builder based in Minneapolis, Minnesota.",
  keywords: ["Mubarak Muse", "entrepreneur", "software engineer", "business ideas", "products", "ventures", "Minneapolis"],
  canonicalUrlRelative: "/",
});

const Profile = () => {
  const profileInfo = {
    name: "Mubarak Muse",
    location: "Minneapolis, Minnesota, USA",
    // Add your projects, products, or business ventures here
    // Set external: true for external links, false for internal pages
    projects: [
      {
        title: `BrighterTunnel`,
        description: "Live technical screening interview service for businesses - A Karat.com alternative",
        url: "/brighter-tunnel",
        external: false,
      },
      {
        title: `Software Consulting`,
        description: "General software consulting service - Building software and AI integration solutions for businesses",
        url: "/consulting",
        external: false,
      },
      // Add more projects here as you launch them:
      // {
      //   title: "Your New Product",
      //   description: "Description of your product or service",
      //   url: "/your-product-page", // or "https://external-link.com" for external
      //   external: false, // or true for external links
      // },
    ],
    socialLinks: [
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/mubarak-muse/",
        icon: "💼",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/mubarakmuse_",
        icon: "🐦",
      },
      {
        title: "Email",
        url: "mailto:Mubarak014@gmail.com",
        icon: "✉️",
      },
      {
        title: "GitHub",
        url: "https://github.com/mubarakmuse",
        icon: "💻",
      },
    ],
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <Image
              src={img}
              alt="Profile Picture"
              width={120}
              height={120}
              className="rounded-full mx-auto border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 tracking-tight">
            {profileInfo.name}
          </h1>
          <p className="text-lg text-indigo-600 mb-4 font-medium">{profileInfo.location}</p>
          <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            This is my home for launching and testing business ideas, products, and ventures. 
            A place to experiment, build, and share what I'm working on.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 flex-wrap mb-6">
            {profileInfo.socialLinks.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium flex items-center gap-2 hover:scale-105 transform"
                aria-label={socialLink.title}
              >
                <span className="text-lg">{socialLink.icon}</span>
                <span>{socialLink.title}</span>
              </a>
            ))}
          </div>
          
          {/* Resume Button */}
          <div className="flex justify-center">
            <Link
              href="/resume"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-md hover:shadow-lg"
            >
              View Resume
            </Link>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 text-center">Projects & Ventures</h2>
          <p className="text-indigo-600 text-center mb-8 font-medium">Launching and testing business ideas, products, and services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {profileInfo.projects.map((card, index) => (
              <a
                key={index}
                href={card.url}
                target={card.external ? "_blank" : "_self"}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="group bg-white rounded-xl p-6 border-2 border-blue-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 flex flex-col hover:scale-105"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {card.description}
                </p>
                <div className="flex items-center text-purple-600 text-sm font-medium mt-auto group-hover:text-indigo-600">
                  <span>Learn More {card.external ? "→" : "→"}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
