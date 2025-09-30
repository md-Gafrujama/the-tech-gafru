"use client";
import React, { useState } from "react";
import { Home, Shield, Lock, Eye, Users, Cookie, Mail, FileText, ChevronRight, Plus, Minus, Globe, Database, Key, Bell, Clock } from "lucide-react";

const DataPrivacy = () => {
  const [openSections, setOpenSections] = useState(Array(8).fill(false));
  const [activeFilter, setActiveFilter] = useState("all");

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  const privacyPrinciples = [
    {
      icon: <Shield className="text-[#386861]" size={24} />,
      title: "Data Protection",
      description: "Advanced encryption and security measures to safeguard your information"
    },
    {
      icon: <Eye className="text-[#386861]" size={24} />,
      title: "Transparency",
      description: "Clear communication about how we collect and use your data"
    },
    {
      icon: <Users className="text-[#386861]" size={24} />,
      title: "User Control",
      description: "You have complete control over your personal information"
    },
    {
      icon: <Globe className="text-[#386861]" size={24} />,
      title: "Global Standards",
      description: "Compliance with international data protection regulations"
    }
  ];

  const dataCategories = [
    {
      type: "essential",
      title: "Essential Data",
      description: "Information required for core functionality",
      icon: <Key className="text-[#386861]" size={20} />,
      examples: ["Account credentials", "Basic profile information", "Service preferences"]
    },
    {
      type: "analytical",
      title: "Analytical Data",
      description: "Data that helps us improve our services",
      icon: <Database className="text-[#386861]" size={20} />,
      examples: ["Usage patterns", "Feature interactions", "Performance metrics"]
    },
    {
      type: "marketing",
      title: "Marketing Data",
      description: "Information used for personalized communications",
      icon: <Bell className="text-[#386861]" size={20} />,
      examples: ["Communication preferences", "Interest categories", "Campaign responses"]
    }
  ];

  const privacySections = [
    {
      icon: <FileText className="text-[#386861]" size={22} />,
      title: "Information We Collect",
      category: "essential",
      content: `At Quore IT, we believe in being transparent about the data we collect. We gather information to provide you with better services and enhance your experience.

Personal Information:
• Contact details (name, email, phone number)
• Professional information (job title, company)
• Account credentials and preferences

Technical Data:
• IP address and device information
• Browser type and version
• Usage patterns and interaction data

We only collect information that is necessary and relevant for providing our services.`
    },
    {
      icon: <Shield className="text-[#386861]" size={22} />,
      title: "How We Use Your Data",
      category: "essential",
      content: `Your data helps us deliver exceptional services while maintaining the highest standards of privacy and security.

Service Delivery:
• Providing and maintaining our platform
• Processing transactions and requests
• Delivering personalized content

Improvement & Analytics:
• Analyzing usage patterns to enhance features
• Conducting research and development
• Measuring service performance

Communication:
• Sending important updates and notifications
• Responding to inquiries and support requests
• Marketing communications (with your consent)`
    },
    {
      icon: <Lock className="text-[#386861]" size={22} />,
      title: "Data Security Measures",
      category: "essential",
      content: `We implement robust security measures to protect your information from unauthorized access and breaches.

Security Protocols:
• End-to-end encryption for data transmission
• Regular security audits and vulnerability assessments
• Multi-factor authentication options
• Secure data storage with access controls

Infrastructure Protection:
• Firewalls and intrusion detection systems
• Regular security updates and patches
• 24/7 monitoring for suspicious activities
• Disaster recovery and business continuity plans

Employee Training:
• Comprehensive privacy and security training
• Strict access control policies
• Regular compliance assessments`
    },
    {
      icon: <Cookie className="text-[#386861]" size={22} />,
      title: "Cookies & Tracking Technologies",
      category: "analytical",
      content: `We use cookies and similar technologies to enhance your browsing experience and analyze service usage.

Types of Cookies:

Essential Cookies:
• Required for basic website functionality
• Enable secure login and session management
• Support core service features

Analytical Cookies:
• Help us understand how visitors interact with our site
• Provide insights for service improvements
• Track feature usage and performance

Preference Cookies:
• Remember your settings and preferences
• Enable personalized content delivery
• Support localization and accessibility features

You can control cookie settings through your browser preferences or our privacy dashboard.`
    },
    {
      icon: <Users className="text-[#386861]" size={22} />,
      title: "Third-Party Data Sharing",
      category: "analytical",
      content: `We are selective about third-party partnerships and maintain strict data sharing protocols.

Service Providers:
• Cloud hosting and infrastructure partners
• Payment processing services
• Customer support platforms
• Analytics and monitoring tools

Business Partners:
• Technology integration partners
• Strategic alliance partners
• Reseller and distribution networks

Legal Requirements:
• Compliance with lawful requests
• Protection of rights and safety
• Enforcement of terms and conditions

All third-party partners are vetted for compliance with data protection standards and are bound by strict confidentiality agreements.`
    },
    {
      icon: <Globe className="text-[#386861]" size={22} />,
      title: "International Data Transfers",
      category: "essential",
      content: `As a global company, we may transfer and process your data in various locations worldwide.

Data Processing Locations:
• United States (Primary operations)
• European Union (GDPR compliance)
• Asia-Pacific regions
• Other locations as needed for service delivery

Protection Measures:
• Standard contractual clauses for international transfers
• Data protection agreements with all processors
• Regular compliance audits
• Transparency about data locations

We ensure that all international data transfers comply with applicable privacy laws and maintain the same level of protection regardless of location.`
    },
    {
      icon: <Eye className="text-[#386861]" size={22} />,
      title: "Your Privacy Rights",
      category: "marketing",
      content: `You have comprehensive rights regarding your personal data and how it's used.

Access & Control:
• Right to access your personal information
• Ability to correct inaccurate data
• Option to delete your data (with exceptions)
• Data portability rights

Communication Preferences:
• Control over marketing communications
• Notification preferences management
• Opt-out options for various data uses

Additional Rights:
• Right to restrict processing in certain cases
• Objection to specific data uses
• Withdrawal of consent at any time

To exercise any of these rights, please contact our privacy team using the information below.`
    },
    {
      icon: <FileText className="text-[#386861]" size={22} />,
      title: "Policy Updates & Changes",
      category: "essential",
      content: `We continuously improve our privacy practices and may update this policy accordingly.

Update Process:
• Regular review of privacy practices
• Updates to reflect new services or features
• Changes to comply with evolving regulations
• Enhancements based on user feedback

Notification:
• Prominent notice of significant changes
• Updated "last modified" date
• Summary of key changes provided
• Advance notice for major updates

Your continued use of our services after updates constitutes acceptance of the revised policy. We encourage regular review of this page.`
    }
  ];

  const filteredSections = activeFilter === "all" 
    ? privacySections 
    : privacySections.filter(section => section.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#386861]/10">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E1F1C] via-[#1a2f2a] to-[#0E1F1C] text-white px-6 md:px-12 lg:px-20 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#386861] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2d5249] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-300 mb-8 space-x-2">
            <Home size={18} />
            <a href="/" className="hover:underline transition-all duration-200 hover:text-white font-medium">
              Home
            </a>
            <span className="text-[#386861]/60">›</span>
            <span className="font-semibold text-white bg-[#386861]/30 px-3 py-1 rounded-full">Data Privacy</span>
          </div>

          {/* Heading */}
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <div className="w-2 h-2 bg-[#386861] rounded-full animate-pulse"></div>
              <span className="text-[#ffffff]/80 text-sm font-medium">Privacy & Security</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight bg-gradient-to-r from-white to-[#386861]/20 bg-clip-text text-transparent">
              Data Privacy
            </h1>
            <p className="text-[#ffffff]/80 text-xl lg:text-2xl leading-relaxed mb-8 font-light max-w-3xl">
              Your privacy is our priority. Learn how we protect your data and empower you with control 
              over your personal information.
              
            </p>
            <div className="flex items-center gap-6 text-[#ffffff]/80">
              <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg">
                <Lock size={18} />
                <span className="text-base font-medium">Last Updated: September 30, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="px-6 md:px-12 lg:px-32 py-20 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 to-[#386861] bg-clip-text text-transparent">
              Our Privacy Principles
            </h2>
            <p className="text-gray-600 text-xl font-light max-w-2xl mx-auto">
              Built on a foundation of trust, transparency, and technological excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105"
              >
                <div className="bg-gradient-to-br from-[#386861]/10 to-[#386861]/20 rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-500">
                  {principle.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#386861] transition-colors duration-300">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Categories */}
      <section className="px-6 md:px-12 lg:px-32 py-20 bg-gradient-to-br from-white via-gray-50 to-[#386861]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 to-[#386861] bg-clip-text text-transparent">
              Understanding Your Data
            </h2>
            <p className="text-gray-600 text-xl font-light max-w-2xl mx-auto">
              Transparent categorization of how we handle different types of information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#386861]/10 to-[#386861]/20 rounded-2xl p-3 group-hover:scale-110 transition-transform duration-500">
                    {category.icon}
                  </div>
                  <div className="w-8 h-8 bg-[#386861] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#386861] transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#386861] rounded-full"></div>
                      <span className="text-base">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Privacy Sections */}
      <section className="px-6 md:px-12 lg:px-32 py-20 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 to-[#386861] bg-clip-text text-transparent">
              Detailed Privacy Information
            </h2>
            <p className="text-gray-600 text-xl font-light max-w-2xl mx-auto mb-8">
              Comprehensive overview of our data practices and your rights
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === "all" 
                    ? "bg-[#386861] text-white shadow-lg shadow-[#386861]/30" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Topics
              </button>
              <button
                onClick={() => setActiveFilter("essential")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === "essential" 
                    ? "bg-[#386861] text-white shadow-lg shadow-[#386861]/30" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Essential Data
              </button>
              <button
                onClick={() => setActiveFilter("analytical")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === "analytical" 
                    ? "bg-[#386861] text-white shadow-lg shadow-[#386861]/30" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Analytics
              </button>
              <button
                onClick={() => setActiveFilter("marketing")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === "marketing" 
                    ? "bg-[#386861] text-white shadow-lg shadow-[#386861]/30" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Marketing
              </button>
            </div>
          </div>

          {/* Privacy Accordions */}
          <div className="space-y-6">
            {filteredSections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#386861]/5 to-[#386861]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex items-center justify-between p-10 text-left group-hover:bg-gradient-to-r from-gray-50/50 to-[#386861]/5 transition-all duration-500 rounded-3xl"
                  >
                    <div className="flex items-center gap-8">
                      <div className="bg-gradient-to-br from-[#386861]/10 to-[#386861]/20 rounded-2xl p-5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 border border-[#386861]/20">
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-[#386861] transition-colors duration-300">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-[#386861] to-[#386861] hover:from-[#386861] hover:to-[#386861] rounded-2xl flex items-center justify-center flex-shrink-0 ml-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-180">
                      {openSections[index] ? (
                        <Minus className="w-7 h-7 text-white" />
                      ) : (
                        <Plus className="w-7 h-7 text-white" />
                      )}
                    </div>
                  </button>

                  {/* Section Content */}
                  {openSections[index] && (
                    <div className="px-10 pb-10 animate-in fade-in duration-500 slide-in-from-top-4">
                      <div className="pl-24">
                        <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 lg:px-32 py-24 bg-gradient-to-br from-white via-gray-50 to-[#386861]/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 to-[#386861] bg-clip-text text-transparent">
            Privacy Questions?
          </h2>
          <p className="text-gray-600 mb-12 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Our dedicated privacy team is here to address your concerns and help you exercise your data rights.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/80 hover:shadow-3xl transition-all duration-500 group hover:scale-105">
              <div className="bg-gradient-to-br from-[#386861]/10 to-[#386861]/10 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-500">
                <Mail className="text-[#386861]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Privacy Team</h3>
              <a
                href="mailto:privacy@quoreit.com"
                className="text-[#386861] text-lg font-semibold hover:text-[#386861] transition-colors duration-300 block"
              >
                privacy@quoreit.com
              </a>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/80 hover:shadow-3xl transition-all duration-500 group hover:scale-105">
              <div className="bg-gradient-to-br from-[#386861]/10 to-[#386861]/10 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-500">
                <FileText className="text-[#386861]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data Requests</h3>
              <p className="text-[#386861] text-lg font-semibold">
                Submit Request
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/80 hover:shadow-3xl transition-all duration-500 group hover:scale-105">
              <div className="bg-gradient-to-br from-[#386861]/10 to-[#386861]/10 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-500">
                <Clock className="text-[#386861]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Response Time</h3>
              <p className="text-[#386861] text-lg font-semibold">
                24-48 Hours
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default DataPrivacy;