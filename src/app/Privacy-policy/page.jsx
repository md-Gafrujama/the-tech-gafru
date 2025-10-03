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
      content: `THE FOLLOWING DESCRIBES THE INFORMATION THAT MARTECHBIZ MARKETING COLLECTS AND HOW IT USES SUCH INFORMATION. PLEASE READ THIS PRIVACY POLICY CAREFULLY BEFORE USING THIS WEBSITE. BY USING THE SERVICES OR SUBMITTING PERSONAL INFORMATION THROUGH THE SERVICES, YOU EXPRESSLY CONSENT TO THE PROCESSING AND USE OF YOUR PERSONAL INFORMATION ACCORDING TO THIS PRIVACY POLICY.

Privacy Statement
Martechbiz Marketing, LLC and its subsidiaries (collectively "Martechbiz Marketing") are committed to safeguarding your privacy online. This privacy policy applies to Your information that Martechbiz Marketing collects and receives. By using this website ("Website") You agree to the terms of this Privacy Policy. Please read the following policy to understand how Your Personal Information will be treated as You use Martechbiz Marketing's Services. All capitalized terms not defined in this Privacy Policy have the same meaning as defined in Martechbiz Marketing's Terms of use.`
    },
    {
      icon: <Eye className="text-[#386861]" size={22} />,
      title: "Personal Information Defined",
      content: `For this Privacy Policy, "Personal Information" means information that is personally identifiable such as names, addresses, e-mail addresses, or phone numbers, as well as other non-public information that is associated with a User. Martechbiz Marketing collects and uses Personal Information as described in this Privacy Policy from the Users of our Services.`
    },
    {
      icon: <Shield className="text-[#386861]" size={22} />,
      title: "Personal Information Martechbiz Marketing Collects",
      content: `Martechbiz Marketing collects Personal Information upon Your consent. This information might be used to send you product recommendations, articles via a newsletter, or more information about particular products, depending on the form you fill out and the consent you provide at the time you fill out that form.

Product Recommendations: Martechbiz Marketing collects Personal Information from You in order to connect You with sellers of products that You are searching for. When You give Martechbiz Marketing access to Personal Information for this purpose, You consent to receive product recommendations and buying advice from Martechbiz Marketing via email or phone call.

Email Newsletters: Martechbiz Marketing collects email addresses to provide readers with updates via email newsletters. These email newsletters contain links to blog posts, product recommendations, and research materials that match your interests.

Get Pricing: Should You request pricing details for a particular product listed on the site, Martechbiz Marketing will collect Personal Information such as:

Email address
Name
Phone Number
Industry
Company demographics
Martechbiz Marketing collects the following Personal Information that You submit voluntarily. You may provide Martechbiz Marketing with additional information about You as You use the Services such as:

Physical addresses
Telephone numbers
Information regarding Your business
Information regarding Your product needs and requirements
Other personally identifiable information You affirmatively provide`
    },
    {
      icon: <Users className="text-[#386861]" size={22} />,
      title: "Cookies",
      content: `Martechbiz Marketing may place "cookies" on Your personal computer. "Cookies" are small identifiers sent from a web server and stored on Your computer's hard drive that help Martechbiz Marketing to recognize You if You visit the Website again. Martechbiz Marketing uses cookies to record session information, such as record user-specific information on what pages You access or visit, record past activity in order to provide better service when You return to the Website, ensure that You are not repeatedly sent the same banner ads, to customize Website content based on Your browser type, and to track how You found the Website.`
    },
    {
      icon: <Cookie className="text-[#386861]" size={22} />,
      title: "Minors",
      content: `Martechbiz Marketing does not knowingly collect personally identifiable information by anyone under the age of 18. Do not fill out any forms on the site if You are under the age of 18 and do not provide Martechbiz Marketing with any information regarding any individual under the age of 18.`
    },
    {
      icon: <Lock className="text-[#386861]" size={22} />,
      title: "Use of Personal Information",
      content: `Martechbiz Marketing uses the Personal Information that it gathers about You for the following purposes:

To provide our Services to You and respond to Your inquiries
To tailor the content and information that we may send or display to You
For marketing and promotional purposes
To better understand how users access and use the Website`
    },
    {
      icon: <FileText className="text-[#386861]" size={22} />,
      title: "Data Compliance",
      content: `GDPR (General Data Protection Regulation)

Martechbiz Marketing adheres to rights of data subjects set out by the GDPR standards. Under these standards individual citizens of the European Union (EU) and the European Economic Area (EEA) have rights regarding their personal data.

CCPA (California Consumer Privacy Act)

Martechbiz Marketing adheres to rights of data subjects set out by CCPA. Residents of California upon verification have specific rights regarding their personal information.

To exercise these rights you can contact us by:
Email us at datacontroller@martechbiz.com`
    },
    {
      icon: <Users className="text-[#386861]" size={22} />,
      title: "Security",
      content: `Martechbiz Marketing works hard to protect Information You provide from loss, misuse, and unauthorized access or disclosure. These steps take into account the sensitivity of the information we collect, process and store, and the current state of technology.`
    },
    {
      icon: <Shield className="text-[#386861]" size={22} />,
      title: "Notification of Privacy Statement Changes",
      content: `From time to time, Martechbiz Marketing may use Personal Information for new, unanticipated uses not previously disclosed in this Privacy Policy. If our information practices change at some time in the future we will post the policy changes to this Website to notify You of these changes.`
    },
    {
      icon: <FileText className="text-[#386861]" size={22} />,
      title: "Contacting the Martechbiz Marketing Data Protection Team",
      content: `If You have any questions about this Privacy Policy, the practices of this Website, or Your dealings with this Website, please contact the Martechbiz Marketing Data Protection Officer at datacontroller@martechbiz.com.`
    }
  ];

  const quickLinks = [
    { title: "Introduction", index: 0 },
    { title: "Personal Information Defined", index: 1 },
    { title: "Information We Collect", index: 2 },
    { title: "Cookies", index: 3 },
    { title: "Minors", index: 4 },
    { title: "Use of Information", index: 5 },
    { title: "Data Compliance", index: 6 },
    { title: "Security", index: 7 },
    { title: "Policy Changes", index: 8 },
    { title: "Contact Us", index: 9 }
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
                  At Martechbiz Marketing, we are committed to transparency and protecting your personal information. 
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
                    <p className="font-bold text-lg text-gray-900">Martechbiz Marketing</p>
                    <p>3343 Perimeter Hill Dr Suite 100</p>
                    <p>Nashville, TN 37211</p>
                    <p>Phone: <a href="tel:8777022082" className="text-[#386861] hover:underline font-medium">877-702-2082</a></p>
                    <p>Email: <a href="mailto:datacontroller@martechbiz.com" className="text-[#386861] hover:underline font-medium">datacontroller@martechbiz.com</a></p>
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