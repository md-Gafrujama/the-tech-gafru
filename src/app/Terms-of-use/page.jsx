"use client";
import React, { useState } from "react";
import { Home, Plus, Minus, Shield, FileText, Users, AlertCircle, Scale, Globe, Mail, Phone, Clock } from "lucide-react";

const termsData = [
  {
    id: 1,
    icon: <FileText className="text-[#386861]" size={24} />,
    title: "Use of Website and Services",
    content: [
      "You may use our website and services solely for lawful purposes and in compliance with these Terms.",
      "You agree not to misuse our website, attempt to gain unauthorized access, or engage in any activity that could disrupt or damage our systems.",
      "Any content provided on this website is for informational purposes only and should not be considered professional advice."
    ]
  },
  {
    id: 2,
    icon: <Shield className="text-[#386861]" size={24} />,
    title: "Intellectual Property",
    content: [
      "All content on this website—including text, graphics, logos, images, and software—is the property of Quore IT LLC or its licensors and is protected by intellectual property laws.",
      "You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.",
      "You are granted a limited, non-exclusive, non-transferable license to access and use the website for personal or business informational purposes only."
    ]
  },
  {
    id: 3,
    icon: <Users className="text-[#386861]" size={24} />,
    title: "User Contributions",
    content: [
      "If you submit information, materials, or feedback to Quore IT (for example, through a form, job application, or email), you grant us the right to use that information for business purposes, consistent with our Privacy Policy.",
      "You are responsible for ensuring that any content you provide is accurate, lawful, and does not infringe the rights of third parties."
    ]
  },
  {
    id: 4,
    icon: <Users className="text-[#386861]" size={24} />,
    title: "Career and Job Application Services",
    content: [
      "Quore IT may provide job listings, career resources, and online application tools through this website.",
      "By submitting your resume, application, or other job-related information, you authorize Quore IT to use, process, store, and share your information for recruitment and placement purposes.",
      "We may share your application details with our clients and partners in connection with potential job opportunities, in accordance with our Privacy Policy.",
      "Quore IT does not guarantee job placement or continued employment for candidates using our career services.",
      "You are responsible for ensuring the accuracy of all information you submit. False, misleading, or incomplete applications may result in rejection or termination of employment opportunities."
    ]
  },
  {
    id: 5,
    icon: <Shield className="text-[#386861]" size={24} />,
    title: "Privacy",
    content: [
      "Your use of our website and services is also governed by our Privacy Policy. Please review it to understand how we collect, use, and safeguard your information."
    ]
  },
  {
    id: 6,
    icon: <AlertCircle className="text-[#386861]" size={24} />,
    title: "Disclaimer of Warranties",
    content: [
      "The website and its content are provided on an 'as-is' and 'as-available' basis.",
      "Quore IT makes no warranties, express or implied, regarding the accuracy, reliability, or availability of the website or its content.",
      "We disclaim all warranties of merchantability, fitness for a particular purpose, and non-infringement to the maximum extent permitted by law."
    ]
  },
  {
    id: 7,
    icon: <AlertCircle className="text-[#386861]" size={24} />,
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Quore IT shall not be liable for any damages arising out of or related to your use of the website or services, including but not limited to direct, indirect, incidental, consequential, or punitive damages.",
      "This includes damages resulting from errors, interruptions, loss of data, or unauthorized access."
    ]
  },
  {
    id: 8,
    icon: <Globe className="text-[#386861]" size={24} />,
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites or services for your convenience.",
      "Quore IT does not endorse and is not responsible for the content, policies, or practices of any third-party sites. Accessing them is at your own risk."
    ]
  },
  {
    id: 9,
    icon: <FileText className="text-[#386861]" size={24} />,
    title: "Changes to Terms",
    content: [
      "Quore IT may update these Terms of Use from time to time. Updates will be effective immediately upon posting on this page.",
      "Continued use of our website after changes are posted constitutes your acceptance of the revised Terms."
    ]
  },
  {
    id: 10,
    icon: <Scale className="text-[#386861]" size={24} />,
    title: "Governing Law",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Virginia, without regard to conflict of law principles.",
      "Any disputes arising from your use of the website or services shall be subject to the exclusive jurisdiction of the state and federal courts located in Virginia."
    ]
  }
];

const candidateDisclaimer = [
  {
    title: "Use of Information",
    text: "Your information may be collected, stored, processed, and shared with Quore IT clients and partners strictly for recruitment and placement purposes.",
    icon: <Shield className="text-white" size={20} />
  },
  {
    title: "No Employment Guarantee",
    text: "Submitting an application or resume does not guarantee a job offer, interview, or continued employment.",
    icon: <AlertCircle className="text-white" size={20} />
  },
  {
    title: "Accuracy of Information",
    text: "You are responsible for ensuring all information you provide is accurate, complete, and not misleading. False or incomplete information may result in rejection of your application.",
    icon: <FileText className="text-white" size={20} />
  },
  {
    title: "Data Privacy",
    text: "Your data will be handled in accordance with our Privacy Policy. Quore IT will not sell or rent your personal information to third parties.",
    icon: <Users className="text-white" size={20} />
  },
  {
    title: "Withdrawal of Consent",
    text: "You may request at any time that we stop using your information by contacting us at contactus@quoreit.com. However, this may affect our ability to consider you for opportunities.",
    icon: <Mail className="text-white" size={20} />
  },
  {
    title: "Application Timeline",
    text: "Applications are processed within 5-7 business days. You will be contacted only if selected for the next stage of the recruitment process.",
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
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E1F1C] via-[#14302c] to-[#1a423c] text-white px-6 md:px-12 lg:px-20 py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 219, 226, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`,
            backgroundSize: '50% 50%, 60% 60%, 70% 70%'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-emerald-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-teal-300/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-cyan-400/40 rounded-full animate-pulse delay-1000"></div>
        
        <div className="relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-emerald-100 mb-8 space-x-2">
            <Home size={18} />
            <a href="/" className="hover:underline transition-all duration-200 hover:text-white font-medium">
              Home
            </a>
            <span className="text-emerald-200">›</span>
            <span className="font-semibold text-white bg-emerald-900/30 px-3 py-1 rounded-full">Terms of Use</span>
          </div>

          {/* Heading */}
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-200 text-sm font-medium">Legal Documentation</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Terms of Use
            </h1>
            <p className="text-emerald-100 text-xl lg:text-2xl leading-relaxed mb-8 font-light max-w-3xl">
              Welcome to Quore IT LLC. By accessing or using our website, services, or content, 
              you agree to be bound by these Terms of Use. Please read them carefully.
            </p>
            <div className="flex items-center gap-6 text-emerald-200">
              <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg">
                <Clock size={18} />
                <span className="text-base font-medium">Last Updated: September 30, 2025</span>
              </div>
            </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#386861]/10">
      {/* Hero Section - Updated to match Privacy Policy */}
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
              Welcome to Quore IT LLC. By accessing or using our website, services, or content, 
              you agree to be bound by these Terms of Use. Please read them carefully.
            </p>
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Introduction */}
      <section className="px-6 md:px-12 lg:px-32 py-20 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-white to-emerald-50 rounded-3xl p-10 shadow-2xl border border-emerald-100/50 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
            {/* Background Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-400/10 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/10 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-8 bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-full"></div>
=======
      {/* Rest of the page remains exactly the same */}
      {/* Introduction */}
      <section className="px-6 md:px-12 lg:px-32 py-20 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-white to-[#386861]/5 rounded-3xl p-10 shadow-2xl border border-[#386861]/10 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
            {/* Background Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#386861]/10 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#386861]/10 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-8 bg-gradient-to-b from-[#386861] to-[#386861] rounded-full"></div>
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
                <h3 className="text-2xl font-bold text-gray-800">Important Notice</h3>
              </div>
              <p className="text-gray-700 text-xl leading-relaxed font-medium pl-11">
                If you do not agree to these Terms, you should not use our website or services. 
                These terms govern your access to and use of Quore IT's website and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Accordion */}
      <section className="px-6 md:px-12 lg:px-32 py-20 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
=======
            <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 to-[#386861] bg-clip-text text-transparent">
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
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
                {/* Gradient Border Effect */}
<<<<<<< HEAD
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
=======
                <div className="absolute inset-0 bg-gradient-to-r from-[#386861]/5 to-[#386861]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
                
                <div className="relative z-10">
                  {/* Question */}
                  <button
                    onClick={() => toggleItem(index)}
<<<<<<< HEAD
                    className="w-full flex items-center justify-between p-10 text-left group-hover:bg-gradient-to-r from-gray-50/50 to-emerald-50/30 transition-all duration-500 rounded-3xl"
                  >
                    <div className="flex items-center gap-8">
                      <div className="relative">
                        <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/20 rounded-2xl p-5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 border border-emerald-200/50">
                          {item.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
=======
                    className="w-full flex items-center justify-between p-10 text-left group-hover:bg-gradient-to-r from-gray-50/50 to-[#386861]/5 transition-all duration-500 rounded-3xl"
                  >
                    <div className="flex items-center gap-8">
                      <div className="relative">
                        <div className="bg-gradient-to-br from-[#386861]/10 to-[#386861]/20 rounded-2xl p-5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 border border-[#386861]/20">
                          {item.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#386861] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
                          {item.id}
                        </div>
                      </div>
                      <div>
<<<<<<< HEAD
                        <span className="text-sm font-bold text-emerald-600 mb-3 block tracking-wider uppercase">
                          Section {item.id}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-emerald-700 transition-colors duration-300">
=======
                        <h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-[#386861] transition-colors duration-300">
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
                          {item.title}
                        </h3>
                      </div>
                    </div>
<<<<<<< HEAD
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 rounded-2xl flex items-center justify-center flex-shrink-0 ml-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-180">
=======
                    <div className="w-14 h-14 bg-gradient-to-br from-[#386861] to-[#386861] hover:from-[#386861] hover:to-[#386861] rounded-2xl flex items-center justify-center flex-shrink-0 ml-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-180">
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
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
<<<<<<< HEAD
                            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-3 flex-shrink-0 shadow-lg"></div>
=======
                            <div className="w-3 h-3 bg-gradient-to-r from-[#386861] to-[#386861] rounded-full mt-3 flex-shrink-0 shadow-lg"></div>
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
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

      {/* Candidate Disclaimer Section */}
<<<<<<< HEAD
      <section className="px-6 md:px-12 lg:px-32 py-24 bg-gradient-to-br from-slate-900 via-[#0E1F1C] to-emerald-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
=======
      <section className="px-6 md:px-12 lg:px-32 py-24 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-transparent to-gray-100/50"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-gray-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
        </div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-4xl p-12 md:p-16 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-6 mb-12">
                <div className="bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-3xl p-4 backdrop-blur-sm border border-white/30 shadow-2xl">
                  <AlertCircle className="text-white" size={36} />
                </div>
                <div>
                  <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-3">
                    Candidate Disclaimer
                  </h2>
                  <p className="text-cyan-100 text-xl font-light leading-relaxed">
=======
            <div className="bg-white rounded-4xl p-12 md:p-16 shadow-2xl border border-gray-200 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-6 mb-12">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-4 border border-gray-300 shadow-2xl">
                  <AlertCircle className="text-white" size={36} />
                </div>
                <div>
                  <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-3">
                    Candidate Disclaimer
                  </h2>
                  <p className="text-gray-600 text-xl font-light leading-relaxed">
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
                    Important information for job applicants and candidates
                  </p>
                </div>
              </div>
              
<<<<<<< HEAD
              <p className="text-cyan-100 mb-14 text-xl font-medium leading-relaxed max-w-4xl bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
=======
              <p className="text-gray-700 mb-14 text-xl font-medium leading-relaxed max-w-4xl bg-gray-50 p-6 rounded-2xl border border-gray-200">
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
                By submitting your application, resume, or any related information to Quore IT LLC, 
                you acknowledge and agree to the following terms and conditions:
              </p>

              {/* 6-Card Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {candidateDisclaimer.map((item, index) => (
                  <div 
                    key={index} 
<<<<<<< HEAD
                    className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-500 group hover:scale-105 hover:shadow-2xl relative overflow-hidden"
                  >
                    {/* Card Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
=======
                    className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden"
                  >
                    {/* Card Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
                    
                    <div className="relative z-10">
                      {/* Number Badge */}
                      <div className="flex items-center justify-between mb-6">
<<<<<<< HEAD
                        <div className="bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-500">
                          {item.icon}
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg border border-white/30">
=======
                        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-500">
                          {item.icon}
                        </div>
                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-lg border border-gray-300">
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
                          {index + 1}
                        </div>
                      </div>
                      
<<<<<<< HEAD
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-cyan-100 leading-relaxed text-lg font-medium">
=======
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
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
<<<<<<< HEAD
      <section className="px-6 md:px-12 lg:px-32 py-24 bg-gradient-to-br from-white via-gray-50 to-emerald-50/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
=======
      <section className="px-6 md:px-12 lg:px-32 py-24 bg-gradient-to-br from-white via-gray-50 to-[#386861]/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 to-[#386861] bg-clip-text text-transparent">
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
            Questions About These Terms?
          </h2>
          <p className="text-gray-600 mb-12 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Our legal team is here to help you understand our terms and conditions. 
            Don't hesitate to reach out with any questions or concerns.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/80 hover:shadow-3xl transition-all duration-500 group hover:scale-105">
<<<<<<< HEAD
              <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-500">
                <Mail className="text-emerald-600" size={32} />
=======
              <div className="bg-gradient-to-br from-[#386861]/10 to-[#386861]/10 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-500">
                <Mail className="text-[#386861]" size={32} />
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <a
                href="mailto:contactus@quoreit.com"
<<<<<<< HEAD
                className="text-emerald-600 text-lg font-semibold hover:text-emerald-700 transition-colors duration-300 block"
=======
                className="text-[#386861] text-lg font-semibold hover:text-[#386861] transition-colors duration-300 block"
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
              >
                contactus@quoreit.com
              </a>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/80 hover:shadow-3xl transition-all duration-500 group hover:scale-105">
<<<<<<< HEAD
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-500">
                <Phone className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-cyan-600 text-lg font-semibold">
=======
              <div className="bg-gradient-to-br from-[#386861]/10 to-[#386861]/10 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-500">
                <Phone className="text-[#386861]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-[#386861] text-lg font-semibold">
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
                +1 (555) 123-4567
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/80 hover:shadow-3xl transition-all duration-500 group hover:scale-105">
<<<<<<< HEAD
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-500">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Response Time</h3>
              <p className="text-blue-600 text-lg font-semibold">
=======
              <div className="bg-gradient-to-br from-[#386861]/10 to-[#386861]/10 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-500">
                <Clock className="text-[#386861]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Response Time</h3>
              <p className="text-[#386861] text-lg font-semibold">
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
                24-48 Hours
              </p>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Footer Note */}
      <section className="px-6 md:px-12 lg:px-32 py-12 bg-gradient-to-r from-gray-900 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-emerald-100 text-lg font-medium">
            © 2025 Quore IT LLC. All rights reserved. These terms are effective as of the date posted above.
          </p>
        </div>
      </section>
=======
      
>>>>>>> fc75289b3f46f1c42a750e757e47137214cec763
    </div>
  );
};

export default TermsOfUse;