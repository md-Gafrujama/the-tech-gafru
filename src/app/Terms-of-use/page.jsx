"use client";
import React, { useState } from "react";
import { Home, Plus, Minus, Shield, FileText, Users, AlertCircle, Scale, Globe, Mail, Phone, Clock } from "lucide-react";

const termsData = [
  {
    id: 1,
    icon: <FileText className="text-[#386861]" size={24} />,
    title: "Access Eligibility",
    content: [
      "You must be at least eighteen (18) years of age to register and use the Website and Services.",
      "Martechbiz Marketing's Services are available only to individuals who can form legally binding contracts under applicable law.",
      "Martechbiz Marketing reserves the right to refuse access to, or use of our Website or Services to anyone not complying with this Agreement, at any time, in its sole discretion."
    ]
  },
  {
    id: 2,
    icon: <Shield className="text-[#386861]" size={24} />,
    title: "Registration/Your Account",
    content: [
      "You may browse the Website without registering. However, You must register on the Website in order to use all of the Services.",
      "During Registration, You will be asked to provide information such as Your name, address, telephone number and email address.",
      "It is YOUR responsibility to maintain the confidentiality of Your User ID and password and You agree to accept responsibility for all activities that occur under Your Account.",
      "You may not transfer, assign or sell Your Account to any third party.",
      "You must provide accurate and current information. If you provide any information that is false, misleading, inaccurate, not current, or incomplete, Martechbiz Marketing reserves the right to suspend or terminate your account."
    ]
  },
  {
    id: 3,
    icon: <Users className="text-[#386861]" size={24} />,
    title: "Electronic Communications",
    content: [
      "When You send e-mails to Martechbiz Marketing or visit the Website, You are communicating with Martechbiz Marketing electronically.",
      "You consent to receive e-mail or other electronic communications from Martechbiz Marketing.",
      "If You request a demo, a price quote, or request more information about a particular vendor, You consent to Martechbiz Marketing contacting You by phone and recording or monitoring Your phone call for quality assurance or training purposes.",
      "Martechbiz Marketing makes no guarantees regarding the actual response time to a request and cannot guarantee that You will receive a response to Your request."
    ]
  },
  {
    id: 4,
    icon: <Users className="text-[#386861]" size={24} />,
    title: "Term",
    content: [
      "This Agreement shall remain in full force and effect while You are using the Website or Services whether You are a visitor or a registered User.",
      "You may delete Your Account at any time, for any or no reason, by sending Your request to marketing@martechbiz.com.",
      "Martechbiz Marketing may terminate Your Account or rights to use the Services for any or no reason at any time by ceasing to provide the Services to You.",
      "Martechbiz Marketing will not have any liability whatsoever to You for any termination of Your Account or related deletion of Your information."
    ]
  },
  {
    id: 5,
    icon: <Shield className="text-[#386861]" size={24} />,
    title: "Ownership of Services",
    content: [
      "You acknowledge that all the intellectual property rights in the Website and Services (excluding any User Provided Content) are owned by Martechbiz Marketing or its partners.",
      "You agree not to reproduce, modify, publish, transmit, distribute, publicly perform or display, sell, or create derivative works based on the Website or Services.",
      "You agree not to rent, lease, loan, or sell access to the Services."
    ]
  },
  {
    id: 6,
    icon: <AlertCircle className="text-[#386861]" size={24} />,
    title: "User Provided Content",
    content: [
      "Users may upload or provide Content to the Website. Martechbiz Marketing does not claim ownership in any User Provided Content.",
      "By providing User Provided Content, You grant to Martechbiz Marketing an unrestricted, irrevocable, perpetual, non-exclusive, fully-paid and royalty-free license to use, copy, perform, display, create derivative works of, and distribute such User Provided Content.",
      "Martechbiz Marketing may modify or adapt User Provided Content to transmit, display or distribute it over computer networks and in various media.",
      "No compensation will be paid with respect to You for the User Provided Content that You post through the Services."
    ]
  },
  {
    id: 7,
    icon: <AlertCircle className="text-[#386861]" size={24} />,
    title: "Third Party Content and Links",
    content: [
      "The Website and Services contains Content provided by Users and third parties, and Martechbiz Marketing does not control such Content.",
      "Martechbiz Marketing is not responsible for any such Content and makes no guarantees about the accuracy, currency, suitability, or quality of the information in such Content.",
      "This Website may be linked to other websites that are not Martechbiz Marketing sites. Your use of such Third Party Sites is governed by their respective privacy policies and terms.",
      "Martechbiz Marketing does not verify, make any representations or take responsibility for such Third Party Sites."
    ]
  },
  {
    id: 8,
    icon: <Globe className="text-[#386861]" size={24} />,
    title: "Interactions and Use of User Information",
    content: [
      "Your interactions with other Users on the Services or with advertisers are solely between You and the other User or advertiser.",
      "Martechbiz Marketing is not responsible for any loss or damage incurred as the result of any such dealings.",
      "You will not use any information obtained from the Services in order to harass, abuse, or harm another person, or in order to contact, advertise to, solicit, or sell to any User without their prior explicit consent.",
      "Martechbiz Marketing reserves the right to restrict the number of communications which a User may send to other Users."
    ]
  },
  {
    id: 9,
    icon: <FileText className="text-[#386861]" size={24} />,
    title: "Responsibilities Regarding User Provided Content",
    content: [
      "You are responsible for the information, opinions, evaluations, reviews, ratings, messages, comments, photos, videos, graphics, sounds and other content or material that You submit.",
      "You represent and warrant that You are the sole author of the User Provided Content and owner of the intellectual property rights thereto.",
      "If You provided a review, evaluation or opinion of a product or service, You are not an employee, contractor, agent, channel partner or director of the vendor.",
      "Your submission is accurate to the best of Your knowledge and You are not violating any confidentiality, non-disclosure, or contractual obligations."
    ]
  },
  {
    id: 10,
    icon: <Scale className="text-[#386861]" size={24} />,
    title: "Prohibited Content",
    content: [
      "You agree that You will not post any Prohibited Content including content that is offensive, promotes racism, bigotry, hatred or physical harm of any kind.",
      "Content that bullies, harasses or advocates stalking, bullying, or harassment of another person.",
      "Content that involves the transmission of 'junk mail,' 'chain letters,' unsolicited mass mailing, or 'spamming'.",
      "Content that is false or misleading or promotes illegal activities or conduct that is abusive, threatening, obscene, defamatory or libelous.",
      "Content that promotes unauthorized copies of copyrighted material or involves exploitation of persons under the age of eighteen."
    ]
  }
];

const additionalTerms = [
  {
    title: "Disclaimer of Warranties",
    text: "The website and services are provided on an 'as-is' and 'as-available' basis. Martechbiz Marketing disclaims all warranties of any kind, whether express or implied.",
    icon: <AlertCircle className="text-white" size={20} />
  },
  {
    title: "Limitation of Liability",
    text: "Martechbiz Marketing shall not be liable for any damages arising from your use of the website or services. Your sole remedy for any dispute shall be termination of such service.",
    icon: <Shield className="text-white" size={20} />
  },
  {
    title: "Indemnification",
    text: "You agree to indemnify and hold harmless Martechbiz Marketing from any losses arising from your use of the Services in violation of this Agreement or any laws.",
    icon: <FileText className="text-white" size={20} />
  },
  {
    title: "Governing Law and Venue",
    text: "Your use of the Website and this Agreement shall be governed by the laws of the State of Tennessee. Disputes shall be brought in Williamson County, Tennessee.",
    icon: <Scale className="text-white" size={20} />
  },
  {
    title: "Intellectual Property Infringement",
    text: "Martechbiz Marketing respects intellectual property rights. To report infringement, contact our designated agent at legal@martechbiz.com.",
    icon: <Users className="text-white" size={20} />
  },
  {
    title: "Changes to Terms",
    text: "Martechbiz Marketing may amend this Agreement by posting new Terms of Use. Your continued use after changes are posted constitutes acceptance.",
    icon: <Clock className="text-white" size={20} />
  }
];

const TermsOfUse = () => {
  const [openItems, setOpenItems] = useState(Array(termsData.length).fill(false));

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#386861]/10">
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
            <span className="font-semibold text-white">Terms of Use</span>
          </div>

          {/* Heading */}
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-[#386861]/20 rounded-full text-sm font-medium text-[#7dd3c0] mb-6 backdrop-blur-sm border border-[#386861]/30">
              Last Updated: September 30, 2025
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Terms of Use
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              THE FOLLOWING DESCRIBES THE TERMS AND CONDITIONS ON WHICH MARTECHBIZ MARKETING OFFERS YOU ACCESS TO ITS SERVICES. 
              PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THIS WEBSITE.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 md:px-12 lg:px-32 py-20 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-white to-[#386861]/5 rounded-3xl p-10 shadow-2xl border border-[#386861]/10 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#386861]/10 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#386861]/10 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-8 bg-gradient-to-b from-[#386861] to-[#386861] rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-800">Important Notice</h3>
              </div>
              <p className="text-gray-700 text-xl leading-relaxed font-medium pl-11">
                Martechbiz Marketing is owned and published by Martechbiz Marketing Private Limited (collectively "Martechbiz Marketing") 
                provides this website ("Website") and the related services ("Services") to You the user. As a condition of Your use of the Services, 
                You agree to these Terms of Use without limitation or qualification along with the Martechbiz Marketing Privacy Policy. 
                Should You not agree to the terms of this Agreement, please do not use this Website or the related Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Accordion */}
      <section className="px-6 md:px-12 lg:px-32 py-20 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 to-[#386861] bg-clip-text text-transparent">
              Terms and Conditions
            </h2>
            <p className="text-gray-600 text-xl font-light max-w-2xl mx-auto">
              Comprehensive guidelines governing your use of our platform and services
            </p>
          </div>
          
          <div className="grid gap-6 lg:gap-8">
            {termsData.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-gray-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#386861]/5 to-[#386861]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Question */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between p-10 text-left group-hover:bg-gradient-to-r from-gray-50/50 to-[#386861]/5 transition-all duration-500 rounded-3xl"
                  >
                    <div className="flex items-center gap-8">
                      <div className="relative">
                        <div className="bg-gradient-to-br from-[#386861]/10 to-[#386861]/20 rounded-2xl p-5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 border border-[#386861]/20">
                          {item.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#386861] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                          {item.id}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-[#386861] transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-[#386861] to-[#386861] hover:from-[#386861] hover:to-[#386861] rounded-2xl flex items-center justify-center flex-shrink-0 ml-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-180">
                      {openItems[index] ? (
                        <Minus className="w-7 h-7 text-white" />
                      ) : (
                        <Plus className="w-7 h-7 text-white" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  {openItems[index] && (
                    <div className="px-10 pb-10 animate-in fade-in duration-500 slide-in-from-top-4">
                      <div className="pl-24 space-y-6">
                        {item.content.map((paragraph, idx) => (
                          <div key={idx} className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                            <div className="w-3 h-3 bg-gradient-to-r from-[#386861] to-[#386861] rounded-full mt-3 flex-shrink-0 shadow-lg"></div>
                            <p className="text-gray-700 leading-relaxed text-lg font-medium flex-1">
                              {paragraph}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms Section */}
      <section className="px-6 md:px-12 lg:px-32 py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-transparent to-gray-100/50"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-gray-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-4xl p-12 md:p-16 shadow-2xl border border-gray-200 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-6 mb-12">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-4 border border-gray-300 shadow-2xl">
                  <FileText className="text-white" size={36} />
                </div>
                <div>
                  <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-3">
                    Additional Terms & Conditions
                  </h2>
                  <p className="text-gray-600 text-xl font-light leading-relaxed">
                    Important legal provisions governing your use of our services
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-14 text-xl font-medium leading-relaxed max-w-4xl bg-gray-50 p-6 rounded-2xl border border-gray-200">
                By using Martechbiz Marketing's website and services, you acknowledge and agree to the following additional terms and conditions:
              </p>

              {/* 6-Card Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {additionalTerms.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Number Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-500">
                          {item.icon}
                        </div>
                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-lg border border-gray-300">
                          {index + 1}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 lg:px-32 py-24 bg-gradient-to-br from-white via-gray-50 to-[#386861]/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 to-[#386861] bg-clip-text text-transparent">
            Questions About These Terms?
          </h2>
          <p className="text-gray-600 mb-12 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Our legal team is here to help you understand our terms and conditions. 
            Don't hesitate to reach out with any questions or concerns.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/80 hover:shadow-3xl transition-all duration-500 group hover:scale-105">
              <div className="bg-gradient-to-br from-[#386861]/10 to-[#386861]/10 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-500">
                <Mail className="text-[#386861]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <a
                href="mailto:legal@martechbiz.com"
                className="text-[#386861] text-lg font-semibold hover:text-[#386861] transition-colors duration-300 block"
              >
                legal@martechbiz.com
              </a>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/80 hover:shadow-3xl transition-all duration-500 group hover:scale-105">
              <div className="bg-gradient-to-br from-[#386861]/10 to-[#386861]/10 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-500">
                <Phone className="text-[#386861]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-[#386861] text-lg font-semibold">
                877-702-2082
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

export default TermsOfUse;