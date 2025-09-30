 "use client";
 
import React, { useState, useEffect } from "react";
import {
  Home,
  CheckCircle2,
  Calendar,
 
  Users,
 
  CheckCircle,  Shield, TrendingUp, Award,    ArrowRight, Plus, Minus, BarChart3, UserCheck, DollarSign, BookOpen, MessageSquare,Target,Building,Clock, 
 ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { FaThumbsUp, FaRegSun,FaMagic,FaStar,FaLinkedinIn  } from 'react-icons/fa';
import { FiSearch,FaCheckCircle ,FiChevronDown, FiChevronUp, FiExternalLink   } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa6';
export default function HRSoftwarePage() {
  const [expandedSection, setExpandedSection] = useState(null);
 const browseGuides = [
    { title: "Applicant Tracking System (ATS) Recruiting", icon: <UserCheck className="w-4 h-4" /> },
    { title: "Onboarding", icon: <BookOpen className="w-4 h-4" /> },
    { title: "Performance Management", icon: <Target className="w-4 h-4" /> },
    { title: "Learning Management System (LMS)", icon: <Calendar className="w-4 h-4" /> },
    { title: "Mentoring", icon: <Users className="w-4 h-4" /> },
    { title: "Employee Engagement", icon: <Award className="w-4 h-4" /> },
    { title: "Payroll", icon: <DollarSign className="w-4 h-4" /> },
    { title: "Global Payroll", icon: <Building className="w-4 h-4" /> },
    { title: "Benefits Administration", icon: <Shield className="w-4 h-4" /> },
    { title: "Employee Scheduling", icon: <Calendar className="w-4 h-4" /> },
    { title: "Time Clock", icon: <Clock className="w-4 h-4" /> }
  ];

  const alternatives = [
    { title: "ADP Competitors & Alternatives", icon: <Building className="w-4 h-4" /> },
    { title: "Gusto Competitors & Alternatives", icon: <DollarSign className="w-4 h-4" /> },
    { title: "BambooHR Competitors & Alternatives", icon: <Users className="w-4 h-4" /> },
    { title: "Zenefits Competitors & Alternatives", icon: <Shield className="w-4 h-4" /> },
    { title: "Workday Competitors & Alternatives", icon: <BarChart3 className="w-4 h-4" /> },
    { title: "Rippling Competitors & Alternatives", icon: <TrendingUp className="w-4 h-4" /> }
  ];

  const comparisons = [
    { title: "Zenefits vs. Gusto", icon: <TrendingUp className="w-4 h-4" /> },
    { title: "Namely vs. Zenefits", icon: <Users className="w-4 h-4" /> },
    { title: "Workday vs. PeopleSoft", icon: <Building className="w-4 h-4" /> },
    { title: "Workday vs. Oracle HCM", icon: <BarChart3 className="w-4 h-4" /> },
    { title: "UKG vs. Workday", icon: <Target className="w-4 h-4" /> },
    { title: "Gusto vs. ADP", icon: <DollarSign className="w-4 h-4" /> },
    { title: "ADP vs. Paychex", icon: <Shield className="w-4 h-4" /> },
    { title: "ADP vs. Paycom", icon: <Award className="w-4 h-4" /> },
    { title: "IntelliHR vs. Workday", icon: <BookOpen className="w-4 h-4" /> },
    { title: "Workday vs. SAP SuccessFactors", icon: <TrendingUp className="w-4 h-4" /> }
  ];

  const recommendations = [
    { title: "Top HR Information System (HRIS) Software", icon: <BarChart3 className="w-4 h-4" /> },
    { title: "Top HR Management System (HRMS) Software", icon: <Users className="w-4 h-4" /> },
    { title: "Top Human Capital Management (HCM) Software", icon: <Building className="w-4 h-4" /> },
    { title: "Best HR Software for Enterprises", icon: <TrendingUp className="w-4 h-4" /> },
    { title: "Best HR Software for Small Businesses", icon: <Target className="w-4 h-4" /> },
    { title: "Best Pre-Employment Testing Software", icon: <UserCheck className="w-4 h-4" /> },
    { title: "Best Accounts Payable Software", icon: <DollarSign className="w-4 h-4" /> }
  ];
 

  const coreSoftware = [
    {
      title: "Human resources information system (HRIS)",
      icon: <Users className="w-5 h-5" />,
      description: "Centralized database for all employee information and HR processes"
    },
    {
      title: "Human resources management system (HRMS)",
      icon: <Shield className="w-5 h-5" />,
      description: "Comprehensive system managing all HR functions from hiring to retirement"
    },
    {
      title: "Human capital management (HCM) software",
      icon: <TrendingUp className="w-5 h-5" />,
      description: "Strategic approach to workforce optimization and talent management"
    }
  ];

  const functionSpecific = [
    {
      title: "Recruiting",
      icon: <UserCheck className="w-5 h-5" />,
      description: "Streamline hiring processes and candidate management"
    },
    {
      title: "Onboarding",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Automate new employee orientation and training"
    },
    {
      title: "Payroll software",
      icon: <DollarSign className="w-5 h-5" />,
      description: "Manage compensation, benefits, and tax compliance"
    },
    {
      title: "Performance management",
      icon: <Award className="w-5 h-5" />,
      description: "Track employee performance and career development"
    },
    {
      title: "Employee engagement",
      icon: <MessageSquare className="w-5 h-5" />,
      description: "Foster workplace culture and employee satisfaction"
    },
    {
      title: "Learning management systems (LMS)",
      icon: <Calendar className="w-5 h-5" />,
      description: "Deliver training programs and track skill development"
    }
  ];

  const benefits = [
    {
      title: "Efficiency",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "HR software solutions are designed to consolidate capabilities that drive the efficiency of different HR processes. When HR staff can spend less time on repetitive manual tasks, they are able to focus on more valuable priorities. Additionally, HR software provides employees with direct access to the updated employee handbook so they can complete tasks like direct deposit elections or benefits enrollment independently."
    },
    {
      title: "Compliance",
      icon: <Shield className="w-6 h-6" />,
      description: "Compliance with HR-related laws and regulations is usually non-negotiable because of the costly penalties associated with violations. HR software helps organizations stay in compliance with current local, state, and federal requirements by automatically updating processes. Typically, this manifests as built-in overtime and pay compliance warnings, legally mandated paperwork tracking, reminders about compliance deadlines, and automated best practices documents."
    },
    {
      title: "Reporting",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Robust HR software reporting features help organizations make informed decisions with accurate data. Many HR platforms offer report generation templates to help users find the information they need, and others offer advanced plugins to support deeper data insights like predictive analytics and natural language processing."
    }
  ];
    const [filters, setFilters] = useState({
    reviews: '',
    pricing: '',
    companySize: '',
    sort: 'Featured',
    perPage: '10 per page',
    search: '',
  });
   const keyFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance Management",
      description: "Payroll and benefits administration with built-in safeguards"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Recruitment & Retention",
      description: "Streamlined hiring processes and employee engagement tools"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Tracking",
      description: "Employee development and performance management systems"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Data Insights",
      description: "Analytics for effective workforce planning and decision-making"
    }
  ];

  const considerations = [
    "Business size and scalability needs",
    "Available budget and ROI expectations",
    "Current HR processes and workflows",
    "Integration requirements with existing systems",
    "Compliance and security requirements",
    "User experience and adoption ease"
  ];

 const products = [
  {
    logo: '/images/keka.png',
    name: 'Keka HR',
    reviews: '6 reviews',
    stars: 4.5,
    companySize: 'Medium (250–999 Employees)',
    description: `A true employee experience platform, Keka is the SME HR Tech space leader in India. It enables businesses of all sizes to manage and digitize total tasks of workplace administration...`,
    button: { text: 'Visit Website', type: 'primary' },
  },
  {
    logo: '/images/monitask.png',
    name: 'Monitask',
    reviews: '7 reviews',
    stars: 4.7,
    companySize: 'Micro – Enterprise – Any Company Size',
    description: `Optimize your team's performance with Monitask—your comprehensive employee monitoring and productivity tracking solution...`,
    button: { text: 'Visit Website', type: 'primary' },
  },
  {
    logo: '/images/15five.png',
    name: '15Five',
    reviews: '51 reviews',
    stars: 4.7,
    companySize: 'Any Company Size',
    description: `15Five is a continuous performance management solution that helps employees grow and develop, in just 15 minutes each week...`,
    button: { text: 'Visit Product Profile', type: 'secondary' },
  },
  {
    logo: '/images/access.png',
    name: 'Access SelectHR',
    reviews: 'Leave a Review',
    stars: 0,
    companySize: 'Medium, Enterprise, Large',
    description: `The Access Group develops business management solutions, specifically HR software. Their products are used by over 100,000 customers in the United Kingdom...`,
    button: { text: 'Visit Product Profile', type: 'secondary' },
  },
    {
    logo: '/images/acquiretm.png',
    name: 'AcquireTM',
    reviews: '1 review',
    stars: 4.0,
    companySize: 'Micro (0–49), Medium (250–999), Large (1,000–4,999), Small (50–249)',
    description: `AcquireTM is a cloud-based applicant tracking and talent acquisition solution that provides a complete hiring platform for small or mid-sized businesses...`,
    button: { text: 'Visit Product Profile', type: 'secondary' },
  },
  {
    logo: '/images/activtrak.png',
    name: 'ActivTrak',
    reviews: 'Leave a Review',
    stars: 0,
    companySize: 'Medium (250–999), Large (1,000–4,999)',
    description: `ActivTrak’s workforce analytics provide predictive insights that help leaders, managers, and employees build trust, deepen engagement and boost productivity...`,
    button: { text: 'Visit Product Profile', type: 'secondary' },
  },
  {
    logo: '/images/adaptive.png',
    name: 'Adaptive Suite – Adaptive Insights',
    reviews: 'Leave a Review',
    stars: 0,
    companySize: 'Medium, Enterprise (5,000+), Large',
    description: `Adaptive Suite is the only unified, cloud-based corporate performance management software...`,
    button: { text: 'Visit Product Profile', type: 'secondary' },
  },
  {
    logo: '/images/adp.png',
    name: 'ADP',
    reviews: '1 review',
    stars: 1.0,
    companySize: 'Any Company Size',
    description: `ADP HR services that empower: Hiring, Onboarding, Managing HR compliance. Whether you’ve got urgent questions or are seeking support...`,
    button: { text: 'Visit Product Profile', type: 'secondary' },
  },
];

   const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  const Dropdown = ({ label, options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  }
  const [tableOfContents, setTableOfContents] = useState([
    {
      id: "hr-software",
      title: "What is HR software?",
      active: false,
    },
 
    {
      id: "best-HR-software",
      title: "My picks for the best HR software",
      active: false,
    },
     {
      id: "ADP-Workforce-Now-Best-overall",
      title: "ADP Workforce Now: Best overall",
      active: false,
    },
       {
      id: "Deel-Best-for-startups",
      title: "Deel: Best for startups",
      active: false,
    },
  
      {
      id: "BambooHR-Best-for-small-businesses",
      title: "   BambooHR: Best for small businesses",
      active: false,
    },
      {
      id: "Rippling-Best-for-midsize-businesses",
      title: "Rippling: Best for midsize businesses",
      active: false,
    },
      {
      id: "SAP-SuccessFactors-HCM-Best-for-large-enterprises",
      title: "SAP SuccessFactors HCM: Best for large enterprises",
      active: false,
    },
    {
      id: "honorable-mentions",
      title: "Honorable Mentions",
      active: false,
    },
    {
      id: "new-HR-software",
      title: "Find your new HR software",
      active: false,
    },

    {
      id: "how-to-choose",
      title: "How do you choose the best HR software?",
      active: false,
    },
    {
      id: "types-of-softwre",
      title: "What are the types of HR software?",
      active: false,
    },
    {
      id: "core-software",
      title: "Core HR software",
      active: false,
    },
    {
      id: "function-specific-software",
      title: "Function-specific HR software",
      active: false,
    },
    {
      id: "benefits",
      title: "What are the benefits of HR software?",
      active: false,
    },
  ]);
  const data = [
    {
      logo: "/images/adp.png",
      name: "ADP Workforce Now",
      link: "#",
      score: "3.95",
      useCase: "Best overall",
      price: "$8/employee",
    },
    {
      logo: "/images/deel.png",
      name: "Deel",
      link: "#",
      score: "3.64",
      useCase: "Best for startups",
      price: "$19/employee",
    },
    {
      logo: "/images/bamboohr.png",
      name: "Bamboo",
      link: "#",
      score: "3.64",
      useCase: "Best for small businesses",
      price: "$250/mo. for 20 employees",
    },
    {
      logo: "/images/rippling.png",
      name: "Rippling",
      link: "#",
      score: "4.05",
      useCase: "Best for midsized businesses",
      price: "$40/mo. + $8/employee",
    },
    {
      logo: "/images/sap.png",
      name: "SAP SuccessFactors HCM",
      link: "#",
      score: "3.81",
      useCase: "Best for enterprises",
      price: "$75.50/user",
    },
    {
      logo: "/images/paycor.png",
      name: "Paycor",
      link: "#",
      score: "3.83",
      useCase: "Best for companies with field and frontline workers",
      price: "Contact sales",
    },
    {
      logo: "/images/paylocity.png",
      name: "Paylocity",
      link: "#",
      score: "3.76",
      useCase: "Best for workforce management",
      price: "$99/mo. + $6/employee",
    },
    {
      logo: "/images/gusto.png",
      name: "Gusto",
      link: "#",
      score: "3.50",
      useCase: "Best for new businesses in the U.S.",
      price: "$49/mo. + $6/employee",
    },
  ];
    const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const sections = [
    {
      title: 'Need Help? Talk to an HR Software Advisor',
      content: 'Speak with a software expert to get personalized HR recommendations for your business needs.'
    },
    {
      title: 'Why you can trust my advice',
      content: 'All recommendations are based on in-depth research, verified reviews, and hands-on software trials.'
    },
    {
      title: 'Methodology',
      content: 'We evaluated over 30 HR software platforms based on pricing, features, support, and user feedback.'
    },
    {
      title: 'Update notes',
      content: 'Content was last updated on April 25, 2025, with the latest pricing and features for each tool.'
    }
  ];

  // const toggleSection = (sectionKey, labelKey = null) => {
  //   setExpandedSections((prev) => ({
  //     ...prev,
  //     [sectionKey]: !prev[sectionKey],
  //   }));

  //   if (labelKey) {
  //     setActiveSection((prev) => (prev === sectionKey ? null : sectionKey));
  //     setOpenSection((prev) => (prev === labelKey ? null : labelKey));
  //   }

  //   setOpenSections((prev) => ({
  //     ...prev,
  //     [sectionKey]: !prev[sectionKey],
  //   }));
  // };

  // const toggleItem = (index) => {
  //   setOpenItems((prev) => ({
  //     ...prev,
  //     [index]: !prev[index],
  //   }));
  // };

  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };
  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);
  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);

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
//  const [openSection, setOpenSection] = useState(null);

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };
    // Set initial active state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const adpScores = [
  { label: "Overall score", value: 3.95 },
  { label: "HRIS and reporting", value: 4.63 },
  { label: "Payroll and benefits", value: 4.38 },
  { label: "Pricing", value: 2.69 },
  { label: "Platform/interface", value: 3.80 },
  { label: "Workforce management", value: 4.13 },
  { label: "Talent acquisition", value: 4.00 },
  { label: "Employee relations", value: 3.66 },
  { label: "Support", value: 3.88 },
  { label: "User scores", value: 4.40 },
];

const pros = [
  "Narrative insights to assist with people data analysis.",
  "Optional HR advisory services for enhanced compliance.",
  "Extensive product line for fast-growing companies.",
  "Global payroll support for over 140 countries.",
];

const cons = [
  "Benefits administration is only available on the Plus plan and higher.",
  "Time and labor management is only available in the highest subscription tier.",
];

  // const toolsContent = {
  //   ADP: {
  //     title: "ADP Workforce Now: Best overall",
  //     logo: "/images/ADP.jpeg",
  //     button: {
  //       text: "Visit Website",
  //       link: "#",
  //     },
  //     scores: [
  //       { label: "Overall Score", score: "3.9/5" },

  //       { label: "HRIS and reporting", score: "4.63/5" },
  //       { label: "Payroll and benefits", score: "4.38/5" },
  //       { label: "Pricing", score: "2.69/5" },
  //       { label: "Platform/interface", score: "3.80/5" },
  //       { label: "Workforce management", score: "4.13/5" },
  //       { label: "Talent acquisition", score: "4.0/5" },
  //       { label: "Employee relations", score: "3.66/5" },
  //       { label: "Support", score: "3.88/5" },
  //       { label: "User scores", score: "4.40/5" },
  //     ],
  //     pros: [
  //       "Narrative insights to assist with people data analysis.",
  //       "Optional HR advisory services for enhanced compliance.",
  //       "Extensive product line for fast-growing companies.",
  //       "Global payroll support for over 140 countries.",
  //     ],
  //     cons: [
  //       "Benefits administration is only available on the Plus plan and higher.",
  //       "Time and labor management is only available in the highest subscription tier.",
  //       "Several features, like recruiting, are powered through acquisitions or third-party partnerships.",
  //       "Users report slow customer service and turnaround times.",
  //     ],
  //     why: {
  //       intro: `ADP Workforce Now’s scalability makes it the king of HR software. It bridges the gap between simple human resources information systems (HRIS) and full-scale human capital management (HCM) platforms. In fact, ADP uses Workforce Now as the software to facilitate many of its optional services, like it’s PEO, TotalSource, and global payroll.`,
  //       body: `True, Workforce Now lost points for its hard-to-navigate interface and for forcing users to purchase its top plans for access to workforce management and benefits administration modules. Yet, ADP is making moves to make the software less clunky so that it is more accessible for small and large teams alike. For example, the addition of ADP Assist, its AI assistant is a huge improvement for finding information and streamlining HR processes.`,
  //       outro: `Workforce Now’s add-on modules, massive product and services catalog, and open API make it stand out among competitors. Choosing Workforce Now also reduces the likelihood of having to jump to a new solution in the future if you grow or shrink since the platform can accommodate your business shifts.`,
  //       extras: {
  //         "About ": (
  //           <>
  //             <p className="text-black mb-4">
  //               ADP Workforce Now is an all-in-one human resources management
  //               system (HRMS) with a range of features to support the employee
  //               life cycle from recruitment to separation. Its business
  //               services, customization options, and extensive integration
  //               library make it the best HR software overall.
  //             </p>
  //             <p className="text-black">
  //               ADP Workforce Now’s 3.95 straddles the line between the needs of
  //               both small and large businesses. For example, small businesses
  //               can take advantage of its many HR services, including human
  //               resources outsourcing (HRO) or professional employer
  //               organization (PEO) and employers of record (EOR). Enterprises,
  //               meanwhile, will like its workforce analytics to help with
  //               strategic initiatives, like reducing turnover.
  //             </p>
  //           </>
  //         ),
  //         "Key Features": (
  //           <>
  //             <h4 className="text-lg font-bold mb-2">
  //               Breadth of integrations:
  //             </h4>
  //             <p className="text-black mb-4">
  //               ADP Workforce Now clients have access to ADP Marketplace. Here,
  //               you can find solutions to integrate with ADP Workforce Now and
  //               consolidate your data among your entire HR tech stack.
  //             </p>
  //             <p className="text-black mb-4">
  //               With integrations available for performance management, time
  //               tracking, employee engagement, recruiting, learning management,
  //               and financial wellness, you do not have to sacrifice the HR
  //               platforms you already use to start with ADP.
  //             </p>
  //             <h4 className="text-lg font-bold mb-2">
  //               Robust payroll functionality
  //             </h4>
  //             <p className="text-black mb-4">
  //               ADP is well-known for its advanced payroll features. You can
  //               easily create multiple payroll schedules from ADP Workforce
  //               Now’s payroll dashboard to cover different employee
  //               classifications. Plus, once you finalize payroll, you can click
  //               a button and automatically prepare and download a general ledger
  //               file to upload into your accounting system ADP also accommodates
  //               more industry- or company-specific payroll needs. For example,
  //               if you’re a federal contractor, ADP can help you run certified
  //               payroll. Or, if you’re in a service industry like food or
  //               hospitality, ADP can calculate tip credits for your service
  //               staff to reduce the likelihood of payroll errors.
  //             </p>

  //             <h4 className="text-lg font-bold mb-2">Benchmarking:</h4>
  //             <p className="text-black">
  //               ADP Workforce Now is the only platform on my shortlist with
  //               benchmark information for understanding how your business
  //               compares to the competition. Using ADP’s U.S. client base of
  //               more than 42 million employees, you can see benchmark numbers in
  //               your industry and location for:
  //             </p>
  //             <ul className="list-disc pl-5 text-black">
  //               <li>
  //                 Creating fair and competitive total compensation packages.
  //               </li>
  //               <li>Comparing turnover rates.</li>
  //               <li>Tracking average time to fill in various roles.</li>
  //             </ul>
  //             <p className="text-black">
  //               Because Workforce Now offers this natively in-app with data that
  //               updates in real time, you don’t have to rely on third-party
  //               sources for this information—whether through integration or from
  //               outdated compensation survey reports. This is also a huge
  //               advantage if you’re a small business since access to this
  //               information is typically reserved for larger HCM platforms or
  //               requires manual input. For comparison, in Rippling, you need to
  //               add salary ranges by hand.
  //             </p>
  //           </>
  //         ),
  //         Pricing: (
  //           <>
  //             <p className="text-black mb-4">
  //               ADP Workforce Now offers three subscription tiers to choose
  //               from: Select, Plus, and Premium. However, it does not reveal
  //               starting prices for any of its plans; you must contact ADP’s
  //               sales team for a quote.
  //             </p>
  //             <p className="font-bold  text-black mb-4">
  //               In my re-evaluation, Workforce Now’s pricing score dropped from
  //               3.13 to 2.69. This is in part due to the quote that I received,
  //               which revealed additional costs for HRIS implementation, your
  //               payroll schedule, and annual W2 and 1099s processing. For a
  //               business with 50 employees and a weekly pay schedule, ADP quoted
  //               me $8 per employee, per month (PEPM) plus $180 per month.
  //               There’s also a $500 implementation fee.
  //             </p>
  //             This means ADP can be slightly more expensive overall considering
  //             the fees for all of its services, such as check signing and
  //             delivery. Still, ADP is one of the only platforms to offer such
  //             expanded service options, so if this is a priority for you, going
  //             with Workforce Now is your best bet.
  //           </>
  //         ),
  //       },
  //     },
  //   },
  //   Deel: {
  //     title: "Deel: Best for startups",
  //     logo: "/images/deel.jpg",
  //     button: {
  //       text: "Visit Website",
  //       link: "#",
  //     },
  //     scores: [
  //       { label: "Overall Score", score: "3.64/5" },
  //       { label: "HRIS and reporting", score: "3.99/5" },
  //       { label: "Payroll and benefits", score: "4.31/5" },
  //       { label: "Pricing", score: "3.94/5" },
  //       { label: "Platform/interface", score: "4.30/5" },
  //       { label: "Workforce management", score: "3.45/5" },
  //       { label: "Talent acquisition", score: "0.88/5" },
  //       { label: "Employee relations", score: "3.66/5" },
  //       { label: "Support", score: "4.38/5" },
  //       { label: "User scores", score: "4.06/5" },
  //     ],
  //     pros: [
  //       "Immigration services to hire and relocate talent from across the globe.",
  //       "On-demand payroll support for direct and EOR employees.",
  //       "Light and dark mode functionality for increased accessibility.",
  //       "Diverse account payment options, including cryptocurrency using Coinbase.",
  //     ],
  //     cons: [
  //       "Difficult to navigate user interface (UI).",
  //       "Can only pay employees by direct deposit.",
  //       "Does not support weekly payroll schedules.",
  //       "Lacks recruiting features.",
  //     ],
  //     why: {
  //       intro: `Deel replaces my previous pick for the best HR software for startups, Gusto, by a narrow margin. Deel’s 3.64 beats Gusto’s 3.50 because of the former’s global capabilities that allow you to pay and retain employees worldwide. In fact, despite Gusto’s foray into EOR services in early 2024, it currently only supports 12 countries compared to Deel’s more than 150.`,
  //       body: `Deel’s platform is also better equipped to handle the challenges of fast-growing startups than others in this roundup. Need extra support services for your new business? Deel’s PEO, EOR, and U.S. Payroll services provide 24/7 support, a dedicated customer service manager, and white-glove benefits implementation. Need essential employee management tools? Use Deel HR for free to manage compliance, sign documents, and even get access to a basic employee time tracker.`,
  //       outro: `Need to complete HR operations without interrupting the flow of work? Use Deel’s Slack plugins to control everyday HR tasks, like requesting and approving time off. This is a much simpler solution if your startup has distributed teams working on various schedules.`,
  //       extras: {
  //         "About ": (
  //           <>
  //             <p className="text-black mb-4">
  //               Although Deel started as an EOR service provider similar to
  //               Oyster and Papaya Global, it’s exploded in recent years with the
  //               additions of its Deel HR, U.S. Payroll, Deel PEO, and Deel
  //               Engage products for more HR functionality. As a result, Deel is
  //               one of the top players in the HR system market, including heavy
  //               hitters like Rippling (with which it shares a rather
  //               entertaining rivalry).
  //             </p>
  //             <p className="text-black">
  //               However, because Deel started as an EOR, the core of its
  //               software aims to carry out global payroll and contract
  //               management in sync with its more than 100 international
  //               partners. This makes its platform somewhat confusing to navigate
  //               since its original purpose was to pull employee information from
  //               your onboarding platform or HRIS to facilitate global payroll.
  //             </p>
  //             <p className="text-black mb-4">
  //               Even with Deel HR’s more modern appearance, including a
  //               customizable homepage with widgets that mimic BambooHR, expect a
  //               bit of a learning curve. That said, its affordability,
  //               white-labeling, global capabilities, and workplace communication
  //               abilities give Deel a leg up for startups with scrappier HR
  //               teams who flow between administrators, employee advocates, and
  //               company marketers in the span of one afternoon.
  //             </p>
  //           </>
  //         ),
  //         "Key Features": (
  //           <>
  //             <h4 className="text-lg font-bold mb-2">Contractor management:</h4>
  //             <p className="text-black mb-4">
  //               Deel isn’t unique when it comes to system features aimed at
  //               contractors. Gusto, for example, supports contractor payments in
  //               more than 120 countries. But I find Deel’s capabilities far more
  //               expansive and versatile.
  //             </p>
  //             <p classname="text-black mb-4">
  //               While Deel’s and Gusto’s contractor features are
  //               similar—step-by-step onboarding workflows, contract management,
  //               and in-app time trackers—Deel’s benefit offerings for
  //               contractors are more robust. For example, Deel offers 15 ways to
  //               pay contractors, including through its Deel Card. Gusto’s
  //               equivalent, the Gusto Wallet Spending account, is limited to
  //               direct employees.
  //             </p>
  //             <p classname="text-black mb-4">
  //               And, for a compliance nerd like myself, Deel’s the only vendor
  //               in my roundup with the contractor of record services to avoid
  //               the risk of worker misclassification. This is incredibly helpful
  //               for a startup where the line between contractor and employee is
  //               blurry and varies worldwide.
  //             </p>
  //             <h4 className="text-lg font-bold mb-2">
  //               Tools for distributed teams:
  //             </h4>
  //             <p className="text-black mb-4">
  //               Deel used to be among my honorable mentions for its global
  //               capabilities. Unsurprisingly, these tools come in handy for
  //               startups where talent may be located across the globe and don’t
  //               work a normal nine-to-five. Some tools include its new
  //               time-tracking widget, overnight shift support, and mobile app
  //               with expense management.
  //             </p>
  //             <p className="text-black mb-4">
  //               But Deel’s Slack plugins, such as employee recognition, are my
  //               favorite tools for distributed teams. Slack allows for more
  //               free-flowing conversations between coworkers so that
  //               peer-to-peer recognition (“Kudos”) feels less like a chore and
  //               easier to offer in the moment—a critical component of building
  //               up company culture in your startup. Even better is that these
  //               plugins are free to use if you have Slack; you don’t need a Deel
  //               subscription.
  //             </p>
  //           </>
  //         ),
  //         Pricing: (
  //           <>
  //             <p className="text-black mb-4">
  //               You can start using Deel HR at the low price of free. You can
  //               also leverage other tools from Deel at no cost, including its
  //               Slack plugins (as long as you have a Slack subscription) and
  //               global employee cost calculator. This earned Deel a 3.94 in
  //               pricing, second only to Gusto’s 4.00. In fact, you can
  //               conceivably manage all your employee operations in Deel HR and
  //               do payroll yourself for the most cost savings, especially if you
  //               have fewer than 10 employees (although I wouldn’t recommend it
  //               if you’re new to payroll).
  //             </p>

  //             <p className="font-bold  text-black mb-4">
  //               However, if you want to start paying employees through Deel, it
  //               becomes expensive once you have more than three U.S.-based
  //               employees since you pay $19 PEPM. I’d turn to Gusto or other
  //               small business payroll software instead if you just need pay
  //               processing. But if you’re looking for global payroll support,
  //               either through your own entities or using an EOR, Deel’s pricing
  //               is one of the more competitive. Deel also frequently offers
  //               discounts if you decide to pay annually.
  //             </p>
  //           </>
  //         ),
  //       },
  //     },
  //   },
  // };

  // Convert toolsContent object to array for mapping
  // const toolsArray = Object.entries(toolsContent).map(([key, value]) => ({
  //   id: key,
  //   ...value,
  // }));

  const coreData = [
    {
      question: "Human resources information system(HRIS)",
      answer: [
        "Human resources information systems (HRIS) offer a variety of capabilities for HR data management. The goal of these multi-function systems is to maintain individual employee data and handle the company’s regulatory and legal employment requirements.",
        "An HRIS stores key details about an organization’s workforce, including employees’ personal information, employment details, performance metrics, and compensation history. HRIS platforms can also act as a repository for important HR documents like employment contracts, tax forms, and policy guides.",
        "An HRIS can be a standalone product that integrates with other HR applications, or it can serve as a central database in an all-in-one HR software suite. At its core, an HRIS application focuses on optimizing processes associated with HR record-keeping and reporting.",
        "You can further divide HRIS into five types: operational, strategic, tactical, limited-function, and comprehensive HRIS. To learn more, check out Types of Human Resource Information Systems (HRIS).",
      ],
    },
    {
      question: "Human resources management system(HRMS)",
      answer: [
        "Human resources management systems (HRMS) focus on process optimization and cost efficiency. This type of software improves how an organization handles its HR processes by automating tasks and centralizing access to critical information.",
        "Many HRMS products extend the functionality of a traditional HRIS by including tools for payroll, benefits administration, recruiting, and performance management. Some HRMS also offer tools for more robust reporting and forecasting purposes, like succession planning and position control.",
      ],
    },
    {
      question: "Human Capital management (HCM) software",
      answer: [
        "Human capital management (HCM) software is often regarded as the largest umbrella in the HR software category. Most HCM solutions combine all of the functionalities of HRIS and HRMS platforms, plus additional features for employee engagement, learning management, and business intelligence. HCM software also offers advanced data analysis capabilities for business intelligence and HR process optimization.",
        "HCM software cultivates human capital by streamlining all HR functions and creating a holistic view of the employee lifecycle. This breadth allows companies to maximize the potential of their employees and their contributions to organizational performance. To that end, HCM software adds tactical and strategic HR features to keep employees engaged and motivated to work toward the company’s business goals.",
      ],
    },
  ];
  const functionData = [
    {
      question: "Recruiting",
      answer: [
        "Recruiting software, specifically applicant tracking systems (ATS), help hiring teams optimize the hiring process. It manages the entire recruitment process from beginning to end, from sourcing and screening candidates to extending job offers and onboarding new employees.",
        "ATS platforms manage information related to different candidates, allowing hiring managers to compare candidates against each other and choose the best one for the job. Many recruiting software suites include applicant tracking features in addition to candidate relationship management and workforce planning capabilities.",
      ],
    },
    {
      question: "Onboarding",
      answer: [
        "Onboarding software facilitates the process of introducing new hires to a company. It typically includes capabilities such as electronic signatures, pre-boarding checklists, and employee questionnaires.",
        "Effective onboarding platforms also include tools to help onboard onsite and remote employees, such as mobile and desktop support and customizable task assignments by role. That way, all necessary stakeholders timely complete their responsibilities to ensure a smooth employee onboarding experience.",
      ],
    },
    {
      question: "Payroll software",
      answer: [
        "Payroll software lets organizations track expenses, taxes, payouts, and schedules accurately. It also helps HR teams maintain compliance with labor and payroll regulations and analyze payroll data for discrepancies or inefficiencies. Organizations use payroll software to calculate, process, and record employee pay on time.",
        "Payroll software can also come in different sizes and shapes depending on worker classification, company industry, and where employees live and work. For example, you may choose a contractor payroll solution if you only employ contractors. If you employ workers internationally, you’ll want to research global payroll systems to handle competing pay laws by country.",
      ],
    },
    {
      question: "Performance management",
      answer: [
        "Performance management software enables organizations to assess employee skills, track goals, and monitor performance over time. Companies often use performance management software to coach employees and evaluate performance during formal reviews or through weekly pulse updates. It gives managers a clear view of employees’ growth and development in their roles.",
      ],
    },
    {
      question: "Employee management",
      answer: [
        "Employee engagement software helps companies understand employee sentiment over time and identify areas where the employee experience can improve. These systems offer survey tools, follow-up workflows, gamification, and analytics to understand how employees feel about their work. Employee feedback data is then consolidated and analyzed to produce actionable insights that can improve retention.",
      ],
    },
    {
      question: "Learning management systems(LMS)",
      answer: [
        "Learning management systems (LMS), or eLearning systems, help HR teams design, organize, and deliver employee training programs. These systems can evaluate employee skills, track active certifications, and identify opportunities for professional development.",
        "By incorporating this tool, HR can onboard new employees and keep tenured employees up to date with current industry knowledge standards. Moreover, LMS can optimize job and compliance training and learning and development.",
      ],
    },
  ];
  const hrData = [
    {
      id: 1,
      name: "ADP Workforce Now",
      image: "/images/ADP.jpeg",
      alt: "ADP Workforce Now",
      overallScore: 3.95,
      useFor: "Best overall",
      visitUrl: "ADP",
      startingPrice: "$8/employee/mo.*",
    },
    {
      id: 2,
      name: "Deel",
      image: "/images/deel.jpg",
      alt: "Deel",
      overallScore: 3.64,
      useFor: "Best for startups",
      visitUrl: "Deel",
      startingPrice: "$19/employee/mo.**",
    },
  ];

  const renderStars = (score) => {
    const stars = [];
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      );
    }

    return stars;
  };
// Fixed social sharing functions with proper description
const shareUrl = typeof window !== "undefined" ? window.location.href : "";
const shareTitle = "Best HR Software for 2025 | Complete Guide";
const shareDescription = "Comprehensive guide to choosing the best HR software for your business needs. Compare top HR platforms, features, and pricing to find the perfect solution for your company.";

const shareOnFacebook = () => {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    "_blank"
  );
};

const shareOnLinkedIn = () => {
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    "_blank"
  );
};

const shareOnTwitter = () => {
  window.open(
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle + " - " + shareDescription)}`,
    "_blank"
  );
};

// CORRECTED META TAGS - Replace your existing Head section with this:
return (
  <>
      <Head>
      <title>Best HR Software for 2025 | Complete Guide</title>
      
      {/* Standard meta tags */}
      <meta
        name="description"
        content="Comprehensive guide to choosing the best HR software for your business needs. Compare top HR platforms, features, and pricing to find the perfect solution for your company."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph meta tags for Facebook & LinkedIn */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Best HR Software for 2025 | Complete Guide" />
      <meta
        property="og:description"
        content="Comprehensive guide to choosing the best HR software for your business needs. Compare top HR platforms, features, and pricing to find the perfect solution for your company."
      />
      <meta
        property="og:image"
        content="https://blogs.compare-bazaar.com/images/blog3.webp"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:image:alt" content="Best HR Software Guide 2025" />
      <meta
        property="og:url"
        content="https://technology-advice.vercel.app/software-reviews/hr-software"
      />
      <meta property="og:site_name" content="Technology Advice" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Best HR Software for 2025 | Complete Guide" />
      <meta
        name="twitter:description"
        content="Comprehensive guide to choosing the best HR software for your business needs. Compare top HR platforms, features, and pricing to find the perfect solution for your company."
      />
      <meta
        name="twitter:image"
        content="https://blogs.compare-bazaar.com/images/blog3.webp"
      />
      <meta name="twitter:image:alt" content="Best HR Software Guide 2025" />

      {/* Additional meta tags that might help */}
      <meta name="author" content="Jessica Dennis" />
      <meta name="article:author" content="Jessica Dennis" />
      <meta name="article:published_time" content="2025-01-31T00:00:00Z" />
      <meta name="article:modified_time" content="2025-04-25T00:00:00Z" />

      <link
        rel="canonical"
        href="https://technology-advice.vercel.app/software-reviews/hr-software"
      />
    </Head>



      <section id="hr-software">
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
                  Best Human Resources Software
                </span>
              </div>
            </nav>

            {/* Main Heading */}
            <div className="max-w-6xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16">
                Best Human Resources Software (Updated for April 2025)
              </h1>
            </div>

            
            

            {/* Disclaimer Section */}
            <div className="max-w-4xl xl:max-w-5xl">
              <div className="flex items-start space-x-3 sm:space-x-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                <div className="text-lg sm:text-base lg:text-lg leading-relaxed text-white/90">
                  <p>
                    <span className="font-semibold text-white">
                      Technology Advice
                    </span>{" "}
                    is able to offer our services for free because some vendors
                    may pay us for web traffic or other sales opportunities. Our
                    mission is to help technology buyers make better purchasing
                    decisions, so we provide you with information for all
                    vendors — even those that don't pay us.
                  </p>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
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
                <div className=" pt-6 border-t border-gray-200">
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
              <section id="hr-software">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      What is HR software?
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Human resources (HR) software systems unify
                      administration, recruitment, payroll, training, employee
                      engagement, performance management, and other essential HR
                      functions. This provides a secure database of employee
                      data and a centralized view of a company. It also helps HR
                      teams effectively manage each stage of the employee life
                      cycle.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      The right HR software solution can help optimize processes
                      by automating manual tasks, organizing employee records,
                      and building data-driven reports. Moreover, advanced HR
                      software solutions enable better workforce planning,
                      financial forecasting, and strategic decision-making.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      I reviewed 13 human resources software solutions and
                      narrowed them down to the best of the best:
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
                          <a
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            ADP Workforce Now
                          </a>{" "}
                          is the best HR software overall.
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
                          <a
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            Deel
                          </a>{" "}
                          is the best HR software for startups.
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
                          <a
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            BambooHR
                          </a>{" "}
                          is the best HR software for small businesses.
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
                          <a
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            Rippling
                          </a>{" "}
                          is the best HR software for midsize companies.
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
                          <a
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            SAP SuccessFactors HCM
                          </a>{" "}
                          is the best HR software for large enterprises.
                        </p>

                        <p className="text-gray-700">Honorable mentions:</p>
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
                          <a
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            Paycor
                          </a>{" "}
                          is the best for companies with field and frontline
                          workers.
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
                          <a
                            href="#"
                            className="text-[#386861]hover:text-green-700 font-medium underline"
                          >
                            Paylocity
                          </a>{" "}
                          is the best for workforce management.
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
                          <a
                            href="#"
                            className="text-[#386861] hover:text-green-700 font-medium underline"
                          >
                            Gusto
                          </a>{" "}
                          is the best for new businesses in the U.S.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Featured Partners Section */} 
              <div className="bg-white px-2 sm:px-4 lg:px-6 py-10">
<div className="bg-white px-1 sm:px-2 lg:px-3 py-10"></div>
      <div className="flex items-start justify-between mb-6">
        <h2 className="text-3xl font-semibold text-gray-900">Featured partners</h2>
        <div className="text-sm text-gray-500">
          Advertisement <span className="ml-1 cursor-pointer">ℹ️</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* KEKA HR Card */}
        <div className="bg-[#f9fafb] rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-center mb-4">
            <img src="/images/keka-logo.png" alt="Keka Logo" className="h-5" />
          </div>
          <h3 className="text-lg font-semibold text-center text-gray-900 mb-4">Keka HR</h3>
          <div className="flex justify-center mb-4">
            <a
              href="#"
              className="bg-[#386861] hover:bg-green-700 text-white text-sm font-medium px-6 py-2 rounded-full flex items-center gap-2"
            >
              Visit Website <span>↗</span>
            </a>
          </div>
          <div className="text-sm text-gray-500 mb-2">
            <span className="font-medium text-gray-800">Good For</span> <br />
            Medium sized companies <sup>ℹ️</sup>
          </div>
          <hr className="my-3" />
          <div className="text-sm text-gray-500 mb-2">
            <span className="font-medium text-gray-800">Core Features</span> <br />
            360 Degree Feedback, Applicant Tracking, Benefits Administration, and 10 more
          </div>
          <hr className="my-3" />
          <div className="text-sm text-gray-500">
            <span className="font-medium text-gray-800">Integrations</span> <br />
            QuickBooks Online, Tally
          </div>
        </div>

        {/* MONITASK Card */}
        <div className="bg-[#f9fafb] rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-center mb-4">
            <img src="/images/monitask-logo.png" alt="Monitask Logo" className="h-6" />
          </div>
          <h3 className="text-lg font-semibold text-center text-gray-900 mb-4">Monitask</h3>
          <div className="flex justify-center mb-4">
            <a
              href="#"
              className="bg-[#386861] hover:bg-green-700 text-white text-sm font-medium px-6 py-2 rounded-full flex items-center gap-2"
            >
              Visit Website <span>↗</span>
            </a>
          </div>
          <div className="text-sm text-gray-500 mb-2">
            <span className="font-medium text-gray-800">Good For</span> <br />
            Any Company Size <sup>ℹ️</sup>
          </div>
          <hr className="my-3" />
          <div className="text-sm text-gray-500 mb-2">
            <span className="font-medium text-gray-800">Core Features</span> <br />
            Employee Shift Scheduling, Self-Service Portal, Time/Attendance Management, and 1 more
          </div>
          <hr className="my-3" />
          <div className="text-sm text-gray-500">
            <span className="font-medium text-gray-800">Integrations</span> <br />
            Asana, Basecamp, ClickUp, and 10 more
          </div>
        </div>
      </div>
    </div>

           

              <section id="best-HR-software" className="mt-8">
               <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto space-y-6 mt-8">
                  <div className="text-center mb-8 sm:mb-12">
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                  </div>

                  {/* Unified Table Layout for All Screen Sizes */}
                   <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        My picks for the best HR software
      </h2>

      <div className="min-w-[800px]">
        <table className="w-full text-left border-separate border-spacing-y-3">
          <thead className="text-sm font-semibold text-gray-600 border-b">
            <tr>
              <th className="pb-2"></th>
              <th className="pb-2">Overall score</th>
              <th className="pb-2">Use case</th>
              <th className="pb-2">Starting price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((company, idx) => (
              <tr key={idx} className="bg-white rounded-xl shadow-sm">
                <td className="p-4 flex items-center space-x-3">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <p className="font-medium">{company.name}</p>
                    <a
                      href={company.link}
                      className="mt-1 inline-block text-sm bg-[#386861] hover:bg-green-700 text-white px-4 py-1 rounded-full"
                    >
                      Visit {company.name.split(" ")[0]} ↗
                    </a>
                  </div>
                </td>
                <td className="p-4 align-top">
                  <p className="font-medium">{company.score}</p>
                  <div className="text-[#386861]">★★★★☆</div>
                </td>
                <td className="p-4 align-top">{company.useCase}</td>
                <td className="p-4 align-top">{company.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

           
                </div>
              </section>
                         <div className="mt-12 space-y-6">
      {/* Notes */}
      <p className="italic text-gray-700">
        Pricing across all featured human resources software providers are up to date (April 25, 2025).
      </p>

      <p className="italic text-gray-700">
        *Based on a quote I received. ADP Workforce Now charges additional fees based on your <a href="#" className="underline text-[#386861]">payroll schedule</a> and add-on services like check printing, signing, and delivery. For a weekly payroll schedule, ADP quoted me an additional $180 per month and $500 implementation fee.
      </p>

      <p className="italic text-gray-700">
        **Starting price for Deel U.S. Payroll.
      </p>

      <p className="italic text-gray-700">
        +Starting price for SAP SuccessFactors HCM’s base module, Employee Central.
      </p>

      {/* Accordion */}
      <div className="divide-y border-t border-gray-200">
        {sections.map((sec, index) => (
          <div key={index}>
            <button
              className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-900"
              onClick={() => toggle(index)}
            >
              {sec.title}
              <Plus className="text-[#386861]w-5 h-5" />
            </button>
            {open === index && (
              <div className="pb-4 text-gray-600 text-sm">
                {sec.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
               

                

                  {/*ADP Workforce Now: Best overall*/}
                  <section id="ADP-Workforce-Now-Best-overall">
<div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto space-y-6 mt-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img src="/images/adp.png" alt="ADP" className="w-14 h-14 object-contain" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              ADP Workforce Now: Best overall
            </h2>
          </div>
        </div>
        <a
          href="#"
          className="bg-[#386861] text-white text-sm font-medium px-4 py-2 rounded-full"
        >
          Visit Website ↗
        </a>
      </div>

      {/* Scores */}
      <div className="space-y-3">
        {adpScores.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>{item.label}</span>
              <span>{item.value.toFixed(2)}/5.00</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-[#386861] rounded-full"
                style={{ width: `${(item.value / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pros and Cons */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pros</h3>
          <ul className="space-y-1 list-none text-sm text-gray-700">
            {pros.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-600">➕</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Cons</h3>
          <ul className="space-y-1 list-none text-sm text-gray-700">
            {cons.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-red-500">➖</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Accordion & CTA */}
      <div className="border-t pt-4 space-y-4">
        {[
          "About ADP Workforce Now",
          "Key features",
          "Gallery",
          "Pricing",
        ] 
          .map((title, index) => (
            <div key={index} className="border-b pb-4">
              <button
                className="w-full text-left font-semibold text-gray-900"
                onClick={() => toggle(index)}
              >
                {title}
              </button>
              {open === index && (
                <div className="text-sm text-gray-600 mt-2">
                  {/* Content for each section */}
                  {title === "About ADP Workforce Now" && (
                    <p>
                      ADP Workforce Now is a comprehensive human capital management
                      solution designed for medium to large businesses. It offers
                      payroll, HR, talent management, and time and attendance features.
                    </p>
                  )}
                  {title === "Key features" && (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Payroll processing</li>
                      <li>Time and attendance tracking</li>
                      <li>Talent management</li>
                      <li>Benefits administration</li>
                    </ul>
                  )}
                  {title === "Gallery" && (
                    <p>Gallery content goes here.</p>
                  )}
                  {title === "Pricing" && (
                    <p>Pricing details go here.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        <div className="flex gap-4 pt-4">
          <button className="px-4 py-2 rounded-full text-sm bg-white border border-green-600 text-[#386861] hover:bg-green-50">
            Read our full review
          </button>
          <button className="px-4 py-2 rounded-full text-sm bg-[#386861] text-white hover:bg-green-700">
            Submit your review
          </button>
        </div>
      </div>
    </div>
                  </section>
{/*Deel: Best for startups */}
  <section id="Deel-Best-for-startups">
   <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto space-y-6 mt-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-start space-x-4">
          <img src="/images/deel.png" alt="Deel Logo" className="w-12 h-12 object-contain" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Deel: Best for startups</h2>
          </div>
        </div>
        <a href="#" className="bg-[#386861] hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm">Visit Website ↗</a>
      </div>

      {/* Scores */}
      <div className="mt-6">
        {[
          ['HRIS and reporting', 3.95],
          ['Payroll and benefits', 4.13],
          ['Pricing', 3.64],
          ['Platform/Interface', 4.50],
          ['Workforce management', 3.45],
          ['Talent acquisition', 0.85],
          ['Employee relations', 3.60],
          ['Support', 4.38],
          ['User scores', 4.06]
        ].map(([label, score], i) => (
          <div key={i} className="mb-2">
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>{label}</span>
              <span>{score}/5.00</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-[#386861] h-2 rounded"
                style={{ width: `${(score / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pros & Cons */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-800 mb-2">Pros</h3>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li>✔ Immigration services to hire and relocate talent from across the globe.</li>
          <li>✔ On-demand payroll support for direct and EOR employees.</li>
          <li>✔ Light and dark mode functionality for increased accessibility.</li>
          <li>✔ Diverse account payment options, including cryptocurrency using Coinbase.</li>
        </ul>

        <h3 className="font-semibold text-gray-800 mt-4 mb-2">Cons</h3>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li>✖ Difficult to navigate user interface (UI).</li>
          <li>✖ Can only pay employees by direct deposit.</li>
          <li>✖ Does not support weekly payroll schedules.</li>
          <li>✖ Lacks recruiting features.</li>
        </ul>
      </div>

      {/* Why I chose Deel */}
      <div className="mt-6 text-sm text-gray-700">
        <h3 className="font-semibold text-gray-800 mb-2">Why I chose Deel</h3>
        <p className="mb-2">
          Deel replaces my previous pick for the <a href="#" className="text-[#386861] underline">best HR software for startups</a>, Gusto, by a narrow margin.
          Deel's 3.64 bests Gusto's 3.50 because of the former's global capabilities that allow you to pay and retain employees worldwide.
        </p>
        <p className="mb-2">
          In fact, despite Gusto's entry into EOR services in early 2024, it currently only supports 12 countries compared to Deel's more than 150.
        </p>
        <p className="mb-2">
          Need extra support services? Deel's PEO, FRO, and U.S. Payroll plans provide 24/7 expert support, access to compliance advisors, global health benefits, employee management tools and more.
        </p>
        <p className="mb-2">
          Deel integrations like Slack plugins streamline workflows without interrupting the flow of work.
        </p>
      </div>

      {/* Accordions */}
      <div className="mt-6 divide-y">
        {[
          'About Deel',
          'Key features',
          'Gallery',
          'Pricing'
        ].map((title, i) => (
          <div key={i}>
            <button
              onClick={() => toggleSection(i)}
              className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-900"
            >
              {title}
              <span className="text-[#386861] text-2xl">{openSection === i ? '-' : '+'}</span>
            </button>
            {openSection === i && (
              <div className="pb-4 text-sm text-gray-700 space-y-2">
                <p>This is detailed information about {title}.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Phasellus finibus libero vel quam blandit, at laoreet nunc tristique.</p>
                <p>Sed pretium urna sit amet orci iaculis congue.</p>
                <p>Aliquam erat volutpat. Quisque eu turpis non nulla sodales egestas.</p>
                <p>Duis euismod arcu a justo pulvinar, sed feugiat est porttitor.</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex gap-4 pt-4">
          <button className="px-4 py-2 rounded-full text-sm bg-white border border-green-600 text-[#386861] hover:bg-green-50">
            Read our full review
          </button>
          <button className="px-4 py-2 rounded-full text-sm bg-[#386861]text-white hover:bg-green-700">
            Submit your review
          </button>
        </div>
    </div>
    {/* Text Content */}
      <div>
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2 mt-8">
    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M12.293 2.293a1 1 0 011.414 0L18 6.586l-1.414 1.414L14 5.414V18h-2V5.414l-2.586 2.586L8 6.586l4.293-4.293z" />
    </svg>
    Other HR solutions for startups
  </h2>

  <h3 className="text-xl font-semibold text-gray-800 mb-3">The case for Bob</h3>

  <p className="text-gray-700 mb-4">
    I’ve participated in multiple demos of{' '}
    <Link href="https://www.hibob.com" target="_blank" className="text-[#386861]underline font-medium">
      Bob
    </Link>, and I’m always impressed with its focus on customization and employee experience. (Bob’s “clubs”
    for fostering employee engagement is one of my favorite features.) These qualities make it a great
    candidate for startups where business processes are in flux and you’re only just building your culture.
  </p>
     <div className="flex justify-center md:justify-end">
    <Image
      src="/images/hi.jpeg"
      alt="Bob Logo"
      width={200}
      height={200}
      className="object-contain"
    />
  {/* CTA Button - Moved Up */}
   

  {/* Right Image */}
  
  </div>
  <div className="flex justify-left md:justify-left -mt-24"> 
  <Link
    href="https://www.hibob.com"
    target="_blank"
    className="inline-block mb-6 bg-[#386861] hover:bg-green-700 text-white text-lg font-medium py-3 px-6 rounded-full transition"
  >
    Visit Bob ↗
  </Link>
  </div>
</div>

 
  </section>


{/*BambooHR-Best-for-small-businesses*/}
<section id="BambooHR-Best-for-small-businesses">   
  <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto space-y-6 mt-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-start space-x-4">
          <img src="/images/bamboohr.png" alt="BambooHR Logo" className="w-12 h-12 object-contain" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">BambooHR: Best for small businesses</h2>
          </div>
        </div>
        <a
          href="#"
          className="bg-[#386861] hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm"
        >
          Visit Website ↗
        </a>
      </div>

      {/* Scores */}
      <div className="mt-6">
        {[
          ['HRIS and reporting', 4.25],
          ['Payroll and benefits', 3.65],
          ['Pricing', 2.65],
          ['Platform/Interface', 4.43],
          ['Workforce management', 3.88],
          ['Talent acquisition', 3.88],
          ['Employee relations', 3.06],
          ['Support', 3.65],
          ['User scores', 4.44]
        ].map(([label, score], i) => (
          <div key={i} className="mb-2">
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>{label}</span>
              <span>{score}/5.00</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-[#386861] h-2 rounded"
                style={{ width: `${(score / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pros & Cons */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-800 mb-2">Pros</h3>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li>✔ Refreshed new interface for easier navigation.</li>
          <li>✔ Ability to change platform colors and logos to reflect your brand.</li>
          <li>✔ Customizable homepage and profile dashboards.</li>
          <li>✔ Automated wellbeing surveys to track employee happiness over time.</li>
        </ul>

        <h3 className="font-semibold text-gray-800 mt-4 mb-2">Cons</h3>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li>✖ Reports have limited customization settings.</li>
          <li>✖ No modules for employee training or scheduling.</li>
          <li>✖ Does not support paying employees outside of the U.S.</li>
          <li>✖ Requires integration with Cronofy for in-app candidate interview scheduling.</li>
        </ul>
      </div>

      {/* Why I chose BambooHR */}
      <div className="mt-6 text-sm text-gray-700">
        <h3 className="font-semibold text-gray-800 mb-2">Why I chose BambooHR</h3>
        <p className="mb-2">
          With a total score of 3.64 out of 5, BambooHR is my top choice for small businesses because it is by far
          the easiest platform to use on my shortlist. It strikes a perfect balance between simple pre-built workflows
          for HR teams looking for no-fuss process implementation and features to support processes from hire to retire.
        </p>
        <p className="mb-2">
          In fact, BambooHR is one of the few solutions in my roundup that pays as much attention to the employee experience
          as system administrators. Besides a modern but user-friendly homepage where employees can see PTO balances,
          request time off, or clock in for a shift with one click, BambooHR also offers a platform where they can
          collaborate with peers in Employee Community. This is huge for small businesses where subscribing to standalone
          employee experience, recognition, and communication platforms can be a costly added expense.
        </p>
      </div>

      {/* Accordions */}
      <div className="mt-6 divide-y">
        {[
          'About BambooHR',
          'Key features',
          'Gallery',
          'Pricing'
        ].map((title, i) => (
          <div key={i}>
            <button
              onClick={() => toggleSection(i)}
              className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-900"
            >
              {title}
              <span className="text-[#386861] text-2xl">{openSection === i ? '-' : '+'}</span>
            </button>
            {openSection === i && (
              <div className="pb-4 text-sm text-gray-700 space-y-2">
                <p>This is detailed information about {title}.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Phasellus finibus libero vel quam blandit, at laoreet nunc tristique.</p>
                <p>Sed pretium urna sit amet orci iaculis congue.</p>
                <p>Aliquam erat volutpat. Quisque eu turpis non nulla sodales egestas.</p>
                <p>Duis euismod arcu a justo pulvinar, sed feugiat est porttitor.</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
        {/* Footer Buttons */}
      <div className="flex gap-4 pt-4">
          <button className="px-4 py-2 rounded-full text-sm bg-white border border-green-600 text-[#386861] hover:bg-green-50">
            Read our full review
          </button>
          <button className="px-4 py-2 rounded-full text-sm bg-[#386861] text-white hover:bg-green-700">
            Submit your review
          </button>
        </div>
         </div>
             {/* Heading with icon */}
      <div className="flex items-center gap-2 mb-4 mt-8">
        <FaThumbsUp className="text-green-600 w-6 h-6" />
        <h2 className="text-2xl font-semibold text-gray-900">Why is BambooHR so popular?</h2>
      </div>

      {/* Paragraph */}
      
      <p className="text-gray-700 text-base mb-6">
        BambooHR is a versatile HR suite that covers a lot of ground in the world of HR. As a BambooHR aficionado, I frequently include it in my HR software shortlists—check them out:
      </p>

      {/* Bullet links */}
      <ul className="list-disc list-inside space-y-2 text-[#386861]font-medium">
        <li><a href="#" className="hover:underline">Best HRIS</a></li>
        <li><a href="#" className="hover:underline">Best HR software for small businesses</a></li>
        <li><a href="#" className="hover:underline">Best performance management software</a></li>
        <li><a href="#" className="hover:underline">Best HR apps for mobile</a></li>
        <li><a href="#" className="hover:underline">Best onboarding software</a></li>
      </ul>
    
  </section>
{/*Rippling-Best-for-midsize-businesses*/}
  <section id="Rippling-Best-for-midsize-businesses">
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto space-y-6 mt-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-start space-x-4">
          <img src="/images/rippling.png" alt="Rippling Logo" className="w-12 h-12 object-contain" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Rippling: Best for midsize businesses</h2>
          </div>
        </div>
        <a
          href="#"
          className="bg-[#386861] hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm"
        >
          Visit Website ↗
        </a>
      </div>

      {/* Score */}
      <div className="mt-4">
        <p className="text-sm text-gray-600">Overall score</p>
        <p className="text-lg font-semibold text-gray-900 mb-4">4.05 / 5.00</p>
      </div>

      {/* Score Bars */}
      {[
        ['HRIS and reporting', 4.33],
        ['Payroll and benefits', 4.55],
        ['Pricing', 2.50],
        ['Platform/Interface', 4.45],
        ['Workforce management', 4.13],
        ['Talent acquisition', 4.38],
        ['Employee relations', 3.55],
        ['Support', 3.44],
        ['User scores', 4.78],
      ].map(([label, score], i) => (
        <div key={i} className="mb-2">
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>{label}</span>
            <span>{score}/5.00</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div
              className="bg-[#386861] h-2 rounded"
              style={{ width: `${(score / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}

      {/* Pros */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-800 mb-2">Pros</h3>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li>✔ Employee profile translation and localization for more than 150 countries.</li>
          <li>✔ Finance and IT management tools available.</li>
          <li>✔ EDI, PEQ, ASO, COBRA, ACA, and global payroll services available.</li>
          <li>✔ Ability to use Excel formulas in reports for more detailed insights.</li>
        </ul>
      </div>

      {/* Cons */}
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800 mb-2">Cons</h3>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li>✖ There is no free trial, and it may be too expensive for basic HR needs.</li>
          <li>✖ Scheduling requires Time and Attendance purchase and lacks automatic schedules.</li>
          <li>✖ Limited employee engagement and recognition features.</li>
          <li>✖ API access is now an add-on to Rippling Platform.</li>
        </ul>
      </div>

      {/* Why I chose Rippling */}
      <div className="mt-6 text-sm text-gray-700">
        <h3 className="font-semibold text-gray-800 mb-2">Why I chose Rippling</h3>
        <p className="mb-2">
          Rippling is one of the most adoptable HR programs I’ve demoed, resulting in an overall score of <strong>4.05</strong>.
          With its customizable workflows and approvals, you don’t need advanced IT training to automate most HR administrative processes in the app.
          This alone makes Rippling appealing to midsize businesses with a larger headcount, where <a href="#" className="text-green-600 underline">HR automation</a> is a must.
        </p>
        <p className="mb-2">
          Rippling’s global app access and inventory management also means it supports a growing company’s more diverse tech workflows.
          Expense reimbursement, global payroll, and scheduling modules now work their way end-to-end—from frontline workers to remote employees and traveling professionals.
        </p>
        <p className="mb-2">
          Plus with Rippling’s ability to create custom data fields, you can get as specific as you need with your HR, finance, and other work policies.
        </p>
      </div>

      {/* Accordion Sections */}
      <div className="mt-6 divide-y">
        {['About Rippling', 'Key features', 'Gallery', 'Pricing'].map((title, i) => (
          <div key={i}>
            <button
              onClick={() => toggleSection(i)}
              className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-900"
            >
              {title}
              <span className="text-[#386861] text-2xl">{openSection === i ? '-' : '+'}</span>
            </button>
            {openSection === i && (
              <div className="pb-4 text-sm text-gray-700 space-y-2">
                <p>This is detailed information about {title}.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Phasellus finibus libero vel quam blandit, at laoreet nunc tristique.</p>
                <p>Sed pretium urna sit amet orci iaculis congue.</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex gap-4 pt-4">
          <button className="px-4 py-2 rounded-full text-sm bg-white border border-green-600 text-[#386861] hover:bg-green-50">
            Read our full review
          </button>
          <button className="px-4 py-2 rounded-full text-sm bg-[#386861] text-white hover:bg-green-700">
            Submit your review
          </button>
        </div>
    </div>
    </section>
       {/* Heading with icon */}
      <div className="flex items-center gap-2 mb-4 mt-8">
        <FaRegSun className="text-green-600 w-5 h-5" />
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          HR software battle: ADP Workforce Now vs. Rippling
        </h2>
      </div>

      {/* Paragraphs */}
      <div className="text-gray-700 space-y-4 text-base">
        <p>
          You may be wondering why I picked ADP Workforce Now as the best HR software despite
          Rippling’s higher score. Very perceptive—let me explain!
        </p>
        <p>
          If you look strictly at the platforms, Rippling dominates. Rippling has an eye for intuitive
          platform design, where all modules “talk” to each other without delays or hiccups—this is the
          advantage Rippling has in building all of its platform capabilities natively.
        </p>
        <p>
          In contrast, ADP’s long lifespan means many of its products stitch together functionality from
          acquisitions or partnerships. For example, Workforce Now’s recruiting capabilities are possible
          through its partnership with ZipRecruiter.
        </p>
        <p>
          This isn’t necessarily bad, but it can create a disjointed user experience. Think of pop-up
          windows to enter different modules, feature settings in multiple areas, or a different platform
          appearance depending on what you’re doing. Like your control in recruiting. The biggest downside
          can also be possible data silos.
        </p>
        <p>
          Despite this, Workforce Now reigns supreme when it comes to extensibility, scalability, and service
          variety. ADP’s decades of business experience means its Workforce Now add-ons and services fit more
          business use cases than Rippling. Rippling is definitely catching up, though, and I’m excited to see
          how it continues to differentiate itself.
        </p>
      </div>
{/*SAP-SuccessFactors-HCM-Best-for-large-enterprises*/}
<section id="SAP-SuccessFactors-HCM-Best-for-large-enterprises">
   <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto space-y-6 mt-12">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-start space-x-4">
          <img src="/images/sap.png" alt="SAP Logo" className="w-12 h-12 object-contain" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              SAP SuccessFactors HCM: Best for large enterprises
            </h2>
          </div>
        </div>
        <a
          href="#"
          className="bg-[#386861] hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm"
        >
          Visit Website ↗
        </a>
      </div>

      {/* Score */}
      <div className="mt-4">
        <p className="text-sm text-gray-600">Overall score</p>
        <p className="text-lg font-semibold text-gray-900 mb-4">3.81 / 5.00</p>
      </div>

      {/* Score Bars */}
      {[
        ['Payroll and benefits', 3.88],
        ['Pricing', 2.50],
        ['Platform/Interface', 3.80],
        ['Workforce management', 4.13],
        ['Talent acquisition', 4.38],
        ['Employee relations', 3.95],
        ['Support', 3.75],
        ['User scores', 3.29],
      ].map(([label, score], i) => (
        <div key={i} className="mb-2">
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>{label}</span>
            <span>{score}/5.00</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div
              className="bg-[#386861] h-2 rounded"
              style={{ width: `${(score / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}

      {/* Pros */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-800 mb-2">Pros</h3>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li>✔ Intelligent text-based employee sentiment analysis.</li>
          <li>✔ 24/7 customer support via online chat, phone, or email.</li>
          <li>✔ Accessibility support, including zoom, high contrast themes, screen reader support, and keyboard navigation.</li>
          <li>✔ Native integration with SAP’s entire product line.</li>
          <li>✔ More than 2,000 standardized HR metrics.</li>
        </ul>
      </div>

      {/* Cons */}
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800 mb-2">Cons</h3>
        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li>✖ Too expensive for small teams.</li>
          <li>✖ Confusing line of product tiers and integration options.</li>
          <li>✖ Complex user interface.</li>
          <li>✖ Few plug-and-play integrations outside of SAP products and partners.</li>
        </ul>
      </div>

      {/* Why I chose SAP SuccessFactors */}
      <div className="mt-6 text-sm text-gray-700">
        <h3 className="font-semibold text-gray-800 mb-2">Why I chose SAP SuccessFactors HCM</h3>
        <p className="mb-2">
          With a score of 3.81 out of 5, SAP SuccessFactors impressed me with its number of customizable features and enterprise options aimed at enterprises.
          In fact, by combining its HCM suite with other SAP products, like <a href="#" className="text-[#386861] underline">ERP</a>, <a href="#" className="text-[#386861] underline">supply chain management</a>,
          <a href="#" className="text-[#386861] underline">financial management</a>, and <a href="#" className="text-[#386861] underline">customer relationship management</a>, you can create an open flow of data
          across traditionally siloed business functions.
        </p>
        <p className="mb-2">
          This is huge to increase process initiatives across all areas of the business that are not people-focused.
          You can even run predictive simulations of your business on a live data lake.
        </p>
        <p className="mb-2">
          Unfortunately, SAP SuccessFactors’ advanced features and complicated interface can be off-putting if you have no software team or are working with a more modern tool.
          It doesn’t quite ease-of-use like Rippling or Workday instead. But with its advanced workforce planning options, candidate relationship management (CRM) system, and AI for personalized HR processes,
          SAP SuccessFactors HCM remains my number one choice for complex, multinational corporations.
        </p>
      </div>

      {/* Accordion Sections */}
      <div className="mt-6 divide-y">
        {['About SAP SuccessFactors HCM', 'Key features', 'Gallery', 'Pricing'].map((title, i) => (
          <div key={i}>
            <button
              onClick={() => toggleSection(i)}
              className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-900"
            >
              {title}
              <span className="text-[#386861] text-2xl">{openSection === i ? '-' : '+'}</span>
            </button>
            {openSection === i && (
              <div className="pb-4 text-sm text-gray-700 space-y-2">
                <p>This is detailed information about {title}.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Vestibulum rutrum, massa nec porta bibendum, justo lacus egestas justo.</p>
                <p>Nulla facilisi. Integer id magna in lorem fermentum viverra.</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
     {/* Footer Buttons */}
      <div className="flex gap-4 pt-4">
          <button className="px-4 py-2 rounded-full text-sm bg-white border border-green-600 text-[#386861] hover:bg-green-50">
            Read our full review
          </button>
          <button className="px-4 py-2 rounded-full text-sm bg-[#386861]text-white hover:bg-green-700">
            Submit your review
          </button>
        </div>
    </div>
      {/* Heading with Icon */}
      <div className="flex items-center gap-2 mb-4 mt-8">
        <FaMagic className="text-green-600 w-5 h-5" />
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          AI in HR software
        </h2>
      </div>

      {/* Body Content */}
      <div className="text-gray-700 space-y-4 text-base">
        <p>
          SAP is hardly the only HR vendor that offers AI tools.{' '}
          <a href="#" className="text-[#386861] underline font-medium">
            Recruitment platforms
          </a>, for example, have used AI for years to sort and identify highly qualified candidates from applicant pools.
          However, with the rise of generative AI, many vendors are announcing plans to integrate more AI capabilities into their products.
        </p>

        <p>
          Similar to SAP’s Joule, for example, Workday announced its{' '}
          <a href="#" className="text-[#386861] underline font-medium">
            Illuminate AI model
          </a>{' '}
          to streamline business processes within the “flow of work.”{' '}
          <a href="#" className="text-[#386861] underline font-medium">
            Gusto also recently announced
          </a>{' '}
          the upcoming release of its own small business AI tool, “Gus,” to help you get answers to compliance questions
          and receive personalized insights about your business.
        </p>

        <p>
          But a word of caution: these tools are still in their infancy, so always double-check the information it provides.
          AI also shouldn’t replace your professional decision-making or your human efforts to improve the employee experience.
        </p>

        <p>
          You can learn more by exploring{' '}
          <a href="#" className="text-[#386861] underline font-medium">
            AI in HR: 6 Ways Artificial Intelligence Impacts the Workplace
          </a>{' '}
          and{' '}
          <a href="#" className="text-[#386861]underline font-medium">
            AI Recruiting: Uses, Advantages, & Disadvantages
          </a>.
        </p>
      </div>
      </section>
      {/* Honorable Mentions Section */}
      <section id="honorable-mentions">
           <h2 className="text-2xl font-semibold mb-6 mt-8">Honorable mentions</h2>

      {/* Card 1 */}
      <div className="border rounded-xl p-6 mb-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-lg font-semibold">Paycor: Best for companies with field and frontline workers</h3>
            <p className="text-sm text-gray-500">Alternative for: Rippling and BambooHR</p>
            <p className="text-sm text-gray-500">Overall score: <span className="font-semibold">3.83 / 5.00</span></p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 bg-[#386861] text-white px-4 py-2 text-sm font-medium rounded-full"
          >
            Visit Website
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-6 text-sm">
          <div className="md:w-1/2 space-y-2">
            <h4 className="font-semibold">When to choose Paycor</h4>
            <p>
              Paycor returns to my honorable mentions list in 2025 after dropping off it with Paylocity in 2024.
              Although both Paycor and Paylocity offer similar features and services, Paycor takes the lead when it
              comes to HR for physical workers.
            </p>
            <p>
              Paycor’s HR software includes mobile apps with clock-in capabilities for frontline employees and allows
              managers to submit group punches for employees, which is great for locations where multiple workers
              clock in at once.
            </p>
          </div>
          <div className="md:w-1/2 space-y-2">
            <h4 className="font-semibold">Why it didn’t make the list</h4>
            <p>
              Paycor is a much more dated-looking platform than competitors like Rippling. The high learning curve for
              payroll and compliance features can be confusing if you’re not already familiar.
            </p>
          </div>
        </div>
      </div>

      {/* In the News */}
      <div className="bg-gray-50 border-l-4 border-green-500 p-4 mb-6 text-sm rounded-md shadow-sm">
        <p>
          In January 2025, <Link href="#" className="text-[#386861] underline">Paychex acquired Paycor for $4.1 billion</Link>.
          My sources shared that Paychex and Paycor will continue to offer their products separately, but they remain
          on watch for any plan to merge their products — similar to Kronos and Ultimate Software of yore. While the
          Paycor Stadium name will remain unchanged, I’ll keep you updated as I learn more. If you’re curious,{' '}
          <Link href="#" className="text-[#386861] underline">Paychex Flex</Link> earned a 3.76 out of 5.00 in my evaluation.
        </p>
      </div>

      {/* Card 2 */}
      <div className="border rounded-xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-lg font-semibold">Paylocity: Best for workforce management</h3>
            <p className="text-sm text-gray-500">Alternative for: ADP Workforce Now</p>
            <p className="text-sm text-gray-500">Overall score: <span className="font-semibold">3.76 / 5.00</span></p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 bg-[#386861] text-white px-4 py-2 text-sm font-medium rounded-full"
          >
            Visit Website
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-6 text-sm">
          <div className="md:w-1/2 space-y-2">
            <h4 className="font-semibold">When to choose Paylocity</h4>
            <p>
              Paylocity is an HCM platform best suited for midsized businesses looking to support day-to-day operations
              and strategic HR needs. It’s one of the top picks in workforce management.
            </p>
            <p>
              Paylocity offers physical timeclock options plus geolocation and geofencing to restrict clock-ins by
              device or place, and also has strong collaboration features.
            </p>
          </div>
          <div className="md:w-1/2 space-y-2">
            <h4 className="font-semibold">Why it didn’t make the list</h4>
            <p>
              Paylocity is one of the most confusing interfaces. Combining too many features into self-service portals
              makes it hard to use, especially when adding focus-intensive tasks like performance reviews. The potential
              for losing work due to session timeouts can be a real issue.
            </p>
          </div>
        </div>
      </div>
            {/* Card 3 */}
      <div className="border rounded-xl p-6 shadow-sm space-y-4 mt-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-lg font-semibold">Gusto: Best for new businesses in the U.S.</h3>
            <p className="text-sm text-gray-500">Alternative for: Deel</p>
            <p className="text-sm text-gray-500">Overall score: <span className="font-semibold">3.50 / 5.00</span></p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 bg-[#386861] text-white px-4 py-2 text-sm font-medium rounded-full"
          >
            Visit Website
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-6 text-sm">
          <div className="md:w-1/2 space-y-2">
            <h4 className="font-semibold">When to choose Gusto</h4>
            <p>
              Gusto is one of the best software for newbie HR professionals in the U.S. Navigating between modules is simple, and processes like payroll, job postings, and onboarding use step-by-step workflows to ensure proper completion. Gusto is a stepping-stone platform: it provides you with good foundational HR understanding to prepare you for more advanced capabilities in platforms like Paycor as your business grows.
            </p>
            <p>
              New businesses in the U.S. will like its state registration services, R&D tax credit, garnishment reporting, and state-required anti-harassment training courses. With a 4.00 score, Gusto also beat Deel in pricing since it provides much more affordable subscription tiers for small businesses.
            </p>
          </div>
          <div className="md:w-1/2 space-y-2">
            <h4 className="font-semibold">Why it didn’t make the list</h4>
            <p>
              Although Gusto is an accessible platform for non-tech-savvy administrators, it quickly becomes unwieldy as you add more employees and develop more complicated workforce cadences.
            </p>
            <p>
              For example, Gusto does not have the automation-building capabilities of solutions like Rippling and Deel. Its reporting capabilities are also lackluster, with its payroll emails report the only one with visual dashboards. As a result, you may need to download your raw CSVs to manipulate data and uncover meaningful insights for strategic HR planning.
            </p>
          </div>
        </div>
      </div>

</section>
     
                
        
      <div className="bg-white min-h-screen p-6 space-y-8">
     

      {/* Cards */}
      <div className="max-w-4xl mx-auto space-y-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 relative">
                  <Image src={product.logo} alt={product.name} fill className="object-contain" />
                </div>
                <div>
                  
                  <h2 className="font-semibold text-lg">{product.name}</h2>
                  <p className="text-sm text-gray-500">{product.reviews}</p>
                </div>
              </div>

              <button className="text-sm text-[#386861] font-semibold">Compare ▪</button>
            </div>

            {product.stars > 0 && (
              <div className="flex items-center text-[#386861] text-sm gap-1">
                <span className="font-semibold">{product.stars}</span>
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.floor(product.stars) ? 'text-[#386861]' : 'text-gray-300'}
                  />
                ))}
              </div>
            )}

            <p className="text-sm text-gray-700 font-medium">Good for: {product.companySize}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>

            <div>
              <button
                className={`px-4 py-2 rounded font-semibold ${
                  product.button.type === 'primary'
                    ? 'bg-[#386861] text-white hover:bg-green-700'
                    : 'border border-gray-400 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {product.button.text}
              </button>
              
            </div>
          </div>
          
        ))}
          {/* Banner */}
      <div className=" bg-[#386861] text-white rounded-xl py-8 px-6 text-center">
        <h2 className="text-lg font-semibold mb-4">Interested in seeing your product here?</h2>
        <button className="bg-[#386861]hover:bg-green-600 text-white px-6 py-2 rounded font-semibold text-sm">
          List Your Product
        </button>
      </div>
      </div>
    </div>
     <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How do you choose the best HR software?
          </h1>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto">
            A comprehensive guide to selecting the right HR solution for your business needs
          </p>
        </div>

        {/* Main Quote Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-[#386861]">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#386861] rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex-1">
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "When selecting HR software, consider your business size, budget, day-to-day HR processes, and company goals. It's crucial to have software that can manage compliance obligations, such as payroll and benefits administration. This software often comes with pre-built safeguards that limit labor law violations and prevent data entry errors, making it a must-have for your business."
              </blockquote>
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "That doesn't mean HR processes like recruitment, retention, and employee performance and development are less important. Your organization should still have procedures to support these key areas. As your business grows, you'll likely add HR software to cover these functions to improve process efficiency and access data insights that aid in effective workforce planning."
              </blockquote>
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium">Expert tip from Lead HR Writer</span>
                <span className="mx-2">•</span>
                <span className="text-[#386861] font-medium">Jessica Dennis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#386861] rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Considerations Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="w-8 h-8 text-[#386861] mr-3" />
            Key Considerations
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {considerations.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-[#386861] rounded-full mt-2"></div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
       

        
      </div>
    </div>
 <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            How do you choose the best HR software?
          </h1>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto">
            A comprehensive guide to selecting the right HR solution for your business needs
          </p>
        </div>

        {/* Main Quote Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-#0E1F1C]">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-#0E1F1C] rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-#0E1F1C]" />
              </div>
            </div>
            <div className="flex-1">
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "When selecting HR software, consider your business size, budget, day-to-day HR processes, and company goals. It's crucial to have software that can manage compliance obligations, such as payroll and benefits administration. This software often comes with pre-built safeguards that limit labor law violations and prevent data entry errors, making it a must-have for your business."
              </blockquote>
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "That doesn't mean HR processes like recruitment, retention, and employee performance and development are less important. Your organization should still have procedures to support these key areas. As your business grows, you'll likely add HR software to cover these functions to improve process efficiency and access data insights that aid in effective workforce planning."
              </blockquote>
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium">Expert tip from Lead HR Writer</span>
                <span className="mx-2">•</span>
                <span className="text-[#386861] font-medium">Jessica Dennis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Types of HR Software */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">What are the types of HR software?</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <p className="text-gray-700 mb-6">
              There are three main categories of HR software: HRIS, HRMS, and HCM. Although they are often used interchangeably, there are several technical differences between them. Some HR software also focuses on specific human resources functions, like recruiting, onboarding, payroll, benefits administration, performance management, employee engagement, and learning management systems.
            </p>
            <div className="text-sm text-[#386861] font-medium mb-4">
              💡 Also read: 15 Must-Have HR System Features
            </div>
          </div>

          {/* Core HR Software */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core HR software</h3>
            <div className="space-y-4">
              {coreSoftware.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#386861] rounded-lg flex items-center justify-center text-green-600">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                    <Plus className="w-4 h-4 text-[#386861]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Function-specific HR Software */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Function-specific HR software</h3>
            <div className="space-y-4">
              {functionSpecific.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#386861] rounded-lg flex items-center justify-center text-green-600">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                    <Plus className="w-4 h-4 text-[#386861]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">What are the benefits of HR software?</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <p className="text-gray-700 mb-6">
              HR software solutions offer businesses a number of advantages, including increased efficiency, consistent compliance, and deeper reporting capabilities.
            </p>
            
            {benefits.map((benefit, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <button
                  onClick={() => toggleSection(`benefit-${index}`)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#386861] rounded-lg flex items-center justify-center text-green-600">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  </div>
                  {expandedSection === `benefit-${index}` ? 
                    <Minus className="w-5 h-5 text-gray-600" /> : 
                    <Plus className="w-5 h-5 text-gray-600" />
                  }
                </button>
                {expandedSection === `benefit-${index}` && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#386861] rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect HR Software?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Take the next step in streamlining your HR processes and improving your workforce management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#386861] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Explore Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#386861] transition-colors">
              Get Expert Consultation
            </button>
          </div>
        </div>

        {/* Additional Reading */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center text-[#386861] font-medium">
            <div className="w-6 h-6 bg-[#386861] rounded-full flex items-center justify-center mr-3">
              <span className="text-[#386861] text-sm">💡</span>
            </div>
            Also read: How to Choose the Right HR Software for your Business
          </div>
        </div>
      </div>
    </div>
 <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">HR software resources</h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Browse Guides Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse other HR software guides</h2>
            <div className="space-y-3">
              {browseGuides.map((guide, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#386861] rounded-lg flex items-center justify-center text-green-600">
                      {guide.icon}
                    </div>
                    <span className="text-black group-hover:text-[#386861] transition-colors">{guide.title}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#386861] transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Alternatives Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find an alternative to your current HR software</h2>
            <div className="space-y-3 mb-6">
              {alternatives.map((alternative, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#386861] rounded-lg flex items-center justify-center text-green-600">
                      {alternative.icon}
                    </div>
                    <span className="text-black group-hover:text-[#386861] transition-colors">{alternative.title}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#386861] transition-colors" />
                </div>
              ))}
            </div>
            <button className="text-[#386861] font-medium hover:text-[#386861] transition-colors flex items-center">
              See more...
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Comparisons Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare top HR software solutions</h2>
            <div className="space-y-3 mb-6">
              {comparisons.map((comparison, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#386861] rounded-lg flex items-center justify-center text-green-600">
                      {comparison.icon}
                    </div>
                    <span className="text-black group-hover:text-[#386861] transition-colors">{comparison.title}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#386861] transition-colors" />
                </div>
              ))}
            </div>
            <button className="text-[#386861] font-medium hover:text-green-700 transition-colors flex items-center">
              See more...
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Recommendations Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More software recommendation</h2>
            <div className="space-y-3">
              {recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#386861] rounded-lg flex items-center justify-center text-green-600">
                      {recommendation.icon}
                    </div>
                    <span className="text-black group-hover:text- [#386861]transition-colors">{recommendation.title}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#386861] transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Call to Action */}
        
      </div>
    </div>
</div>            
            </div>
          </div>
        </div>
    </>
  );
}