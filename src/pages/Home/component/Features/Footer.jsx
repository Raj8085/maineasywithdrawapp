import {
  Twitter,
  Facebook,
  Instagram,
  Github,
  CreditCard,
  Wallet,
  PiggyBank,
  Building2,
  Users,
  Tag,
  Briefcase
} from 'lucide-react';

function Footer() {
  return (
    <div className="">
      {/* Main content would go here */}
      <footer className="bg-[#190022] py-16 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Personal Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-6">Personal</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                  <Wallet className="w-4 h-4" />
                  <a href="#">Buy Crypto</a>
                </li>
                <li className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                  <PiggyBank className="w-4 h-4" />
                  <a href="#">Flexible Savings</a>
                </li>
                <li className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                  <Building2 className="w-4 h-4" />
                  <a href="#">Fixed-term Savings</a>
                </li>
                <li className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                  <CreditCard className="w-4 h-4" />
                  <a href="#">Credit Line</a>
                </li>
              </ul>
            </div>

            {/* Business Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-6">Business</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                  <Building2 className="w-4 h-4" />
                  <a href="#">Corporates</a>
                </li>
                <li className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                  <Users className="w-4 h-4" />
                  <a href="#">Institutions</a>
                </li>
                <li className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                  <Tag className="w-4 h-4" />
                  <a href="#">White Label</a>
                </li>
                <li className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                  <Briefcase className="w-4 h-4" />
                  <a href="#">Nexo Ventures</a>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li className="text-gray-300 hover:text-white transition">
                  <a href="#">About</a>
                </li>
                <li className="text-gray-300 hover:text-white transition">
                  <a href="#">Ambassadors</a>
                </li>
                <li className="text-gray-300 hover:text-white transition">
                  <a href="#">Security</a>
                </li>
                <li className="text-gray-300 hover:text-white transition">
                  <a href="#">Vulnerability Disclosure</a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                <li className="text-gray-300 hover:text-white transition">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="text-gray-300 hover:text-white transition">
                  <a href="#">Affiliate Terms</a>
                </li>
                <li className="text-gray-300 hover:text-white transition">
                  <a href="#">Terms of Service</a>
                </li>
                <li className="text-gray-300 hover:text-white transition">
                  <a href="#">DeFi Terms</a>
                </li>
              </ul>
            </div>

            {/* Install App Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-6">Install App</h3>
              <div className="space-y-4">
                <a href="#" className="block">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-10"
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-14 -ml-3"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2018 - 2025. EASE withdraw</p>
            <div className="flex space-x-6">
              <p className="text-gray-400 text-sm">Follow EASE withdraw</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;