import React from 'react';
import { Twitter, Facebook, Github, Instagram } from 'lucide-react';
import FromAppleStore from "../assets/download-app-store.png"
import FromGooglePlay from "../assets/download-play-store.png"
import TawkToChat from './TawkToChat';

export default function Footer() {
  return (
    <div>

      <TawkToChat />
      <div className="bg-[#190022] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer navigation */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Personal column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Personal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Buy Crypto</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Flexible Savings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Fixed-term Savings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Credit Line</a></li>
            </ul>
          </div>

          {/* Business column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Business</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Corporates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Institutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">White Label</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Nexo Ventures</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Ambassadors</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Vulnerability Disclosure</a></li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Affiliate Terms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">DeFi Terms</a></li>
            </ul>
          </div>

          {/* Install App column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Install App</h3>
            <div className="space-y-3">
              <a href="#" className="block">
                <img 
                  src={FromAppleStore} 
                  alt="Download on the App Store" 
                  className="h-12" 
                />
              </a>
              <a href="#" className="block">
                <img 
                  src={FromGooglePlay} 
                  alt="Get it on Google Play" 
                  className="h-12" 
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom - copyright and social links */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2018 - 2025 EASE withdraw
          </div>
          
          <div>
            <div className="flex items-center">
              <p className="mr-4 text-gray-300">Follow EASE withdraw</p>
              <div className="flex space-x-3">
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:opacity-90">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}