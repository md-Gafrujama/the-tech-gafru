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

export default function ProjectManagementGuide() {
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
  const [tableOfContents, setTableOfContents] = useState([
    {
      id: "why-is-project-management-methodology-important",
      title: "Why is project management methodology important?",
      active: false,
    },
    {
      id: "types-of-project-management-methodologies",
      title: "Types of project management methodologies",
      active: false,
    },
 
    {
      id: "emerging-or-hybrid-project-management-methodologies",
      title: "Emerging or hybrid project management methodologies",
      active: false,
    },
    {
      id: "different-types-of-project-managers",
      title: "Different types of project managers and their roles",
      active: false,
    },
    {
      id: "choosing-a-project-management-methodology",
      title: "Choosing a project management methodology",
      active: false,
    },
    {
      id: "project-management-faqs",
      title: "Project management FAQs",
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
    
    setOpenSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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
      question: "What is the best tool for project management?",
      answer:
        "The best project management tool depends on your specific needs, team size, and project complexity. Popular options include Asana, Trello, Monday.com, Jira, and Microsoft Project. Consider factors like ease of use, collaboration features, integration capabilities, and pricing when making your choice.",
    },
    {
      question: "What is the most common project management tool?",
      answer:
        "Microsoft Project and Excel are among the most widely used project management tools in traditional corporate environments. However, cloud-based tools like Asana, Trello, and Monday.com have gained significant popularity due to their user-friendly interfaces and collaboration features.",
    },
    {
      question: "What methodology is best for small projects?",
      answer:
        "For small projects, Agile or Kanban methodologies are often ideal due to their flexibility and quick iteration cycles. Waterfall can also work well for small projects with clearly defined requirements and minimal expected changes. The key is choosing a methodology that matches your project's complexity and requirements.",
    },
  ];

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Top 5 Types of Project Management Methodologies";

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

  return (
    <>
      <Head>
        <title>Top 5 Types of Project Management Methodologies</title>
        <meta
          name="description"
          content="Understanding the different project management systems that support top project management methodologies will help you make the right decisions for your projects."
        />
        <meta property="og:title" content="Top 5 Types of Project Management Methodologies" />
        <meta property="og:description" content="Understanding the different project management systems that support top project management methodologies will help you make the right decisions for your projects." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top 5 Types of Project Management Methodologies" />
        <meta name="twitter:description" content="Understanding the different project management systems that support top project management methodologies will help you make the right decisions for your projects." />
      </Head>

      <div className="min-h-screen  bg-[#0E1F1C] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-white/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-white/5 rounded-full"></div>

        {/* Main content container */}
         <div className="min-h-[70vh] bg-[#0E1F1C] text-white relative overflow-hidden">
  {/* Background decorative elements - reduced size */}
  <div className="absolute top-16 right-8 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 border border-white/10 rounded-full"></div>
  <div className="absolute top-32 right-16 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 border border-white/5 rounded-full"></div>
  <div className="absolute bottom-16 left-8 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/5 rounded-full"></div>

  {/* Main content container with adjusted padding */}
  <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
    {/* Breadcrumb Navigation */}
    <nav className="pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-8 lg:pb-10" aria-label="Breadcrumb">
      <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm lg:text-base">
        <Link href="/" className="text-white/80 hover:text-white transition-colors group" aria-label="Go to homepage">
          <Home className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
        </Link>
        <Link href="/" className="text-white/80 hover:text-white transition-colors cursor-pointer" aria-label="Go to homepage">
          <span>Home</span>
        </Link>
        <span className="text-white/60">›</span>
        <Link href="/blog" className="text-white/80 hover:text-white transition-colors cursor-pointer">
          <span>Blog</span>
        </Link>
        <span className="text-white/60">›</span>
        <span className="text-white font-medium">
          Top 5 Types of Project Management Methodologies
        </span>
      </div>
    </nav>

    {/* Main Heading - adjusted sizes */}
    <div className="max-w-3xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 sm:mb-8 lg:mb-10">
        Top 5 Types of Project
        <span className="block mt-1 sm:mt-2">Management Methodologies</span>
      </h1>
      <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 lg:mb-10 max-w-3xl">
        Understanding the different project management systems that support top project management methodologies will help you make the right decisions for your projects.
      </p>
    </div>

    {/* Author and Reviewer Section - adjusted spacing */}
   

    
    
    
    {/* Disclaimer Section - adjusted padding */}
    <div className="max-w-3xl xl:max-w-4xl">
      <div className="flex items-start space-x-2 sm:space-x-3 bg-white/5 backdrop-blur-sm rounded-md sm:rounded-lg p-3 sm:p-4 lg:p-6 border border-white/10">
        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400 flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm lg:text-base leading-relaxed text-white/90">
          <p>
            <span className="font-semibold text-white">
              Technology Advice
            
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

    {/* Publication Date - adjusted spacing */}
   
  </div>
</div>
</div>

      {/* Main Content Section */}
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents - Left Sidebar */}
            <div className="lg:w-80 lg:sticky lg:top-24 lg:self-start">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
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
                      className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button
                      onClick={shareOnLinkedIn}
                      className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                    <button
                      onClick={shareOnTwitter}
                      className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Why is project management methodology important? */}
              <section id="why-is-project-management-methodology-important">
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8 mb-6">
    <header className="mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Why is project management methodology important?
      </h2>
    </header>
    <div className="prose prose-lg max-w-none text-gray-700">
      <p>
        Where a project management strategy defines the boundaries and objectives of a project, a project management methodology gives project managers a set of guidelines and techniques to implement that strategy.
      </p>
      <p>
        These methodologies provide a clear framework that guides every stage of the project, from initiation to closure. By offering a structure, these methodologies help project managers break down complex tasks into manageable steps, helping their teams stay organized and focused.
      </p>
      <p>
        Choosing the right methodology can also improve team collaboration and communication. Different methodologies prioritize various aspects, such as speed, flexibility, or precision. Agile, for example, focuses on adaptability and iteration, while Waterfall emphasizes a linear and predictable path.
      </p>
      <p>Using the right project management methodology:</p>
      <ul className="list-disc list-inside">
        <li>Improves resource management and allocation</li>
        <li>Improves communication and collaboration among stakeholders</li>
        <li>Provides clear timelines and milestones to track project progress</li>
        <li>Reduces risks and better contingency planning</li>
        <li>Increases the likelihood of meeting project goals on time and within budget</li>
      </ul>
</div> </div></section>


              {/* Featured Partners Section */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Featured partners</h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>Advertisement</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-lg">Z</span>
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          Zoho Projects
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
                      <div className="font-medium text-gray-900">Any Company Size*</div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Key Capabilities</div>
                      <div className="font-medium text-gray-900">Agile Development, Workplace Intelligence, Project SaaS & more</div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Integrations</div>
                      <div className="font-medium text-gray-900">Bitbucket, GitHub, Google Calendar, and 7 more</div>
                    </div>
                  </div>
                </div>
              </div>
<section id="types-of-project-management-methodologies">
   <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8 mb-6">
    <header className="mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Types of project management methodologies
      </h2>
    </header>
     
      <p>
        Various project management methods offer distinct frameworks and approaches to achieving project goals. Each methodology is suited to different project needs, team dynamics, project management software, and industry demands.
      </p>

      {/* Waterfall */}
      <h4 className="mt-6 text-xl font-bold text-gray-900">Waterfall</h4>
      <p>
        Waterfall is most effective for projects that follow a clear, linear path where the steps are well-defined from the start and changes are minimal or not expected.
      </p>
      <ul className="list-disc list-inside">
        <li>Manufacturing</li>
        <li>Software Development</li>
        <li>Healthcare and Finance</li>
      </ul>

      <h5 className="mt-4 font-semibold">Manufacturing</h5>
      <p>
        In manufacturing, Waterfall’s linear approach works well because production processes typically follow a structured sequence. Each phase must be completed in order to ensure quality and compliance.
      </p>

      <h5 className="mt-4 font-semibold">Software Development</h5>
      <p>
        For software projects with fixed requirements, Waterfall ensures each stage—design, coding, testing—is completed thoroughly before moving forward, helping prevent scope creep.
      </p>

      <h5 className="mt-4 font-semibold">Healthcare and Finance</h5>
      <p>
        These industries rely on Waterfall’s structured approach to ensure compliance, documentation, and approvals at every stage, reducing the risk of legal or financial issues.
      </p>

      <p><strong>Tool:</strong> Microsoft Project is ideal for Waterfall due to its strong scheduling, Gantt charts, and resource management features.</p>

      {/* Agile */}
      <h4 className="mt-10 text-xl font-bold text-gray-900">Agile</h4>
      <p>
        Agile is most effective for projects requiring flexibility and ongoing feedback. It's ideal in dynamic environments where requirements often change.
      </p>
      <ul className="list-disc list-inside">
        <li>Software Development</li>
        <li>Marketing Agencies</li>
        <li>Financial Services</li>
      </ul>

      <h5 className="mt-4 font-semibold">Software Development</h5>
      <p>
        Agile allows development teams to release in sprints, gather feedback, and make continuous improvements—perfect for evolving user needs.
      </p>

      <h5 className="mt-4 font-semibold">Marketing Agencies</h5>
      <p>
        Agile supports campaign testing, feedback loops, and frequent adjustments—essential in the fast-paced world of client-driven marketing.
      </p>

      <h5 className="mt-4 font-semibold">Financial Services</h5>
      <p>
        Agile enables quick adaptation to regulatory shifts and market trends, making it valuable for banks and fintech firms.
      </p>

      <p><strong>Tool:</strong> Jira provides powerful boards, sprint tracking, and reporting—making it ideal for Agile teams.</p>

      {/* Kanban */}
      <h4 className="mt-10 text-xl font-bold text-gray-900">Kanban</h4>
      <p>
        Kanban is best for continuous delivery and reducing bottlenecks, especially in environments where visual task tracking improves efficiency.
      </p>
      <ul className="list-disc list-inside">
        <li>Software Development</li>
        <li>Manufacturing</li>
        <li>Healthcare</li>
        <li>Retail</li>
      </ul>

      <h5 className="mt-4 font-semibold">Software Development</h5>
      <p>
        Kanban supports ongoing task prioritization, bug fixes, and frequent updates through its visual, pull-based system.
      </p>

      <h5 className="mt-4 font-semibold">Manufacturing</h5>
      <p>
        Originating in manufacturing, Kanban enables just-in-time production, improving inventory and workflow control.
      </p>

      <h5 className="mt-4 font-semibold">Healthcare</h5>
      <p>
        Healthcare teams use Kanban to manage patient flow, track resources, and ensure timely care delivery.
      </p>

      <h5 className="mt-4 font-semibold">Retail</h5>
      <p>
        Retailers rely on Kanban for inventory management and customer service task flow to reduce wait times and stock issues.
      </p>

      <p><strong>Tool:</strong> Trello’s drag-and-drop boards and columns align perfectly with the Kanban workflow.</p>

      {/* Scrum */}
      <h4 className="mt-10 text-xl font-bold text-gray-900">Scrum</h4>
      <p>
        Scrum is ideal for teams managing complex product development where frequent adjustments and close team collaboration are vital.
      </p>
      <ul className="list-disc list-inside">
        <li>Software Development</li>
        <li>Technology Startups</li>
        <li>Marketing Agencies</li>
      </ul>

      <h5 className="mt-4 font-semibold">Software Development</h5>
      <p>
        Scrum’s sprint-based approach helps software teams develop and test features rapidly, responding to user feedback efficiently.
      </p>

      <h5 className="mt-4 font-semibold">Technology Startups</h5>
      <p>
        Startups use Scrum to iterate quickly, validate ideas fast, and pivot strategies based on feedback and market shifts.
      </p>

      <h5 className="mt-4 font-semibold">Marketing Agencies</h5>
      <p>
        Marketing teams benefit from Scrum’s iterative process to refine strategies and adapt to client input in real time.
      </p>

      <p><strong>Tool:</strong> monday.com supports sprint planning, backlog tracking, and team collaboration for Scrum teams.</p>

      {/* Lean */}
      <h4 className="mt-10 text-xl font-bold text-gray-900">Lean</h4>
      <p>
        Lean maximizes value by eliminating waste and promoting continuous improvement, making it powerful in high-efficiency industries.
      </p>
      <ul className="list-disc list-inside">
        <li>Logistics</li>
        <li>Construction</li>
        <li>Event Planning</li>
      </ul>

      <h5 className="mt-4 font-semibold">Logistics</h5>
      <p>
        Lean optimizes supply chain performance by reducing delays and excess inventory through just-in-time practices.
      </p>

      <h5 className="mt-4 font-semibold">Construction</h5>
      <p>
        Construction teams use Lean to reduce waste, enhance scheduling, and improve value delivery through streamlined workflows.
      </p>

      <h5 className="mt-4 font-semibold">Event Planning</h5>
      <p>
        Lean enables event planners to coordinate efficiently with vendors, minimize waste, and deliver smooth, well-run events.
      </p>

      <p><strong>Tool:</strong> ClickUp provides flexible automation and workspace customization aligned with Lean's goals of reducing inefficiencies.</p>
    
  </div>
</section>



            
     

 

{/* Emerging or hybrid methodologies */}
<section id="emerging-or-hybrid-project-management-methodologies">
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8 mb-6">
    <header className="mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Emerging and Hybrid Methodologies
      </h2>
    </header>
    <div className="prose prose-lg max-w-none text-gray-700">
      <p className="mb-6">
        As project environments evolve beyond the project management basics, new methodologies have emerged to address the growing complexity and speed of modern work.
      </p>
      <p className="mb-6">
        Hybrid methodologies combine the strengths of traditional approaches like Waterfall with the flexibility of Agile, while entirely new frameworks are being developed to meet the demands of dynamic projects.
      </p>
      <p className="mb-8">
        These methods are especially useful in industries where rapid adaptation is crucial for success.
      </p>

      <div className="space-y-6">
       

       

        

        {/* Scrumban */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Scrumban</h3>
          <p className="mt-2">
            A blend of Scrum and Kanban, Scrumban combines the structured sprints of Scrum with the continuous flow of Kanban. This methodology is ideal for teams that need the flexibility of Kanban but still want to maintain Scrum’s sprint-based cycles for regular planning and reviews.
          </p>
        </div>

        {/* Extreme Programming (XP) */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Extreme Programming (XP)</h3>
          <p className="mt-2">
            XP focuses on improving software quality and responsiveness through frequent releases in short development cycles. It emphasizes collaboration, feedback, and continuous improvement, making it suitable for development environments that require constant interaction with clients and end users.
          </p>
        </div>

        {/* Lean Six Sigma */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Lean Six Sigma</h3>
          <p className="mt-2">
            A hybrid of Lean and Six Sigma, this methodology focuses on eliminating waste (Lean) while maintaining a data-driven approach to improve processes (Six Sigma). It’s particularly effective in industries that need to balance efficiency with quality control, like manufacturing or healthcare.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Different types of project managers */}
<section id="different-types-of-project-managers">
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8 mb-6">
    <header className="mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Different Types of Project Managers and Their Roles
      </h2>
    </header>
    <div className="prose prose-lg max-w-none text-gray-700">
      <p className="leading-relaxed mb-6">
        Project managers adapt to various types of project management methodologies, shaping how they guide teams and ensure project success. Here are the key types:
      </p>

      <div className="space-y-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Waterfall Project Manager</h3>
          <p>
            Oversees projects in a linear sequence, ensuring each phase is completed before the next. They focus on managing resources, timelines, and budgets, crucial for structured project management types.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Agile Project Manager (Scrum Master)</h3>
          <p>
            Facilitates teams through sprints, focusing on adaptability and iterative development. They ensure smooth communication and rapid responses to changes, which is essential for this type of project management.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Hybrid Project Manager</h3>
          <p>
            Uses elements from different types of project management methodologies, combining Waterfall and Agile to customize the approach based on specific project needs and industry requirements.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Kanban Project Manager</h3>
          <p>
            Specializes in managing continuous workflows by optimizing the flow of tasks and limiting work in progress, ensuring the team remains focused and responsive to real-time demands.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Choosing a methodology */}
<section id="choosing-a-project-management-methodology">
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8 mb-6">
    <header className="mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Choosing a Project Management Methodology
      </h2>
    </header>
    <div className="prose prose-lg max-w-none text-gray-700">
      <p className="leading-relaxed mb-6">
        In project management, keep in mind that there is no universal, one-size-fits-all methodology. Each project has unique challenges and requirements; thus, the methodology you choose must align well with its specific needs.
      </p>
      <p className="leading-relaxed mb-6">
        Interestingly, there are scenarios where blending two methodologies proves to be highly effective. This hybrid approach can leverage the strengths of each methodology, providing a more tailored and efficient way to manage and execute projects.
      </p>
      <p className="leading-relaxed">
        To choose the right methodology, you must first establish a clear understanding of the project’s scope, complexity, stakeholder expectations, and desired outcomes. The right methodology should help the project team achieve its goals efficiently and effectively. It’s not just about following a set of procedures; it’s about adopting a framework that enhances the team’s ability to deliver successful results.
      </p>
    </div>
  </div>
</section>


{/* FAQs */}
<section id="project-management-faqs">
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8 mb-6">
    <header className="mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Project Management FAQs
      </h2>
    </header>
    
    <div className="space-y-6">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between text-left"
          >
            <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
            <div className="ml-4 flex-shrink-0">
              {openItems[index] ? (
                <Minus className="w-5 h-5 text-[#386861]" />
              ) : (
                <Plus className="w-5 h-5 text-[#386861]" />
              )}
            </div>
          </button>
          
          {openItems[index] && (
            <div className="mt-4 text-gray-700">
              {item.answer}
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
      </div>
      
     </>
  );
}