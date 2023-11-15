// pages/profile.js
import React from 'react';

const page = () => {
  const profileInfo = {
    name: 'Mubarak Muse',
    location: 'Minneapolis, Minnesota, USA',
    bioCards: [
      {
        title: `Muse's List`,
        description: 'A service that finds the best apartment for you based on your preferences in less than 24 hours',
        url: 'https://museslist.com',
      },
      {
        title: `Brighter Tunnel`,
        description: 'A Software engineering mock interviewing Service.',
        url: 'https://BrighterTunnel.com',
      },
      {
        title: `Ibn Abaas Tafseer Institute`,
        description: 'An Institute that teaches young Muslims the meaning of the Quran from cover to cover.',
        url: '/tafseer',
      },
      {
        title: `Bakaaro`,
        description: 'The #1 Marketplace for Modest Fashion',
        url: 'https://bakaaro.netlify.app',
      },
    ],
    socialLinks: [
      {
        title: 'LinkedIn',
        url: 'hhttps://www.linkedin.com/in/mubarak-muse/',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/mubarakmuse_',
      },
      {
        title: 'Email',
        url: 'mailto:Mubarak014@gmail.com',
      },
      {
        title: 'GitHub',
        url: 'https://github.com/mubarakmuse',
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <img
        src="https://avatars.githubusercontent.com/u/26447565?v=4"
        alt="Profile Picture"
        className="w-40 h-40 rounded-full mx-auto mb-4"
      />
      <h1 className="text-3xl font-semibold">{profileInfo.name}</h1>
      <p className="text-gray-500">{profileInfo.location}</p>
      <div className="flex justify-center mt-4 space-x-4">
        {profileInfo.socialLinks.map((socialLink, index) => (
          <a
            key={index}
            href={socialLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {socialLink.title}
          </a>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {profileInfo.bioCards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
            <a
              href={card.url}
              className="mt-2 btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
