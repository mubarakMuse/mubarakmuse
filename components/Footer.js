import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              priority={true}
              className="w-5 h-5"
              width={20}
              height={20}
            />
            <span className="font-semibold text-gray-900 text-sm">
              {config.appName}
            </span>
          </div>
          

          <p className="text-sm text-gray-500" suppressHydrationWarning>
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
