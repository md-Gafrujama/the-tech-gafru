"use client";

import React, { useState, useEffect } from "react";
import {
  Home,
  CheckCircle2,
  Calendar,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  ExternalLink,
  Search,
  Filter,
  Star,
  Users,
  DollarSign,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Employeedisciplinary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [filterBy, setFilterBy] = useState("Reviews");
  const [sortBy, setSortBy] = useState("Featured");
  const [itemsPerPage, setItemsPerPage] = useState("10 per page");
  const [expandedSections, setExpandedSections] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [openItems, setOpenItems] = useState({});
  const [openNested, setOpenNested] = useState(null);
  const [tableOfContents, setTableOfContents] = useState([
    {
      id: "what-is-disciplinary-action",
      title: "What is disciplinary action (and why it matters)",
      active: false,
    },
    {
      id: "when-to-use-disciplinary-action",
      title: "When to use disciplinary action and when not to",
      active: false,
    },
    {
      id: "when-disciplinary-action-typically-applies",
      title: "When disciplinary action typically applies",
      active: false,
    },
    {
      id: "when-it’s-best-to-hold-off",
      title: "When it’s best to hold off",
      active: false,
    },
    {
      id: "disciplinary-models-and-sanctions",
      title: "Disciplinary models and sanctions",
      active: false,
    },
    { id: "common-sanctions", title: "Common sanctions", active: false },
    {
      id: "before-you-start",
      title: "Before you start: What to have in place (and what to watch for)",
      active: false,
    },
    {
      id: "disciplinary-action-form-template",
      title: "Disciplinary action form template",
      active: false,
    },
    {
      id: "employee-disciplinary-process-steps",
      title: "Employee disciplinary process steps",
      active: false,
    },
    {
      id: "common-mistakes-to-avoid",
      title: "Common mistakes to avoid",
      active: false,
    },
    {
      id: "employee-disciplinary-action-FAQs",
      title: "Employee disciplinary action FAQs ",
      active: false,
    },
  ]);

  const toggleSection = (sectionKey, labelKey = null) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));

    if (labelKey) {
      setActiveSection((prev) => (prev === sectionKey ? null : sectionKey));
    }

    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const toggleNested = (key) => {
    setOpenNested(openNested === key ? null : key);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setTableOfContents((prev) =>
            prev.map((item) => ({
              ...item,
              active: item.id === sectionId,
            }))
          );
        }
      });
    };

    // Set initial active state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqData = [
    {
      question: "Who should be involved in the disciplinary action process?",
      answer:
        "The employee’s manager usually leads the disciplinary process from start to finish. HR may also be involved to offer guidance, document meetings, or handle investigations. Typically, you will see more HR or executive team involvement as discipline steps progress, especially if you require approval from upper management for each step.",
    },
    {
      question: "How long does an employer have to take disciplinary action?",
      answer:
        "Disciplinary action should occur as soon as reasonably possible following the behavior or incident. Generally, the earlier you see and correct the employee’s behavior, the less likely it is to become a bad habit. So, you should wait no longer than a day or two after the observed behavior to confront the employee.",
    },

    {
      question: "Can I fire an employee without a written warning?",
      answer:
        "Technically, yes, as long as your employee works in an at-will state. But just because you can doesn’t mean you should. Written warnings demonstrate the reasons that led to termination, the steps you took to correct or help the employee change course, and that the employee was aware of their misconduct. They are crucial documents that can help you in the event of a lawsuit. ",
    },
    {
      question:
        "What if the employee refused to sign the disciplinary action form?",
      answer:
        "You should document the refusal by writing “employee refused to sign” on the form. Add the date and have another manager present as a witness. Make sure the witness also signs the form. Then, give a copy of the form to the employee.",
    },
  ];

    const posts = [
 
  {
    title: 'How to Do Payroll Yourself: A Comprehensive Small Business Guide',
    date: 'May 13, 2025',
    image: '/images/hr-2.jpg',
  },
  {
    title: 'Best Human Resources (HR) Software for Small Businesses in 2025',
    date: 'May 5, 2025',
    image: '/images/hr-3.jpg',
  },
   {
    title: 'Ziprecruiter vs Indeed:2025 Comparison for Employees',
    date: 'July 3, 2025',
    image: '/images/hr-4.jpg',
  },
];
  // Content for each section - you can modify these
  const sectionContent = {
    counseling:
      "Managers or HR representatives hold one-on-one conversations with employees to clarify expectations and correct the infraction or behavior before it worsens. This is your early-stage intervention, informal yet documented, and is typically used to address minor issues, such as incomplete work or a missed deadline.",
    verbal:
      "A verbal warning is a formal part of the disciplinary process, even if it doesn’t involve written consequences yet. The process is similar to an informal counseling session. But, despite the name, managers or HR staff should document the conversation, get signatures from meeting participants, and add it to the employee’s personnel file.",
    written:
      "A written warning is similar to a verbal warning but more serious. Managers, HR staff, or both have a conversation with the employee about the continued infractions and provide clear and time-bound expectations for improvement. All parties sign the warning to acknowledge it and place it in the employee’s personnel file.",
    retraining:
      "Retraining can happen at any time in the disciplinary process and involves training the employee again on proper procedures, processes, or policies.",
    demotion:
      "A more severe disciplinary action in which managers or HR teams move the employee into a lower position, typically a step below their current role. This is usually a result of poor employee performance and usually involves the loss of title and pay.",
    privileges:
      "Loss of privileges involves taking away particular freedoms due to an employee’s behavior. The best are tied directly to the employee’s misconduct. For example, you may take a company credit card away from an employee who consistently turns in expense reports late. Or, you may revoke the employee’s flex time benefit if the employee fails to work the minimum number of hours each week.",
    agreements:
      "Last-chance agreements are contracts with employees outlining the steps employees must take to correct their behaviors or face termination. As the name suggests, this is typically the “last chance” employees have to save their jobs. Many collective bargaining agreements (CBAs) include last-chance agreements as a step in the disciplinary action procedure for union employees.",
    paycut:
      "Pay cuts result in a compensation reduction due to employee misconduct. A word of caution: although pay cuts are legal, watch the timing of when they go into effect. You should have a conversation with the employee outlining the reason for the pay cut, note when it will go into effect, and document it. This allows employees to agree or disagree to work at this new rate and avoid violations of federal and state labor laws, like the Fair Labor Standards Act (FLSA).",
    suspension:
      "Suspension involves removing the employee from the workplace for a period of time. Depending on the seriousness of the infraction, suspensions may be paid or unpaid. You can use suspensions during investigations to keep the workplace safe as you understand the facts of the incident.",
    termination:
      "As the last step of any disciplinary action process, termination is the permanent dismissal of the employee from the workplace. In some cases, the employee’s behavior may be severe enough that termination occurs immediately following the behavior.",
  };

  const AccordionItem = ({ title, section, children }) => (
    <div className="border-b border-gray-200">
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none hover:bg-gray-50"
      >
        <span className="text-gray-800 font-medium">{title}</span>
        <div className="w-7 h-7 bg-[#386861] rounded flex items-center justify-center text-white font-bold">
          {openSections[section] ? "−" : "+"}
        </div>
      </button>
      {openSections[section] && (
        <div className="pb-4 text-gray-700">{children}</div>
      )}
    </div>
  );

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Employee Disciplinary Action Guide + Form Template";

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareTitle)}`,
      "_blank"
    );
  };
  const NestedItem = ({ title, name, children }) => (
    <div className="border-b border-gray-100">
      <button
        onClick={() => toggleNested(name)}
        className="w-full flex justify-between items-center py-3 text-left focus:outline-none hover:bg-gray-50"
      >
        <span className="text-gray-700 font-medium">{title}</span>
        <div className="w-6 h-6 bg-[#386861] rounded flex items-center justify-center text-white font-bold">
          {openNested === name ? "−" : "+"}
        </div>
      </button>
      {openNested === name && <div className="pl-4 pr-2 pb-4">{children}</div>}
    </div>
  );

  return (
    <>
      <Head>
        <title>Employee Disciplinary Action Guide + Form Template</title>
        <meta
          name="description"
          content="Comprehensive guide to choosing the best payroll software for your business needs."
        />

        {/* Open Graph (Facebook + LinkedIn) */}
        <meta
          property="og:title"
          content="Best Payroll Software for Small Business"
        />
        <meta
          property="og:description"
          content="Comprehensive guide to choosing the best payroll software for your business needs."
        />
        <meta
          property="og:image"
          content="https://blogs.compare-bazaar.com/images/blog3.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta
          property="og:url"
          content="https://technology-advice.vercel.app/software-reviews/payroll"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Martechbiz" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Employee Disciplinary Action Guide + Form Template"
        />
        <meta
          name="twitter:description"
          content="Employee Disciplinary Action Guide + Form Template"
        />
        <meta
          name="twitter:image"
          content="https://blogs.compare-bazaar.com/images/blog3.webp"
        />

        <link
          rel="canonical"
          href="https://technology-advice.vercel.app/software-reviews/payroll"
        />
      </Head>

      <div className="min-h-screen bg-[#0E1F1C] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-white/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-white/5 rounded-full"></div>

        {/* Main content container */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Breadcrumb Navigation */}
          <nav
            className="pt-6 pb-8 sm:pt-8 sm:pb-12 lg:pt-12 lg:pb-16"
            aria-label="Breadcrumb"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg">
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors group"
                aria-label="Go to homepage"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Go to homepage"
              >
                <span>Home</span>
              </Link>
              <span className="text-white/60">›</span>
              <span className="text-white font-medium">
                Employee Disciplinary Action Guide + Form Template
              </span>
            </div>
          </nav>

          {/* Main Heading */}
          <div className="max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16">
              Employee Disciplinary Action
              <span className="block mt-2 sm:mt-4">Guide + Form Template</span>
             
            </h1>
          </div>

          

          {/* Disclaimer Section */}
          <div className="max-w-4xl xl:max-w-5xl">
            <div className="flex items-start space-x-3 sm:space-x-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-400 flex-shrink-0 mt-0.5 sm:mt-1" />
              <div className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
                <p>
                  <span className="font-semibold text-white">
                    Martechbiz
                  </span>{" "}
                  is able to offer our services for free because some vendors
                  may pay us for web traffic or other sales opportunities. Our
                  mission is to help technology buyers make better purchasing
                  decisions, so we provide you with information for all vendors
                  — even those that don't pay us.
                </p>
              </div>
            </div>
          </div>

          {/* Publication Date */}
          
        </div>
      </div>

      {/* Table of Contents - Left Sidebar */}

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents - Left Sidebar */}
            <div className="lg:w-80 lg:sticky lg:top-24 lg:self-start">
              <div
                className="bg-white rounded-4xl shadow-sm border border-gray-200 p-6"
                style={{ scrollBehavior: "smooth" }}
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Table of contents
                </h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className={`block py-2 px-3 rounded-md text-sm transition-colors duration-200 ${
                        item.active
                          ? "bg-[#386861] text-white border-l-4 border-[#386861] font-medium"
                          : "text-gray-600 hover:text-black hover:bg-gray-100"
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                {/* Share Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Share this article
                  </h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={shareOnFacebook}
                      className="w-12 h-12 rounded-full bg-[#386861]  text-white flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                      aria-label="Share on Facebook"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button
                      onClick={shareOnLinkedIn}
                      className="w-12 h-12 rounded-full bg-[#386861]  text-white flex items-center justify-center hover:bg-[#386861]  transition-colors duration-200"
                      aria-label="Share on LinkedIn"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                    <button
                      onClick={shareOnTwitter}
                      className="w-12 h-12 rounded-full bg-[#386861]  text-white flex items-center justify-center hover:bg-[#386861]  transition-colors duration-200"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}

            <div className="flex-1 max-w-4xl">
              <p className="text-sm text-gray-700 italic leading-relaxed">
                <span className="font-semibold not-italic">Disclaimer:</span>{" "}
                This article is not intended as legal advice. Please seek
                counsel from an employment law attorney to understand the
                requirements for your specific employee disciplinary action
                situation.
              </p>
              <div className="bg-gray-50 border border-gray-300 rounded-2xl p-6 mb-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Key takeaways
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-[#386861] rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      The employee disciplinary action process is the guideline
                      or policy businesses follow in the event of unwanted
                      employee behaviors or policy violations.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-[#386861] rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Most companies follow a progressive disciplinary process
                      with the following steps: counseling, verbal warning,
                      written warning, final warning, and termination.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-[#386861] rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Each step of the disciplinary action process requires
                      conversations with the employee and thorough
                      documentation, which you can manage with the recordkeeping
                      capabilities of HR software.
                    </p>
                  </div>
                </div>
              </div>

              {/* Featured Partners Section */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Featured partners
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>Advertisement</span>
                    <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center">
                      <span className="text-white  font-bold">i</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 flex-shrink-0">
                          <Image
                            src="/images/keka.png"
                            alt="Keka HR Logo"
                            width={64}
                            height={64}
                            className="w-full h-full object-contain"
                            priority={false}
                          />
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          Keka HR
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-[#386861] hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">Good For</div>
                      <div className="font-medium text-gray-900">
                        Medium sized companies
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Core Features</div>
                      <div className="font-medium text-gray-900">
                        360 Degree Feedback, Applicant Tracking, Benefits
                        Administration, and 10 more
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Integrations</div>
                      <div className="font-medium text-gray-900">
                        QuickBooks Online, Tally
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg mt-4 p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 flex-shrink-0">
                          <Image
                            src="/images/monitask.png"
                            alt="Monitask Logo"
                            width={64}
                            height={64}
                            className="w-full h-full object-contain"
                            priority={false}
                          />
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          Monitask
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-[#386861] hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">Good For</div>
                      <div className="font-medium text-gray-900">
                        Any Company Size
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Core Features</div>
                      <div className="font-medium text-gray-900">
                        Employee Shift Scheduling, Self-Service Portal,
                        Time/Attendance Management, and 1 more
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Integrations</div>
                      <div className="font-medium text-gray-900">
                        Asana, Basecamp, ClickUp, and 10 more
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8 sm:mb-12 mt-6">
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                  Disciplinary action isn't just a compliance formality. When
                  done right, it reinforces expectations, supports individual
                  accountability, and helps the entire team operate more
                  effectively. When ignored or poorly handled, unresolved
                  problems tend to grow, workplace dynamics become strained, and
                  employees start questioning whether policies really apply to
                  everyone.
                </p>

                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                  That's why having a structured disciplinary action process is
                  critical. It allows you to address issues fairly and
                  consistently while protecting both the organization and the
                  employee.
                </p>

                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  In this guide, I'll walk you through how to manage the process
                  with clarity, documentation, and practical steps you can use.
                  It also includes disciplinary action examples and a form
                  template you can download for free.
                </p>
              </div>
              <section id="what-is-disciplinary-action">
                {/* What is disciplinary action section */}
                <div className="mb-8 sm:mb-12">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                    What is disciplinary action (and why it matters)
                  </h1>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                    Disciplinary action is a formal response to workplace
                    behavior that violates company policies or disrupts business
                    operations. At its best, it's a structured way to step in
                    early to help employees course-correct before a small issue
                    turns into a serious one.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                    A strong disciplinary action helps:
                  </p>

                  <ul className="list-disc pl-6 sm:pl-8 mb-6 space-y-2">
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      Reinforce accountability and trust across the team
                    </li>
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      Provide employees a fair chance to improve
                    </li>
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      Build documentation that protects against legal claims
                    </li>
                  </ul>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                    Most employers use a step-based approach that usually starts
                    with an investigation and a one-on-one meeting or coaching
                    conversation. It progresses to verbal or written warnings,
                    and may end in termination if things don't improve.
                  </p>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                    However, the point isn't to punish an employee for slipping
                    up. It's about showing them how to get it right, with
                    clarity, consistency, and a plan that supports both
                    performance and fairness.
                  </p>
                </div>
              </section>

              {/* When to use disciplinary action section */}
              <div className="mb-8 sm:mb-12">
                <section id="when-to-use-disciplinary-action">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                    When to use disciplinary action and when not to
                  </h1>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
                    It may be easy to reach for an employee disciplinary action
                    form when someone misses the mark, but not every misstep
                    warrants formal discipline. Sometimes what looks like
                    misconduct is really a training gap, poor onboarding,
                    unclear expectations, or a miscommunication.
                  </p>
                </section>
                <section id="when-disciplinary-action-typically-applies">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    When disciplinary action typically applies
                  </h2>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                    While certainly not exhaustive, the list below includes some
                    of the most common disciplinary action examples:
                  </p>

                  <ul className="list-disc pl-6 sm:pl-8 mb-6 space-y-2">
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      <strong>General misconduct:</strong> Employee behavior
                      that doesn't intentionally mean to harm others or the
                      company, such as forgetting to lock the office door at the
                      end of the day.
                    </li>
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      <strong>Workplace violence or threats.*</strong>
                    </li>
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      <strong>
                        Weapons or prohibited substances in the workplace.*
                      </strong>
                    </li>
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      <strong>Sexual harassment.*</strong>
                    </li>
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      <strong>Theft of company or employee property.*</strong>
                    </li>
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      <strong>Time theft:</strong> Purposefully changing or
                      misrepresenting time clock data for more take-home pay.
                    </li>
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      <strong>Excessive attendance violations.</strong>
                    </li>
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      <strong>Discrimination.*</strong>
                    </li>
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      <strong>Falsifying documentation.</strong>
                    </li>
                  </ul>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg italic mb-8">
                    *Some of these examples may warrant immediate termination
                    depending on their severity.
                  </p>
                </section>
                {/* Example Box */}
                <div className="border-2 border-[#386861] rounded-3xl p-4 sm:p-6 bg-green-50 mb-8">
                  <div className="flex items-start mb-4">
                    <div className="w-4 h-4 bg-[#386861] rounded-full mt-1 mr-3 flex-shrink-0"></div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      An example:
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                    Let's say you have a call center business with a company
                    policy requiring employees to shut down their computers at
                    the end of the day. This is important because the computers
                    include sensitive, HIPAA-protected data from clients in the
                    medical industry and a third-party maintenance crew comes in
                    every night after hours to clean.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                    If you walk in one morning and notice that one of your
                    employees did not turn off their computer after being
                    trained on the policy, you may need to start the employee
                    disciplinary process with a verbal warning.
                  </p>
                </div>
              </div>

              <section id="when-it’s-best-to-hold-off">
                {/* When it's best to hold off section */}
                <div className="mb-8 sm:mb-12">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                    When it's best to hold off
                  </h1>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                    There are times when disciplinary action may not be the
                    right starting point, or at least not yet. These include:
                  </p>

                  <ul className="list-disc pl-6 sm:pl-8 mb-6 space-y-2">
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      When the issue stems from unclear expectations, outdated
                      SOPs, or poor communication.
                    </li>
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      When the employee hasn't received proper training.
                    </li>
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      When the behavior may be linked to a disability, religious
                      need, caregiving duty, or medical condition, and
                      accommodations haven't been addressed.
                    </li>
                    <li className="text-gray-700 text-sm sm:text-base lg:text-lg">
                      When it's a first-time offense that appears accidental,
                      not willful.
                    </li>
                  </ul>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-2">
                    Similarly, performance issues, like failing to meet{" "}
                    <Link
                      href="#"
                      className="text-[#386861] hover:text-green-800 underline"
                    >
                      key performance indicators (KPIs)
                    </Link>{" "}
                    or{" "}
                    <Link
                      href="#"
                      className="text-[#386861] hover:text-green-800 underline"
                    >
                      objectives and key results (OKRs)
                    </Link>
                    , don't always qualify for disciplinary action. Unless you
                    can prove it's intentional, addressing poor performance
                    through focused manager-employee one-on-ones, further
                    training, or{" "}
                    <Link
                      href="#"
                      className="text-[#386861] hover:text-green-800 underline"
                    >
                      performance improvement plans (PIPs)
                    </Link>{" "}
                    can be more effective. You may even learn their poor
                    performance results from work practices that contribute to{" "}
                    <Link
                      href="#"
                      className="text-[#386861] hover:text-green-800 underline"
                    >
                      employee burnout
                    </Link>{" "}
                    or{" "}
                    <Link
                      href="#"
                      className="text-[#386861] hover:text-green-800 underline"
                    >
                      staff unhappiness
                    </Link>
                    .
                  </p>

                  {/* Example Box */}
                  <div className="border-2 border-[#386861] rounded-3xl p-4 sm:p-6 bg-green-50 mb-8">
                    <div className="flex items-start mb-4">
                      <div className="w-4 h-4 bg-[#386861] rounded-full mt-1 mr-3 flex-shrink-0"></div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">
                        An example:
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Let's say you're a foreperson at a manufacturing plant,
                      and your team's goal is to assemble 50 products a day.
                      Each of your team members must first fabricate several
                      smaller parts to produce the larger product.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mt-4">
                      One of your team members consistently fails to meet this
                      daily goal compared to the rest of their teammates.
                      Instead of immediately disciplining them for their failure
                      to meet objectives, consider the resources you can provide
                      the employee to get them to where they need to be, such as
                      extra training or more frequent check-ins to address
                      concerns or questions.
                    </p>
                  </div>
                </div>
              </section>
              <section id="disciplinary-models-and-sanctions">
                {/* Disciplinary models and sanctions section */}
                <div className="mb-8 sm:mb-12">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                    Disciplinary models and sanctions
                  </h1>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                    Most employee disciplinary action plans take one of three
                    models: positive, progressive, or hybrid, which is a
                    combination of both. You should choose a model and stick to
                    it. Inconsistency in how policies or rules are followed,
                    especially between departments, is where most HR headaches
                    begin.
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      • Positive discipline:
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                      Positive discipline highlights the employee's positive
                      behaviors during disciplinary conversations instead of
                      reprimanding them. Managers balance this with{" "}
                      <Link
                        href="#"
                        className="text-[#386861] hover:text-green-700 underline"
                      >
                        employee feedback
                      </Link>{" "}
                      and constructive criticism to change behaviors. Employees
                      also take part in selecting or creating any corrective
                      actions. If their behavior improves, employees receive
                      positive reinforcement through recognition and rewards.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg italic mb-6">
                      <strong>Best for:</strong> Coaching cultures, flat
                      organizations, or teams where psychological safety is a
                      top priority.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      • Progressive discipline:
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                      This is the most common model. It has a rigid set of steps
                      that HR departments and managers follow, where
                      disciplinary actions become more severe as employees
                      continue the unwanted behavior.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg italic">
                      <strong>Best for:</strong> Large teams, compliance-driven
                      work environments, and roles with high liability.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      • Hybrid model:
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                      Combining positive and progressive disciplinary techniques
                      allows employers to take a more nuanced approach to
                      employee misconduct or behavioral issues. For example,
                      positive discipline can inform disciplinary conversations
                      and strategies for recognizing employees as they improve.
                      Meanwhile, progressive discipline tactics ensure
                      discipline remains fair and consistent across employees in
                      the same or similar situations in the workplace.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg italic">
                      <strong>Best for:</strong> Companies with mixed workforces
                      or evolving needs.
                    </p>
                  </div>
                </div>
              </section>
              <section id="common-sanctions">
                <div className="mb-12">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Common sanctions
                  </h1>

                  <p className="text-gray-700 text-lg mb-6">
                    There are various types of disciplinary sanctions or
                    employee corrective actions, and these should scale based on
                    the severity of the issue. The goal is to apply a response
                    that fits the situation, not underreacting to serious
                    problems or overcorrecting minor ones.
                  </p>

                  <p className="text-gray-700 text-lg mb-8">
                    Whatever action you take, document the rationale behind it.
                    Clear documentation helps ensure consistency, transparency,
                    and legal defensibility.
                  </p>

                  <p className="text-gray-700 text-lg mb-8">
                    Below are some of the most common disciplinary sanctions:*
                  </p>

                  <div className="space-y-0 text-lg">
                    <AccordionItem
                      title="Counseling or coaching"
                      section="counseling"
                    >
                      {sectionContent.counseling}
                    </AccordionItem>

                    <AccordionItem title="Verbal warning" section="verbal">
                      {sectionContent.verbal}
                    </AccordionItem>

                    <AccordionItem title="Written warning" section="written">
                      {sectionContent.written}
                    </AccordionItem>

                    <AccordionItem title="Retraining" section="retraining">
                      {sectionContent.retraining}
                    </AccordionItem>

                    <AccordionItem title="Demotion" section="demotion">
                      {sectionContent.demotion}
                    </AccordionItem>

                    <AccordionItem
                      title="Loss of privileges"
                      section="privileges"
                    >
                      {sectionContent.privileges}
                    </AccordionItem>
                    <AccordionItem
                      title="Last-chance agreements"
                      section="agreements"
                    >
                      {sectionContent.agreements}
                    </AccordionItem>
                    <AccordionItem title="Pay cut" section="paycut">
                      {sectionContent.paycut}
                    </AccordionItem>
                    <AccordionItem title="Suspension" section="suspension">
                      {sectionContent.suspension}
                    </AccordionItem>
                    <AccordionItem title="Termination" section="termination">
                      {sectionContent.termination}
                    </AccordionItem>
                  </div>
                </div>
              </section>
              {/* Note Section */}
              <div className="mb-12">
                <p className="text-gray-600 italic text-sm mb-8">
                  *Note: Be careful if you have an employment contract with the
                  employee or a collective bargaining agreement (CBA). You may
                  be unable to take particular disciplinary action under these
                  contracts.
                </p>
              </div>

              {/* Before You Start Section */}
              <section id="before-you-start">
                <div className="mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Before you start: What to have in place (and what to watch
                    for)
                  </h2>

                  <p className="text-gray-700 text-lg mb-6">
                    Don't move into a formal discipline process without making
                    sure your foundation is solid. You need a process that
                    protects the employee's rights and the company's interests,
                    in addition to manager training and legal and{" "}
                    <Link href="#" className="text-[#386861] underline">
                      HR compliance
                    </Link>{" "}
                    checks.
                  </p>

                  <p className="text-gray-700 text-lg mb-8">
                    Here's what to put in place and what to verify.
                  </p>

                  <div className="space-y-0 text-lg">
                    {/* Legal Compliance */}
                    <AccordionItem title="Legal compliance" section="legal">
                      <p className="text-gray-700 text-lg mb-4">
                        Most states, except for Montana, are at-will. At-will
                        means you can fire an employee with or without reason,
                        as long as it is not illegal. Disciplinary action is the
                        same unless you have a CBA or employment contract that
                        prevents you from making specific steps.
                        <br />
                        <br />
                        However, you should be familiar with the laws of the
                        states where your employees work. For example, some
                        states prevent you from disciplining or firing employees
                        for refusing to violate state law. Some examples include
                        disciplining an employee for filing for workers'
                        compensation or refusing to come to work because of jury
                        duty obligations.
                      </p>

                      <div className="p-4 border border-[#386861]rounded-md bg-green-50">
                        <h3 className="text-[#386861] text-xl font-bold mb-2">
                          💡 Federal laws on disciplinary action
                        </h3>
                        <p className="text-lg text-gray-700 mb-3">
                          Federal laws do not prevent you from taking employee
                          disciplinary action. However, you cannot discipline
                          employees for situations outlined by the following
                          laws.
                        </p>
                        <ul className="list-disc ml-6 text-lg text-gray-700 space-y-2">
                          <li>
                            <strong>Anti-discrimination laws:</strong> Laws that
                            protect fairness and equality in hiring, employment
                            decisions, and benefits access. Examples include
                            Title VII of the Civil Rights Act, ADA, FMLA, PWFA,
                            ADEA, GINA, and USERRA.
                          </li>
                          <li>
                            <strong>Whistleblowing laws:</strong> Laws that
                            protect workers from adverse employment actions
                            should they notify regulatory agencies of workplace
                            health or safety violations, discriminatory
                            practices, or the use of lie detectors. The OSH Act
                            of 1970 is one example.
                          </li>
                          <li>
                            <strong>Unionizing:</strong> The{" "}
                            <Link
                              href="https://www.nlrb.gov"
                              className="text-[#386861] underline"
                              target="_blank"
                            >
                              National Labor Relations Act (NLRA)
                            </Link>{" "}
                            protects employees who collectively bargain or
                            support a union from adverse employment action.
                          </li>
                        </ul>
                        <p className="text-sm text-gray-500 mt-3 italic">
                          Note: Some states include equivalent laws to the
                          above. As a rule, always follow the law that provides
                          more employee rights and protections.
                        </p>
                      </div>
                    </AccordionItem>

                    <AccordionItem
                      title="A clear, written policy"
                      section="policy"
                    >
                      <p className="text-lg text-gray-700 mb-4">
                        You will need to align with all relevant stakeholders
                        when creating your disciplinary action policy. Because
                        it affects employees' tenure with the company, your
                        executive teams must agree on the policy’s approach,
                        scope, and list of progressive discipline steps. Once
                        finalized, you should add this policy to your{" "}
                        <Link href="#" className="text-[#386861] underline">
                          employee handbook
                        </Link>{" "}
                        for easy access.
                      </p>

                      <p className="text-lg text-gray-700 mb-4">
                        At a minimum, your policy should include the following
                        elements:
                      </p>

                      <div className="  divide-y">
                        <NestedItem
                          title="Employment relationship statement"
                          name="employment"
                        >
                          <p className="text-lg text-gray-700">
                            These statements clarify the relationship between
                            you and your employee. For example, if your employee
                            works in an at-will state, you should note that
                            their employment is at-will, and either you or the
                            employee can terminate the relationship at any time,
                            with or without reason. Or, note the terms of their
                            employment relationship based on any contracts or
                            CBAs.
                          </p>
                        </NestedItem>

                        <NestedItem
                          title="Disciplinary action steps"
                          name="steps"
                        >
                          <p className="text-lg text-gray-700">
                            These are the stages of your disciplinary action
                            process, starting from the least severe to the most
                            severe consequences. Each step should include the
                            manager’s, HR staff’s, and employee’s
                            responsibilities and include examples of behaviors
                            that might warrant starting at a particular step.
                          </p>
                        </NestedItem>

                        <NestedItem
                          title="Investigation process"
                          name="investigation"
                        >
                          <p className="text-lg text-gray-700">
                            You may need to investigate incidents, behaviors,
                            offenses, or complaints before taking disciplinary
                            action to understand the best course of action.
                            Detail this process, including who is involved in
                            the investigation and response turnaround times.
                          </p>
                        </NestedItem>

                        <NestedItem title="Complaint process" name="complaint">
                          <p className="text-lg text-gray-700">
                            This details how employees can report a workplace
                            concern or complaint to management. Like with the
                            investigation process, explain who employees should
                            contact, what they need to provide, and response
                            turnaround times. You should also include language
                            noting that employees can report these concerns
                            without fear of retaliation.
                          </p>
                        </NestedItem>

                        <NestedItem title="Documentation process" name="docs">
                          <p className="text-lg text-gray-700 mb-2">
                            With each step, make clear what managers or HR staff
                            need to document for the worker’s employment file.
                            For example, typical documentation practices
                            include:
                          </p>
                          <ul className="list-disc ml-6 text-lg text-gray-800 space-y-2">
                            <li>Basic employee information</li>
                            <li>Description of the infraction</li>
                            <li>Clear, relevant, and time-bound goals</li>
                            <li>Resources to help the employee</li>
                            <li>Next steps in the disciplinary process</li>
                            <li>Signatures of managers, employees</li>
                            <li>Feedback section for employee disagreement</li>
                          </ul>
                        </NestedItem>

                        <NestedItem
                          title="Right to skip or combine steps"
                          name="skip"
                        >
                          <p className="text-lg text-gray-700">
                            Although you might indicate what offenses warrant
                            starting at various steps in the disciplinary
                            process, it’s impossible to predict every situation
                            or behavior. To show this, include a statement that
                            you hold the right to skip or combine steps in the
                            disciplinary process based on the seriousness of the
                            infraction.
                          </p>
                        </NestedItem>

                        <NestedItem
                          title="Termination process"
                          name="termination"
                        >
                          <p className="text-lg text-gray-700">
                            Explain the termination process should the
                            employee’s behavior result in dismissal, including
                            who approves the decision. You should also disclose
                            relevant offboarding processes, such as benefits
                            termination, last check procedures,
                            <Link href="#" className="text-[#386861] underline">
                              {" "}
                              severance pay
                            </Link>
                            , filing for unemployment, and returning company
                            equipment.
                          </p>
                        </NestedItem>

                        <NestedItem title="Appeal process" name="appeal">
                          <p className="text-lg text-gray-700">
                            Following any disciplinary action, detail how long
                            employees have to submit an appeal. The appeal
                            process should outline what should be included in
                            the appeal, how long after the disciplinary action
                            they have to submit any appeal (usually five
                            business days), who should receive the appeal, and
                            the response turnaround time.
                          </p>
                        </NestedItem>
                      </div>
                    </AccordionItem>
                  </div>
                </div>

                {/* Video Section */}
                

                {/* Additional Sections */}
                <div className="space-y-0 text-lg">
                  {/* HR vs manager roles */}
                  <AccordionItem title="HR vs manager roles" section="hr">
                    <p className="text-lg text-gray-700 mb-4">
                      Clarify who’s responsible for what. Generally:
                    </p>
                    <ul className="list-disc ml-6 text-lg text-gray-800 space-y-1">
                      <li>
                        <strong>Managers</strong> initiate and document early
                        steps (e.g., coaching, verbal warnings)
                      </li>
                      <li>
                        <strong>HR</strong> reviews written warnings, ensures
                        compliance, and leads serious actions (e.g.,
                        suspensions, terminations)
                      </li>
                    </ul>
                  </AccordionItem>

                  {/* Manager training */}
                  <AccordionItem title="Manager training" section="training">
                    <p className="text-lg text-gray-700 mb-4">
                      Using an online platform to train managers and even HR
                      teams is a good strategy.{" "}
                      <Link
                        href="https://www.coassemble.com"
                        target="_blank"
                        className="text-[#386861] underline"
                      >
                        Learning management systems (LMSs)
                      </Link>
                      , like Coassemble, allow you to create courses for
                      teaching leaders about the disciplinary process, including
                      how to complete the necessary documentation.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      As a result, you can prepare your managers to handle
                      situations, improve policy consistency, and foster more
                      effective and constructive conversations with direct
                      reports.
                    </p>

                    <div className="rounded-md overflow-hidden shadow-md">
                      <Image
                        src="/images/action-4.jpg"
                        alt="Manager training preview showing Coassemble platform"
                        width={800}
                        height={400}
                        className="object-cover w-full"
                      />
                    </div>

                    <p className="text-sm text-gray-500 mt-2">
                      Coassemble offers a disciplinary action template to train
                      your people managers on effective disciplinary techniques
                      and policy processes.{" "}
                      <span className="text-[#386861]">Source: Coassemble</span>
                    </p>

                    <div className="mt-4 text-center">
                      <Link
                        href="https://coassemble.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#386861] hover:bg-green-500 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200"
                      >
                        Visit Coassemble ↗
                      </Link>
                    </div>
                  </AccordionItem>
                </div>
              </section>
              <section id="disciplinary-action-form-template">
                {/* Form Template Section */}
                
              </section>
              <section id="employee-disciplinary-process-steps">
                {/* Process Steps Section */}
                <div className="mt-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Employee disciplinary process steps
                  </h2>

                  <p className="text-gray-700 text-lg mb-8">
                    Each step of the disciplinary process should be documented
                    and tied to specific policies. Here's a breakdown of what
                    each step typically involves:
                  </p>

                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Step 1: Identify the problem and investigate
                    </h3>

                    <p className="text-gray-700 text-lg mb-4">
                      Before taking any action, you need a clear, fact-based
                      understanding of the issue at hand. That's where a
                      workplace investigation comes in. Use it to determine what
                      happened, when the incident occurred, who was involved,
                      and whether any policies were violated.
                    </p>

                    <p className="text-gray-700 text-lg mb-4">
                      You should review and collect any relevant documentation,
                      such as attendance logs, performance records, emails, and
                      security footage. You should also get insights from
                      relevant company sources: talk to those involved and
                      gather written statements if needed. Your goal is to
                      confirm whether this was an isolated incident or part of a
                      pattern.
                    </p>

                    <p className="text-gray-700 text-lg mb-4">
                      If the incident or allegations are serious, such as sexual
                      harassment, you may need to place the accused on a
                      temporary suspension or leave of absence to look further.
                      The length of time varies, but it's reasonable to expect
                      you have outlined basic timelines.
                    </p>

                    <p className="text-gray-700 text-lg mb-4">
                      During this time, learn as much about the incident as you
                      can. Consulting with employment law attorneys is a
                      sub-optimal but sometimes necessary step at this stage.
                    </p>

                    <p className="text-gray-700 text-lg mb-4">
                      With evidence in hand, you will need to decide where to
                      start in your disciplinary action process. If the
                      investigation reveals that the employee's behavior was a
                      minor infraction, you may want to start from step one in
                      your progressive discipline process. However, if the
                      misconduct may mean you skip your usual steps and go
                      straight for termination.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Step 2: Have a one-on-one meeting
                    </h3>

                    <p className="text-gray-700 text-lg mb-4">
                      Most disciplinary action plans start with a one-on-one
                      meeting between the employee and their manager. Rather
                      than called counseling or coaching sessions, this informal
                      meeting is to give the manager a chance to address minor
                      issues early, before they turn into a serious problem.
                    </p>

                    <p className="text-gray-700 text-lg mb-4">
                      The goal is to inform employees of the unwanted behavior
                      and quickly course-correct. It is also about proactively
                      building the relationship by setting clear expectations
                      with your employees, or the workplace.
                    </p>

                    <p className="text-gray-700 text-lg mb-4">
                      These meetings should be a two-way conversation, not a
                      lecture, and should follow constructive feedback best
                      practices. They should also occur as soon as reasonably
                      possible after the incident so that the employee can
                      associate clear action plans with the feedback.
                    </p>

                    <p className="text-gray-700 text-lg mb-4">
                      Use this time to ask the employee questions and understand
                      the reasoning for their actions— you might even realize
                      your{" "}
                      <Link href="#" className="text-[#386861] underline">
                        implicit biases
                      </Link>{" "}
                      are clouding your judgment.
                    </p>

                    <p className="text-gray-700 text-lg mb-4">
                      For example, during a coaching conversation about
                      excessive tardiness, you might learn the employee's
                      frequent lateness resulted from a childcare issue. Action
                      are to work on this. When thinking challenges your prior
                      belief that all tardy employees are "lazy," with this
                      knowledge, you can work with the employee to help them get
                      to work on time, such as by highlighting your commuter
                      benefits or adjusting their start and end times.
                    </p>

                    <p className="text-gray-700 text-lg mb-4">
                      Although these initial conversations are more informal,
                      you should still document them, such as a quick note in
                      the employee's personnel file. Most HR software lets you
                      upload this documentation into employees' electronic
                      profiles. Other platforms, like Bob, let you schedule
                      impromptu or regular meetings and create agendas, which
                      help streamline and document disciplinary conversations
                      for future reference.
                    </p>
                  </div>

                  {/* Bob Software Screenshot */}
                  
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Step 3: Issue a formal warning
                  </h2>

                  <div className="space-y-4 text-lg text-gray-700">
                    <p>
                      The next step is issuing a formal warning if the
                      employee's unwanted behavior escalates after two to three
                      informal conversations. Formal warnings are official
                      records of the employee's infraction placed in their
                      personnel file.
                    </p>

                    <p>
                      Formal warnings consist of both a meeting with the
                      employee plus written documentation. Because this is the
                      first official record of disciplinary action, it's a good
                      idea to include a{" "}
                      <Link
                        href="#"
                        className="text-[#386861] hover:text-green-800 underline"
                      >
                        reliable witness
                      </Link>{" "}
                      in the meeting, with the manager and employee. Usually,
                      that's someone from the HR department, but it can also be
                      another manager or administrator willing to bear witness.
                    </p>

                    <p>The conversation should cover the following:</p>

                    <ul className="list-disc ml-6 text-lg space-y-1">
                      <li>
                        A detailed description of the offenses, including dates
                        and any supporting evidence (such as time cards,
                        handbook policies, videos, or emails).
                      </li>
                      <li>
                        An explanation of how this behavior affects the company
                        or coworkers.
                      </li>
                      <li>
                        The steps you have already taken to correct the
                        behavior.
                      </li>
                      <li>
                        Actionable and measurable objectives to fix the
                        behavior.
                      </li>
                      <li>
                        Resources to help the employee succeed, such as{" "}
                        <Link
                          href="#"
                          className="text-[#386861] hover:text-green-800 underline"
                        >
                          additional training
                        </Link>{" "}
                        or{" "}
                        <Link
                          href="#"
                          className="text-[#386861] hover:text-green-800 underline"
                        >
                          policy reviews
                        </Link>
                        .
                      </li>
                      <li>
                        Future disciplinary steps should the behavior continue.
                      </li>
                      <li>
                        Time for questions and feedback from the employee.
                      </li>
                      <li>Explanation of your appeal process.</li>
                    </ul>

                    <p>
                      Documentation of the warning should include these same
                      elements, plus an area for the manager, witness, and
                      employee to sign and date.
                    </p>

                    <p>
                      You should also add a refusal acknowledgment section if
                      the form should employees disagree with the warning.
                      Employees can sign here to acknowledge they received the
                      warning but disagree with it. You can also offer space for
                      employees to explain why they disagree.
                    </p>

                    <p>
                      Remember to provide ample time for the employee to dispute
                      or explain their side of the issue on you would during
                      regular manager-employee conversations. And you'd follow
                      up conversations with HR or the{" "}
                      <Link
                        href="#"
                        className="text-[#386861] hover:text-green-800 underline"
                      >
                        legal team
                      </Link>{" "}
                      to resolve.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-lg text-gray-700 mb-4">
                    Most disciplinary action plans require two to three formal
                    warnings before progressing to the next step. Some companies
                    also distinguish between verbal and written warnings, with
                    verbal warnings a less severe first step.
                  </p>

                  <p className="text-lg text-gray-700 mb-6">
                    Despite the name, verbal warnings should follow the same
                    process as written warnings, including thorough
                    documentation, business helping you in the event of a
                    lawsuit, employees can reference it to understand their
                    expectations going forward.
                  </p>

                  
                </div>

                {/* Step 4: Take last-chance actions */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Step 4: Take last-chance actions
                  </h2>

                  <div className="space-y-4 text-lg text-gray-700">
                    <p>
                      A{" "}
                      <Link
                        href="#"
                        className="text-[#386861] hover:text-green-800 underline"
                      >
                        last-chance action
                      </Link>{" "}
                      is the step in your{" "}
                      <Link
                        href="#"
                        className="text-[#386861] hover:text-green-800 underline"
                      >
                        disciplinary policy
                      </Link>{" "}
                      before termination. It occurs if the employee continues
                      exhibiting behavior or performance issues after prior
                      conversations and formal warnings.
                    </p>

                    <p>
                      Depending on your{" "}
                      <Link
                        href="#"
                        className="text-[#386861] hover:text-green-800 underline"
                      >
                        disciplinary action policy
                      </Link>
                      , what you decide to take as your last-chance action can
                      differ. Some of the most common include:
                    </p>

                    <ul className="list-disc ml-6 space-y-1">
                      <li>Final written warning</li>
                      <li>Paid or unpaid suspension</li>
                      <li>Loss of privileges</li>
                      <li>
                        Pay decrease or demotion (in line with{" "}
                        <Link
                          href="#"
                          className="text-[#386861] hover:text-green-800 underline"
                        >
                          state and federal laws
                        </Link>
                        )
                      </li>
                      <li>Last-chance agreement</li>
                    </ul>

                    <p>
                      Like{" "}
                      <Link
                        href="#"
                        className="text-[#386861]hover:text-green-800 underline"
                      >
                        formal warnings
                      </Link>
                      , document whatever last-chance action you take, including
                      what led to the decision. Hold a conversation with the
                      employee along with a{" "}
                      <Link
                        href="#"
                        className="text-[#386861] hover:text-green-800 underline"
                      >
                        reliable witness
                      </Link>
                      . Stress to the employee that this is their last chance to
                      improve and that future infractions could lead to
                      termination.
                    </p>
                  </div>
                </div>

                {/* Step 5: Recommend for termination */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Step 5: Recommend for termination
                  </h2>

                  <div className="space-y-4 text-lg text-gray-700">
                    <p>
                      Termination is the last step in your{" "}
                      <Link
                        href="#"
                        className="text-[#386861] hover:text-green-800 underline"
                      >
                        disciplinary process
                      </Link>
                      . It occurs if the employee continues the same offenses
                      after you've followed all other disciplinary steps and
                      provided ample resources and support to help the employee
                      improve.
                    </p>

                    <p>
                      Because termination comes with several legal consequences,
                      it's always wise to consult with your{" "}
                      <Link
                        href="#"
                        className="text-[#386861] hover:text-green-800 underline"
                      >
                        HR department
                      </Link>{" "}
                      or{" "}
                      <Link
                        href="#"
                        className="text-[#386861] hover:text-green-800 underline"
                      >
                        employment law attorney
                      </Link>{" "}
                      before you have the termination conversation with the
                      employee. If you have{" "}
                      <Link
                        href="#"
                        className="text-[#386861] hover:text-green-800 underline"
                      >
                        employment practices liability insurance (EPLI)
                      </Link>
                      , check if you have access to an{" "}
                      <Link
                        href="#"
                        className="text-[#386861] hover:text-green-800 underline"
                      >
                        employee hotline
                      </Link>{" "}
                      in the event of a case of wrongful termination is
                      warranted.
                    </p>

                    <p>
                      Although unfortunate, remember that termination may be the
                      best option if you followed the steps in your{" "}
                      <Link
                        href="#"
                        className="text-[#386861] hover:text-green-800 underline"
                      >
                        disciplinary action policy
                      </Link>{" "}
                      and did everything in your power to help the employee
                      improve. Termination allows you to find a more effective
                      team player and may even improve team morale.
                    </p>
                  </div>

                  <div className="bg-[#386861] border border-[#386861] rounded-3xl p-4 mt-6">
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                        <svg
                          className="w-9 h-9 text-[#386861]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg font-medium text-white">
                          Nervous about conducting the termination conversation?
                        </p>
                        <p className="text-lg text-white">
                          Learn tips and strategies to prepare for the
                          conversation and hold an effective meeting in{" "}
                          <Link
                            href="#"
                            className="text-white hover:text-green-800 underline"
                          >
                            How to Fire an Employee (and Stay out of Trouble)
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 6: Record your decisions and maintain consistency */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Step 6: Record your decisions and maintain consistency
                  </h2>

                  <div className="space-y-4 text-slg text-gray-700">
                    <p>
                      Every{" "}
                      <Link
                        href="#"
                        className="text-[#386861]  hover:text-green-800 underline"
                      >
                        disciplinary action
                      </Link>{" "}
                      or{" "}
                      <Link
                        href="#"
                        className="text-[#386861]  hover:text-green-800 underline"
                      >
                        termination decision
                      </Link>{" "}
                      you make sets a precedent. Following your policy allows
                      you to remain consistent with all employees in the same or
                      similar situations. Record any deviations from policy and
                      your reasoning for future reference.
                    </p>

                    <p>
                      Beyond that, a standardized{" "}
                      <Link
                        href="#"
                        className="text-[#386861]  hover:text-green-800 underline"
                      >
                        disciplinary procedure
                      </Link>{" "}
                      you follow demonstrates your commitment to treating all{" "}
                      <Link
                        href="#"
                        className="text-[#386861]  hover:text-green-800 underline"
                      >
                        employees fairly
                      </Link>{" "}
                      and consistently according to their circumstances.
                    </p>
                  </div>
                </div>
              </section>
              <section id="common-mistakes-to-avoid">
                <h2 className="text-2xl text-black sm:text-3xl lg:text-4xl font-semibold mb-4">
                  Common mistakes to avoid
                </h2>
                <p className="text-lg text-black mb-4">
                  Even with a solid process in place, it’s easy to make mistakes
                  that weaken your disciplinary action plan, or cause confusion
                  for the employee. Here are some of the pitfalls I see most
                  often, and how to steer clear of them.
                </p>

                <ul className="list-disc ml-5 space-y-2 text-lg text-black">
                  <li>
                    <strong>Using vague terms like “bad attitude”:</strong>{" "}
                    Words like this don’t explain the issue or hold up well in
                    documentation. Be specific about what happened and describe
                    the behavior, not the emotion behind it.
                  </li>
                  <li>
                    <strong>
                      Not checking for legal or accommodation issues first:
                    </strong>{" "}
                    You should pause if there’s a chance the behavior is linked
                    to a medical condition, family leave, or another legal
                    reason. Talk to legal before moving forward.
                  </li>
                  <li>
                    <strong>Forgetting to follow up after warnings:</strong> If
                    you don’t check in after a warning, the employee may think
                    it wasn’t serious. Set a timeline and stick to it.
                    Follow-through shows that expectations matter.
                  </li>
                  <li>
                    <strong>Skipping early documentation:</strong> Don’t wait
                    until you’re writing a warning to start keeping records. A
                    quick note about an earlier coaching conversation can help
                    show you gave the employee a fair chance to improve.
                  </li>
                  <li>
                    <strong>
                      Applying different standards to different employees:
                    </strong>{" "}
                    Holding one employee accountable while giving another one a
                    pass, especially for the same issue, can lead to trust
                    issues and even legal problems. Discipline needs to be fair
                    and consistent.
                  </li>
                </ul>

                <p className="text-lg text-black mt-4">
                  Managing the employee disciplinary action policy can be
                  stressful. It becomes even more so as your company grows and
                  segments into different departments, divisions, and locations.
                  Despite the shifts, you must maintain and follow the same
                  disciplinary procedures for all your employees.
                </p>

                <p className="text-lg text-black mt-4">
                  Investing in effective HR software can simplify disciplinary
                  management as you expand. Most platforms include
                  <a
                    href="#"
                    className="text-[#386861]  underline hover:text-green-800"
                  >
                    human resources information system (HRIS)
                  </a>{" "}
                  for tracking and storing personal data and monitoring
                  employment changes. Other features include policy templates,
                  automated workflows, and e-signature capabilities for
                  efficient documentation and retention.
                </p>
              </section>
              <section
                id="employee-disciplinary-action-FAQs"
                className="mt-8 max-w-7xl mx-auto"
              >
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Frequently Asked Questions (FAQ)
                  </h1>

                  {/* FAQ Accordion */}
                  <div className="space-y-0 -mt-8">
                    {faqData.map((item, index) => (
                      <div key={index} className="border-b border-gray-200">
                        {/* Question Button */}
                        <button
                          onClick={() => toggleItem(index)}
                          className="w-full flex items-center justify-between py-6 sm:py-7 md:py-8 lg:py-9 text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-700 leading-relaxed pr-4 sm:pr-6 md:pr-8">
                            {item.question}
                          </h3>

                          {/* Plus/Minus Icon */}
                          <div
                            className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-md flex items-center justify-center transition-all duration-200 ${
                              openItems[index]
                                ? "bg-[#386861]  hover:bg-green-700"
                                : "bg-[#386861]  hover:bg-green-700"
                            }`}
                          >
                            {openItems[index] ? (
                              <Minus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                            ) : (
                              <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                            )}
                          </div>
                        </button>

                        {/* Answer Content */}
                        {openItems[index] && (
                          <div className="pb-6 sm:pb-7 md:pb-8 lg:pb-9 pr-12 sm:pr-16 md:pr-20 lg:pr-24 animate-in slide-in-from-top-2 duration-300">
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              {/* Author Bio Section */}

             
            </div>
          </div>
        </div>

        {/* related postes */}

       <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-12 bg-white">
             <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-8 text-center">
               Related posts
             </h2>
       
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {posts.map((post, index) => (
                 <div
                   key={index}
                   className="bg-[#F9FAFB] rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col"
                 >
                   <div className="relative w-full h-52 sm:h-60 md:h-64">
                     <Image
                       src={post.image}
                       alt={post.title}
                       fill
                       className="object-cover"
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       priority
                     />
                   </div>
                   <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                     <p className="text-[#111827] font-semibold text-base sm:text-lg leading-snug line-clamp-3">
                       {post.title}
                     </p>
                     <p className="text-sm text-gray-500 mt-3">{post.date}</p>
                   </div>
                 </div>
               ))}
             </div>
           </section>
      </div>
    </>
  );
}
