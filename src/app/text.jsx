'use client';

import Image from 'next/image';
import Head from 'next/head';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, useAnimationControls } from 'framer-motion';
import { 
  Users, 
  Grid, 
  Package, 
  Award, 
  UserCheck, 
  Activity, 
  Briefcase, 
  Target, 
  Database 
} from "lucide-react";

const logos = [
  "/images/partners-salesforce.svg",
  "/images/partners-oracle.svg",
  "/images/partners-sap.svg",
  "/images/partner-dell.svg",
  "/images/partner-ibm.svg",
  "/images/partners-jazzhr.svg",
];

const posts = [
  {
    title: 'Best Human Resources (HR) Software for Small...',
    date: 'May 5, 2025',
    image: '/images/small-business-hr-software.png',
    href: '/blogs/',
    bg: 'bg-gray-100',
  },
  {
    title: 'Best HRIS Systems of 2025',
    date: 'February 18, 2025',
    image: '/images/best HRIS.png',
    href: '/blogs/',
    bg: 'bg-gray-100',
  },
  {
    title: 'Best HRMS Software',
    date: 'September 19, 2024',
    image: '/images/Best-HRMS-Software.jpeg',
    href: '/blog/human-resources/best-hrms-software',
    bg: 'bg-gray-100',
  },
  {
    title: 'Asana vs monday: Top Project Management...',
    date: 'September 19, 2024',
    image: '/images/monday-asana.jpeg',
    href: '/blog/project-management/asana-vs-monday',
    bg: 'bg-gray-100',
  },
  {
    title: 'Smartsheet vs. monday.com Comparison',
    date: 'March 26, 2024',
    image: '/images/Smartsheet.png',
    href: '/blog/smartsheet-vs-monday',
    bg: 'bg-gray-100',
  },
  {
    title: 'CRM For Outlook: Integrate & Manage Customers...',
    date: 'January 14, 2025',
    image: '/images/crm outlook.png',
    href: '/blog/crm-outlook',
    bg: 'bg-gray-100',
  },
  {
    title: 'What is Rapid Application Development...',
    date: 'April 8, 2024',
    image: '/images/Software-prototype.jpeg',
    href: '/blog/rapid-application-development',
    bg: 'bg-gray-100',
  },
  {
    title: 'Types of Human Resource Information...',
    date: 'April 30, 2024',
    image: '/images/tacom-types-hr.jpeg',
    href: '/blog/hris-types',
    bg: 'bg-gray-100',
  },
  {
    title: 'What Is Proof of Concept (POC)?',
    date: 'January 9, 2024',
    image: '/images/AdobeStock.jpeg',
    href: '/blog/proof-of-concept',
    bg: 'bg-gray-100',
  },
  {
    title: 'How to Create an Effective CRM Strategy',
    date: 'November 26, 2024',
    image: '/images/crm strategy.jpg',
    href: '/blog/crm-strategy',
    bg: 'bg-gray-100',
  },
];

const stats = [
  {
    icon: <Users className="w-8 h-8 text-white" />,
    value: "2.1 million",
    label: "Users",
  },
  {
    icon: <Grid className="w-8 h-8 text-white" />,
    value: "163",
    label: "Technology categories",
  },
  {
    icon: <Package className="w-8 h-8 text-white" />,
    value: "3,200+",
    label: "Software products",
  },
  {
    icon: <Award className="w-8 h-8 text-white" />,
    value: "50+",
    label: "Industry experts",
  },
];

const steps = [
  {
    title: 'Research & analysis',
    description: 'Software trials, demos, user reviews, knowledge bases — our experts spend the time researching every product so you don\'t have to.',
    icon: <Activity className="w-8 h-8" />,
  },
  {
    title: 'Size it down',
    description: 'We structure our recommendations so you can skim the key takeaways in 30 seconds or dig deeper into the details that matter most.',
    icon: <Target className="w-8 h-8" />,
  },
  {
    title: 'Answers with you in mind',
    description: 'Our focus at Martechbiz is to help technology buyers make better purchasing decisions. Our editorially independent analysis is driven by years of industry knowledge and extensive research instead of client-driven priorities.',
    icon: <UserCheck className="w-8 h-8" />,
  },
];

// Animation variants for better performance
const rippleVariant = {
  hidden: { scale: 1, opacity: 0.5 },
  visible: {
    scale: 1.8,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  },
  hover: { 
    y: -8,
    transition: { duration: 0.2 }
  }
};

// Complete categories data with proper structure
const categories = [
  {
    title: 'HR Software',
    description: 'Solutions for human resource management.',
    icon: <Users className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600',
    
    popular: ['BambooHR', 'Workday', 'ADP', 'Gusto', 'Rippling'],
    logos: ['adp', 'workday', 'bamboohr', 'gusto', 'paycom'],
    links: ['/tools/adp', '/tools/workday', '/tools/bamboohr', '/tools/gusto', '/tools/paycom'],
    cardLink: '/categories/hr-software',
  },
  {
    title: 'EHR-EMR Software',
    description: 'Electronic health record and medical record systems.',
    icon: <Activity className="w-8 h-8" />,
    color: 'from-green-500 to-green-600',
   
    popular: ['Epic', 'Cerner', 'Athenahealth', 'Allscripts', 'GE Healthcare'],
    logos: ['epic', 'cerner', 'athenahealth', 'allscripts', 'ge1'],
    links: ['/tools/epic', '/tools/cerner', '/tools/athenahealth', '/tools/allscripts', '/tools/ge-healthcare'],
    cardLink: '/categories/ehr-emr',
  },
  {
    title: 'Project Management Software',
    description: 'Tools to plan and manage projects effectively.',
    icon: <Briefcase className="w-8 h-8" />,
    color: 'from-purple-500 to-purple-600',
 
    popular: ['Monday.com', 'Asana', 'Wrike', 'Trello', 'Jira'],
    logos: ['monday', 'asana', 'wrike', 'trello', 'jira'],
    links: ['/tools/monday', '/tools/asana', '/tools/wrike', '/tools/trello', '/tools/jira'],
    cardLink: '/categories/project-management',
  },
  {
    title: 'CRM Software',
    description: 'Customer relationship management platforms.',
    icon: <Target className="w-8 h-8" />,
    color: 'from-orange-500 to-orange-600',
    count: '180+ tools',
    popular: ['HubSpot', 'Zoho', 'Pipedrive', 'Salesforce', 'Freshsales'],
    logos: ['hubspot', 'zoho', 'pipedrive', 'salesforce', 'freshsales'],
    links: ['/tools/hubspot', '/tools/zoho', '/tools/pipedrive', '/tools/salesforce', '/tools/freshsales'],
    cardLink: '/categories/crm',
  },
  {
    title: 'ERP Software',
    description: 'Enterprise resource planning platforms.',
    icon: <Database className="w-8 h-8" />,
    color: 'from-red-500 to-red-600',
   
    popular: ['SAP', 'Oracle', 'NetSuite', 'MS Dynamics', 'Odoo'],
    logos: ['sap', 'oracle', 'netsuite', 'ms365', 'odoo'],
    links: ['/tools/sap', '/tools/oracle', '/tools/netsuite', '/tools/ms365', '/tools/odoo'],
    cardLink: '/categories/erp',
  },
];

const techItems = [
  {
    name: 'BambooHR',
    desc: 'Best HR software for small businesses',
    img: '/images/bamboohr1.jpg',
    link: '/tools/bamboohr',
  },
  {
    name: 'Wrike',
    desc: 'Most versatile project management software',
    img: '/images/Wrike.jpg',
    link: '/tools/wrike',
  },
  {
    name: 'Zoho CRM',
    desc: 'Best CRM for decentralized teams',
    img: '/images/zoho.jpg',
    link: '/tools/zoho-crm',
  },
  {
    name: 'Rippling',
    desc: 'Best HR software for midsize companies',
    img: '/images/rippling.jpeg',
    link: '/tools/rippling',
  },
  {
    name: 'monday work OS',
    desc: 'Best overall project management software',
    img: '/images/monday.png',
    link: '/tools/monday',
  },
  {
    name: 'Hubspot',
    desc: 'Best CRM for integrations',
    img: '/images/hubspot.jpg',
    link: '/tools/hubspot',
  },
  {
    name: 'Paycor',
    desc: 'Best payroll software for midsize businesses',
    img: '/images/paycor.png',
    link: '/tools/paycor',
  },
];

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const guideRef = useRef(null);
  const techRef = useRef(null);
  const controls = useAnimationControls();

  // Optimized form submission handler
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Optimized scroll function
  const scroll = useCallback((ref, direction) => {
    if (!ref.current) return;
    
    const cardWidth = ref.current.children[0]?.offsetWidth || 0;
    const gap = 24;
    const scrollAmount = (cardWidth + gap) * (direction === 'left' ? -1 : 1);
    
    ref.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }, []);

  // Optimized animation loop with proper cleanup
  useEffect(() => {
    let intervalId;
    let isActive = true;

    const animateSteps = async () => {
      if (!isActive) return;

      try {
        await controls.start({
          scale: 1.8,
          opacity: 0,
          transition: { duration: 0.5, ease: 'easeOut' }
        });
        
        if (!isActive) return;
        
        controls.set({ scale: 1, opacity: 0.5 });
        setCurrentStep(prev => (prev + 1) % steps.length);
      } catch (error) {
        // Handle animation error silently
      }
    };

    intervalId = setInterval(animateSteps, 1300);

    return () => {
      isActive = false;
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [controls, steps.length]);

  return (
    <>
      <Head>
        <title>B2B Martechbiz From Industry Experts</title>
        <meta 
          name="description" 
          content="Get the latest B2B technology and software advice, trends, and guidance from experts who work with it every day." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="B2B Martechbiz From Industry Experts" />
        <meta 
          property="og:description" 
          content="Expert advice on B2B technology and software from professionals who use it daily." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Head>

      {/* Hero Section */}
      <section className="bg-[#0E1F1C] text-white px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
          {/* Text Content */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              B2B Martechbiz <br className="hidden sm:block" />
              From <span className="text-[#8BC34A]">Experts Who Use It</span>
            </h1>
            <p className="text-base sm:text-lg mt-4 text-gray-300 max-w-xl">
              The latest B2B technology and software advice, trend, and guidance coming to you from the experts who work with it every day.
            </p>

            {/* Email Subscribe */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row items-center max-w-xl bg-white rounded-full shadow-md overflow-hidden"
            >
              <input type="hidden" name="access_key" value="c9f66eb3-7bae-487c-bd58-ab7a0f817bff" />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="flex-1 px-4 sm:px-5 py-2 sm:py-3 text-gray-700 focus:outline-none text-sm sm:text-base"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#ffd800] px-4 sm:px-6 py-2 sm:py-3 text-black font-semibold transition-colors text-sm sm:text-base disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Subscribe'}
              </button>
            </form>

            {submitted && (
              <motion.p 
                className="text-green-400 text-sm mt-4 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Thank you for subscribing!
              </motion.p>
            )}

            {/* Example Tags */}
            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-white/80">
              <span className="border border-white/40 rounded-full px-2 sm:px-3 py-1">Best HR Software</span>
              <span className="border border-white/40 rounded-full px-2 sm:px-3 py-1">Best PM Software</span>
              <span className="border border-white/40 rounded-full px-2 sm:px-3 py-1">Best CRM Software</span>
            </div>
          </motion.div>

          {/* Overlapping Hover-Animated Images */}
          <motion.div 
            className="relative w-full h-[350px] sm:h-[400px] md:h-[380px] flex items-center justify-center order-1 md:order-2 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Center Image */}
            <motion.div 
              className="absolute top-[75%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm z-30 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/images/group3.png" 
                alt="Team Meeting" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 144px, 192px"
              />
            </motion.div>

            {/* Left Image */}
            <motion.div 
              className="absolute top-[30%] left-[33%] transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm z-20 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/images/group1.png" 
                alt="Team Collaboration" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 128px, 176px"
              />
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="absolute top-[30%] right-[34%] transform translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm z-20 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/images/group2.png" 
                alt="Individual Work" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 128px, 176px"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

   
{/* Categories Section */}
<section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
  {/* Background with subtle pattern */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50">
    <div className="absolute inset-0 opacity-30"
         style={{
           backgroundImage: `radial-gradient(circle at 20% 20%, #00d9a6 0%, transparent 40%),
                            radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 40%)`
         }}>
    </div>
  </div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div 
      className="text-center mb-12 sm:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-[#00d9a6]/10 to-blue-500/10 rounded-full mb-4 sm:mb-6 border border-[#00d9a6]/20">
        <span className="text-xs sm:text-sm font-semibold text-gray-700">Business Solutions</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 sm:mb-6">
        Software Categories
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
        Discover comprehensive business software solutions designed to streamline your operations
      </p>
    </motion.div>

    {/* 6 Cards Grid - All Cards Equal Height */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
      
      {/* Human Resources Software */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
        whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
        className="group relative h-full"
      >
        <Link href="/hr-software" className="block h-full">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
              <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=450&fit=crop&crop=center&auto=format"
                    alt="Human Resources Management"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#00d9a6] to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-200 shadow-lg flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Content - Fixed Height Distribution */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight mb-3">
                  Human Resources Software
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed flex-1 mb-4">
                  Comprehensive HR solutions for employee management, payroll, recruitment, and performance tracking.
                </p>
                
                {/* Tools and Button - Fixed at Bottom */}
                <div className="mt-auto space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['BambooHR', 'Workday', 'ADP'].map((tool) => (
                      <span key={tool} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md sm:rounded-lg text-xs sm:text-sm text-gray-700 border border-gray-200/50 group-hover:border-blue-500/30 group-hover:bg-gradient-to-r group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-300 whitespace-nowrap">
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl p-3 sm:p-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl min-h-[44px] sm:min-h-[52px] flex items-center justify-center w-full">
                    <div className="flex items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-base w-full">
                      <span className="truncate mr-2">Explore HR Solutions</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Payroll Software */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
        className="group relative h-full"
      >
        <Link href="/payroll-software" className="block h-full">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-green-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#00d9a6] to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
              <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=450&fit=crop&crop=center&auto=format"
                    alt="Payroll Management System"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#00d9a6] to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-200 shadow-lg flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight mb-3">
                  Payroll Software
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed flex-1 mb-4">
                  Automated payroll processing, tax calculations, compliance management, and employee payment solutions.
                </p>
                
                <div className="mt-auto space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['QuickBooks', 'Gusto', 'Paychex'].map((tool) => (
                      <span key={tool} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md sm:rounded-lg text-xs sm:text-sm text-gray-700 border border-gray-200/50 group-hover:border-green-500/30 group-hover:bg-gradient-to-r group-hover:from-green-50/50 group-hover:to-emerald-50/50 transition-all duration-300 whitespace-nowrap">
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#00d9a6] to-green-500 rounded-lg sm:rounded-xl p-3 sm:p-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl min-h-[44px] sm:min-h-[52px] flex items-center justify-center w-full">
                    <div className="flex items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-base w-full">
                      <span className="truncate mr-2">Explore Payroll Tools</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* CRM Software */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
        className="group relative h-full"
      >
        <Link href="/crm-software" className="block h-full">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
              <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&crop=center&auto=format"
                    alt="Customer Relationship Management"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#00d9a6] to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-200 shadow-lg flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight mb-3">
                  CRM Software
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed flex-1 mb-4">
                  Customer relationship management tools for sales, marketing automation, and customer service excellence.
                </p>
                
                <div className="mt-auto space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['Salesforce', 'HubSpot', 'Pipedrive'].map((tool) => (
                      <span key={tool} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md sm:rounded-lg text-xs sm:text-sm text-gray-700 border border-gray-200/50 group-hover:border-orange-500/30 group-hover:bg-gradient-to-r group-hover:from-orange-50/50 group-hover:to-red-50/50 transition-all duration-300 whitespace-nowrap">
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg sm:rounded-xl p-3 sm:p-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl min-h-[44px] sm:min-h-[52px] flex items-center justify-center w-full">
                    <div className="flex items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-base w-full">
                      <span className="truncate mr-2">Explore CRM Solutions</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Sales Software */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
        className="group relative h-full"
      >
        <Link href="/sales-software" className="block h-full">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
              <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&crop=center&auto=format"
                    alt="Sales Analytics Dashboard"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#00d9a6] to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-200 shadow-lg flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight mb-3">
                  Sales Software
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed flex-1 mb-4">
                  Sales automation, lead generation, pipeline management, and performance analytics for revenue growth.
                </p>
                
                <div className="mt-auto space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['Outreach', 'SalesLoft', 'ZoomInfo'].map((tool) => (
                      <span key={tool} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md sm:rounded-lg text-xs sm:text-sm text-gray-700 border border-gray-200/50 group-hover:border-purple-500/30 group-hover:bg-gradient-to-r group-hover:from-purple-50/50 group-hover:to-pink-50/50 transition-all duration-300 whitespace-nowrap">
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl p-3 sm:p-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl min-h-[44px] sm:min-h-[52px] flex items-center justify-center w-full">
                    <div className="flex items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-base w-full">
                      <span className="truncate mr-2">Explore Sales Tools</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Project Management Software - Fixed Size */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
        whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
        className="group relative h-full"
      >
        <Link href="/project-management-software" className="block h-full">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-indigo-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
              <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop&crop=center&auto=format"
                    alt="Project Management Dashboard"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#00d9a6] to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-200 shadow-lg flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight mb-3">
                  Project Management Software
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed flex-1 mb-4">
                  Task management, team collaboration, resource planning, and project tracking solutions.
                </p>
                
                <div className="mt-auto space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['Asana', 'Monday.com', 'Trello'].map((tool) => (
                      <span key={tool} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md sm:rounded-lg text-xs sm:text-sm text-gray-700 border border-gray-200/50 group-hover:border-indigo-500/30 group-hover:bg-gradient-to-r group-hover:from-indigo-50/50 group-hover:to-cyan-50/50 transition-all duration-300 whitespace-nowrap">
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg sm:rounded-xl p-3 sm:p-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl min-h-[44px] sm:min-h-[52px] flex items-center justify-center w-full">
                    <div className="flex items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-base w-full">
                      <span className="truncate mr-2">Explore PM Tools</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Business Intelligence Software */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
        className="group relative h-full"
      >
        <Link href="/business-intelligence-software" className="block h-full">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
              <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&crop=center&auto=format"
                    alt="Business Intelligence Analytics"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#00d9a6] to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-200 shadow-lg flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight mb-3">
                  Business Intelligence Software
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed flex-1 mb-4">
                  Data analytics, reporting dashboards, business insights, and intelligence tools for data-driven decisions.
                </p>
                
                <div className="mt-auto space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['Tableau', 'Power BI', 'Looker'].map((tool) => (
                      <span key={tool} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md sm:rounded-lg text-xs sm:text-sm text-gray-700 border border-gray-200/50 group-hover:border-amber-500/30 group-hover:bg-gradient-to-r group-hover:from-amber-50/50 group-hover:to-yellow-50/50 transition-all duration-300 whitespace-nowrap">
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg sm:rounded-xl p-3 sm:p-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl min-h-[44px] sm:min-h-[52px] flex items-center justify-center w-full">
                    <div className="flex items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-base w-full">
                      <span className="truncate mr-2">Explore BI Solutions</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
    
   
  </div>
</section>

      {/* How We Analyze Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-0 right-0" />
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-0 left-0" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Analyze Technology
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our rigorous process ensures you get the most accurate recommendations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 transition-all">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white mb-6">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-bold text-green-400 mb-2">{index + 1}</div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0">
              <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48" />
              <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48" />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <motion.div 
                className="max-w-3xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Marketers: Reach a Highly Engaged Audience
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  100 million business technology and software buyers worldwide trust us to reduce
                  complexity and risk in the purchase process. Meet your buyers on their terms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                    Explore Solutions
                  </button>
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                    Chat with Sales
                  </button>
                </div>
              </motion.div>

              {/* Partner Logos */}
              <div className="flex justify-start items-center gap-10 flex-nowrap overflow-x-auto pb-10 z-10 relative hide-scrollbar">
                {logos.map((src, index) => (
                  <motion.div 
                    key={index} 
                    className="w-40 h-26 relative flex-shrink-0"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Image
                      src={src}
                      alt={`Partner ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="160px"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 bg-white">
        <div className="bg-[#0E1F1C] rounded-[2rem] w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 items-center py-12 gap-8 px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-white">
            Join Tech Insider readers for weekly tech news and resources.
              </h2>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <input type="hidden" name="access_key" value="c9f66eb3-7bae-487c-bd58-ab7a0f817bff" />

              <div className="flex flex-col sm:flex-row overflow-hidden rounded-full shadow-md">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter an email"
                  className="w-full bg-white text-black px-6 py-4 text-base outline-none"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#ffd800] text-black font-semibold px-8 py-4 transition whitespace-nowrap disabled:opacity-50"
                >
                  {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
              </div>

              <label className="flex items-center text-sm text-white gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  required
                  className="w-4 h-4 rounded focus:ring-0 accent-[#ffd800]"
                />
                By checking this box you agree to our{" "}
                <Link href="/terms" className="underline hover:text-lime-300">Terms of Use</Link> and{" "}
                <Link href="/privacy" className="underline hover:text-lime-300">Privacy Policy</Link>.
              </label>
            </motion.form>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
