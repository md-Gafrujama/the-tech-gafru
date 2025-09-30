"use client";

import React, { useState, useEffect } from "react";
import {
  Home,
  CheckCircle2,
  Calendar,
  Check,
  X,
  Plus,
  Minus,
  ExternalLink,
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
  const [openSections, setOpenSections] = useState({});
  const [activeSection, setActiveSection] = useState({});
  const [openItems, setOpenItems] = useState({});
  const [tableOfContents, setTableOfContents] = useState([
    {
      id: "what-are-BI-tools?",
      title: "What are BI tools?",
      active: false,
    },
    {
      id: "head-to-head",
      title: "Head-to-head comparisons",
      active: false,
    },
    {
      id: "tools",
      title: "BI Tools",
      active: false,
    },
    {
      id: "alternative",
      title: "Alternative AI BI tools to consider",
      active: false,
    },

    {
      id: "methodology",
      title: "Methodology",
      active: false,
    },
    {
      id: "faqs",
      title: "Frequently Asked Questions",
      active: false,
    },
    {
      id: "bottom-line",
      title: "Bottom Line",
      active: false,
    },
  ]);

  const toggleSection = (sectionKey) => {
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

  const businessData = [
    {
      id: 1,
      name: "Zoho Analytics",
      image: "/images/b3.png",
      alt: "Zoho Analytics",

      use: "UI may be challenging to navigate, especially for non-technical users",
      visitUrl: "Zoho",
      aiFunction:
        "Built-in AI features, including what-if analysis, auto-analysis, and data anomaly detection",
      biFunction:
        "Basic and advanced BI features, including conversational analytics and data integration",
    },
    {
      id: 2,
      name: "Google Cloud",
      image: "/images/b4.jpg",
      alt: "Google Cloud",

      use: "Although Looker Studio and Looker (Pro) don’t have the best UIs, their native integration with Google products makes them highly usable",
      visitUrl: "Google Cloud",
      aiFunction: "Backed by Google’s Gemini AI platform",
      biFunction:
        "Comprehensive BI features, including data analytics, data visualization, and reporting",
    },
    {
      id: 3,
      name: "FreshBooks",
      image: "/images/b5.png",
      alt: "FreshBooks",

      use: "User-friendly interface",
      visitUrl: "FreshBooks",
      aiFunction: "Only accessible via third-party integrations",
      biFunction: "Integrates with third-party BI tools",
    },
    {
      id: 4,
      name: "Xero",
      image: "/images/b6.png",
      alt: "ZXero",

      use: "Highly accessible and intuitive for users of all skill levels",
      visitUrl: "Xero",
      aiFunction:
        "Automate tasks, answer questions, and perform predictive analytics with their AI assistant, JAX",
      biFunction:
        "BI features include workflow automation, customizable reporting, and more via third-party integrations",
    },
    {
      id: 5,
      name: "ClickUp",
      image: "/images/b7.png",
      alt: "ClickUp",

      use: "A confusing and overloaded UI makes it difficult to navigate for new users",
      visitUrl: "ClickUp",
      aiFunction: "Native AI functionality is available in all paid plans",
      biFunction: "Highly customizable dashboard and reports",
    },
    {
      id: 6,
      name: "monday.com",
      image: "/images/b8.png",
      alt: "monday.com",

      use: "User-friendly interface, though advanced features have a learning curve",
      visitUrl: "monday.com",
      aiFunction:
        "Leverage AI-generated templates, AI agents, the monday.com AI assistant, and more",
      biFunction:
        "Customizable dashboards and reports with more functionality via third-party integrations",
    },
  ];

  const posts = [
    {
      title: "Best Power BI Alternatives: Top Tools for Data Analytics in 2025",
      date: "March 25, 2025",
      image: "/images/b9.jpeg",
    },
    {
      title:
        "Mastering Data Migration: Five Best Practices for a Seamless Transition in 2025",
      date: "March 7, 2025",
      image: "/images/b10.jpg",
    },
    {
      title: "Data Provenance: A Beginners Guide",
      date: "February 28, 2025",
      image: "/images/b11.jpeg",
    },
  ];

  // Assuming 'toolsArray' is defined elsewhere or passed as a prop
  const toolsArray = [
    {
      id: "zoho",
      logo: "/images/b3.png", // Placeholder, replace with actual logo if available
      title: "Zoho – Best for AI-driven business analytics",
      button: {
        text: "Visit Website",
        link: "https://zoho.com/",
      },
      pros: [
        "Available on-premises or via the cloud",
        "Zoho Analytics readily integrates with the software you already use",
        "Accessible via web browser or mobile app",
      ],
      cons: [
        "The limited free trial might not be long enough to test out some of the more advanced features",
        "A bit of a learning curve, especially for non-technical users",
        "Their Enterprise plan might be cost-prohibitive, especially for smaller companies",
      ],
      descriptionImage: "/images/bbi1.png",
      descriptionText:
        "Zoho offers various AI business intelligence tools to meet your business needs, including Zoho Analytics, which was designed specifically for AI-driven business intelligence. Packaged with Zia, their conversational AI assistant, Zoho Analytics offers predictive analytics, cognitive analytics, data visualization, and more.",
      keyFeatures: [
        "Full range of BI functionality, including integration with 500+ data sources",
        "Next-gen AI features such as what-if analysis, auto-analysis, and data anomaly detection",
        "Easily share reports with other team members",
      ],
      pricing: {
        Basic: "$24 / month (2 users)",
        Standard: "$48 / month (5 users)",
        Premium: "$115 / month (15 users)",
        Enterprise: "$455 / month (50 users)",
      },
    },
    {
      id: "google-cloud",
      logo: "/images/b4.jpg", // Placeholder, replace with actual logo if available
      title: "Google Cloud – Best for those who use Gemini AI, Google products",
      button: {
        text: "Visit Website",
        link: "https://cloud.google.com/",
      },
      pros: [
        "Part of Google's ecosystem, Looker and Looker Studio are already familiar to those who use Docs, Sheets, Slides, or Forms",
        "Apps available for both Android and iOS; both Looker and Looker Studio can also be accessed through a web browser",
        "Access to LookML, a proprietary modeling language for use with semantic data models",
      ],
      cons: [
        "Performance issues are common, especially when working with larger datasets",
        "Looker Studio's UI can be clunky and unintuitive",
        "Even the paid version, Looker, lacks some of the advanced features seen in some of its competitors",
      ],
      descriptionImage: "/images/bbi2.png",
      descriptionText:
        "The team at Google offers two different BI tools to choose from: Looker Studio and Looker (sometimes known as Looker Pro). While the former is free, it's primarily focused on interactive reporting. Their paid version, Looker (Pro), is meant for complex data analytics, modeling, and visualization.",
      keyFeatures: [
        "Easy access to Google's popular generative AI tool, Gemini",
        "Team workspaces make it easy to collaborate, share content, and manage permissions",
        "Both Looker Studio and Looker (Pro) are backed by Google Cloud's Identity and Access Management (IAM) service for maximum protection",
      ],
      pricing: {
        "Looker Studio": "Free",
        "Looker (Pro)": "Contact sales for a price quote",
      },
    },
    {
      id: "freshbooks",
      logo: "/images/b5.png", // Placeholder, replace with actual logo if available
      title: "FreshBooks – Best for automated financial recordkeeping",
      button: {
        text: "Visit Website",
        link: "https://FreshBook.com/",
      },
      pros: [
        "Highly intuitive and user-friendly interface",
        "Available via web browser or mobile app",
        "Offers many business-critical features, including invoicing, billing, time tracking, and more",
      ],
      cons: [
        "Most plans have limitations on the number of clients",
        "Users report frequent delays with customer support",
        "Not purpose-built for BI or AI, so you’ll have to use third-party integrations",
      ],
      descriptionImage: "/images/bbi3.png",
      descriptionText:
        "FreshBooks is a popular accounting platform that has existed since 2004. Although it doesn’t feature native BI or AI functionality, the platform is versatile enough to easily integrate with relevant tools. It’s compatible with BI software such as Power BI, Tableau, and others. FreshBooks can also be used as a data source for your BI reports.",
      keyFeatures: [
        "Connects with various AI Systems to automate tasks such as accounting, invoicing, and expense management",
        "Create detailed financial reports in real-time",
        "Generate targeted business health reports to analyze long-term business performance",
      ],
      pricing: {
        Lite: "$10.50 / month (up to 5 billable clients)",
        Plus: "$19 / month (up  to 50 billable clients)",
        Premium: "$32.50 / month (unlimited billable clients)",
        Select: "Contact sales for price quote (varied)",
      },
    },
    {
      id: "xero",
      logo: "/images/b6.png", // Placeholder, replace with actual logo if available
      title: "Xero – Best for financial reporting and forecasting",
      button: {
        text: "Visit Website",
        link: "https://xero.com/",
      },
      pros: [
        "Designed to be as user-friendly and accessible as possible",
        "Highly customizable reporting",
        "Xero’s 30-day free trial provides ample time to test out its key features",
      ],
      cons: [
        "Lack of native BI features",
        "Telephone-based customer support is only available with an appointment",
        "Strictly cloud-based — not available in an on-premises setting",
      ],
      descriptionImage: "/images/bbi4.png",
      descriptionText:
        "While Xero isn’t a full-scale BI platform, it does provide some fundamental BI features, including reporting and analytics. Xero can also be integrated with numerous BI tools, such as Power BI, Yellowfin, and Easy Insight.",
      keyFeatures: [
        "Xero’s AI-powered assistant, JAX, can be used to automate tasks, answer questions, and perform predictive analytics",
        "More than 1,000 third-party integrations make it easy to expand on Xero’s core functionality",
        "A cloud-based platform, Xero can be accessed nearly anywhere and at any time via PC, laptop, or mobile app",
      ],
      pricing: {
        Early: "$20 / month",
        Growing: "$47 / month",
        Established: "$80 / month",
      },
    },
    {
      id: "clickup",
      logo: "/images/b7.png", // Placeholder, replace with actual logo if available
      title: "ClickUp – Best for monitoring day-to-day productivity",
      button: {
        text: "Visit Website",
        link: "https://clickup.com/",
      },
      pros: [
        "Native AI functionality is available for all paid plans",
        "Offers a free plan that provides plenty of basic features",
        "Easily integrate with business intelligence platforms like Power BI and Tableau",
      ],
      cons: [
        "The many basic and advanced features can be confusing or overwhelming to new users",
        "Many of ClickUp’s features cannot be accessed offline",
        "ClickUp can be an expensive option for larger teams that need advanced features",
      ],
      descriptionImage: "/images/bbi5.png",
      descriptionText:
        "ClickUp is a powerful project management and collaboration tool used by over 10 million users worldwide. It integrates with popular BI tools, including Power BI, Tableau, and others. The platform itself can even be used as a data source for your chosen BI software.",
      keyFeatures: [
        "AI-driven features let you automate tasks, answer questions, generate content, take meeting notes, and search for information",
        "Integrated whiteboards makes it easy to share documents, brainstorm ideas, and plan long-term projects",
        "Offers different views to organize your projects, including Kanban boards and calendars",
      ],
      pricing: {
        Unlimited: "$7 / user / month",
        Business: "$12 / user / month",
        Enterprise: "Contact sales for a price quote",
      },
    },
    {
      id: "monday.com",
      logo: "/images/b8.png", // Placeholder, replace with actual logo if available
      title: "monday.com – Best for turning data into actionable insights",
      button: {
        text: "Visit Website",
        link: "https://monday.com/",
      },
      pros: [
        "Plenty of AI tools let you streamline and optimize daily workflows",
        "Familiar and user-friendly interface",
        "The entry-level version is available at no cost",
      ],
      cons: [
        "Lacks advanced BI features",
        "Some advanced features have a steep learning curve",
        "The mobile app lacks some features that are commonplace in the browser version",
      ],
      descriptionImage: "/images/bbi6.png",
      descriptionText:
        "Perhaps better known as a work management platform, monday.com also offers some basic BI functionality. It easily integrates with full-scale BI platforms like Power BI and Tableau for access to advanced features.",
      keyFeatures: [
        "Offers native reporting and data visualization tools, including Kanban boards and Gantt charts",
        "Leverages monday.com’s AI-powered assistant, AI-generated templates, AI agents, and more",
        "Provides support for third-party integrations",
      ],
      pricing: {
        Basic: " $9 / seat / month",
        Standard: "$12 / seat / month",
        Pro: "$19 / seat / month",
        Enterprise: " Contact sales for a price quote",
      },
    },
  ];

  const dataArray = [
    {
      id: "Pictory.ai",
      logo: "/images/b12.png", // Placeholder, replace with actual logo if available
      title: "Pictory.ai – Best for using AI to create viral videos",
      button: {
        text: "Visit Website",
        link: "https://pictory.ai.com/",
      },
      pros: [
        "An affordable option for individuals and small teams alike",
        "API connect the platform with other software solutions you already use",
        "Doesn’t require advanced video editing skills",
      ],
      cons: [
        "A niche product designed for those who already use online videos to promote their brand",
        "Lack of core BI functionality",
        "Video processing time can be slow, especially when creating long-form content",
      ],
      descriptionImage: "/images/bbi7.png",
      descriptionText:
        "At its core, Pictory.ai is a video creation tool that lets you create high-quality, AI-generated videos. While it’s a bit removed from the niche of AI in business intelligence, it does provide some powerful analytics for tracking viewership, shares, and engagement on social media. As such, it’s a great option for those who want to monitor the effectiveness of their online campaigns.",
      keyFeatures: [
        "Creates new videos from text prompts or website URLs",
        "Edits AI videos in various ways by creating short clips, adding captions, and more",
        "Tracks metrics such as views, shares, and overall engagement",
      ],
      pricing: {
        Starter: "$19 / month (1 user)",
        Professional: "$39 / month (1 user)",
        Team: "$99 / month (3+ users)",
        Enterprise: "Custom price (10+ users)",
      },
    },
    {
      id: "jasper.ai",
      logo: "/images/b13.png", // Placeholder, replace with actual logo if available
      title: "Jasper.ai – Best for AI-driven marketing campaigns",
      button: {
        text: "Visit Website",
        link: "https://jasper.ai.com/",
      },
      pros: [
        "AI-driven platform for marketers who already use AI daily",
        "AI document editor trained on common marketing standards and best practices",
        "Supports 80+ languages across the world",
      ],
      cons: [
        "Algorithms still need some fine-tuning, as they sometimes result in incorrect information or content that doesn’t match your brand voice",
        "Some generated content can be overly generic",
        "Free seven-day trial may not be enough time to fully understand the full functionality of the platform",
      ],
      descriptionImage: "/images/bbi8.png",
      descriptionText:
        "Designed for enterprise marketing teams, Jasper.ai is advertised as a purpose-built AI that helps enterprise marketers build apps and workflows tied to real business outcomes. The platform features an extensive library of 1,000+ integrations, 90+ AI-driven apps, and a complete marketing AI toolkit that helps you plan marketing campaigns, create content, and track results.",
      keyFeatures: [
        "AI chatbot, Jasper Chat, helps marketers brainstorm and execute their ideas",
        "Comprehensive AI image editing tools",
        "Enterprise-grade security",
      ],
      pricing: {
        Creator: "$39 / month / seat (user)",
        Pro: "$59 / month / seat",
        Business: "Contact sales for price quote (varied)",
      },
    },
    {
      id: "domo",
      logo: "/images/b14.png", // Placeholder, replace with actual logo if available
      title:
        "Domo – Best for advanced BI experts who need integrated AI and ML",
      button: {
        text: "Visit Website",
        link: "https://domo.com/",
      },
      pros: [
        "Provides integrated AI and ML (machine learning)",
        "More than 150 chart types and 7,000+ custom maps to use for visualizing your data",
        "The mobile-first design is ideal for smartphone users",
      ],
      cons: [
        "Has a bit of a learning curve",
        "While Domo offers plenty of customizability, it is limited when compared to some competitors",
        "Pricing isn’t readily available on their website",
      ],
      descriptionImage: "/images/bbi9.png",
      descriptionText:
        "Domo is a versatile platform that combines a traditional BI dashboard with plenty of AI-powered features. It offers consumption-based pricing, meaning you only pay for the services you actually use. Domo also provides a free, one-on-one training session for those who want to learn the platform as quickly as possible.",
      keyFeatures: [
        "Utilize AI agents, generative AI, AI-driven data insights, and more",
        "Core BI functionality includes customizable dashboards, reporting, and visualizations",
        "Comprehensive tools available for those who want to create their own AI service models",
      ],
      pricing: {
        Standard: "Contact sales for price quote ",
        Enterprise: "Contact sales for price quote ",
        "Business Critica": "Contact sales for price quote ",
      },
    },
  ];

  const faqData = [
    {
      question: "How is AI used in business intelligence?",
      answer:
        "Gen AI complements BI in various ways. Not only can today’s AI algorithms collect, process, and analyze large datasets in the blink of an eye, but they’re also used to automate tedious tasks such as data cleaning and extraction. This results in improved decision-making, greater operational efficiency, enhanced data visualization, and more.",
    },
    {
      question:
        "What is the difference between AI business intelligence and traditional business intelligence?",
      answer:
        "Until now, the field of BI primarily relied on historical records and standardized database queries to analyze data, identify trends, and produce reports.",
    },

    {
      question:
        "What should organizations consider when choosing an AI BI tool?",
      answer:
        "There are many different considerations to make when choosing an AI BI tool. If your organization has a non-technical staff, it’s important to find a platform that is as user-friendly and accessible as possible. ",
    },
  ];

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

  return (
    <>
      <Head>
        <title>The Best AI-Powered BI Tools to Stay Ahead in 2025</title>
        <meta
          name="description"
          content="AI BI tools use machine learning to deliver smarter insights fast. Explore the best options to drive better decisions and outpace competitors."
        />

        {/* Open Graph (Facebook + LinkedIn) */}
        <meta
          property="og:title"
          content="The Best AI-Powered BI Tools to Stay Ahead in 2025"
        />
        <meta
          property="og:description"
          content="AI BI tools use machine learning to deliver smarter insights fast. Explore the best options to drive better decisions and outpace competitors."
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
        <meta property="og:site_name" content="Technology Advice" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="The Best AI-Powered BI Tools to Stay Ahead in 2025"
        />
        <meta
          name="twitter:description"
          content="The Best AI-Powered BI Tools to Stay Ahead in 2025"
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
                href="/"
                className="text-white/80 hover:text-white transition-colors group"
                aria-label="Go to homepage"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Go to homepage"
              >
                <span>Home</span>
              </Link>
              <span className="text-white/60">›</span>
              <span className="text-white/60">Blogs</span>
              <span className="text-white/60">›</span>
              <span className="text-white font-medium">
                The Best AI-Powered BI Tools to Stay Ahead in 2025
              </span>
            </div>
          </nav>

          {/* Main Heading */}
          <div className="max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16">
              The Best AI-Powered BI
              <span className="block mt-2 sm:mt-4">Tools to Stay Ahead in</span>
              <span className="block mt-2 sm:mt-4">2025</span>
                <p className="text-lg font-light sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            AI BI tools use machine learning to deliver smarter insights fast. Explore the best options to drive better decisions and outpace competitors.
          </p>
            </h1>
          </div>

          {/* Author and Reviewer Section */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-8 lg:space-x-12 space-y-6 sm:space-y-0 mb-8 sm:mb-12 lg:mb-16">
            {/* Author */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image
                  src="/images/b1.jpeg"
                  alt="  J.R. Johnivan- Author"
                  fill
                  sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div>
                <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-1">
                  Written by
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-semibold">
                  J.R. Johnivan
                </p>
              </div>
              {/* Reviewer */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="text-sm sm:text-base lg:text-lg text-white/80 hidden sm:block">
                  Reviewed by
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden flex-shrink-0 relative">
                    <Image
                      src="/images/b2.png"
                      alt="Antony Peyton - Reviewer"
                      fill
                      sizes="(max-width: 640px) 32px, (max-width: 1024px) 40px, 48px"
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base lg:text-lg text-white/80 sm:hidden mb-1">
                      Reviewed by
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg font-medium">
                      Antony Peyton
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="max-w-4xl xl:max-w-5xl">
            <div className="flex items-start space-x-3 sm:space-x-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-400 flex-shrink-0 mt-0.5 sm:mt-1" />
              <div className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
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

          {/* Publication Date */}
          <div className="mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-12 lg:pb-16">
            <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg text-white/70">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              <span>Published Date: May 19, 2025</span>
            </div>
          </div>
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
                      className="w-12 h-12 rounded-full bg-[#386861] text-white flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
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
                      className="w-12 h-12 rounded-full bg-[#386861] text-white flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
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
                      className="w-12 h-12 rounded-full bg-[#386861] text-white flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
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
              <section id="what-are-BI-tools?">
                <div className=" mb-8 sm:mb-12 mt-6">
                  {/* Header */}
                  {/* <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                     What is disciplinary action (and why it matters)
                    </h1>
                  </header> */}

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Artificial intelligence (AI) is reshaping business
                      intelligence (BI) faster than ever. It is moving beyond
                      dashboards and reports to deliver real-time insights,
                      smarter automation, and predictive power that transform
                      decision-making. In 2025, AI-infused BI tools will no
                      longer be a luxury — they will be a competitive necessity.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      From intuitive analytics to machine-generated forecasts,
                      today’s top platforms combine the best BI and AI to help
                      teams spot trends, cut inefficiencies, and move
                      confidently. Whether automating workflows or visualizing
                      complex data sets, the right AI-powered BI tool can give
                      you the edge to stay ahead in a fast-evolving market.{" "}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      In this guide, I break down the top AI BI tools that are
                      making waves this year, highlighting their standout
                      features, key pros and cons, and how they stack up in
                      terms of usability, intelligence, and business impact{" "}
                    </p>
                  </div>
                </div>
                <section id="what-are-BI-tools?">
                  {/* What are BI tools? */}
                  <div className="mb-8 sm:mb-12 mt-6 ">
                    {/* Header */}
                    <header className="mb-8">
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        What are BI tools?
                      </h1>
                    </header>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        At their core, modern BI tools help drive operational
                        efficiency, support organizational decision-making, and
                        reduce costs. This is generally achieved by collecting,
                        processing, organizing, and visualizing data in various
                        ways.{" "}
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Since the dawn of AI, however, it’s been common to see
                        those in business intelligence using AI tools for tasks
                        like workflow automation and content generation. Since
                        AI complements current BI software so well, the two are
                        a natural fit.
                      </p>
                    </div>
                  </div>
                </section>
              </section>

              <section id="head-to-head" className="mt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className=" mb-8 sm:mb-12 mt-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                      Head-to-head comparisons
                    </h1>
                  </div>

                  {/* Unified Table Layout for All Screen Sizes */}
                  <div className="bg-white rounded-2xl sm:rounded-3xl border mt-4 border-gray-200 p-6 mb-8">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-full">
                        <thead>
                          <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="w-1/5 min-w-[150px] py-3 sm:py-6 px-2 sm:px-4 font-semibold text-gray-700 text-sm sm:text-base text-left">
                              Product
                            </th>
                            <th className="w-1/5 min-w-[150px] py-3 sm:py-6 px-2 sm:px-4 font-semibold text-gray-700 text-sm sm:text-base text-center">
                              Usability
                            </th>
                            <th className="w-1/5 min-w-[150px] py-3 sm:py-6 px-2 sm:px-4 font-semibold text-gray-700 text-sm sm:text-base text-center">
                              AI Functionality
                            </th>
                            <th className="w-1/5 min-w-[150px] py-3 sm:py-6 px-2 sm:px-4 font-semibold text-gray-700 text-sm sm:text-base text-center">
                              BI Functionality
                            </th>
                            <th className="w-1/5 min-w-[150px] py-3 sm:py-6 px-2 sm:px-4 font-semibold text-gray-700 text-sm sm:text-base text-center">
                              Action
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {businessData.map((business, index) => (
                            <tr
                              key={business.id}
                              className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                            >
                              {/* Column 1 - Product */}
                              <td className="w-1/5 min-w-[150px] py-4 sm:py-6 px-2 sm:px-4 break-words">
                                <div className="flex flex-col sm:flex-row items-center gap-2">
                                  <div className="w-16 h-10 sm:w-20 sm:h-10 overflow-hidden flex items-center justify-center">
                                    <img
                                      src={business.image}
                                      alt={business.alt}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <span className="text-xs sm:text-sm font-medium text-gray-800 text-center sm:text-left">
                                    {business.name}
                                  </span>
                                </div>
                              </td>

                              {/* Column 2 - Usability */}
                              <td className="w-1/5 min-w-[150px] py-4 sm:py-6 px-2 sm:px-4 text-center text-xs sm:text-sm text-gray-600 leading-snug break-words">
                                {business.use}
                              </td>

                              {/* Column 3 - AI Functionality */}
                              <td className="w-1/5 min-w-[150px] py-4 sm:py-6 px-2 sm:px-4 text-left text-xs sm:text-sm text-gray-600 leading-snug break-words">
                                {business.aiFunction}
                              </td>

                              {/* Column 4 - BI Functionality */}
                              <td className="w-1/5 min-w-[150px] py-4 sm:py-6 px-2 sm:px-4 text-left text-xs sm:text-sm text-gray-600 leading-snug break-words">
                                {business.biFunction}
                              </td>

                              {/* Column 5 - Action */}
                              <td className="w-1/5 min-w-[150px] py-4 sm:py-6 px-2 sm:px-4 text-center">
                                <button className="bg-[#386861] hover:green-700 text-white font-medium py-2 px-3 sm:py-3 sm:px-6 rounded-lg transition-all duration-200 text-xs sm:text-sm">
                                  Visit Website
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              <section id="tools">
                {/* Common Heading */}

                {/* Map through the tools array */}
                {toolsArray.map((tool) => (
                  <div
                    key={tool.id}
                    className="bg-white rounded-2xl sm:rounded-3xl border mt-4 border-gray-200 p-6 mb-8"
                  >
                    {/* Tool Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Image
                            src={tool.logo}
                            alt={`${tool.title} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <h2 className="text-2xl font-bold text-black">
                          {tool.title}
                        </h2>
                      </div>
                      <a
                        href={tool.button.link}
                        className="bg-[#386861] text-white px-4 py-2 rounded-full text-sm hover:bg-green-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tool.button.text}
                      </a>
                    </div>

                    {/* Image and Description Section */}
                    {tool.descriptionImage && (
                      <div className="mb-6">
                        <div className="w-full h-auto mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={tool.descriptionImage}
                            alt="Product Screenshot"
                            width={800} // Adjust as needed
                            height={400} // Adjust as needed
                            layout="responsive"
                            className="rounded-lg"
                          />
                        </div>
                        <p className="text-gray-700 mb-4 text-sm">
                          Source: Google Cloud / Screenshot
                        </p>
                        <p className="text-black">{tool.descriptionText}</p>
                      </div>
                    )}

                    {/* Pros and Cons */}
                    <div className="grid md:grid-cols-2 text-black gap-6 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Pros</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {tool.pros.map((pro, index) => (
                            <li key={index}>{pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Cons</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {tool.cons.map((con, index) => (
                            <li key={index}>{con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Key features section */}
                    {tool.keyFeatures && (
                      <div className="border-t text-black pt-4 mb-4">
                        <button
                          onClick={() =>
                            toggleSection(`${tool.id}-key-features`)
                          } // Call toggleSection
                          className="w-full flex justify-between items-center font-medium"
                        >
                          <span>Key features</span>
                          <span className="text-[#386861]">
                            {openSections[`${tool.id}-key-features`] ? ( // Check openSections state
                              <Minus className="w-5 h-5" />
                            ) : (
                              <Plus className="w-5 h-5" />
                            )}
                          </span>
                        </button>
                        {openSections[`${tool.id}-key-features`] && ( // Conditionally render based on openSections state
                          <div className="mt-2 text-gray-700">
                            <ul className="list-disc pl-5 space-y-1">
                              {tool.keyFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Pricing section */}
                    {tool.pricing && (
                      <div className="border-t text-black pt-4">
                        <button
                          onClick={() => toggleSection(`${tool.id}-pricing`)} // Call toggleSection
                          className="w-full flex justify-between items-center font-medium"
                        >
                          <span>Pricing</span>
                          <span className="text-[#386861]">
                            {openSections[`${tool.id}-pricing`] ? ( // Check openSections state
                              <Minus className="w-5 h-5" />
                            ) : (
                              <Plus className="w-5 h-5" />
                            )}
                          </span>
                        </button>
                        {openSections[`${tool.id}-pricing`] && ( // Conditionally render based on openSections state
                          <div className="mt-2 text-gray-700">
                            <ul className="list-disc pl-5 space-y-1">
                              {Object.entries(tool.pricing).map(
                                ([plan, price], index) => (
                                  <li key={index}>
                                    <strong>{plan}:</strong> {price}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </section>

              <section id="alternative">
                <div className="mb-8 sm:mb-12 mt-6">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      Alternative AI BI tools to consider
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      While we wanted to keep our initial list of the best AI
                      and BI platforms as concise as possible, there were still
                      a few leftovers that we couldn’t ignore. These tools range
                      from AI-driven image creation tools to comprehensive BI
                      suites, and they’re all unique in their own ways.
                    </p>
                  </div>
                </div>

                {/* Common Heading */}

                {/* Map through the tools array */}
                {dataArray.map((data) => (
                  <div
                    key={data.id}
                    className="bg-white rounded-2xl sm:rounded-3xl border mt-4 border-gray-200 p-6 mb-8"
                  >
                    {/* Tool Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Image
                            src={data.logo}
                            alt={`${data.title} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <h2 className="text-2xl font-bold text-black">
                          {data.title}
                        </h2>
                      </div>
                      <a
                        href={data.button.link}
                        className="bg-[#386861] text-white px-4 py-2 rounded-full text-sm hover:bg-green-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.button.text}
                      </a>
                    </div>

                    {/* Image and Description Section */}
                    {data.descriptionImage && (
                      <div className="mb-6">
                        <div className="w-full h-auto mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={data.descriptionImage}
                            alt="Product Screenshot"
                            width={800} // Adjust as needed
                            height={400} // Adjust as needed
                            layout="responsive"
                            className="rounded-lg"
                          />
                        </div>
                        <p className="text-gray-700 mb-4 text-sm">
                          Source: Screenshot
                        </p>
                        <p className="text-black">{data.descriptionText}</p>
                      </div>
                    )}

                    {/* Pros and Cons */}
                    <div className="grid md:grid-cols-2 text-black gap-6 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Pros</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {data.pros.map((pro, index) => (
                            <li key={index}>{pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Cons</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {data.cons.map((con, index) => (
                            <li key={index}>{con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Key features section */}
                    {data.keyFeatures && (
                      <div className="border-t text-black pt-4 mb-4">
                        <button
                          onClick={() =>
                            toggleSection(`${data.id}-key-features`)
                          } // Call toggleSection
                          className="w-full flex justify-between items-center font-medium"
                        >
                          <span>Key features</span>
                          <span className="text-[#386861]">
                            {openSections[`${data.id}-key-features`] ? ( // Check openSections state
                              <Minus className="w-5 h-5" />
                            ) : (
                              <Plus className="w-5 h-5" />
                            )}
                          </span>
                        </button>
                        {openSections[`${data.id}-key-features`] && ( // Conditionally render based on openSections state
                          <div className="mt-2 text-gray-700">
                            <ul className="list-disc pl-5 space-y-1">
                              {tool.keyFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Pricing section */}
                    {data.pricing && (
                      <div className="border-t text-black pt-4">
                        <button
                          onClick={() => toggleSection(`${data.id}-pricing`)} // Call toggleSection
                          className="w-full flex justify-between items-center font-medium"
                        >
                          <span>Pricing</span>
                          <span className="text-[#386861]">
                            {openSections[`${data.id}-pricing`] ? ( // Check openSections state
                              <Minus className="w-5 h-5" />
                            ) : (
                              <Plus className="w-5 h-5" />
                            )}
                          </span>
                        </button>
                        {openSections[`${data.id}-pricing`] && ( // Conditionally render based on openSections state
                          <div className="mt-2 text-gray-700">
                            <ul className="list-disc pl-5 space-y-1">
                              {Object.entries(data.pricing).map(
                                ([plan, price], index) => (
                                  <li key={index}>
                                    <strong>{plan}:</strong> {price}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </section>

              {/* Disciplinary action form template */}
              <section id="methodology">
                <div className="mb-8 sm:mb-12 mt-6">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      Methodology
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-800 text-base leading-relaxed mb-8">
                      I followed a strict process when organizing our list of
                      the best AI BI platforms available today. The methodology
                      follows a multi-pronged strategy:
                    </p>

                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gray-800 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-gray-800 text-base leading-relaxed">
                          Analyzing the key features of each product while
                          focusing on AI and BI platforms as much as possible
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gray-800 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-gray-800 text-base leading-relaxed">
                          Reading the reviews of real users who utilize AI tools
                          for business intelligence
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gray-800 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <span className="text-gray-800 text-base leading-relaxed">
                          Referring to personal experience with AI and BI
                          platforms
                        </span>
                      </li>
                    </ul>

                    <p className="text-gray-800 text-base leading-relaxed">
                      This strategy not only provides a clear overview of each
                      product's strengths, weaknesses, pros, and cons, but it
                      also highlights those that feature a combination of AI and
                      BI functionality—either natively or via third-party
                      integrations. Finally, it gives us a good idea of what
                      others experience when using these tools in their own,
                      unique settings.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="mt-8 max-w-7xl mx-auto">
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Frequently Asked Questions
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
                                ? "bg-[#386861] hover:bg-green-700"
                                : "bg-[#386861]0 hover:bg-green-700"
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

              <section id="bottom-line">
                <div className="mb-8 sm:mb-12 mt-6">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      Bottom Line
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      In today’s data-driven world, pairing the power of
                      business intelligence with the speed and intelligence of
                      AI is no longer optional — it’s essential. The tools
                      outlined in this guide are not just upgrades. They’re
                      strategic accelerators that can uncover deeper insights,
                      streamline operations, and sharpen your competitive edge.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Whether you need a solution that’s plug-and-play for
                      finance, rich in AI-driven analytics, or seamlessly
                      integrates with your existing tech stack, there’s a
                      platform here that fits. Choosing the right AI BI tool now
                      can position your business to act faster, think smarter,
                      and lead stronger in 2025 and beyond.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      <span className="font-bold">
                        {" "}
                        Ready to take the next step?
                      </span>{" "}
                      Evaluate your data needs, align with your business goals,
                      and test-drive the platform that best fits your vision,
                      because the companies that act on intelligence today will
                      define the market tomorrow.
                    </p>
                  </div>
                </div>
              </section>
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/b1.jpeg"
                      alt="J.R. Johnivan"
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-blue-600 text-xl font-medium mb-4">
                      <Link
                        href="/author/J.R. Johnivan"
                        className="hover:underline"
                      >
                        J.R. Johnivan
                      </Link>
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                      J.R. Johnivan is a 17-year veteran whose writing is
                      focused on innovation and technology, including IT,
                      computer networking, security, cloud computing, staffing,
                      human resources, real estate, sports, entertainment, and
                      more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Related posts */}
          <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-12 bg-white">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-8">
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
      </div>
    </>
  );
}
