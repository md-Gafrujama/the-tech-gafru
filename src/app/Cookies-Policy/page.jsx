"use client";
import React, { useState, useEffect } from "react";
import { Home, Shield, Lock, Eye, Users, Cookie, Mail, FileText, ChevronRight, Plus, Minus, AlertCircle, CheckCircle, Globe } from "lucide-react";

const CookiesLegalNotice = () => {
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
      icon: <Cookie className="text-[#386861]" size={22} />,
      title: "Cookies Policy",
      content: `Quore IT LLC ("we," "our," or "us") uses cookies and similar technologies to enhance user experience, analyze site performance, and support marketing campaigns. By continuing to use our website, you agree to the placement of cookies on your device, unless you choose to disable them.

Cookies are small text files stored on your device when you visit a website. They enable us to recognize your device, remember your preferences, and deliver a more personalized browsing experience.

This cookies policy explains what cookies are, how we use them, the types of cookies we use, and your choices regarding cookies. We encourage you to read this policy carefully to understand our cookie practices.`
    },
    {
      icon: <FileText className="text-[#386861]" size={22} />,
      title: "What Are Cookies?",
      content: `Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work more efficiently and to provide reporting information.

Cookies set by the website owner (in this case, Quore IT LLC) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website.

The cookies we use may be session cookies (which are erased when you close your browser) or persistent cookies (which remain on your device until they expire or you delete them). We use both types to enhance your experience on our website.`
    },
    {
      icon: <Eye className="text-[#386861]" size={22} />,
      title: "Types of Cookies We Use",
      content: `Essential Cookies – These cookies are strictly necessary for the operation of our website. They enable core functionality such as security, network management, and accessibility. Without these cookies, services you have asked for cannot be provided. These cookies do not store any personally identifiable information.

Performance Cookies – These cookies collect anonymous information about how visitors use our website, including which pages are visited most often and if visitors get error messages from web pages. These cookies help us improve how our website works by understanding user behavior patterns.

Functional Cookies – These cookies allow our website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features. They may also be used to provide services you have asked for, such as watching a video or commenting on a blog.

Analytics & Marketing Cookies – These cookies are used to track visitors across websites, measure the effectiveness of advertising campaigns, and deliver advertisements that are relevant to you and your interests. They help us understand which marketing channels are most effective.`
    },
    {
      icon: <Shield className="text-[#386861]" size={22} />,
      title: "Managing Your Cookie Preferences",
      content: `You have several options for managing cookies on our website:

Browser Settings – You can adjust your browser settings to accept, block, or delete cookies. Most web browsers allow some control of most cookies through browser settings. However, if you use your browser settings to block all cookies, you may not be able to access all or parts of our site.

Cookie Banner – Our website provides a cookie consent banner where you can accept all cookies, reject non-essential cookies, or manage your preferences for different types of cookies.

Third-Party Opt-Out – For third-party advertising cookies, you can opt out directly with the advertising networks or use industry opt-out tools.

Please note that if you disable cookies, some parts of our website may not function properly, and your user experience may be affected.`
    },
    {
      icon: <Globe className="text-[#386861]" size={22} />,
      title: "GDPR Compliance (EU/EEA Users)",
      content: `Under the General Data Protection Regulation (GDPR), individuals in the European Union and European Economic Area have specific rights regarding their personal data:

Right to Access – You have the right to request access to the personal data we hold about you and information about how we process it.

Right to Rectification – You may request that we correct inaccurate or incomplete personal information.

Right to Erasure – You have the right to request that we delete your personal data under certain circumstances.

Right to Restrict Processing – You can request that we limit how we process your personal data in specific situations.

Right to Data Portability – You have the right to receive your personal data in a structured, commonly used format.

Right to Withdraw Consent – You may withdraw consent for cookies or marketing communications at any time without affecting the lawfulness of processing based on consent before withdrawal.

We process personal data only with a lawful basis, including consent, contract performance, legal obligation, or legitimate interest.`
    },
    {
      icon: <Users className="text-[#386861]" size={22} />,
      title: "CCPA Compliance (California Users)",
      content: `Under the California Consumer Privacy Act (CCPA), California residents have specific rights regarding their personal information:

Right to Know – You have the right to know what personal information we collect, use, disclose, or sell about you.

Right to Delete – You may request that we delete your personal information, subject to certain exceptions.

Right to Opt-Out – You have the right to opt out of the sale or sharing of your personal information.

Right to Non-Discrimination – We will not discriminate against you for exercising your CCPA rights.

Categories of Personal Information – We may collect identifiers, commercial information, internet activity, and inferences drawn from this information.

Business Purposes – We use personal information for operating our website, providing services, improving our offerings, and communicating with users.

To exercise these rights, please contact us using the information provided in our contact section.`
    },
    {
      icon: <Lock className="text-[#386861]" size={22} />,
      title: "DPDP Act Compliance (India)",
      content: `Under the Digital Personal Data Protection Act, 2023 (DPDP Act), individuals in India have specific rights and protections:

Lawful Processing – We collect and process personal data lawfully, with appropriate notice and consent where required by law.

Purpose Limitation – Personal data is collected for specified, explicit, and legitimate purposes and not processed in a manner incompatible with those purposes.

Data Minimization – We collect only the personal data that is necessary for the purposes for which it is processed.

Accuracy – We take reasonable steps to ensure that personal data is accurate and kept up to date.

Storage Limitation – Personal data is retained only as long as necessary to fulfill the purpose for which it was collected or as required by applicable law.

Right to Correction – Individuals have the right to request correction of inaccurate or incomplete personal data.

Right to Erasure – You may request erasure of personal data when it is no longer necessary for the original purpose.

Grievance Redressal – We have appointed a Data Protection Officer to address concerns and complaints related to data processing.`
    },
    {
      icon: <AlertCircle className="text-[#386861]" size={22} />,
      title: "Legal Disclaimer",
      content: `Information Accuracy – The content on this website is provided for general information purposes only. While Quore IT LLC strives to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained on the website.

Limitation of Liability – Quore IT LLC shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of this website or inability to use the website, even if we have been advised of the possibility of such damages.

External Links – Our website may contain links to third-party websites that are not owned or controlled by Quore IT LLC. We are not responsible for the content, privacy policies, or practices of any third-party websites. We encourage you to review the privacy policies of any third-party sites you visit.

Intellectual Property – All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Quore IT LLC or its licensors and is protected by copyright, trademark, and other intellectual property laws. Unauthorized use, reproduction, or distribution is strictly prohibited.

Governing Law – These terms and this legal notice are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the jurisdiction of the courts in India.`
    },
    {
      icon: <CheckCircle className="text-[#386861]" size={22} />,
      title: "Your Privacy Rights at a Glance",
      content: `At Quore IT LLC, we respect your privacy and comply with global data protection laws. Depending on your location, you may have the following rights:

Access & Portability – Request a copy of the personal data we hold about you and receive it in a portable format.

Correction & Updates – Ask us to correct any inaccurate, incomplete, or outdated information in our systems.

Deletion (Right to be Forgotten) – Request that we erase your personal data when it is no longer needed for the original purpose or when you withdraw consent.

Withdraw Consent – Opt out of marketing emails, cookies, or other consent-based processing activities at any time without penalty.

Opt-Out of Sale/Sharing (CCPA Users) – California residents can request that we not sell or share their personal information with third parties.

Data Processing Restriction – Limit how we use or process your personal information under certain circumstances.

Grievance Redressal (India – DPDP Act) – Raise concerns or complaints with our Data Protection Officer for prompt resolution and support.

To exercise any of these rights, please contact us using the information provided in the contact section below.`
    },
    {
      icon: <Mail className="text-[#386861]" size={22} />,
      title: "Updates and Changes",
      content: `Quore IT LLC reserves the right to update this Cookies & Legal Notice at any time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes to this policy, we will:

Notification – Post the updated policy on our website with a new "Last Updated" date at the top of the document.

Prominent Notice – Provide prominent notice of significant changes through our website banner, email notifications, or other appropriate communication methods.

Grace Period – Allow a reasonable transition period for users to review the changes and adjust their preferences accordingly.

Continued Use – Your continued use of our website after the effective date of any changes constitutes acceptance of the updated policy.

We encourage you to review this Cookies & Legal Notice periodically to stay informed about how we collect, use, and protect your information. If you have questions about any changes, please contact us using the information provided below.`
    }
  ];

  const quickLinks = [
    { title: "Cookies Policy", index: 0 },
    { title: "What Are Cookies", index: 1 },
    { title: "Types of Cookies", index: 2 },
    { title: "Cookie Preferences", index: 3 },
    { title: "GDPR Compliance", index: 4 },
    { title: "CCPA Compliance", index: 5 },
    { title: "DPDP Act", index: 6 },
    { title: "Legal Disclaimer", index: 7 },
    { title: "Privacy Rights", index: 8 },
    { title: "Updates", index: 9 }
  ];

  const privacyRights = [
    { icon: CheckCircle, title: "Access & Portability", desc: "Request a copy of your personal data in portable format" },
    { icon: Shield, title: "Correction & Updates", desc: "Ask us to correct inaccurate or incomplete information" },
    { icon: Lock, title: "Deletion Rights", desc: "Request erasure when data is no longer needed" },
    { icon: Eye, title: "Withdraw Consent", desc: "Opt out of marketing emails and cookies anytime" },
    { icon: Users, title: "Opt-Out (CCPA)", desc: "California users can prevent sale/sharing of data" },
    { icon: AlertCircle, title: "Data Restriction", desc: "Limit how we process your information" }
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-[#0E1F1C] via-[#1a2f2a] to-[#0E1F1C] text-white px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#386861] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2d5249] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center text-sm text-gray-300 mb-6 space-x-2">
            <Home size={16} />
            <span className="hover:underline cursor-pointer hover:text-white transition-colors">Home</span>
            <span>›</span>
            <span className="font-semibold text-white">Cookies & Legal Notice</span>
          </div>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-[#386861]/20 rounded-full text-sm font-medium text-[#7dd3c0] mb-6 backdrop-blur-sm border border-[#386861]/30">
              Last Updated: September 30, 2025
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Cookies & Legal Notice
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Understand how Quore IT LLC uses cookies and our legal commitments to protecting your data and privacy rights.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-lg">
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

      <section className="bg-gradient-to-b from-gray-50 to-white px-6 md:px-12 lg:px-32 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#386861] to-[#2d5249] text-white rounded-3xl p-10 mb-16 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex items-start gap-6">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 mt-1 shadow-xl">
                <Cookie className="text-white" size={36} />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Transparency in Data Protection</h2>
                <p className="text-gray-100 leading-relaxed text-base">
                  Quore IT LLC is committed to transparency about our use of cookies and compliance with global data protection regulations. 
                  This comprehensive notice explains our cookie practices, your rights under GDPR, CCPA, and India's DPDP Act, 
                  and our legal commitments to protecting your privacy.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {privacyRights.map((right, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#386861] hover:shadow-xl hover:shadow-[#386861]/10 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="bg-gradient-to-br from-[#386861]/10 to-[#2d5249]/10 rounded-xl p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <right.icon className="text-[#386861]" size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{right.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{right.desc}</p>
              </div>
            ))}
          </div>

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

          <div className="mt-20 border-t-2 border-gray-200 pt-16">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-xl border-2 border-gray-200 hover:border-[#386861] transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-[#386861] to-[#2d5249] rounded-2xl p-4 mt-1 shadow-lg">
                  <Mail className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Quore IT LLC</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    If you have any questions about our cookies policy, privacy practices, or wish to exercise your data protection rights, 
                    please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700 text-[15px]">
                    <p className="font-bold text-lg text-gray-900">Quore IT LLC</p>
                    <p>Data Protection & Privacy Team</p>
                    <p>Email: <a href="mailto:privacy@quoreit.com" className="text-[#386861] hover:underline font-medium">privacy@quoreit.com</a></p>
                    <p>Legal: <a href="mailto:legal@quoreit.com" className="text-[#386861] hover:underline font-medium">legal@quoreit.com</a></p>
                    <p>Website: <a href="https://quoreit.com" className="text-[#386861] hover:underline font-medium">https://quoreit.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </section>
    </>
    
  );
};

export default CookiesLegalNotice;
