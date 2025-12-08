"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../brighter_tunnel_logo.jpeg";

const BrighterTunnelHeader = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/brighter-tunnel" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="BrighterTunnel Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-bold text-xl text-gray-900">BrighterTunnel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Testimonials
            </a>
            <a
              href="https://cal.com/brighter-tunnel/15min"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Book Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="https://cal.com/brighter-tunnel/15min"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Demo
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default BrighterTunnelHeader;

