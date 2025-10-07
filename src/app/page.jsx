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
     

    
{/* Ultra-Professional Responsive Hero Section */}
<section className="relative bg-gradient-to-br from-[#0A1612] via-[#0E1F1C] to-[#0A1815] text-white min-h-screen flex items-center overflow-hidden">
  {/* Animated Mesh Background */}
  <div className="absolute inset-0">
    <motion.div 
      className="absolute inset-0 opacity-20 md:opacity-30"
      animate={{
        background: [
          'radial-gradient(circle at 20% 30%, #00d9a6 0%, transparent 50%), radial-gradient(circle at 80% 70%, #8BC34A 0%, transparent 50%)',
          'radial-gradient(circle at 80% 30%, #00d9a6 0%, transparent 50%), radial-gradient(circle at 20% 70%, #8BC34A 0%, transparent 50%)',
          'radial-gradient(circle at 20% 30%, #00d9a6 0%, transparent 50%), radial-gradient(circle at 80% 70%, #8BC34A 0%, transparent 50%)',
        ]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    />
    
    {/* Geometric Grid Overlay */}
    <div className="absolute inset-0 opacity-10 md:opacity-20"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}
    />
  </div>

  {/* Floating Ambient Particles */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full blur-sm"
        style={{
          width: `${Math.random() * 3 + 2}px`,
          height: `${Math.random() * 3 + 2}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          background: i % 3 === 0 ? '#00d9a6' : i % 3 === 1 ? '#8BC34A' : '#ffd800',
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 4 + Math.random() * 3,
          repeat: Infinity,
          delay: i * 0.3,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      
      {/* Left Content Column */}
      <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
        
        {/* Hero Headline with Premium Typography */}
        <motion.div
          className="space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-2">
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="block text-white mb-1 sm:mb-2">B2B</span>
              <span className="block">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00d9a6] via-[#8BC34A] to-[#ffd800] blur-xl sm:blur-2xl opacity-50" />
                  <span className="relative bg-gradient-to-r from-[#00d9a6] via-[#8BC34A] to-[#ffd800] bg-clip-text text-transparent">
                    Martech
                  </span>
                </span>
                <span className="text-white">biz</span>
              </span>
            </motion.h1>
          </div>
          
          {/* Elegant Subtitle */}
          <motion.div 
            className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div 
              className="h-px w-12 sm:w-16 bg-gradient-to-r from-[#00d9a6] to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <span className="text-lg sm:text-xl md:text-2xl text-white/90 font-light tracking-wide">
              From Experts Who Use It
            </span>
          </motion.div>
        </motion.div>

        {/* Premium Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Unlock cutting-edge B2B technology insights and software recommendations from industry professionals who implement these solutions daily.
        </motion.p>

        {/* Enhanced Email Form */}
        <motion.div
          className="space-y-4 sm:space-y-6 pt-2 sm:pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-3xl mx-auto lg:mx-0">
              <input type="hidden" name="access_key" value="c9f66eb3-7bae-487c-bd56-ab7a0f817bff" />
              
              <div className="relative flex-1">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d9a6]/20 to-[#8BC34A]/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your professional email"
                  className="relative w-full px-5 sm:px-8 py-4 sm:py-5 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl text-white text-base sm:text-lg placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00d9a6] focus:border-transparent focus:bg-white/10 transition-all duration-300 shadow-2xl"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={loading}
                className="relative px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#00d9a6] via-[#00d9a6] to-[#8BC34A] text-black text-base sm:text-lg font-bold rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden group disabled:opacity-50"
                whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 217, 166, 0.5)" }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 whitespace-nowrap">
                  {loading ? 'Joining...' : 'Get Access'}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#8BC34A] to-[#ffd800]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </form>

          {/* Success Notification */}
          {submitted && (
            <motion.div
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-r from-[#00d9a6]/10 to-[#8BC34A]/10 border border-[#00d9a6]/30 rounded-xl sm:rounded-2xl backdrop-blur-xl shadow-lg max-w-3xl mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#00d9a6] rounded-full flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div className="absolute inset-0 bg-[#00d9a6] rounded-full animate-ping opacity-50" />
              </div>
              <span className="text-[#00d9a6] font-semibold text-sm sm:text-base lg:text-lg">Welcome to the insider community!</span>
            </motion.div>
          )}

          {/* Expertise Categories - Horizontal Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 justify-center lg:justify-start">
            {[
              { label: 'HR Tech', color: '#00d9a6', delay: 1.2 },
              { label: 'Project Management', color: '#8BC34A', delay: 1.3 },
              { label: 'CRM Systems', color: '#ffd800', delay: 1.4 },
              { label: 'Analytics', color: '#00d9a6', delay: 1.5 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative px-4 sm:px-6 py-2 sm:py-2.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full overflow-hidden cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: item.delay }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)` }}
                />
                <span className="relative z-10 text-xs sm:text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Visual Showcase - Hidden on Mobile, Visible on Large Screens */}
      <div className="hidden lg:block lg:col-span-5">
        <motion.div
          className="relative h-[500px] xl:h-[700px]"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {/* Central Rotating Showcase */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 xl:w-96 xl:h-96"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            }}
          >
            {/* Outer Glow Ring */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00d9a6]/20 via-transparent to-[#8BC34A]/20 blur-2xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#00d9a6]/30 bg-gradient-to-br from-[#00d9a6]/5 to-transparent backdrop-blur-md shadow-2xl" />
            
            {/* Middle Ring */}
            <div className="absolute inset-8 rounded-full border-2 border-[#8BC34A]/40 bg-gradient-to-br from-[#8BC34A]/5 to-transparent backdrop-blur-md" />
            
            {/* Inner Core Circle */}
            <motion.div
              className="absolute inset-16 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
              whileHover={{ scale: 1.12, rotate: 8 }}
              transition={{ duration: 0.4, type: "spring" }}
              style={{
                boxShadow: '0 0 60px rgba(0, 217, 166, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.3)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop"
                alt="Team Collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d9a6]/30 via-transparent to-[#8BC34A]/30" />
            </motion.div>
          </motion.div>

          {/* Orbiting Satellite Elements */}
          {[
            { angle: 0, distance: 180, size: 90, image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=100&h=100&fit=crop', color: '#00d9a6', duration: 16 },
            { angle: 120, distance: 170, size: 75, image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=85&h=85&fit=crop', color: '#8BC34A', duration: 18 },
            { angle: 240, distance: 150, size: 65, image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=70&h=70&fit=crop', color: '#ffd800', duration: 20 },
          ].map((orbit, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ width: orbit.size, height: orbit.size }}
              animate={{
                rotate: [orbit.angle, orbit.angle + 360],
                x: [
                  Math.cos(orbit.angle * Math.PI / 180) * orbit.distance,
                  Math.cos((orbit.angle + 360) * Math.PI / 180) * orbit.distance
                ],
                y: [
                  Math.sin(orbit.angle * Math.PI / 180) * orbit.distance,
                  Math.sin((orbit.angle + 360) * Math.PI / 180) * orbit.distance
                ]
              }}
              transition={{
                duration: orbit.duration,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm"
                style={{
                  border: `3px solid ${orbit.color}60`,
                  boxShadow: `0 0 30px ${orbit.color}40, inset 0 0 20px rgba(0,0,0,0.2)`
                }}
                whileHover={{ scale: 1.25, rotate: -15, zIndex: 50 }}
                animate={{ rotate: [0, -360] }}
                transition={{
                  hover: { duration: 0.3 },
                  rotate: { duration: orbit.duration, repeat: Infinity, ease: "linear" }
                }}
              >
                <img
                  src={orbit.image}
                  alt={`Team ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 opacity-40"
                  style={{ background: `linear-gradient(135deg, ${orbit.color}40, transparent)` }}
                />
              </motion.div>
            </motion.div>
          ))}

          {/* Floating Stats Cards */}
          <motion.div
            className="absolute top-12 xl:top-16 right-4 xl:right-8 bg-gradient-to-br from-[#00d9a6]/10 to-[#00d9a6]/5 backdrop-blur-xl border border-[#00d9a6]/30 rounded-xl xl:rounded-2xl p-4 xl:p-5 shadow-2xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              className="text-2xl xl:text-3xl font-black bg-gradient-to-r from-[#00d9a6] to-[#8BC34A] bg-clip-text text-transparent"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              98%
            </motion.div>
            <div className="text-xs text-white/70 font-medium mt-1 tracking-wide">Success Rate</div>
          </motion.div>

          <motion.div
            className="absolute bottom-16 xl:bottom-20 left-4 xl:left-8 bg-gradient-to-br from-[#8BC34A]/10 to-[#8BC34A]/5 backdrop-blur-xl border border-[#8BC34A]/30 rounded-xl xl:rounded-2xl p-4 xl:p-5 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              className="text-2xl xl:text-3xl font-black bg-gradient-to-r from-[#8BC34A] to-[#ffd800] bg-clip-text text-transparent"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              24/7
            </motion.div>
            <div className="text-xs text-white/70 font-medium mt-1 tracking-wide">Expert Support</div>
          </motion.div>

          {/* Connection Lines Effect */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <motion.line
              x1="50%" y1="50%" x2="70%" y2="20%"
              stroke="#00d9a6"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.line
              x1="50%" y1="50%" x2="30%" y2="80%"
              stroke="#8BC34A"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Mobile Visual Accent - Visible only on Mobile */}
      <div className="lg:hidden flex justify-center mt-8">
        <motion.div
          className="relative w-64 h-64 sm:w-80 sm:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Simplified Mobile Visual */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#00d9a6]/30 shadow-2xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d9a6]/40 via-transparent to-[#8BC34A]/40" />
          </motion.div>

          {/* Floating Stats for Mobile */}
          <motion.div
            className="absolute -top-4 -right-4 bg-gradient-to-br from-[#00d9a6]/10 to-[#00d9a6]/5 backdrop-blur-xl border border-[#00d9a6]/30 rounded-xl p-3 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="text-2xl font-black bg-gradient-to-r from-[#00d9a6] to-[#8BC34A] bg-clip-text text-transparent">98%</div>
            <div className="text-xs text-white/70 font-medium">Success</div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 bg-gradient-to-br from-[#8BC34A]/10 to-[#8BC34A]/5 backdrop-blur-xl border border-[#8BC34A]/30 rounded-xl p-3 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <div className="text-2xl font-black bg-gradient-to-r from-[#8BC34A] to-[#ffd800] bg-clip-text text-transparent">24/7</div>
            <div className="text-xs text-white/70 font-medium">Support</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
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
        <Link href="/Software-evaluation/HR-software" className="block h-full">
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
                    src="/images/HR.png"
                    alt="Human Resources Management"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                
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
        <Link href="/Software-evaluation/Payroll-software" className="block h-full">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-green-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#00d9a6] to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
              <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img 
                    src="/images/payroll.png"
                    alt="Payroll Management System"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                
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
        <Link href="/Software-evaluation/CRM-software" className="block h-full">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
              <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img 
                    src="/images/crm.png"
                    alt="Customer Relationship Management"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                
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
        <Link href="/Software-evaluation/Sales-software" className="block h-full">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
              <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img 
                    src="/images/sales.png"
                    alt="Sales Analytics Dashboard"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
               
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
        <Link href="/Software-evaluation/Project-management" className="block h-full">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-indigo-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
              <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img 
                    src="/images/project.png"
                    alt="Project Management Dashboard"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                
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
        <Link href="/Software-evaluation/Business-Intelligence-Software" className="block h-full">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
              <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                <div className="aspect-[16/9] w-full">
                  <img 
                    src="/images/business.png"
                    alt="Business Intelligence Analytics"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                
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


{/* How We Analyze Section with #0E1F1C */}
<section className="py-20 bg-gradient-to-br from-[#0E1F1C] via-[#1a2e2a] to-[#0E1F1C] text-white relative overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute w-96 h-96 bg-[#00d9a6]/15 rounded-full blur-3xl top-0 right-0 animate-pulse" />
    <div className="absolute w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute w-64 h-64 bg-[#00d9a6]/10 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" />
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d9a6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }} />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Enhanced Header with Badge */}
      <motion.div 
        className="inline-flex items-center px-4 py-2 bg-[#00d9a6]/20 border border-[#00d9a6]/30 rounded-full mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <span className="w-2 h-2 bg-[#00d9a6] rounded-full mr-2 animate-pulse" />
        <span className="text-[#00d9a6] text-sm font-medium">Our Analysis Process</span>
      </motion.div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        How We Analyze 
        <span className="bg-gradient-to-r from-[#00d9a6] to-emerald-400 bg-clip-text text-transparent"> Technology</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Our rigorous process ensures you get the most accurate recommendations through comprehensive evaluation and expert analysis
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
          className="relative group"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 hover:border-[#00d9a6]/30 transition-all duration-300 hover:transform hover:scale-105">
            {/* Enhanced Icon Container */}
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00d9a6] to-emerald-500 flex items-center justify-center text-white mb-6 group-hover:shadow-lg group-hover:shadow-[#00d9a6]/25 transition-all duration-300">
              {step.icon}
            </div>
            
            {/* Step Number with Enhanced Styling */}
            <div className="text-4xl font-bold bg-gradient-to-r from-[#00d9a6] to-emerald-400 bg-clip-text text-transparent mb-2">
              {String(index + 1).padStart(2, '0')}
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00d9a6] transition-colors duration-300">
              {step.title}
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              {step.description}
            </p>

            {/* Enhanced Progress Indicator */}
            <div className="mt-6 w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#00d9a6] to-emerald-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
              />
            </div>
          </div>

          {/* Enhanced Connection Line */}
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#00d9a6] to-transparent opacity-60">
              <motion.div
                className="absolute top-0 right-0 w-2 h-2 bg-[#00d9a6] rounded-full transform translate-x-1 -translate-y-0.5"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            </div>
          )}

          {/* Hover Effect Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d9a6]/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </motion.div>
      ))}
    </div>

    {/* Enhanced Bottom Section */}
    <motion.div 
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
    >
      <div className="inline-flex items-center space-x-2 text-gray-400">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#00d9a6]" />
        <span className="text-sm font-medium">Trusted by industry experts</span>
        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#00d9a6]" />
      </div>
    </motion.div>
  </div>
</section>

{/* Enhanced Marketers Section with */}
<section className="py-20 bg-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-gradient-to-br from-[#0E1F1C] via-[#1a2e2a] to-[#0E1F1C] rounded-3xl overflow-hidden shadow-2xl relative">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-[#00d9a6]/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute w-64 h-64 bg-[#00d9a6]/15 rounded-full blur-2xl top-1/2 right-1/4 animate-bounce" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d9a6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Enhanced Header with Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-[#00d9a6]/20 border border-[#00d9a6]/30 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-[#00d9a6] rounded-full mr-2 animate-pulse" />
            <span className="text-[#00d9a6] text-sm font-medium">For Marketing Professionals</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Marketers: Reach a 
            <span className="bg-gradient-to-r from-[#00d9a6] to-emerald-400 bg-clip-text text-transparent"> Highly Engaged</span> Audience
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
            100 million business technology and software buyers worldwide trust us to reduce
            complexity and risk in the purchase process. Meet your buyers on their terms.
          </p>

          {/* Enhanced Stats Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#00d9a6]/30 transition-all duration-300">
              <div className="text-3xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Trust & Reliability</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#00d9a6]/30 transition-all duration-300">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Expert Support</div>
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.button 
              className="group px-8 py-4 bg-[#00d9a6] text-white rounded-full font-semibold hover:bg-[#00c396] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#00d9a6]/25 transform hover:scale-105 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/About-Us/Contact-us'}
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Solutions
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d9a6] to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            
          </div>
        </motion.div>

        {/* Enhanced Partner Logos Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="mb-6">
            <h3 className="text-white/80 text-sm font-medium mb-4 tracking-wider uppercase">Trusted by Industry Leaders</h3>
          </div>
          
          <div className="flex justify-start items-center gap-10 flex-nowrap overflow-x-auto pb-10 z-10 relative hide-scrollbar">
            {logos.map((src, index) => (
              <motion.div 
                key={index} 
                className="w-40 h-26 relative flex-shrink-0 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d9a6]/20 to-emerald-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <Image
                  src={src}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
                  sizes="160px"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Contact Button for Mobile */}
        <motion.div 
          className="fixed bottom-6 right-6 z-50 md:hidden"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <button 
            className="bg-[#00d9a6] text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:shadow-[#00d9a6]/30"
            onClick={() => window.location.href = '/contact-us'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  </div>
</section>

{/* CSS Styles */}
<style jsx>{`
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`}</style>

      {/* Email Signup Section */}
    
<section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
  <div className="relative bg-gradient-to-br from-[#0E1F1C] via-[#0E1F1C] to-[#1a2f2b] rounded-3xl sm:rounded-[2.5rem] w-full max-w-7xl mx-auto overflow-hidden shadow-2xl">
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffd800] rounded-full blur-[120px] opacity-10"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ffd800] rounded-full blur-[100px] opacity-10"></div>
    
    <div className="relative grid md:grid-cols-2 items-center gap-8 lg:gap-12 py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <div className="inline-block px-4 py-2 bg-[#ffd800] bg-opacity-10 rounded-full mb-4">
          <span className="text-[#ffd800] text-sm font-semibold tracking-wide">NEWSLETTER</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold leading-tight text-white">
          Join Tech Insider readers for weekly tech news and resources.
        </h2>
       
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <input type="hidden" name="access_key" value="c9f66eb3-7bae-487c-bd58-ab7a0f817bff" />

        <div className="relative group">
          <div className="flex flex-col sm:flex-row overflow-hidden rounded-2xl shadow-xl border-2 border-transparent group-hover:border-[#ffd800] transition-all duration-300">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-full bg-white text-black px-6 py-4 sm:py-5 text-base outline-none placeholder:text-gray-400"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#ffd800] hover:bg-[#ffed4e] text-black font-bold px-8 py-4 sm:py-5 transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>
        </div>

        <label className="flex items-start text-sm text-gray-300 gap-3 cursor-pointer hover:text-white transition-colors">
          <input
            type="checkbox"
            name="terms"
            required
            className="w-5 h-5 rounded mt-0.5 focus:ring-2 focus:ring-[#ffd800] accent-[#ffd800] cursor-pointer"
          />
          <span className="leading-relaxed">
            By checking this box you agree to our{" "}
            <Link href="/Terms-of-use" className="underline hover:text-[#ffd800] transition-colors font-medium">Terms of Use</Link> and{""}
            <Link href="/Privacy-policy" className="underline hover:text-[#ffd800] transition-colors font-medium">Privacy Policy</Link>.
          </span>
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