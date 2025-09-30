
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0A1612] via-[#0E1F1C] to-[#0A1612] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#ffd800] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ffd800] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-700/50">
          {/* Column 1 - Technology Advice */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="font-bold mb-4 text-3xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Technology Advice
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffd800] to-transparent rounded-full mb-6"></div>
            </div>
            
            <div className="flex-grow">
              <p className="text-gray-300 leading-relaxed text-base hover:text-gray-100 transition-colors duration-300">
                We provide comprehensive technology solutions and expert advice to help businesses
                make informed decisions with confidence and clarity.
              </p>
            </div>
            
            {/* Email Section */}
            <div className="group">
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">Email Us</h4>
              <a 
                href="mailto:info@technologyadvice.com" 
                className="flex items-center gap-3 text-[#ffd800] hover:text-white transition-all duration-300 group"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#ffd800]/10 group-hover:bg-[#ffd800] transition-all duration-300">
                  <FaEnvelope className="text-[#ffd800] group-hover:text-black transition-colors duration-300" />
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  info@technologyadvice.com
                </span>
              </a>
            </div>
            
            {/* Phone Number Section */}
            <div className="group">
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">Call Us</h4>
              <a 
                href="tel:+1-555-123-4567" 
                className="flex items-center gap-3 text-[#ffd800] hover:text-white transition-all duration-300 group"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#ffd800]/10 group-hover:bg-[#ffd800] transition-all duration-300">
                  <FaPhone className="text-[#ffd800] group-hover:text-black transition-colors duration-300" />
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  +1 (555) 123-4567
                </span>
              </a>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div className="flex flex-col lg:ml-8">
            <div>
              <h3 className="font-bold mb-4 text-3xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Company
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffd800] to-transparent rounded-full mb-6"></div>
            </div>
            <ul className="space-y-4 text-lg">
              <li>
                <a 
                  href="/About-Us/about-us" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">About Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="/About-Us/Careers" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300">
                    Careers
                    <span className="bg-gradient-to-r from-[#ffd800] to-[#ffed4e] text-black px-3 py-1 rounded-full text-xs font-bold hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#ffd800]/30 animate-pulse">
                      We're Hiring
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="/About-Us/Contact-us" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div className="flex flex-col lg:ml-8">
            <div>
              <h3 className="font-bold mb-4 text-3xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Legal
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffd800] to-transparent rounded-full mb-6"></div>
            </div>
            <ul className="space-y-4 text-lg">
              <li>
                <a 
                  href="/Terms-of-use" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Terms of Use</span>
                </a>
              </li>
              <li>
                <a 
                  href="/Privacy-policy" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Privacy Policy</span>
                </a>
              </li>
               <li>
                <a 
                  href="#" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Cookie Policy</span>
                </a>
              </li>
               <li>
                <a 
                  href="/Data-security" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Data Security</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">California – Do Not Sell My Info</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Connect With Us */}
          <div className="flex flex-col lg:ml-8">
            <div>
              <h3 className="font-bold mb-4 text-3xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Connect With Us
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffd800] to-transparent rounded-full mb-6"></div>
            </div>
            <p className="text-gray-300 mb-6 text-base">
              Follow us on social media for the latest updates and insights
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1877f2] to-[#1460d1] hover:from-[#ffd800] hover:to-[#ffed4e] hover:shadow-2xl hover:shadow-[#ffd800]/50 transform hover:scale-110 hover:-rotate-6 transition-all duration-300 group"
              >
                <FaFacebookF size={22} className="group-hover:text-black text-white transition-colors duration-300 relative z-10" />
                <div className="absolute inset-0 rounded-xl bg-[#ffd800] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </a>
              <a 
                href="#" 
                className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:from-[#ffd800] hover:via-[#ffed4e] hover:to-[#ffd800] hover:shadow-2xl hover:shadow-[#ffd800]/50 transform hover:scale-110 hover:rotate-6 transition-all duration-300 group"
              >
                <FaInstagram size={22} className="group-hover:text-black text-white transition-colors duration-300 relative z-10" />
                <div className="absolute inset-0 rounded-xl bg-[#ffd800] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </a>
              <a 
                href="#" 
                className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0077b5] to-[#005582] hover:from-[#ffd800] hover:to-[#ffed4e] hover:shadow-2xl hover:shadow-[#ffd800]/50 transform hover:scale-110 hover:-rotate-6 transition-all duration-300 group"
              >
                <FaLinkedinIn size={22} className="group-hover:text-black text-white transition-colors duration-300 relative z-10" />
                <div className="absolute inset-0 rounded-xl bg-[#ffd800] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </a>
            </div>
            
            {/* Newsletter Signup */}
          
          </div>
        </div>

        {/* Cookie Info */}
        <div className="max-w-6xl mx-auto mt-12 p-6 rounded-xl bg-[#ffd800]/5 border border-[#ffd800]/20">
          <p className="text-center text-sm text-gray-300 leading-relaxed">
            We use cookies and other data collection technologies to provide the best experience for our customers. 
            You may request that your data not be shared with third parties here: 
            <a href="#" className="text-[#ffd800] font-bold ml-2 hover:text-white hover:underline transition-all duration-300">
              Do Not Sell My Data
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700/50">
          <p className="text-sm text-gray-400">
            © 2025 <span className="text-[#ffd800] font-semibold">TechnologyAdvice</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0A1612] via-[#0E1F1C] to-[#0A1612] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#ffd800] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ffd800] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-700/50">
          {/* Column 1 - Technology Advice */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="font-bold mb-4 text-3xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Technology Advice
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffd800] to-transparent rounded-full mb-6"></div>
            </div>
            
            <div className="flex-grow">
              <p className="text-gray-300 leading-relaxed text-base hover:text-gray-100 transition-colors duration-300">
                We provide comprehensive technology solutions and expert advice to help businesses
                make informed decisions with confidence and clarity.
              </p>
            </div>
            
            {/* Email Section */}
            <div className="group">
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">Email Us</h4>
              <a 
                href="mailto:info@technologyadvice.com" 
                className="flex items-center gap-3 text-[#ffd800] hover:text-white transition-all duration-300 group"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#ffd800]/10 group-hover:bg-[#ffd800] transition-all duration-300">
                  <FaEnvelope className="text-[#ffd800] group-hover:text-black transition-colors duration-300" />
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  info@technologyadvice.com
                </span>
              </a>
            </div>
            
            {/* Phone Number Section */}
            <div className="group">
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-400">Call Us</h4>
              <a 
                href="tel:+1-555-123-4567" 
                className="flex items-center gap-3 text-[#ffd800] hover:text-white transition-all duration-300 group"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#ffd800]/10 group-hover:bg-[#ffd800] transition-all duration-300">
                  <FaPhone className="text-[#ffd800] group-hover:text-black transition-colors duration-300" />
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  +1 (555) 123-4567
                </span>
              </a>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div className="flex flex-col lg:ml-8">
            <div>
              <h3 className="font-bold mb-4 text-3xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Company
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffd800] to-transparent rounded-full mb-6"></div>
            </div>
            <ul className="space-y-4 text-lg">
              <li>
                <a 
                  href="/About-Us/about-us" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">About Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="/About-Us/Careers" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300">
                    Careers
                    <span className="bg-gradient-to-r from-[#ffd800] to-[#ffed4e] text-black px-3 py-1 rounded-full text-xs font-bold hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#ffd800]/30 animate-pulse">
                      We're Hiring
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="/About-Us/Contact-us" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div className="flex flex-col lg:ml-8">
            <div>
              <h3 className="font-bold mb-4 text-3xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Legal
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffd800] to-transparent rounded-full mb-6"></div>
            </div>
            <ul className="space-y-4 text-lg">
              <li>
                <a 
                  href="/Terms-of-use" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Terms of Use</span>
                </a>
              </li>
              <li>
                <a 
                  href="/Privacy-policy" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Privacy Policy</span>
                </a>
              </li>
               <li>
                <a 
                  href="/Cookies-Policy" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Cookie Policy</span>
                </a>
              </li>
               <li>
                <a 
                  href="#" 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Data Security</span>
                </a>
              </li>
              <li>
                <a 
                  href="/California-Do-not-shell-my-info " 
                  className="group flex items-center gap-2 text-gray-300 hover:text-[#ffd800] transition-all duration-300"
                >
                  <FaArrowRight className="text-[#ffd800] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={14} />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">California – Do Not Sell My Info</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Connect With Us */}
          <div className="flex flex-col lg:ml-8">
            <div>
              <h3 className="font-bold mb-4 text-3xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Connect With Us
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#ffd800] to-transparent rounded-full mb-6"></div>
            </div>
            <p className="text-gray-300 mb-6 text-base">
              Follow us on social media for the latest updates and insights
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1877f2] to-[#1460d1] hover:from-[#ffd800] hover:to-[#ffed4e] hover:shadow-2xl hover:shadow-[#ffd800]/50 transform hover:scale-110 hover:-rotate-6 transition-all duration-300 group"
              >
                <FaFacebookF size={22} className="group-hover:text-black text-white transition-colors duration-300 relative z-10" />
                <div className="absolute inset-0 rounded-xl bg-[#ffd800] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </a>
              <a 
                href="#" 
                className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:from-[#ffd800] hover:via-[#ffed4e] hover:to-[#ffd800] hover:shadow-2xl hover:shadow-[#ffd800]/50 transform hover:scale-110 hover:rotate-6 transition-all duration-300 group"
              >
                <FaInstagram size={22} className="group-hover:text-black text-white transition-colors duration-300 relative z-10" />
                <div className="absolute inset-0 rounded-xl bg-[#ffd800] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </a>
              <a 
                href="#" 
                className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0077b5] to-[#005582] hover:from-[#ffd800] hover:to-[#ffed4e] hover:shadow-2xl hover:shadow-[#ffd800]/50 transform hover:scale-110 hover:-rotate-6 transition-all duration-300 group"
              >
                <FaLinkedinIn size={22} className="group-hover:text-black text-white transition-colors duration-300 relative z-10" />
                <div className="absolute inset-0 rounded-xl bg-[#ffd800] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </a>
            </div>
            
            {/* Newsletter Signup */}
          
          </div>
        </div>

        {/* Cookie Info */}
        <div className="max-w-6xl mx-auto mt-12 p-6 rounded-xl bg-[#ffd800]/5 border border-[#ffd800]/20">
          <p className="text-center text-sm text-gray-300 leading-relaxed">
            We use cookies and other data collection technologies to provide the best experience for our customers. 
            You may request that your data not be shared with third parties here: 
            <a href="#" className="text-[#ffd800] font-bold ml-2 hover:text-white hover:underline transition-all duration-300">
              Do Not Sell My Data
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700/50">
          <p className="text-sm text-gray-400">
            © 2025 <span className="text-[#ffd800] font-semibold">TechnologyAdvice</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}