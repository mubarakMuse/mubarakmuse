import React from "react";
import Image from "next/image";
import img from "@/app/picofme.png";

const Profile = () => {
  const profileInfo = {
    name: "Mubarak Muse",
    location: "Minneapolis, Minnesota, USA",
    bio: "Software Engineers, entrepreneur and Islamic Educator.",
    bioCards: [
      // {
      //   title: `Muse's List`,
      //   description: 'A service that finds the best apartment for you based on your preferences in less than 24 hours',
      //   url: 'https://museslist.com',
      // },
      {
        title: `Brighter Tunnel`,
        description: "Technical Interviewing as Service for tech companies ",
        url: "https://BrighterTunnel.com",
      },
      {
        title: `TaskFlow: Task Managment`,
        description: "a unique way to orginze your tasks using the eisenhower matrix",
        url: "/taskflow",
      },
      {
        title: `Tafseer Course`,
        description:
          "Tafseer classes for High School and Middle School Students",
        url: "/tafseer",
      },
      // {
      //   title: `Bakaaro`,
      //   description: 'The #1 Marketplace for Modest Fashion',
      //   url: 'https://bakaaro.netlify.app',
      // },
      {
        title: `Resume`,
        description: "A Digital Copy Of My Resume",
        url: "/resume",
      },
    ],
    socialLinks: [
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/mubarak-muse/",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/mubarakmuse_",
      },
      {
        title: "Email",
        url: "mailto:Mubarak014@gmail.com",
      },
      {
        title: "GitHub",
        url: "https://github.com/mubarakmuse",
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="text-center p-8 border-b">
          <Image
            src={img}
            alt="Profile Picture"
            width={160} // specify width
            height={160} // and height
            className="rounded-full mx-auto"
          />
          <h1 className="text-3xl font-semibold mt-4">{profileInfo.name}</h1>
          <p className="text-gray-500">{profileInfo.location}</p>
          <p className="text-gray-600 mt-2">{profileInfo.bio}</p>
        </div>
        <div className="p-4">
          <div className="flex text-center justify-center space-x-4 mb-4">
            {profileInfo.socialLinks.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition duration-200"
              >
                {socialLink.title}
              </a>
            ))}
          </div>
          <div className="grid text-center grid-cols-1 md:grid-cols-2 gap-6">
            {profileInfo.bioCards.map((card, index) => (
              <div
                key={index}
                className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                <h2 className="text-xl font-semibold text-blue-800">
                  {card.title}
                </h2>
                <p className="text-gray-700 mt-3">{card.description}</p>
                <a
                  href={card.url}
                  className="inline-block mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
