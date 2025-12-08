import Link from "next/link";
import Image from "next/image";
import logo from "../brighter_tunnel_logo.jpeg";

const BrighterTunnelFooter = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/brighter-tunnel" className="flex items-center gap-3 mb-4">
              <Image
                src={logo}
                alt="BrighterTunnel Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="font-bold text-lg text-gray-900">BrighterTunnel</span>
            </Link>
            <p className="text-gray-600 text-sm mb-4 max-w-md">
              Technical screening that actually works. Save your engineering team time by only interviewing qualified candidates.
            </p>
            <a
              href="https://cal.com/brighter-tunnel/15min"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
            >
              Book a Demo
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="https://cal.com/brighter-tunnel/15min"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Book Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Mubarak Muse
                </Link>
              </li>
              <li>
                <a
                  href="mailto:mubarak@brightertunnel.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500" suppressHydrationWarning>
            © {new Date().getFullYear()} BrighterTunnel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/brighter-tunnel/tos" className="hover:text-gray-900 transition-colors">
              Terms
            </Link>
            <Link href="/brighter-tunnel/privacy" className="hover:text-gray-900 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BrighterTunnelFooter;

