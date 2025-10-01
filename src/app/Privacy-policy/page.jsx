"use client";
import React, { useState, useEffect } from "react";
import { Home, Shield, Lock, Eye, Users, Cookie, Mail, FileText, ChevronRight, Plus, Minus } from "lucide-react";

const PrivacyPolicy = () => {
  const [openSections, setOpenSections] = useState(Array(10).fill(false));
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  const scrollToSection = (index) => {
    setActiveSection(index);
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((_, index) => 
        document.getElementById(`section-${index}`)
      );
      
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      icon: <FileText className="text-[#386861]" size={22} />,
      title: "Introduction",
      content: `Martechbiz ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our websites, including TechRepublic, eWeek, Datamation, Channel Insider, and other affiliated properties.

This policy applies to all information collected through our services and any related services, sales, marketing, or events. Please read this privacy policy carefully to understand our views and practices regarding your personal data.`
    },
    {
      icon: <Eye className="text-[#386861]" size={22} />,
      title: "Information We Collect",
      content: `We collect several types of information from and about users of our services:

Personal Information: Name, email address, phone number, job title, company name, mailing address, and other contact details you provide when registering for our services, subscribing to newsletters, or filling out forms.

Technical Data: IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our services.

Usage Data: Information about how you use our websites, products, and services, including page views, clicks, time spent on pages, and navigation paths.

Marketing and Communications Data: Your preferences in receiving marketing from us and your communication preferences.

Cookies and Tracking Technologies: We use cookies, web beacons, and similar technologies to enhance your experience and collect data about your browsing activities.`
    },
    {
      icon: <Shield className="text-[#386861]" size={22} />,
      title: "How We Use Your Information",
      content: `We use the information we collect for various purposes, including:

Service Delivery: To provide, maintain, and improve our services, process transactions, and deliver content and information you request.

Personalization: To personalize your experience and deliver tailored content, recommendations, and advertisements based on your interests and browsing behavior.

Communication: To send you newsletters, marketing materials, and other information that may be of interest to you, as well as respond to your inquiries and provide customer support.

Analytics and Research: To analyze usage patterns, understand user preferences, and conduct research to improve our services and develop new offerings.

Legal Compliance: To comply with applicable laws, regulations, legal processes, and enforce our terms and conditions.

Security: To detect, prevent, and address technical issues, fraud, and other harmful or illegal activities.`
    },
    {
      icon: <Users className="text-[#386861]" size={22} />,
      title: "Information Sharing and Disclosure",
      content: `We may share your information in the following circumstances:

Service Providers: We share data with third-party vendors, consultants, and service providers who perform services on our behalf, such as hosting, data analysis, payment processing, and marketing assistance.

Business Partners: We may share information with our technology vendors and partners to facilitate connections between buyers and sellers of business technology solutions.

Advertising Partners: We work with advertising networks and partners to deliver targeted advertisements. These partners may use cookies and similar technologies to collect information about your browsing activities.

Legal Requirements: We may disclose your information if required by law, court order, or other legal process, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.

Business Transfers: In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business, your information may be transferred to the acquiring entity.

With Your Consent: We may share your information with third parties when you give us explicit consent to do so.`
    },
    {
      icon: <Cookie className="text-[#386861]" size={22} />,
      title: "Cookies and Tracking Technologies",
      content: `We use cookies and similar tracking technologies to track activity on our services and hold certain information. Cookies are files with small amounts of data that are sent to your browser from a website and stored on your device.

Types of Cookies We Use:

Essential Cookies: Required for the operation of our services, enabling core functionality such as security, network management, and accessibility.

Performance Cookies: Help us understand how visitors interact with our services by collecting and reporting anonymous information.

Functionality Cookies: Enable enhanced functionality and personalization, such as remembering your preferences and settings.

Targeting Cookies: Used to deliver advertisements relevant to you and your interests, and to measure the effectiveness of advertising campaigns.

You can control cookie settings through your browser preferences. However, disabling cookies may limit your ability to use certain features of our services.`
    },
    {
      icon: <Lock className="text-[#386861]" size={22} />,
      title: "Data Security",
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

Encryption: We use SSL/TLS encryption to protect data transmitted between your device and our servers.

Access Controls: We restrict access to personal information to employees, contractors, and agents who need to know that information to process it on our behalf.

Security Audits: We regularly review and update our security practices and conduct security assessments to identify and address potential vulnerabilities.

Incident Response: We have procedures in place to detect, respond to, and recover from security incidents.

Despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against interception or misuse. We cannot guarantee the absolute security of your information.`
    },
    {
      icon: <FileText className="text-[#386861]" size={22} />,
      title: "Your Rights and Choices",
      content: `Depending on your location, you may have certain rights regarding your personal information:

Access: You have the right to request access to the personal information we hold about you.

Correction: You can request that we correct inaccurate or incomplete information.

Deletion: You may request deletion of your personal information, subject to certain legal exceptions.

Opt-Out: You can opt out of receiving marketing communications by clicking the unsubscribe link in our emails or contacting us directly.

Cookie Management: You can manage cookie preferences through your browser settings.

Data Portability: You may have the right to receive your personal information in a structured, commonly used format.

Restriction: You can request that we restrict processing of your personal information in certain circumstances.

To exercise these rights, please contact us using the information provided in the "Contact Us" section below.`
    },
    {
      icon: <Users className="text-[#386861]" size={22} />,
      title: "Children's Privacy",
      content: `Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.

If we become aware that we have collected personal information from a child under 16 without verification of parental consent, we will take steps to remove that information from our servers.`
    },
    {
      icon: <Shield className="text-[#386861]" size={22} />,
      title: "International Data Transfers",
      content: `Martechbiz operates globally with team members and servers in multiple countries, including the United States, United Kingdom, Singapore, Australia, India, Germany, Canada, and the Philippines.

Your information may be transferred to, stored, and processed in countries other than your country of residence. These countries may have data protection laws that differ from the laws of your country.

When we transfer personal information internationally, we implement appropriate safeguards to ensure your data remains protected in accordance with this privacy policy and applicable laws. These safeguards may include standard contractual clauses, Privacy Shield certification (where applicable), or other legally approved mechanisms.`
    },
    {
      icon: <FileText className="text-[#386861]" size={22} />,
      title: "Changes to This Privacy Policy",
      content: `We may update this privacy policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We will notify you of any material changes by posting the new privacy policy on this page and updating the "Last Updated" date.

We encourage you to review this privacy policy periodically to stay informed about how we are protecting your information. Your continued use of our services after any changes to this privacy policy constitutes your acceptance of those changes.`
    }
  ];

  const quickLinks = [
    { title: "Introduction", index: 0 },
    { title: "Information We Collect", index: 1 },
    { title: "How We Use Your Information", index: 2 },
    { title: "Information Sharing", index: 3 },
    { title: "Cookies & Tracking", index: 4 },
    { title: "Data Security", index: 5 },
    { title: "Your Rights", index: 6 },
    { title: "Children's Privacy", index: 7 },
    { title: "International Transfers", index: 8 },
    { title: "Policy Changes", index: 9 }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E1F1C] via-[#1a2f2a] to-[#0E1F1C] text-white px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#386861] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2d5249] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-300 mb-6 space-x-2">
            <Home size={16} />
            <span className="hover:underline cursor-pointer hover:text-white transition-colors">Home</span>
            <span>›</span>
            <span className="font-semibold text-white">Privacy Policy</span>
          </div>

          {/* Heading */}
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-[#386861]/20 rounded-full text-sm font-medium text-[#7dd3c0] mb-6 backdrop-blur-sm border border-[#386861]/30">
              Last Updated: September 30, 2025
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-lg">
        <div className="px-6 md:px-12 lg:px-20 py-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <span className="text-sm font-bold text-gray-800 whitespace-nowrap">Jump to:</span>
            <div className="flex gap-2">
              {quickLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(link.index)}
                  className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                    activeSection === link.index
                      ? 'bg-[#386861] text-white shadow-lg shadow-[#386861]/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                  }`}
                >
                  {link.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-6 md:px-12 lg:px-32 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Introduction Box */}
          <div className="bg-gradient-to-br from-[#386861] to-[#2d5249] text-white rounded-3xl p-10 mb-16 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex items-start gap-6">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 mt-1 shadow-xl">
                <Shield className="text-white" size={36} />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Your Privacy is Protected</h2>
                <p className="text-gray-200 leading-relaxed text-base">
                  At Martechbiz, we are committed to transparency and protecting your personal information. 
                  This privacy policy outlines our practices regarding data collection, usage, and your rights as a user. 
                  We encourage you to read through this policy to understand how we handle your data.
                </p>
              </div>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={index}
                id={`section-${index}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 transform ${
                  hoveredCard === index || openSections[index]
                    ? 'border-[#386861] shadow-2xl shadow-[#386861]/20 scale-[1.02]'
                    : 'border-gray-200 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(index)}
                  className={`w-full flex items-center justify-between p-6 text-left transition-all duration-300 ${
                    openSections[index]
                      ? 'bg-gradient-to-r from-[#386861] to-[#2d5249] text-white'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`rounded-xl p-3 shadow-lg transition-all duration-300 ${
                      openSections[index]
                        ? 'bg-white/20 backdrop-blur-sm'
                        : 'bg-[#386861]/10'
                    }`}>
                      {React.cloneElement(section.icon, {
                        className: openSections[index] ? 'text-white' : 'text-[#386861]',
                        size: 22
                      })}
                    </div>
                    <h3 className={`text-lg font-bold transition-colors ${
                      openSections[index] ? 'text-white' : 'text-gray-900'
                    }`}>
                      {section.title}
                    </h3>
                  </div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openSections[index]
                      ? 'bg-white/20 backdrop-blur-sm rotate-180'
                      : 'bg-[#386861] hover:bg-[#2d5249]'
                  }`}>
                    {openSections[index] ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>

                {/* Section Content */}
                {openSections[index] && (
                  <div className="px-8 pb-8 pt-6 bg-white animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line text-[15px]">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-20 border-t-2 border-gray-200 pt-16">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-xl border-2 border-gray-200 hover:border-[#386861] transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-[#386861] to-[#2d5249] rounded-2xl p-4 mt-1 shadow-lg">
                  <Mail className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    If you have any questions, concerns, or requests regarding this privacy policy or our data practices, 
                    please don't hesitate to contact us:
                  </p>
                  <div className="space-y-2 text-gray-700 text-[15px]">
                    <p className="font-bold text-lg text-gray-900">Martechbiz</p>
                    <p>3343 Perimeter Hill Dr Suite 100</p>
                    <p>Nashville, TN 37211</p>
                    <p>Phone: <a href="tel:8777022082" className="text-[#386861] hover:underline font-medium">877-702-2082</a></p>
                    <p>Email: <a href="mailto:privacy@Martechbiz.com" className="text-[#386861] hover:underline font-medium">privacy@Martechbiz.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Terms of Use", desc: "Review our terms and conditions for using our services.", link: "Read More" },
              { icon: Cookie, title: "Cookie Policy", desc: "Learn about how we use cookies and tracking technologies.", link: "Learn More" },
              { icon: Shield, title: "Data Security", desc: "Discover how we protect your personal information.", link: "View Details" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#386861] hover:shadow-2xl hover:shadow-[#386861]/10 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-[#386861]/10 to-[#2d5249]/10 rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-[#386861]" size={28} />
                </div>
                <h4 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                <button className="text-[#386861] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  {item.link} <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;