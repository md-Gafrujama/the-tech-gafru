"use client";
import AccountingFrom from '../../../components/AccountingFrom';
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

export default function AccountingSoftwarePage() {
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
      id: "what-is-accounting-software",
      title: "What is accounting software?",
      active: false,
    },
    {
      id: "best-accounting-software",
      title: "Our picks for the best accounting software",
      active: false,
    },
    {
      id: "find-new-software",
      title: "Find your new accounting software",
      active: false,
    },
    {
      id: "key-features",
      title: "What are the key features of accounting software?",
      active: false,
    },
    {
      id: "benefits",
      title: "What are the benefits of accounting software?",
      active: false,
    },
    {
      id: "challenges",
      title: "What are some accounting software challenges?",
      active: false,
    },
    {
      id: "business-types",
      title: "What kinds of businesses use accounting software?",
      active: false,
    },
    {
      id: "choosing-software",
      title: "Choosing the best accounting software",
      active: false,
    },
  ]);

  // Form modal state
  const [isFormOpen, setIsFormOpen] = useState(false);

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

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-open form after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toolsContent = {
    zohoBooks: {
      title: "Zoho Books: Best for small businesses",
      logo: "/images/zoho-books.png",
      button: {
        text: "Visit Website",
        link: "https://www.zoho.com/books/",
      },
      scores: [
        { label: "User reviews", score: "4.5/5" },
        { label: "General features", score: "4.6/5" },
        { label: "Pricing", score: "4.8/5" },
        { label: "Interface", score: "4.7/5" },
        { label: "Invoicing", score: "4.8/5" },
        { label: "Integrations", score: "4.5/5" },
        { label: "Automation", score: "4.4/5" },
        { label: "Reporting", score: "4.6/5" },
        { label: "Mobile app", score: "4.3/5" },
        { label: "Customer support", score: "4.2/5" },
      ],
      pros: [
        "Excellent value for money with comprehensive features",
        "User-friendly interface suitable for non-accountants", 
        "Strong integration with other Zoho products",
      ],
      cons: [
        "Limited customization options compared to enterprise solutions",
        "Customer support can be slow during peak times",
        "Advanced features locked behind higher-tier plans",
      ],
      why: {
        intro: `Zoho Books stands out as the best accounting software for small businesses due to its perfect balance of comprehensive features and affordability. The software offers everything a growing business needs without the complexity of enterprise solutions.`,
        bullets: [
          "Comprehensive invoicing and expense tracking capabilities",
          "Seamless integration with banking and payment systems",
          "Project time tracking and inventory management features",
          "Regular feature updates and continuous improvement",
        ],
        outro: `With its continuous evolution and regular feature rollouts, Zoho Books demonstrates a commitment to meeting the changing needs of small businesses in today's digital landscape.`,
        extras: {
          "About Zoho Books": (
            <>
              <p className="text-black mb-4">
                <Link
                  href="https://www.zoho.com/books/"
                  className="text-green-600 hover:text-green-700 font-medium underline"
                >
                  Zoho Books
                </Link>{" "}
                has been a trusted name in the accounting software industry since 2011. Designed specifically for small businesses, it offers comprehensive features from invoicing and expense tracking to project time tracking and inventory management.
              </p>
              <p className="text-black mb-4">
                The software continues evolving with regular updates, including recent enhancements like drag-and-drop file importing, new transfer order fields, improved Timesheets calendar view, and advanced webhook creation capabilities.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Comprehensive Invoicing System
              </h4>
              <p className="text-black mb-4">
                Zoho Books provides a robust invoicing system that allows businesses to create professional invoices, set up recurring billing, and track payment status. The system supports multiple payment gateways and currencies, making it ideal for businesses with international clients.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Expense Tracking and Management
              </h4>
              <p className="text-black mb-4">
                Track business expenses effortlessly with automatic bank feeds, receipt scanning, and categorization. The software can automatically match transactions and reconcile accounts, saving significant time in bookkeeping tasks.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Project Time Tracking
              </h4>
              <p className="text-black mb-4">
                Built-in time tracking allows businesses to monitor project hours, track employee productivity, and bill clients accurately for time-based services. This feature is particularly valuable for service-based businesses and consultancies.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                Zoho Books offers competitive pricing with multiple tiers to accommodate different business sizes and needs. The pricing structure is transparent and provides excellent value for the features offered.
              </p>
              
              <h4 className="text-lg font-bold mb-2">Free plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>Free forever for businesses with revenue up to $50,000</li>
                <li>3 users maximum</li>
                <li>Basic invoicing and expense tracking</li>
                <li>Bank reconciliation</li>
              </ul>

              <h4 className="text-lg font-bold mb-2">Standard plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>$20 per month (billed annually)</li>
                <li>Up to 3 users</li>
                <li>Advanced invoicing features</li>
                <li>Inventory management</li>
                <li>Purchase order management</li>
              </ul>

              <h4 className="text-lg font-bold mb-2">Professional plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>$50 per month (billed annually)</li>
                <li>Up to 10 users</li>
                <li>Project time tracking</li>
                <li>Budgeting and forecasting</li>
                <li>Custom fields and workflows</li>
              </ul>
            </>
          ),
        },
      },
    },
    freshBooks: {
      title: "FreshBooks: Best for freelancers",
      logo: "/images/freshbooks.png",
      button: {
        text: "Visit Website",
        link: "https://www.freshbooks.com/",
      },
      scores: [
        { label: "User reviews", score: "4.4/5" },
        { label: "General features", score: "4.5/5" },
        { label: "Pricing", score: "4.2/5" },
        { label: "Interface", score: "4.8/5" },
        { label: "Invoicing", score: "4.9/5" },
        { label: "Time tracking", score: "4.7/5" },
        { label: "Expense tracking", score: "4.6/5" },
        { label: "Mobile app", score: "4.5/5" },
        { label: "Customer support", score: "4.7/5" },
        { label: "Reporting", score: "4.3/5" },
      ],
      pros: [
        "Extremely user-friendly interface designed for non-accountants",
        "Excellent time tracking and project management features",
        "Outstanding customer support and onboarding",
      ],
      cons: [
        "More expensive than competitors for similar features",
        "Limited inventory management capabilities",
        "Fewer integrations compared to other platforms",
      ],
      why: {
        intro: `FreshBooks excels as the best accounting software for freelancers due to its intuitive design and focus on the specific needs of independent professionals. Since 2003, it has been dedicated to making billing easier for small business owners and freelancers.`,
        bullets: [
          "Streamlined invoicing process with professional templates",
          "Built-in time tracking for accurate client billing",
          "Expense tracking with receipt capture via mobile app",
          "Client portal for easy communication and payments",
        ],
        outro: `With millions of users across 120+ countries, FreshBooks continues to innovate with features like time zone adjustments for global teams, making it ideal for today's distributed workforce.`,
        extras: {
          "About FreshBooks": (
            <>
              <p className="text-black mb-4">
                <Link
                  href="https://www.freshbooks.com/"
                  className="text-green-600 hover:text-green-700 font-medium underline"
                >
                  FreshBooks
                </Link>{" "}
                was founded in 2003 with a simple mission: make billing easier for small business owners and freelancers. Today, it serves millions of businesses in over 120 countries with features designed specifically for service-based businesses.
              </p>
            </>
          ),
          Pricing: (
            <>
              <h4 className="text-lg font-bold mb-2">Lite plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>$17 per month</li>
                <li>Up to 5 clients</li>
                <li>Unlimited invoicing and estimates</li>
                <li>Time tracking</li>
                <li>Basic reporting</li>
              </ul>

              <h4 className="text-lg font-bold mb-2">Plus plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>$30 per month</li>
                <li>Up to 50 clients</li>
                <li>Proposals and contracts</li>
                <li>Project management</li>
                <li>Advanced reporting</li>
              </ul>
            </>
          ),
        },
      },
    },
    xero: {
      title: "Xero: Best for growing businesses",
      logo: "/images/xero.png",
      button: {
        text: "Visit Website",
        link: "https://www.xero.com/",
      },
      scores: [
        { label: "User reviews", score: "4.3/5" },
        { label: "General features", score: "4.7/5" },
        { label: "Pricing", score: "4.4/5" },
        { label: "Interface", score: "4.6/5" },
        { label: "Bank reconciliation", score: "4.8/5" },
        { label: "Integrations", score: "4.9/5" },
        { label: "Multi-currency", score: "4.7/5" },
        { label: "Reporting", score: "4.6/5" },
        { label: "Collaboration", score: "4.5/5" },
        { label: "Mobile access", score: "4.4/5" },
      ],
      pros: [
        "Excellent integration ecosystem with 1000+ apps",
        "Strong multi-currency and international features",
        "Real-time collaboration with accountants and team members",
      ],
      cons: [
        "Limited customer support on lower-tier plans",
        "Phone support not available on all plans",
        "Some advanced features require third-party apps",
      ],
      why: {
        intro: `Xero is the ideal choice for growing businesses due to its scalable cloud-based architecture and extensive integration capabilities. Founded in 2006, it has become a favorite among businesses that need to collaborate with accountants and manage complex financial processes.`,
        bullets: [
          "Cloud-based access from any device with internet connection",
          "Comprehensive financial management tools",
          "Strong integration marketplace with specialized apps",
          "Real-time collaboration features for teams and advisors",
        ],
        outro: `Recent additions like bulk transaction reconciliation, cash flow projections, and project tracking capabilities make Xero even more valuable for businesses seeking streamlined financial management.`,
        extras: {
          "About Xero": (
            <>
              <p className="text-black mb-4">
                <Link
                  href="https://www.xero.com/"
                  className="text-green-600 hover:text-green-700 font-medium underline"
                >
                  Xero
                </Link>{" "}
                is a cloud-based accounting software designed for small to medium-sized businesses. Its comprehensive suite of financial management tools, including invoicing, bill payment, and bank reconciliation, are accessible from any device with internet connection.
              </p>
            </>
          ),
          Pricing: (
            <>
              <h4 className="text-lg font-bold mb-2">Early plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>$13 per month</li>
                <li>Up to 5 bills and 20 invoices</li>
                <li>Enter 5 bills and reconcile 20 bank transactions</li>
                <li>Basic reporting</li>
              </ul>

              <h4 className="text-lg font-bold mb-2">Growing plan</h4>
              <ul className="list-disc pl-5 text-black mb-4">
                <li>$37 per month</li>
                <li>Unlimited bills and invoices</li>
                <li>Bulk reconcile transactions</li>
                <li>Advanced reporting</li>
                <li>Multi-currency support</li>
              </ul>
            </>
          ),
        },
      },
    },
    neat: {
      title: "Neat: Best for receipt and expense tracking",
      logo: "/images/neat.png",
      button: {
        text: "Visit Website",
        link: "https://www.neat.com/",
      },
      scores: [
        { label: "User reviews", score: "4.2/5" },
        { label: "Receipt scanning", score: "4.8/5" },
        { label: "Expense tracking", score: "4.7/5" },
        { label: "Document management", score: "4.6/5" },
        { label: "Automation", score: "4.5/5" },
        { label: "Integrations", score: "4.3/5" },
        { label: "Mobile app", score: "4.4/5" },
        { label: "Reporting", score: "4.2/5" },
        { label: "User interface", score: "4.3/5" },
        { label: "Customer support", score: "4.1/5" },
      ],
      pros: [
        "Superior receipt scanning and document management",
        "Automated expense categorization and tracking",
        "Strong integration with banking systems",
      ],
      cons: [
        "Limited full accounting features compared to competitors",
        "More expensive for comprehensive accounting needs",
        "Smaller feature set for invoicing and billing",
      ],
      why: {
        intro: `Neat specializes in receipt and expense tracking, making it the perfect solution for businesses that need robust expense management. Its evolution from desktop software to cloud-based automated bookkeeping reflects its commitment to innovation.`,
        bullets: [
          "Advanced receipt scanning and OCR technology",
          "Automatic bank and credit card transaction syncing",
          "Intelligent expense categorization and reporting",
          "Full-service bookkeeping capabilities with NeatBooks",
        ],
        outro: `The 2021 introduction of NeatBooks and NeatInvoices transformed Neat into a comprehensive bookkeeping solution while maintaining its strength in expense management.`,
        extras: {
          "About Neat": (
            <>
              <p className="text-black mb-4">
                <Link
                  href="https://www.neat.com/"
                  className="text-green-600 hover:text-green-700 font-medium underline"
                >
                  Neat
                </Link>{" "}
                started as a desktop application for managing expenses and documents, evolving to focus on cloud-based solutions. In 2021, it expanded with NeatBooks and NeatInvoices, becoming a full-service bookkeeping tool.
              </p>
            </>
          ),
        },
      },
    },
    kashoo: {
      title: "Kashoo: Best for startups",
      logo: "/images/kashoo.png",
      button: {
        text: "Visit Website",
        link: "https://kashoo.com/",
      },
      scores: [
        { label: "User reviews", score: "4.3/5" },
        { label: "Ease of use", score: "4.7/5" },
        { label: "Pricing", score: "4.6/5" },
        { label: "Features", score: "4.2/5" },
        { label: "Mobile app", score: "4.3/5" },
        { label: "Customer support", score: "4.5/5" },
        { label: "Automation", score: "4.4/5" },
        { label: "Invoicing", score: "4.3/5" },
        { label: "Reporting", score: "4.1/5" },
        { label: "Integration", score: "4.0/5" },
      ],
      pros: [
        "Simple, user-friendly interface perfect for beginners",
        "Affordable pricing ideal for startups and small businesses",
        "Focus on automation and simplicity",
      ],
      cons: [
        "Limited advanced features compared to enterprise solutions",
        "Fewer integrations than larger competitors",
        "Basic reporting capabilities",
      ],
      why: {
        intro: `Kashoo excels as the best accounting software for startups due to its focus on simplicity and automation. This Vancouver-based company has been simplifying accounting for small businesses for over a decade, with their cloud-based software popular in over 180 countries.`,
        bullets: [
          "Designed specifically for small business needs",
          "Automatic matching and reconciliation features",
          "Customizable invoice design and templates",
          "User-friendly interface that doesn't require accounting knowledge",
        ],
        outro: `Kashoo's team uses their own software for their business, ensuring they understand the real-world needs of small business owners and continuously improve the product based on user feedback.`,
        extras: {
          "About Kashoo": (
            <>
              <p className="text-black mb-4">
                <Link
                  href="https://kashoo.com/"
                  className="text-green-600 hover:text-green-700 font-medium underline"
                >
                  Kashoo
                </Link>{" "}
                is a Vancouver-based company that has been simplifying accounting for small businesses for over a decade. Their cloud-based software, popular in over 180 countries, focuses on automation and simplicity.
              </p>
            </>
          ),
        },
      },
    },
  };

  // Convert toolsContent object to array for mapping
  const toolsArray = Object.entries(toolsContent).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Best Accounting Software for Business 2025";

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
        <title>
          Best Accounting Software for Business 2025 | Hand-Picked by Experts
        </title>
        <meta
          name="description"
          content="Comprehensive guide to choosing the best accounting software for your business needs. Expert reviews of top accounting solutions including Zoho Books, FreshBooks, Xero, Neat, and Kashoo."
        />

        {/* Open Graph (Facebook + LinkedIn) */}
        <meta
          property="og:title"
          content="Best Accounting Software for Business 2025"
        />
        <meta
          property="og:description"
          content="Expert-curated list of the best accounting software solutions for businesses of all sizes."
        />
        <meta
          property="og:image"
          content="https://blogs.compare-bazaar.com/images/accounting-software.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta
          property="og:url"
          content="https://technology-advice.vercel.app/software-reviews/accounting"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Martechbiz" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Accounting Software for Business 2025"
        />
        <meta
          name="twitter:description"
          content="Expert-curated list of the best accounting software solutions for businesses of all sizes."
        />
        <meta
          name="twitter:image"
          content="https://blogs.compare-bazaar.com/images/accounting-software.webp"
        />

        <link
          rel="canonical"
          href="https://technology-advice.vercel.app/software-reviews/accounting"
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
              <span className="text-white font-medium">
                Best Accounting Software for Business 2025
              </span>
            </div>
          </nav>

          {/* Main Heading */}
          <div className="max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16">
              Best Accounting Software for
              <span className="block mt-2 sm:mt-4">Business 2025</span>
            </h1>

            {/* CTA Button Section */}
            <div className="max-w-4xl xl:max-w-5xl mb-8 sm:mb-12 lg:mb-16">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-[#00d9a6] to-[#386861] hover:from-[#00c496] hover:to-[#00e3a7] text-white font-bold text-base sm:text-lg lg:text-xl rounded-xl sm:rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00d9a6]/40 focus:outline-none focus:ring-4 focus:ring-[#00d9a6]/50 active:scale-95 overflow-hidden"
                  aria-label="Get free quotes for accounting software"
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
                    Compare top accounting solutions in 60 seconds
                  </div>
                </div>
              </div>
              
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
              `}</style>
            </div>
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
        </div>
      </div>

      {/* Table of Contents - Left Sidebar */}
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                          ? "bg-green-50 text-[#386861] border-l-4 border-green-500 font-medium"
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
                      className="w-12 h-12 rounded-full bg-[#386861] text-white flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
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
              {/* What is accounting software section */}
              <section id="what-is-accounting-software">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      What is accounting software?
                    </h1>
                  </header>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Accounting software is an electronic version of an accountant's general ledger that also keeps your books accurate, organized, and searchable. Revenues, expenses, assets, and liabilities are digitally recorded and tracked to maintain a complete picture of your business's financial health.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      This technology can take various forms and offer a myriad of features based on the needs of a particular business or industry. However, most accounting systems share similar features and functionality.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      The best business accounting software assists businesses with processes such as bookkeeping, payroll, accounts payable, and accounts receivable.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      We reviewed 25 top accounting software solutions and narrowed it down to the best of the best:
                    </p>

                    {/* Recommendations List */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-[#386861]"
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
                        <p className="text-gray-700">
                          <strong>Zoho Books:</strong> Best for small businesses
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-[#386861]"
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
                        <p className="text-gray-700">
                          <strong>FreshBooks:</strong> Best for freelancers
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-[#386861]"
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
                        <p className="text-gray-700">
                          <strong>Xero:</strong> Best for growing businesses
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-[#386861]"
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
                        <p className="text-gray-700">
                          <strong>Neat:</strong> Best for receipt and expense tracking
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-[#386861]"
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
                        <p className="text-gray-700">
                          <strong>Kashoo:</strong> Best for startups
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Best accounting software section */}
              <section id="best-accounting-software">
                <h1 className="text-3xl font-bold mt-8 text-black mb-2">
                  Our picks for the best accounting software
                </h1>

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

                    {/* Scores */}
                    <div className="space-y-4 text-black mb-6">
                      {tool.scores.map((score, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm font-medium mb-1">
                            <span>{score.label}</span>
                            <span>{score.score}</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div
                              className="bg-[#386861] h-2 rounded-full"
                              style={{
                                width: `${
                                  (parseFloat(score.score) / 5) * 100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

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

                    {/* Why I Chose Section */}
                    <div className="mb-6 text-black">
                      <h3 className="text-lg font-semibold mb-2">
                        Why we chose {tool.title.split(":")[0]}
                      </h3>
                      <p className="mb-4">{tool.why.intro}</p>
                      {tool.why.bullets && (
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          {tool.why.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      {tool.why.outro && <p>{tool.why.outro}</p>}
                    </div>

                    {/* Expandable Sections */}
                    {tool.why.extras &&
                      Object.entries(tool.why.extras).map(
                        ([label, content]) => {
                          const sectionKey = `${tool.id}-${label}`;
                          return (
                            <div
                              key={sectionKey}
                              className="border-t text-black pt-4 mb-4"
                            >
                              <button
                                onClick={() => toggleSection(sectionKey)}
                                className="w-full flex justify-between items-center font-medium"
                              >
                                <span>{label}</span>
                                <span className="text-[#386861]">
                                  {openSections[sectionKey] ? (
                                    <Minus className="w-5 h-5" />
                                  ) : (
                                    <Plus className="w-5 h-5" />
                                  )}
                                </span>
                              </button>
                              {openSections[sectionKey] && (
                                <div className="mt-2 text-gray-700">
                                  {typeof content === "string" ? (
                                    <p>{content}</p>
                                  ) : (
                                    content
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        }
                      )}
                  </div>
                ))}
              </section>

              {/* Find your new accounting software section */}
              <section id="find-new-software">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-8 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Find your new accounting software
                  </h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    What are the categories of accounting software?
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Accounting software comes in many forms. The tools listed below will help you understand which type you'll need and give you some information on which features to look for.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Core accounting</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Core accounting software retains the company's general ledger and performs accounts receivable and payable, basic tax filing functions, payroll, bookkeeping and bank reconciliation. With these functions, companies can improve their organization and move beyond just tracking accounts on paper or in a spreadsheet.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Payroll</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Payroll software can be combined with general accounting tools or run as a standalone system. Teams looking for the best payroll software should look for a system that integrates with or includes time and attendance software, automates payroll for salaried and hourly wage workers, and complies with tax and regulatory statutes for the company's locations.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">ERP</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Enterprise resource planning (ERP) software is a feature-rich tool that combines many categories of accounting software including core accounting, inventory, ecommerce, supply chain management, and even business intelligence solutions. Many companies can centralize all of their data in one complete ERP system, providing better organization and greater functionality.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Billing and invoicing</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Deceptively simple in theory, billing and invoicing can be complicated and frustrating if you don't have the right tools. Billing and invoicing software manages the complex accounting gymnastics that many accounts payable and receivable departments perform.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Project accounting</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Project accounting software streamlines complex, interdepartmental or inter-company projects with sensitive resource and capital allocations. Providing time and expense tools, human and material resource management, and billing and invoicing features alongside project management task management and analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key features section */}
              <section id="key-features">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-8 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    What are the key features of accounting software?
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    No matter your industry or business model, the top accounting solutions offer the following standard features or functionality.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Accounts payable/receivable</h3>
                      <p className="text-gray-700 leading-relaxed">
                        As the most commonly used feature of any accounting solution, electronic management and tracking of A/P and A/R is included in every system with varying levels of automation. The accounts payable features track payments to vendors, suppliers, and other financial outlays to ensure your payments are prompt.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Asset management</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Electronically tracking and realizing depreciation costs for a company's material fixed assets is a major function of most accounting systems. While less important to small businesses without expensive capital assets, manufacturing businesses especially need these tools.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Bank reconciliation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The key to automating many of your accounting functions is to connect your software directly with your financial institution. This allows you to reconcile the accounting transactions you've recorded with your bank's records for your company's accounts.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Reporting</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Besides electronically recording transactions, the most-cited reason for purchasing accounting software is the automated reporting feature. There are templates for income statements, profit and loss, sales tax return, and even outstanding balances.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Budgeting and forecasting</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Critical to the forward-thinking company, budgeting and forecasting tools give companies insight into their past revenue and spending habits to help them better use their resources and plan for future financial success.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits section */}
              <section id="benefits">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-8 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    What are the benefits of accounting software?
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    These accounting software benefits can have far-reaching effects across the entire company's financial systems.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Time savings</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The most immediate change many companies notice when they move from paper ledgers or spreadsheets to accounting software is a major reduction in the time spent entering and balancing ledgers.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Reduction in manual data entry errors</h3>
                      <p className="text-gray-700 leading-relaxed">
                        When using tools like MS Excel, the risk of human error when working with spreadsheet formulas is much greater compared to using accounting software specialized for a client or industry.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Greater account visibility</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Top accounting features and tools provide visibility into the balance sheet and the financial workings of a company for accountants, executives, and management teams.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-device access</h3>
                      <p className="text-gray-700 leading-relaxed">
                        As a business owner, you can't always be in the office. Accounting software can make this easy by offering mobile-friendly formats and applications.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time engagement</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Every business owner wants to know what their bottom line looks like. They should have the ability to see where they're at in real time so they have the option to correct course immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Challenges section */}
              <section id="challenges">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-8 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    What are some accounting software challenges?
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    These are challenges you might run into if you choose accounting software that isn't the right fit for your company. Consider these as you compare accounting software.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-currency and multi-country support</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Some accounting systems are only built to manage finances within a specific country or in a select few currencies. Companies that often do business across two or more countries should look for an accounting tool that meets those requirements.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Data security</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Your accounting records are precious data and need to be protected. Cloud computing provides more security for accounting software than paper ledgers because they can be password protected and teams can assign granular user roles.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Reporting and analytics</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Without the right data, it can be difficult to know exactly where your accounts stand and even tougher to make budgeting decisions and predictions. When looking for accounting software, you need to look for tools that offer in-depth reporting and analytics features.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Business types section */}
              <section id="business-types">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-8 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    What kinds of businesses use accounting software?
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Accounting software is available in nearly as many shapes and sizes as there are company types. These are the main types of businesses that use accounting tools to manage their financial accounts.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Small businesses and nonprofits</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Small businesses will find increased financial visibility and easier records reconciliation when they switch from spreadsheets to a general ledger or core accounting software.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Growing and mid-size businesses</h3>
                      <p className="text-gray-700 leading-relaxed">
                        A growing business has potential and hopes for future expansion, which can be confusing when buying accounting software. These teams need increased functionality and the ability to upgrade quickly.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise and multinational businesses</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The specific requirements of enterprise and multinational organizations include multi-currency and multinational regulatory requirements, supply chain, manufacturing, and business intelligence needs.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Accounting firms</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Accounting firms provide outsourced financial services to small businesses as well as those of all sizes that don't have an in-house accounting department.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Choosing software section */}
              <section id="choosing-software">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-8 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Choosing the best accounting software
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Trial</h3>
                      <p className="text-gray-700 leading-relaxed">
                        To truly understand which accounting software is best for your company before you buy, you'll want to look for software vendors who are willing to let you peek behind the curtain with a free trial. With an application as complicated as accounting software, you'll want to look for a trial that provides enough time to test major features.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Case studies and referrals</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Accounting software sales reps and marketing websites can tell you all about the benefits their software provides, but where's the proof? The best accounting software vendors will be able to show their worth via case studies and referrals to current power users.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">RFP</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Your software selection team should formulate a request for proposals (RFP) early in the selection process. A good software RFP should contain:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Specific business goals your team would like to reach with this software</li>
                        <li>A list of must-have and nice-to-have features you're looking for</li>
                        <li>A list of specialized industry or regulatory requirements that this software will need to fit</li>
                      </ul>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Finding the right accounting software for your business
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Accounting software is a vital tool for businesses of all sizes, offering a range of features from core accounting to payroll, ERP, billing and invoicing, and project accounting. The choice of accounting software should be based on the specific needs of the business, the complexity of financial records, and feature requirements. Remember to consider challenges like multi-currency support, data security, and reporting capabilities when making your decision.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal */}
     {/* Form Modal */}
{isFormOpen && (
  <div className="fixed inset-0 backdrop-blur-md bg-white/20 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
      <button
        onClick={() => setIsFormOpen(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        aria-label="Close modal"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <AccountingFrom onClose={() => setIsFormOpen(false)} />
    </div>
  </div>
)}

    </>
  );
}
