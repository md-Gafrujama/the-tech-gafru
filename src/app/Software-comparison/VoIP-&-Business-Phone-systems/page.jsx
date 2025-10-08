"use client";
import Image from "next/image";
import { FaCheckCircle, FaCalendarAlt, FaPlus, FaMinus, FaClock, FaChevronDown } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from 'lucide-react';
import Head from "next/head";
import CBusinessPhoneSystemForm from '../../../components/BusinessPhoneSystemForm';

export default function VoIPSoftwarePage() {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const faqs = [
    {
      question: "Which VoIP brand is best?",
      answer: "The best VoIP brand depends on your business size, budget, and communication needs. If you're looking for industry leaders, Nextiva, RingCentral, and Vonage are among the most reliable and feature-rich options."
    },
    {
      question: "How to choose a VoIP provider?",
      answer: "Choose a VoIP provider by evaluating call management tools, user interface simplicity, integration capabilities, collaboration features, security compliance, and AI features that meet your specific business needs and budget."
    },
    {
      question: "Which VoIP is best for home use?",
      answer: "For home use, consider simple solutions like Grasshopper for a dedicated business line, or Ooma for basic calling features. These providers offer affordable plans without complex enterprise features."
    }
  ];

  // State declarations
  const [activeIndex, setActiveIndex] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [openSection, setOpenSection] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Add success message state and auto-hide functionality
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Function to show success popup for 3 seconds
  const showSuccessPopup = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000); // Auto-hide after 3 seconds
  };

  // Handle form success submission
  const handleFormSuccess = () => {
    setIsFormOpen(false);
    showSuccessPopup();
  };

  const toggleSection = (sectionKey, labelKey = null) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));

    if (labelKey) {
      setActiveSection((prev) => (prev === sectionKey ? null : sectionKey));
      setOpenSection((prev) => (prev === labelKey ? null : labelKey));
    }

    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const tocItems = [
    "How VoIP software works",
    "Top VoIP software at a glance", 
    "6 Best VoIP Software & Providers",
    "Nextiva: Best omnichannel customer platform",
    "Zoom Phone: Best low-cost VoIP plans",
    "RingCentral: Best AI-powered unified communications",
    "Vonage: Best build-your-own VoIP",
    "Ooma: Best entry-level VoIP for small business",
    "Grasshopper: Best for setting up a dedicated business line",
    "CallHippo: Best for call center management",
    "Buyer's checklist: How to choose the best VoIP software",
    "FAQs"
  ];

  const contentRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = 0;
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = index;
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NEW: Auto-open form popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Logo component with fallback
  const LogoImage = ({ src, alt, width = 120, height = 40, className = "" }) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div className={`flex items-center justify-center ${className}`}>
        {!imageError ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex items-center justify-center text-lg font-bold text-[#386861]">
            {alt}
          </div>
        )}
      </div>
    );
  };

  // Updated Rating Bar Component - matching your design exactly
  const RatingBar = ({ label, score, maxScore = 5 }) => {
    const percentage = (score / maxScore) * 100;
    return (
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-900 font-medium">{label}</span>
          <span className="text-sm font-semibold text-gray-700">{score}/{maxScore}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-[#386861] h-2 rounded-full transition-all duration-500" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>6 Best VoIP Software & Providers for Business 2025 | Martechbiz</title>
        <meta name="description" content="Compare the top VoIP software and providers for business communications. Find the best VoIP solution for your company with features, pricing, and expert reviews." />  
      </Head>

      {/* Success Message Popup */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 z-[60] animate-slide-in">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <FaCheckCircle className="text-xl" />
            <div>
              <h4 className="font-semibold">Success!</h4>
              <p className="text-sm">Your request has been submitted successfully.</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
     <section className="relative bg-gradient-to-br from-[#0A1612] via-[#0E1F1C] to-[#0A1612] text-white py-16 px-4 sm:px-8 lg:px-16 xl:px-32 overflow-hidden">
  {/* Subtle background pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Breadcrumb */}
    <div className="flex items-center text-sm text-white/60 mb-8 gap-2 hover:text-white/80 transition-colors">
      <HiHome className="text-base" />
      <span className="text-white/40">/</span>
      <span className="font-medium text-emerald-400">VoIP Software</span>
    </div>

    {/* Main heading with gradient accent */}
    <div className="mb-8">
      <div className="inline-block">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 leading-tight">
          6 Best VoIP Software & Providers
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mt-2">
            for Business 2025
          </span>
        </h1>
      </div>
      
      {/* Tagline */}
      <p className="text-lg sm:text-xl text-white/70 mt-4 font-light max-w-3xl">
        Expert-tested communication solutions to transform how your team connects, collaborates, and grows.
      </p>

      {/* CTA Button Section */}
      <div className="max-w-4xl xl:max-w-5xl mb-8 sm:mb-12 lg:mb-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <button 
            onClick={() => setIsFormOpen(true)}
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-[#00d9a6] to-[#00f4b8] hover:from-[#00c496] hover:to-[#00e3a7] text-white font-bold text-base sm:text-lg lg:text-xl rounded-xl sm:rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00d9a6]/40 focus:outline-none focus:ring-4 focus:ring-[#00d9a6]/50 active:scale-95 overflow-hidden"
            aria-label="Get free quotes for payroll software"
          >
            <span className="relative z-10 flex items-center gap-3">
              Get Free Quotes
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </button>
          
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-sm sm:text-base lg:text-lg">
              <svg className="w-5 h-5 text-[#00d9a6]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-white">100% Free</span>
              <span className="text-white/60">•</span>
              <span className="text-white/80">No Commitment</span>
            </div>
            <div className="text-xs sm:text-sm text-white/60 pl-7">
              Compare top VoIP solutions in 60 seconds
            </div>
          </div>
        </div>
        
        {/* Modal Integration */}
        {isFormOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsFormOpen(false);
              }
            }}
          >
            <div className="relative bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 group"
                aria-label="Close form"
              >
                <svg 
                  className="w-5 h-5 group-hover:scale-110 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
              
              {/* Form component with success handler */}
              <CBusinessPhoneSystemForm 
                onClose={() => setIsFormOpen(false)} 
                onSuccess={handleFormSuccess}
              />
            </div>
          </div>
        )}
        
        <style jsx>{`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .animate-shimmer {
            animation: shimmer 3s infinite;
          }
          @keyframes slide-in {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide-in {
            animation: slide-in 0.3s ease-out;
          }
        `}</style>
      </div>
    </div>

    {/* Stats badges */}
    <div className="flex flex-wrap gap-4 mb-10">
      <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
        <FaCheckCircle className="text-emerald-400 text-sm" />
        <span className="text-sm font-medium">Expert Reviewed</span>
      </div>
      <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
        <FaCheckCircle className="text-teal-400 text-sm" />
        <span className="text-sm font-medium">5+ Years Testing</span>
      </div>
    </div>

    {/* Enhanced author note */}
    <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 sm:p-8 max-w-4xl">
      <div className="flex items-start gap-4">
        <FaCheckCircle className="text-emerald-400 mt-1 text-2xl flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Why Trust This Guide?</h3>
          <p className="text-white/80 leading-relaxed">
            Working in business communications and marketing, part of my role is to explore solutions that make it easier for teams and customers to stay connected. Over the past five years, I've tested many of the best VoIP providers and want to share practical insights to guide you toward making the right choice for your company.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Main Content Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 sm:px-8 lg:px-16 py-8">
          {/* TOC Sidebar - Fixed Position */}
          <aside className="lg:w-80 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of contents</h2>

              <nav className="space-y-2">
                {tocItems.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      const section = document.getElementById(`section-${i}`);
                      if (section) {
                        window.scrollTo({
                          top: section.offsetTop - 120,
                          behavior: "smooth"
                        });
                      }
                    }}
                    className={`block py-2 px-3 rounded-md text-sm cursor-pointer transition-colors duration-200 ${
                      activeSection === i
                        ? "bg-[#386861] text-white font-medium"
                        : "text-gray-600 hover:text-black hover:bg-gray-100"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </nav>

              {/* Share Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                <div className="flex space-x-3">
                  <button
                    onClick={shareOnFacebook}
                    className="w-12 h-12 rounded-full bg-[#386861] text-white flex items-center justify-center hover:bg-[#2d5249] transition-colors duration-200"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button
                    onClick={shareOnLinkedIn}
                    className="w-12 h-12 rounded-full bg-[#386861] text-white flex items-center justify-center hover:bg-[#2d5249] transition-colors duration-200"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                  <button
                    onClick={shareOnTwitter}
                    className="w-12 h-12 rounded-full bg-[#386861] text-white flex items-center justify-center hover:bg-[#2d5249] transition-colors duration-200"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Article - Scrollable Content */}
          <div className="lg:w-3/4" ref={contentRef}>
            {/* Section 1: How VoIP software works */}
            <section id="section-0" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                How VoIP software works
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  VoIP, or voice-over-internet protocol, works by transmitting phone calls through the internet instead of traditional landlines. In a business setting, this means employees can make and receive calls on desktops, laptops, or mobile devices as long as they are connected to the internet. Calls are converted into digital signals, routed through secure servers, and delivered to the recipient's phone number, just like a standard call.
                </p>

                <p>
                  The shift to cloud-based VoIP calling is part of a broader industry trend, where 96% of North American organizations are expected to adopt cloud or mobile private branch exchange (PBX) solutions by the end of 2026.
                </p>

                <p>
                  For businesses, VoIP provides a centralized communication system that supports calling, messaging, and even video conferencing under one platform. Businesses can scale easily by adding virtual phone numbers or features like call forwarding and voicemail-to-email without new hardware. This flexibility allows teams to stay connected from any location, while reducing costs compared to maintaining traditional phone lines.
                </p>
              </div>
            </section>

            {/* Section 2: Top VoIP software at a glance */}
            <section id="section-1" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Top VoIP software at a glance
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Best VoIP software</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Monthly starting price</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Free trial</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Key features</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">My rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <LogoImage src="/logos/nextiva-logo.png" alt="Nextiva" width={80} height={24} />
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">$23</td>
                      <td className="border border-gray-300 px-4 py-3">❌</td>
                      <td className="border border-gray-300 px-4 py-3">
                        Shared SMS inbox<br/>
                        Custom call routing rules<br/>
                        Local & toll-free numbers
                      </td>
                      <td className="border border-gray-300 px-4 py-3">4.9</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <LogoImage src="/logos/zoom-logo.png" alt="Zoom Phone" width={80} height={24} />
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">$10</td>
                      <td className="border border-gray-300 px-4 py-3">❌</td>
                      <td className="border border-gray-300 px-4 py-3">
                        Voicemail task extraction<br/>
                        Online faxing<br/>
                        Post-call summaries
                      </td>
                      <td className="border border-gray-300 px-4 py-3">4.86</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <LogoImage src="/logos/ringcentral-logo.png" alt="RingCentral" width={80} height={24} />
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">$30</td>
                      <td className="border border-gray-300 px-4 py-3">14 days</td>
                      <td className="border border-gray-300 px-4 py-3">
                        24/7 AI answering<br/>
                        In-depth call analytics<br/>
                        Multi-level phone menus
                      </td>
                      <td className="border border-gray-300 px-4 py-3">4.56</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <LogoImage src="/logos/vonage-logo.png" alt="Vonage" width={80} height={24} />
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">$19.99</td>
                      <td className="border border-gray-300 px-4 py-3">14 days</td>
                      <td className="border border-gray-300 px-4 py-3">
                        Unlimited SMS<br/>
                        40+ phone features<br/>
                        Visual voicemail
                      </td>
                      <td className="border border-gray-300 px-4 py-3">4.48</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <LogoImage src="/logos/ooma-logo.png" alt="Ooma" width={80} height={24} />
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">$19.95</td>
                      <td className="border border-gray-300 px-4 py-3">❌</td>
                      <td className="border border-gray-300 px-4 py-3">
                        Toll-free minutes<br/>
                        Company directory<br/>
                        Custom caller ID
                      </td>
                      <td className="border border-gray-300 px-4 py-3">4.31</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <LogoImage src="/logos/grasshopper-logo.png" alt="Grasshopper" width={80} height={24} />
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">$18</td>
                      <td className="border border-gray-300 px-4 py-3">7 days</td>
                      <td className="border border-gray-300 px-4 py-3">
                        Vanity phone numbers<br/>
                        Unlimited extensions<br/>
                        Custom phone greetings
                      </td>
                      <td className="border border-gray-300 px-4 py-3">4.25</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <LogoImage src="/logos/callhippo-logo.png" alt="CallHippo" width={80} height={24} />
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">Free or $25</td>
                      <td className="border border-gray-300 px-4 py-3">10 days</td>
                      <td className="border border-gray-300 px-4 py-3">
                        Free VoIP plan<br/>
                        Unlimited landline/mobile calls<br/>
                        Omnichannel inbox
                      </td>
                      <td className="border border-gray-300 px-4 py-3">4.16</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: 6 Best VoIP Software & Providers */}
            <section id="section-2" className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                6 Best VoIP Software & Providers
              </h2>

              <div className="space-y-4 text-gray-700 mb-8">
                <p>
                  Below, you'll find my top six best VoIP providers, each with its own use case to fit different business needs:
                </p>
                
                <ul className="list-disc ml-5 space-y-2">
                  <li><Link href="#" className="text-[#386861] font-medium">Nextiva</Link>: Best omnichannel customer platform</li>
                  <li><Link href="#" className="text-[#386861] font-medium">Zoom Phone</Link>: Best low-cost VoIP plans</li>
                  <li><Link href="#" className="text-[#386861] font-medium">RingCentral</Link>: Best AI-powered unified communications</li>
                  <li><Link href="#" className="text-[#386861] font-medium">Vonage</Link>: Best build-your-own VoIP</li>
                  <li><Link href="#" className="text-[#386861] font-medium">Ooma</Link>: Best entry-level VoIP for small business</li>
                  <li><Link href="#" className="text-[#386861] font-medium">Grasshopper</Link>: Best for setting up a dedicated business line</li>
                  <li><Link href="#" className="text-[#386861] font-medium">CallHippo</Link>: Best for call center management</li>
                </ul>
              </div>
            </section>

            {/* Nextiva Card */}
            <section id="section-3" className="mb-12">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#386861] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-lg">N</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Nextiva: Best omnichannel customer platform</h3>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-[#386861] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#2d5249] transition-colors"
                  >
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Overall Rating */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-900">Overall Reviewer Score</span>
                    <span className="text-2xl font-bold text-gray-900">4.9/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#386861] h-3 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>

                {/* Detailed Ratings */}
                <div className="p-6 border-b border-gray-200">
                  <div className="space-y-4">
                    <RatingBar label="Pricing" score={5} />
                    <RatingBar label="General features" score={5} />
                    <RatingBar label="Advanced features" score={4.63} />
                    <RatingBar label="Support" score={5} />
                    <RatingBar label="Ease of use" score={3.81} />
                    <RatingBar label="Expert score" score={5} />
                  </div>
                </div>

                {/* Pros and Cons */}
                <div className="p-6 border-b border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Pros</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Supports voice and other digital channels</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Intuitive mobile and desktop app</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Customizable call routing rules</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Very responsive customer support</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Cons</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                            <FaMinus className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">No interface previews available; users must sign up for a demo</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                            <FaMinus className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Requires a 12-month contract to avail of Small Business pricing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Why I chose section */}
                <div className="p-6 border-b border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why I chose Nextiva</h4>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Businesses with client-facing teams often adopt VoIP to improve customer interactions, and if that's your main goal, Nextiva stands out as a strong choice. In my years of testing VoIP platforms, I've noticed that most providers limit you to just three customer channels: phone, SMS, and chat. Nextiva goes further by adding social media, web chat, and even review sites, giving your team a true omnichannel experience.
                    </p>
                    
                    <p>
                      Although VoIP is its foundation, Nextiva positions itself more as a customer experience management platform. It unifies every customer touchpoint and integrates tightly with CRM systems (e.g., HubSpot, Zendesk, Zoho), allowing you to place calls directly within the platform or pull up customer data in real time.
                    </p>
                    
                    <p>
                      That said, I don't recommend Nextiva for startups with only basic communication needs. If you mainly connect with customers through phone and SMS, a simpler and more affordable option like Grasshopper will give you better value for your money.
                    </p>
                  </div>
                </div>

                {/* Expandable sections */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('nextiva-features')}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">Key features</span>
                    <div className="w-6 h-6 bg-[#386861] rounded flex items-center justify-center">
                      {expandedSections['nextiva-features'] ? (
                        <FaMinus className="text-white text-xs" />
                      ) : (
                        <FaPlus className="text-white text-xs" />
                      )}
                    </div>
                  </button>
                  {expandedSections['nextiva-features'] && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <ul className="space-y-2 mt-4">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#386861] rounded-full"></span>
                          <span className="text-gray-700">Shared SMS inbox for team collaboration</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#386861] rounded-full"></span>
                          <span className="text-gray-700">Custom call routing rules and workflows</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#386861] rounded-full"></span>
                          <span className="text-gray-700">Local & toll-free numbers in 100+ countries</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#386861] rounded-full"></span>
                          <span className="text-gray-700">CRM integrations with HubSpot, Salesforce, and more</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('nextiva-gallery')}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">Gallery</span>
                    <div className="w-6 h-6 bg-[#386861] rounded flex items-center justify-center">
                      {expandedSections['nextiva-gallery'] ? (
                        <FaMinus className="text-white text-xs" />
                      ) : (
                        <FaPlus className="text-white text-xs" />
                      )}
                    </div>
                  </button>
                  {expandedSections['nextiva-gallery'] && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <p className="text-gray-700 mt-4">Screenshots and product images would be displayed here.</p>
                    </div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection('nextiva-pricing')}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">Nextiva pricing</span>
                    <div className="w-6 h-6 bg-[#386861] rounded flex items-center justify-center">
                      {expandedSections['nextiva-pricing'] ? (
                        <FaMinus className="text-white text-xs" />
                      ) : (
                        <FaPlus className="text-white text-xs" />
                      )}
                    </div>
                  </button>
                  {expandedSections['nextiva-pricing'] && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="mt-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Essential Plan</span>
                          <span className="text-gray-900 font-bold">$23/user/month</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Professional Plan</span>
                          <span className="text-gray-900 font-bold">$33/user/month</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Enterprise Plan</span>
                          <span className="text-gray-900 font-bold">$43/user/month</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer buttons */}
                <div className="p-6 bg-gray-50 flex gap-4">
                  <Link 
                    href="#" 
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#386861] border border-[#386861] px-4 py-3 rounded-lg hover:bg-[#f8fffe] transition-colors text-sm font-medium"
                  >
                    Read our Nextiva review
                  </Link>
                  <Link 
                    href="#" 
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#386861] text-white px-4 py-3 rounded-lg hover:bg-[#2d5249] transition-colors text-sm font-medium"
                  >
                    Submit your review
                  </Link>
                </div>
              </div>
            </section>

            {/* Zoom Phone Card */}
            <section id="section-4" className="mb-12">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#386861] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Z</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Zoom Phone: Best low-cost VoIP plans</h3>
                    </div>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 bg-[#386861] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#2d5249] transition-colors">
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-900">Overall Reviewer Score</span>
                    <span className="text-2xl font-bold text-gray-900">4.86/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#386861] h-3 rounded-full" style={{ width: "97%" }}></div>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="space-y-4">
                    <RatingBar label="Pricing" score={5} />
                    <RatingBar label="General features" score={5} />
                    <RatingBar label="Advanced features" score={4.25} />
                    <RatingBar label="Support" score={5} />
                    <RatingBar label="Ease of use" score={4.63} />
                    <RatingBar label="Expert score" score={4.69} />
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Pros</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Turn ongoing calls into Zoom Meetings</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Metered and prepaid plans for domestic and international calls</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Relatively simple to use</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">AI-powered calls at no extra cost</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Cons</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                            <FaMinus className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Occasional audio lags</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                            <FaMinus className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Call analytics isn't robust enough for detailed insights</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why I chose Zoom Phone</h4>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      If you're an individual or running a small team on a budget, I know that price is often the biggest factor when choosing a business VoIP service provider. Most basic VoIP plans cost around $20 to $30 per user monthly, but Zoom Phone stands out with plans starting at just $10 per user per month.
                    </p>
                    
                    <p>
                      At this entry price, you still get access to core call management features like call recording, business-hour routing, and even faxing. Domestic calls follow a pay-as-you-go model, making it a smart option if you only make occasional calls. You can also upgrade to unlimited calling for just $5 more per month, which remains affordable compared to most prepaid VoIP plans at $20 per user.
                    </p>
                    
                    <p>
                      That said, Zoom Phone falls short when it comes to advanced call analytics. For teams handling high call volumes that need detailed performance insights, RingCentral is a stronger option, thanks to its built-in business analytics and customizable reporting tools.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 flex gap-4">
                  <Link href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#386861] border border-[#386861] px-4 py-3 rounded-lg hover:bg-[#f8fffe] transition-colors text-sm font-medium">
                    Read our full Zoom Phone review
                  </Link>
                  <Link href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-[#386861] text-white px-4 py-3 rounded-lg hover:bg-[#2d5249] transition-colors text-sm font-medium">
                    Submit your review
                  </Link>
                </div>
              </div>
            </section>

            {/* RingCentral Card */}
            <section id="section-5" className="mb-12">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#386861] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-lg">R</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">RingCentral: Best AI-powered unified communications</h3>
                    </div>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 bg-[#386861] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#2d5249] transition-colors">
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-900">Overall Reviewer Score</span>
                    <span className="text-2xl font-bold text-gray-900">4.56/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#386861] h-3 rounded-full" style={{ width: "91%" }}></div>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="space-y-4">
                    <RatingBar label="Pricing" score={4} />
                    <RatingBar label="General features" score={4.5} />
                    <RatingBar label="Advanced features" score={4.63} />
                    <RatingBar label="Support" score={5} />
                    <RatingBar label="Ease of use" score={4.63} />
                    <RatingBar label="Expert score" score={4.06} />
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Pros</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Extensive suite of call management features</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Connects with 300+ third-party apps</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Strong variety of support options</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">AI capabilities across all plans</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Cons</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                            <FaMinus className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Customization can be overwhelming at first</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                            <FaMinus className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Extensive feature set makes it hard to navigate</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why I chose RingCentral</h4>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      If you've been researching the best VoIP providers, chances are you've come across RingCentral more than once, and for good reason. RingCentral is a leading name in business communications, offering everything from complete call management and collaborative meetings to AI-powered team chat. I've seen how it equips teams with all the essential tools to stay connected with colleagues and customers, all supported by AI.
                    </p>
                    
                    <p>
                      RingCentral also stands out for reliability. It maintains a 99.999% uptime record over five years across 46 countries, backed by global security and privacy certifications. Switching between phone, text, video, and chat is seamless from the navigation bar. Plus, every plan includes a personal AI assistant at no extra cost, giving you call notes, real-time transcription, translations, and even a writing editor.
                    </p>
                    
                    <p>
                      That said, these feature-rich capabilities come with a higher price point, making RingCentral less practical for individual users or small businesses just getting started. I usually recommend it for companies planning to scale quickly and needing a robust, future-ready solution.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 flex gap-4">
                  <Link href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#386861] border border-[#386861] px-4 py-3 rounded-lg hover:bg-[#f8fffe] transition-colors text-sm font-medium">
                    Read our full RingCentral review
                  </Link>
                  <Link href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-[#386861] text-white px-4 py-3 rounded-lg hover:bg-[#2d5249] transition-colors text-sm font-medium">
                    Submit your review
                  </Link>
                </div>
              </div>
            </section>

            {/* Vonage Card */}
            <section id="section-6" className="mb-12">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#386861] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-lg">V</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Vonage: Best build-your-own VoIP</h3>
                    </div>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 bg-[#386861] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#2d5249] transition-colors">
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-900">Overall Reviewer Score</span>
                    <span className="text-2xl font-bold text-gray-900">4.48/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#386861] h-3 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="space-y-4">
                    <RatingBar label="Pricing" score={5} />
                    <RatingBar label="General features" score={4.13} />
                    <RatingBar label="Advanced features" score={4.06} />
                    <RatingBar label="Support" score={4.25} />
                    <RatingBar label="Ease of use" score={5} />
                    <RatingBar label="Expert score" score={4.38} />
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Pros</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Unlimited text messaging in the US</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">99.999% uptime reliability</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">40+ standard phone features at the base plan</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Modern and user-friendly app</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Cons</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                            <FaMinus className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Chat and video calls locked at second tier</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                            <FaMinus className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Limited app integrations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why I chose Vonage</h4>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Like RingCentral, Vonage is a well-established name in the VoIP space, especially for businesses that want custom communication solutions. It offers extensive developer resources (code snippets, guides, and documentation) that make it possible to embed calling, messaging, and video features directly into your company's website or app.
                    </p>
                    
                    <p>
                      When integrated, Vonage allows agents to place and receive calls, send texts, or join video meetings without leaving the platform they're working in. For example, a sales rep can connect with a lead directly from the page they're visiting, while call notes and recordings are automatically logged into the system.
                    </p>
                    
                    <p>
                      Vonage offers pre-built plans starting at $19.99 per month, but many advanced features are sold as add-ons. If you're just starting out with VoIP and want everything bundled into a single plan, Nextiva may be a better fit since its packages include multiple communication channels upfront.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 flex gap-4">
                  <Link href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#386861] border border-[#386861] px-4 py-3 rounded-lg hover:bg-[#f8fffe] transition-colors text-sm font-medium">
                    Read our full Vonage review
                  </Link>
                  <Link href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-[#386861] text-white px-4 py-3 rounded-lg hover:bg-[#2d5249] transition-colors text-sm font-medium">
                    Submit your review
                  </Link>
                </div>
              </div>
            </section>

            {/* Ooma Card */}
            <section id="section-7" className="mb-12">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#386861] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-lg">O</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Ooma: Best entry-level VoIP for small business</h3>
                    </div>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 bg-[#386861] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#2d5249] transition-colors">
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-900">Overall Reviewer Score</span>
                    <span className="text-2xl font-bold text-gray-900">4.31/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#386861] h-3 rounded-full" style={{ width: "86%" }}></div>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="space-y-4">
                    <RatingBar label="Pricing" score={2} />
                    <RatingBar label="General features" score={4.5} />
                    <RatingBar label="Advanced features" score={4} />
                    <RatingBar label="Support" score={5} />
                    <RatingBar label="Ease of use" score={5} />
                    <RatingBar label="Expert score" score={5} />
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Pros</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">800 numbers include 500 toll-free minutes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Unlimited calling includes the US, CA, Puerto Rico, and Mexico</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">50+ phone features come standard with all plans</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Residential plan available for homepreneurs</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Cons</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                            <FaMinus className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Comes with a $49.95 activation fee</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                            <FaMinus className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Interface feels dated compared to competitors</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why I chose Ooma</h4>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      If you're shopping for a VoIP-focused system without the AI frills, Ooma is a solid choice. While it was first known for home phone services, Ooma offers a business phone system that covers all the essentials, including unlimited calls to the US, Canada, Mexico, and Puerto Rico, more countries than many competitors cover in their local calling plans.
                    </p>
                    
                    <p>
                      Advanced features like video conferencing, team chat, and CRM integrations are reserved for higher tiers, so you won't feel overloaded with tools you don't need if your focus is simply phone calling. Its interface is simple to navigate, with accessible options for adding contacts, configuring calls, and checking voicemail.
                    </p>
                    
                    <p>
                      That said, Ooma can be too basic for teams that rely heavily on advanced customization. If your business requires a more comprehensive communication platform, I recommend RingCentral, which combines calling, messaging, video, and AI-powered tools in a single solution.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 flex gap-4">
                  <Link href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#386861] border border-[#386861] px-4 py-3 rounded-lg hover:bg-[#f8fffe] transition-colors text-sm font-medium">
                    Read our full Ooma review
                  </Link>
                  <Link href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-[#386861] text-white px-4 py-3 rounded-lg hover:bg-[#2d5249] transition-colors text-sm font-medium">
                    Submit your review
                  </Link>
                </div>
              </div>
            </section>

            {/* Grasshopper Card */}
            <section id="section-8" className="mb-12">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#386861] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-lg">G</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Grasshopper: Best for setting up a dedicated business line</h3>
                    </div>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 bg-[#386861] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#2d5249] transition-colors">
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-900">Overall Reviewer Score</span>
                    <span className="text-2xl font-bold text-gray-900">4.25/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#386861] h-3 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="space-y-4">
                    <RatingBar label="Pricing" score={5} />
                    <RatingBar label="General features" score={5} />
                    <RatingBar label="Advanced features" score={1.5} />
                    <RatingBar label="Support" score={5} />
                    <RatingBar label="Ease of use" score={4.63} />
                    <RatingBar label="Expert score" score={4.38} />
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Pros</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Vanity number included at no extra charge</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Consistent UX for desktop and mobile apps</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Unlimited user capacity for higher plan tiers</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Works as a second phone number app</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Cons</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                            <FaMinus className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Doesn't offer the same built-in collaboration tools competitors offer</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                            <FaMinus className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">No app integrations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why I chose Grasshopper</h4>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Grasshopper is another strong recommendation for those who still find Ooma too feature-heavy. As a virtual phone system, Grasshopper gives you a dedicated business number (local, toll-free, or vanity number), which you can use to separate work calls and create a professional image. It doesn't include video, chat, or app integrations, making it perfect if you simply want a phone number for business calls.
                    </p>
                    
                    <p>
                      One standout feature I appreciate is that Grasshopper lets you secure a vanity number during sign-up without extra charges on your monthly subscription. As you upgrade to higher tiers, you can also add unlimited users without paying per-user fees, something unique compared to most VoIP providers that bill individually per seat.
                    </p>
                    
                    <p>
                      Of course, Grasshopper has limitations. It lacks the advanced features needed to handle high call volumes, so it isn't the best fit for customer support teams. If you're looking for a more complete VoIP platform for client interactions, I recommend Nextiva, which provides a full suite of tools for sales and support communications.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 flex gap-4">
                  <Link href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#386861] border border-[#386861] px-4 py-3 rounded-lg hover:bg-[#f8fffe] transition-colors text-sm font-medium">
                    Read our full Grasshopper review
                  </Link>
                  <Link href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-[#386861] text-white px-4 py-3 rounded-lg hover:bg-[#2d5249] transition-colors text-sm font-medium">
                    Submit your review
                  </Link>
                </div>
              </div>
            </section>

            {/* CallHippo Card */}
            <section id="section-9" className="mb-12">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#386861] rounded flex items-center justify-center">
                      <span className="text-white font-bold text-lg">C</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">CallHippo: Best for call center management</h3>
                    </div>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 bg-[#386861] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#2d5249] transition-colors">
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-gray-900">Overall Reviewer Score</span>
                    <span className="text-2xl font-bold text-gray-900">4.16/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#386861] h-3 rounded-full" style={{ width: "83%" }}></div>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="space-y-4">
                    <RatingBar label="Pricing" score={2} />
                    <RatingBar label="General features" score={4.13} />
                    <RatingBar label="Advanced features" score={4.38} />
                    <RatingBar label="Support" score={5} />
                    <RatingBar label="Ease of use" score={3.75} />
                    <RatingBar label="Expert score" score={5} />
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Pros</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Free plan for basic phone usage</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Monthly plan options for low or high call volumes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Unlimited minutes for landline and mobile calling</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-[#386861] rounded-sm flex items-center justify-center mt-0.5">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Real-time chat support for customers</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Cons</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                            <FaMinus className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Dashboard users come with an added fee</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                            <FaMinus className="text-white text-xs" />
                          </div>
                          <span className="text-gray-700">Spam monitoring includes a $2 fee per number</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why I chose CallHippo</h4>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      One thing worth noting when shopping for VoIP is that many providers also offer call center plans for high-volume users, usually at a higher price point. You might wonder if there's a budget-friendly option, and the answer is yes. CallHippo includes agent productivity tools in its business phone plans starting at just $25 per user, making it one of the most affordable ways to access call center features.
                    </p>
                    
                    <p>
                      What I like is that CallHippo offers two versions of its phone system for both low- and high-volume usage. This flexibility lets you choose a plan that matches your call center's traffic instead of paying for features you don't need. As your call center grows, you can add outbound campaign tools like power dialers and automatic machine detection to support sales teams.
                    </p>
                    
                    <p>
                      That said, while CallHippo includes unlimited minutes for both mobile and landline calls, there are restrictions. Certain countries and number types aren't included in unlimited calling. If you need more flexible options, I recommend Zoom Phone, which provides customizable call plans.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 flex gap-4">
                  <Link href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#386861] border border-[#386861] px-4 py-3 rounded-lg hover:bg-[#f8fffe] transition-colors text-sm font-medium">
                    Read our full CallHippo review
                  </Link>
                  <Link href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-[#386861] text-white px-4 py-3 rounded-lg hover:bg-[#2d5249] transition-colors text-sm font-medium">
                    Submit your review
                  </Link>
                </div>
              </div>
            </section>

            {/* Buyer's checklist: How to choose the best VoIP software */}
            <section id="section-10" className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Buyer's checklist: How to choose the best VoIP software
              </h2>

              <div className="space-y-6 text-gray-700">
                <p>
                  Choosing the right VoIP platform means asking the right questions about your business needs. The questions below will help you compare VoIP providers and ensure you're investing in a solution that fits both your budget and workflow.
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-3 h-3 bg-[#386861] rounded-full"></span>
                      Does it have the call management tools I need?
                    </h3>
                    <p>
                      Strong call management ensures your team can route calls, set business hours, record conversations, and manage voicemail without disruptions. These features directly affect how smoothly customer and internal communications are handled.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-3 h-3 bg-[#386861] rounded-full"></span>
                      Is the interface simple for my team to use?
                    </h3>
                    <p>
                      A user-friendly interface shortens the learning curve and helps your team adopt the system quickly. The easier it is to navigate, the less time you'll spend on training and troubleshooting.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-3 h-3 bg-[#386861] rounded-full"></span>
                      Can it connect with my existing business apps?
                    </h3>
                    <p>
                      Integration with tools like CRMs, helpdesks, and productivity software allows your team to work from one hub. This eliminates manual data entry and gives you a more complete view of customer interactions.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-3 h-3 bg-[#386861] rounded-full"></span>
                      Does it include collaboration tools like video and messaging?
                    </h3>
                    <p>
                      Some business VoIP providers go beyond calling by offering video meetings and messaging. These features allow teams to communicate in real time without switching between multiple apps.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-3 h-3 bg-[#386861] rounded-full"></span>
                      Does it meet my security and compliance needs?
                    </h3>
                    <p>
                      Security compliance ensures sensitive business and customer data is protected from breaches or misuse. Look for providers with certifications like HIPAA, GDPR, and end-to-end encryption to safeguard your communications.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="w-3 h-3 bg-[#386861] rounded-full"></span>
                      Do I need AI features in my VoIP system?
                    </h3>
                    <p>
                      AI-powered tools help with tasks like call transcription and conversation summaries. With 85% of customer service leaders set to pilot conversational Gen AI in 2025, voice bots are expected to shift from a nice-to-have feature to a core requirement.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    The best VoIP phone providers give you more than just phone service, as they streamline communication and keep your business flexible as it grows. By focusing on call management, ease of use, and security, you'll be able to narrow down providers that truly fit your needs.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQs Section */}
            <section id="section-11" className="mb-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  FAQs
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="flex items-center justify-between w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-semibold text-gray-800">{faq.question}</span>
                        <div className={`transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}>
                          {activeIndex === index ? (
                            <FaMinus className="text-[#386861]" />
                          ) : (
                            <FaPlus className="text-[#386861]" />
                          )}
                        </div>
                      </button>
                      {activeIndex === index && (
                        <div className="px-6 pb-6 text-gray-700 text-sm leading-relaxed border-t border-gray-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
    </>
  );
}
