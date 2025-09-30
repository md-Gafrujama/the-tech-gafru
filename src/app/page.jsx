// 'use client';

// import Image from 'next/image';
// import Head from 'next/head';
// import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
// import { useRef } from 'react';
// import Link from 'next/link';
// import { useEffect } from 'react';
// import { motion, useAnimationControls } from 'framer-motion';
// import { Users, Grid, Package, Award } from "lucide-react";
// import { useState } from 'react';
// const logos = [
//   "/images/partners-salesforce.svg",
//   "/images/partners-oracle.svg",
//   "/images/partners-sap.svg",
//   "/images/partner-dell.svg",
//   "/images/partner-ibm.svg",
//   "/images/partners-jazzhr.svg",
// ];

// const posts = [
//   {
//     title: 'Best Human Resources (HR) Software for Small...',
//     date: 'May 5, 2025',
//     image: '/images/small-business-hr-software.png',
//     href:'/blogs/',
//     bg: 'bg-gray-100',
//   },
//   {
//     title: 'Best HRIS Systems of 2025',
//     date: 'February 18, 2025',
//     image: '/images/best HRIS.png',
//     href:'/blogs/',
//     bg: 'bg-gray-100',
//   },
//   {
//     title: 'Best HRMS Software',
//     date: 'September 19, 2024',
//     image: '/images/Best-HRMS-Software.jpeg',
//     href: '/blog/human-resources/best-hrms-software',
//     bg: 'bg-gray-100',
//   },
//   {
//     title: 'Asana vs monday: Top Project Management...',
//     date: 'September 19, 2024',
//     image: '/images/monday-asana.jpeg',
//     href: '/blog/project-management/asana-vs-monday',
//     bg: 'bg-gray-100',
//   },  {
//     title: 'Smartsheet vs. monday.com Comparison',
//     date: 'March 26, 2024',
//     image: '/images/Smartsheet.png',
//     href: '/blog/smartsheet-vs-monday',
//     bg: 'bg-gray-100',
//   },
//   {
//     title: 'CRM For Outlook: Integrate & Manage Customers...',
//     date: 'January 14, 2025',
//     image: '/images/crm outlook.png',
//     href: '/blog/crm-outlook',
//     bg: 'bg-gray-100',
//   },
//   {
//     title: 'What is Rapid Application Development...',
//     date: 'April 8, 2024',
//     image: '/images/Software-prototype.jpeg',
//     href: '/blog/rapid-application-development',
//     bg: 'bg-gray-100',
//   },
//   {
//     title: 'Types of Human Resource Information...',
//     date: 'April 30, 2024',
//     image: '/images/tacom-types-hr.jpeg',
//     href: '/blog/hris-types',
//     bg: 'bg-gray-100',
//   },
//   {
//     title: 'What Is Proof of Concept (POC)?',
//     date: 'January 9, 2024',
//     image: '/images/AdobeStock.jpeg',
//     href: '/blog/proof-of-concept',
//     bg: 'bg-gray-100',
//   },
//   {
//     title: 'How to Create an Effective CRM Strategy',
//     date: 'November 26, 2024',
//     image: '/images/crm strategy.jpg',
//     href: '/blog/crm-strategy',
//     bg: 'bg-gray-100',
//   },
// ];

// const stats = [
//   {
//     icon: <Users className="w-8 h-8 text-white" />,
//     value: "2.1 million",
//     label: "Users",
//   },
//   {
//     icon: <Grid className="w-8 h-8 text-white" />,
//     value: "163",
//     label: "Technology categories",
//   },
//   {
//     icon: <Package className="w-8 h-8 text-white" />,
//     value: "3,200+",
//     label: "Software products",
//   },
//   {
//     icon: <Award className="w-8 h-8 text-white" />,
//     value: "50+",
//     label: "Industry experts",
//   },
// ];

// const steps = [
//   {
//     title: 'Research & analysis',
//     description:
//       'Software trials, demos, user reviews, knowledge bases — our experts spend the time researching every product so you don\'t have to.',
//   },
//   {
//     title: 'Size it down',
//     description:
//       'We structure our recommendations so you can skim the key takeaways in 30 seconds or dig deeper into the details that matter most.',
//   },
//   {
//     title: 'Answers with you in mind',
//     description:
//       'Our focus at TechnologyAdvice is to help technology buyers make better purchasing decisions. Our editorially independent analysis is driven by years of industry knowledge and extensive research instead of client-driven priorities.',
//   },
// ];

// const rippleVariant = {
//   hidden: { scale: 1, opacity: 0.5 },
//   visible: {
//     scale: 1.8,
//     opacity: 0,
//     transition: {
//       duration: 0.5,
//       ease: 'easeOut',
//     },
//   },
// };

// const categories = [
//   {
//     title: 'HR Software',
//     description: 'Solutions for human resource management.',
//     logos: ['adp', 'workday', 'bamboohr', 'gusto', 'paycom'],
//     links: [
//       '/tools/adp',
//       '/tools/workday',
//       '/tools/bamboohr',
//       '/tools/gusto',
//       '/tools/paycom'
//     ],
//     cardLink: '/categories/hr-software',
//   },
//   {
//     title: 'EHR-EMR Software',
//     description: 'Electronic health record and medical record systems.',
//     logos: ['epic', 'cerner', 'athenahealth', 'allscripts', 'ge1'],
//     links: [
//       '/tools/epic',
//       '/tools/cerner',
//       '/tools/athenahealth',
//       '/tools/allscripts',
//       '/tools/ge-healthcare'
//     ],
//     cardLink: '/categories/ehr-emr',
   
//   },
//   {
//     title: 'Project Management Software',
//     description: 'Tools to plan and manage projects effectively.',
//     logos: ['monday', 'asana', 'wrike', 'trello', 'jira'],
//     links: [
//       '/tools/monday',
//       '/tools/asana',
//       '/tools/wrike',
//       '/tools/trello',
//       '/tools/jira'
//     ],
//     cardLink: '/categories/project-management',
//   },
//   {
//     title: 'CRM Software',
//     description: 'Customer relationship management platforms.',
//     logos: ['hubspot', 'zoho', 'pipedrive', 'salesforce', 'freshsales'],
//     links: [
//       '/tools/hubspot',
//       '/tools/zoho',
//       '/tools/pipedrive',
//       '/tools/salesforce',
//       '/tools/freshsales'
//     ],
//     cardLink: '/categories/crm',
//   },
//   {
//     title: 'ERP Software',
//     description: 'Enterprise resource planning platforms.',
//     logos: ['sap', 'oracle', 'netsuite', 'ms365', 'odoo'],
//     links: [
//       '/tools/sap',
//       '/tools/oracle',
//       '/tools/netsuite',
//       '/tools/ms365',
//       '/tools/odoo'
//     ],
//     cardLink: '/categories/erp',
//   },
// ];

// const techItems = [
//   {
//     name: 'BambooHR',
//     desc: 'Best HR software for small businesses',
//     img: '/images/bamboohr1.jpg',
//     link: '/tools/bamboohr',
//   },
//   {
//     name: 'Wrike',
//     desc: 'Most versatile project management software',
//     img: '/images/Wrike.jpg',
//     link: '/tools/wrike',
//   },
//   {
//     name: 'Zoho CRM',
//     desc: 'Best CRM for decentralized teams',
//     img: '/images/zoho.jpg',
//     link: '/tools/zoho-crm',
//   },
//   {
//     name: 'Rippling',
//     desc: 'Best HR software for midsize companies',
//     img: '/images/rippling.jpeg',
//     link: '/tools/rippling',
//   },
//   {
//     name: 'monday work OS',
//     desc: 'Best overall project management software',
//     img: '/images/monday.png',
//     link: '/tools/monday',
//   },
//   {
//     name: 'Hubspot',
//     desc: 'Best CRM for integrations',
//     img: '/images/hubspot.jpg',
//     link: '/tools/hubspot',
//   },
//   {
//     name: 'Paycor',
//     desc: 'Best payroll software for midsize businesses',
//     img: '/images/paycor.png',
//     link: '/tools/paycor',
//   },
// ];

// export default function Page() {
//    const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Stop the default form redirect
//     setLoading(true);

//     const formData = new FormData(e.target);

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         setSubmitted(true);
//         e.target.reset(); // Clear input
//       } else {
//         alert('Something went wrong. Please try again.');
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const guideRef = useRef(null);
//   const techRef = useRef(null);

//   const scroll = (ref, direction) => {
//     if (!ref.current) return;
//     const cardWidth = ref.current.children[0]?.offsetWidth || 0;
//     const gap = 24;
//     const scrollAmount = (cardWidth + gap) * (direction === 'left' ? -1 : 1);
//     ref.current.scrollBy({
//       left: scrollAmount,
//       behavior: 'smooth',
//     });
//   };
  
//   const controls = steps.map(() => useAnimationControls());

//   useEffect(() => {
//     let current = 0;
//     const loop = () => {
//       controls[current].start('visible').then(() => {
//         controls[current].set('hidden');
//         current = (current + 1) % steps.length;
//         setTimeout(loop, 800);
//       });
//     };
//     loop();
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>B2C Technology Advice From Industry Experts</title>
//         <meta 
//           name="description" 
//           content="Get the latest B2B technology and software advice, trends, and guidance from experts who work with it every day." 
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta property="og:title" content="B2B Technology Advice From Industry Experts" />
//         <meta 
//           property="og:description" 
//           content="Expert advice on B2B technology and software from professionals who use it daily." 
//         />
//         <meta property="og:type" content="website" />
//       </Head>

//       {/* Hero Section */}
//       <section className="bg-[#0E1F1C] text-white px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
//           {/* Text Content */}
//           <div className="order-2 md:order-1">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//               B2C Technology Advice <br className="hidden sm:block" />
//               From <span className="text-[#8BC34A]">Experts Who Use It</span>
//             </h1>
//             <p className="text-base sm:text-lg mt-4 text-gray-300 max-w-xl">
//               The latest B2B technology and software advice, trend, and guidance coming to you from the experts who work with it every day.
//             </p>

//                  {/* Email Subscribe */}
//        <form
//         onSubmit={handleSubmit}
//         className="mt-8 flex flex-col sm:flex-row items-center max-w-xl bg-white rounded-full shadow-md overflow-hidden"
//       >
//         <input type="hidden" name="access_key" value="c9f66eb3-7bae-487c-bd58-ab7a0f817bff" />

//         <input
//           type="email"
//           name="email"
//           required
//           placeholder="Enter your email address"
//           className="flex-1 px-4 sm:px-5 py-2 sm:py-3 text-gray-700 focus:outline-none text-sm sm:text-base"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-[#ffd800] px-4 sm:px-6 py-2 sm:py-3 text-black font-semibold transition-colors text-sm sm:text-base"
//         >
//           {loading ? 'Submitting...' : 'Subscribe'}
//         </button>
//       </form>

//       {submitted && (
//         <p className="text-green-600 text-sm mt-4 font-medium">
//           ✅ Thank you for subscribing!
//         </p>
//       )}
    
 

//             {/* Example Tags */}
//             <div className="mt-4 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-white/80">
//               <span className="border border-white/40 rounded-full px-2 sm:px-3 py-1">Best HR Software</span>
//               <span className="border border-white/40 rounded-full px-2 sm:px-3 py-1">Best PM Software</span>
//               <span className="border border-white/40 rounded-full px-2 sm:px-3 py-1">Best CRM Software</span>
//             </div>
//           </div>

//           {/* Overlapping Hover-Animated Images */}
//   <div className="relative w-full h-[350px] sm:h-[400px] md:h-[380px] flex items-center justify-center order-1 md:order-2 overflow-hidden ">

//   {/* Animated Background Blobs */}
   
   

//   {/* Center Image */}
//   <div className="absolute top-[75%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm z-30 shadow-md transition-transform duration-300 hover:scale-105">
//     <Image 
//       src="/images/group3.png" 
//       alt="Team Meeting" 
//       fill 
//       className="object-cover"
//     />
//   </div>

//   {/* Left Image */}
//   <div className="absolute top-[30%] left-[33%] transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm z-20 shadow-md transition-transform duration-300 hover:scale-105">
//     <Image 
//       src="/images/group1.png" 
//       alt="Team Collaboration" 
//       fill 
//       className="object-cover"
//     />
//   </div>

//   {/* Right Image */}
//   <div className="absolute top-[30%] right-[34%] transform translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm z-20 shadow-md transition-transform duration-300 hover:scale-105">
//     <Image 
//       src="/images/group2.png" 
//       alt="Individual Work" 
//       fill 
//       className="object-cover"
//     />
//   </div>
// </div>
//         </div>
//       </section>

//       {/* Buyer's Guide Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Our most popular buyer's guides
//             </h2>
//             <p className="text-lg text-gray-600">
//               Get started with our expert reviews and buying guidance for 163 categories of B2B technology.
//             </p>
//           </div>

//           <div className="relative w-full">
//             <div
//               ref={guideRef}
//               className="flex overflow-x-hidden gap-6 pb-6 hide-scrollbar"
//             >
//               {categories.map((category, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[320px] h-[280px] bg-white hover:bg-green-50 border border-gray-200 hover:border-green-400 rounded-2xl p-6 shadow-md flex flex-col"
//                 >
//                   {/* Logos with links */}
//                   <div className="flex items-center mb-6 -space-x-5">
//                     {category.logos.map((logo, i) => (
//                       <Link key={i} href={category.links[i]} passHref>
//                         <div className="w-16 h-16 rounded-full bg-white shadow flex items-center justify-center z-[1] hover:scale-110 transition-transform cursor-pointer">
//                           <Image
//                             src={`/images/${logo}.gif`}
//                             alt={logo}
//                             width={40}
//                             height={40}
//                             className="rounded-full object-contain w-3/4 h-3/4"
//                           />
//                         </div>
//                       </Link>
//                     ))}
//                   </div>

//                   {/* Text with card link */}
//                   <Link href={category.cardLink} passHref>
//                     <div className="flex-grow flex flex-col justify-center cursor-pointer">
//                       <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors">
//                         {category.title}
//                       </h3>
//                       <p className="text-sm text-gray-600">{category.description}</p>
//                     </div>
//                   </Link>
//                 </div>
//               ))}
//             </div>
// <style jsx>{`
//   .hide-scrollbar {
//     -ms-overflow-style: none;  /* IE and Edge */
//     scrollbar-width: none;  /* Firefox */
//   }
//   .hide-scrollbar::-webkit-scrollbar {
//     display: none;  /* Chrome, Safari and Opera */
//   }
// `}</style>
//             <div className="flex justify-center mt-12 gap-4">
//               <button
//                 onClick={() => scroll(guideRef, 'left')}
//                 className="w-14 h-14 rounded-full border border-gray-300 bg-white hover:border-gray-600 flex items-center justify-center transition"
//               >
//                 <ChevronLeft className="w-6 h-6 text-gray-700" />
//               </button>
//               <button
//                 onClick={() => scroll(guideRef, 'right')}
//                 className="w-14 h-14 rounded-full border border-gray-300 bg-white hover:border-gray-600 flex items-center justify-center transition"
//               >
//                 <ChevronRight className="w-6 h-6 text-gray-700" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Trending B2B Tech Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Trending B2B technology
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Our experts use data-driven analysis to determine the best software and technology solutions.
//             </p>
//           </div>

//           <div className="relative w-full">
//             <div
//               ref={techRef}
//               className="flex overflow-x-hidden gap-6 pb-6 hide-scrollbar"
//             >
//               {techItems.map((item, index) => (
//                 <Link key={index} href={item.link} passHref>
//                   <div className="flex-shrink-0 w-[200px] sm:w-[220px] lg:w-[240px] h-[240px] bg-white hover:bg-green-50 border border-gray-200 hover:border-green-400 rounded-2xl p-4 shadow-md transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer">
//                     <div className="w-full h-28 mb-3 flex items-center justify-center">
//                       <Image 
//                         src={item.img} 
//                         alt={item.name} 
//                         width={120} 
//                         height={90} 
//                         className="h-full w-auto object-contain"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="text-base font-semibold text-gray-900 hover:text-green-600 transition-colors">
//                         {item.name}
//                       </h3>
//                       <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
// <style jsx>{`
//   .hide-scrollbar {
//     -ms-overflow-style: none;  /* IE and Edge */
//     scrollbar-width: none;  /* Firefox */
//   }
//   .hide-scrollbar::-webkit-scrollbar {
//     display: none;  /* Chrome, Safari and Opera */
//   }
// `}</style>
//             <div className="flex justify-center mt-8 gap-4">
//               <button
//                 onClick={() => scroll(techRef, 'left')}
//                 className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:border-gray-600 flex items-center justify-center transition"
//               >
//                 <ArrowLeft className="w-5 h-5 text-gray-700" />
//               </button>
//               <button
//                 onClick={() => scroll(techRef, 'right')}
//                 className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:border-gray-600 flex items-center justify-center transition"
//               >
//                 <ArrowRight className="w-5 h-5 text-gray-700" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How We Analyze Section */}
//       <section className="bg-[#0E1F1C] text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//               How we analyze technology
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
//             {steps.map((step, index) => (
//               <div key={index} className="relative flex flex-col items-center">
//                 {/* Animated Ripple */}
//                 <motion.div
//                   className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-[3px] border-white/40 z-0"
//                   variants={rippleVariant}
//                   initial="hidden"
//                   animate={controls[index]}
//                 />

//                 {/* Static Circle */}
//                 <div className="relative z-10 w-16 h-16 rounded-full bg-white text-black font-bold text-lg flex items-center justify-center shadow-md">
//                   {index + 1}
//                 </div>

//                 <h3 className="text-xl font-semibold mt-6">{step.title}</h3>
//                 <p className="text-sm text-white/80 mt-3">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="bg-[#0E1F1C] py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
//             Data-based research with you in mind
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {stats.map((stat, i) => (
//               <div
//                 key={i}
//                 className="bg-[#1F2E2B] rounded-2xl p-6 flex flex-col items-start sm:items-center text-white"
//               >
//                 <div className="bg-[#153430] p-3 rounded-xl mb-6">{stat.icon}</div>
//                 <div className="text-2xl font-semibold mb-1">{stat.value}</div>
//                 <div className="text-sm text-gray-300">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Marketers Section */}
//       <section className="py-20 bg-white">
//         <div className="bg-[#0E1F1C] rounded-[2rem] w-full max-w-7xl mx-auto px-6 sm:px-8 text-white relative overflow-hidden">
//           {/* Text Content */}
//           <div className="text-left max-w-6xl mx-auto z-10 relative pt-10 px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">
//               Marketers: Reach a highly engaged audience
//             </h2>
//             <p className="text-lg text-gray-200 mb-10">
//               100 million business technology and software buyers worldwide trust us to reduce
//               complexity and risk in the purchase process. Meet your buyers on their terms and
//               put the power of buyer engagements to work, building your brand and driving
//               demand for your products.
//             </p>
//             <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-12">
//               <button className="bg-white text-gray-800 font-semibold text-lg py-3 px-8 rounded-full shadow hover:bg-gray-100 transition">
//                 Explore Solutions
//               </button>
//               <button className="bg-white text-gray-800 font-semibold text-lg py-3 px-8 rounded-full shadow hover:bg-gray-100 transition">
//                 Chat with Sales
//               </button>
//             </div>
//           </div>

//           {/* Logos Row */}
//          <div className="flex justify-start items-center gap-10 flex-nowrap overflow-x-auto pb-10 z-10 relative px-4 sm:px-6 lg:px-8 hide-scrollbar">
//   {logos.map((src, index) => (
//     <div key={index} className="w-40 h-26 relative flex-shrink-0">
//       <Image
//         src={src}
//         alt={`images ${index + 1}`}
//         fill
//         className="object-contain"
//       />
//     </div>
//   ))}
// </div>

// <style jsx>{`
//   .hide-scrollbar {
//     -ms-overflow-style: none;  /* IE and Edge */
//     scrollbar-width: none;  /* Firefox */
//   }
//   .hide-scrollbar::-webkit-scrollbar {
//     display: none;  /* Chrome, Safari and Opera */
//   }
// `}</style>

//           {/* Background Decorations */}
//           <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
//             <div className="absolute left-[-80px] top-[-80px] w-[300px] h-[300px] rounded-full border border-[#1A3440] opacity-30" />
//             <div className="absolute bottom-[-40px] right-[-40px] w-[150px] h-[150px] border border-[#1A3440] rounded-full opacity-30" />
//           </div>
//         </div>
           
//       </section>

//       {/* Featured Posts Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-10">
//             Featured Posts
//           </h2>
//           <div className="grid sm:grid-cols-2 gap-6">
//             {posts.map((post, index) => (
//               <Link href={post.href} key={index} className="group">
//                 <div
//                   className={`${post.bg} rounded-2xl overflow-hidden flex flex-col sm:flex-row border border-gray-200 hover:bg-green-50 hover:border-green-400 transition min-h-[320px] sm:min-h-[220px] h-full`}>
//                   {/* Image */}
//                   <div className="relative w-full sm:w-1/2 h-42 sm:h-full">
//                     <Image
//                       src={post.image}
//                       alt={post.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 flex flex-col justify-center sm:w-1/2 h-full">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-900 transition-colors">
//                       {post.title}
//                     </h3>
//                     <p className="text-sm text-gray-500">{post.date}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Email Signup Section */}
//       <section className="py-16 bg-white">
//         <div className="bg-[#0E1F1C] rounded-[2rem] w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 items-center py-12 gap-8 px-4 sm:px-6 lg:px-8">
//             {/* Left Text */}
//             <div>
//               <h2 className="text-2xl sm:text-3xl md:text-1xl font-semibold leading-tight text-white">
//                 Join 250,000 Daily Tech Insider readers in getting the latest
//                 industry-leading tech news and top resources.
//               </h2>
//             </div>

//             {/* Right Form */}
//             <form
//               action="https://api.web3forms.com/submit"
//               method="POST"
//               className="flex flex-col gap-4"
//             >
//               <input type="hidden" name="access_key" value="c9f66eb3-7bae-487c-bd58-ab7a0f817bff" />

//               <div className="flex flex-col sm:flex-row overflow-hidden rounded-full shadow-md">
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   placeholder="Enter an email"
//                   className="w-full bg-white text-black px-6 py-4 text-base outline-none"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-[#ffd800] text-black font-semibold px-8 py-4 transition whitespace-nowrap"
//                 >
//                   Sign Up
//                 </button>
//               </div>

//               <label className="flex items-center text-sm text-white gap-2">
//                 <input
//                   type="checkbox"
//                   name="terms"
//                   required
//                   className="w-4 h-4 rounded focus:ring-0 accent-[#ffd800]"
//                 />
//                 By checking this box you agree to our{" "}
//                 <a href="#" className="underline hover:text-lime-300">Terms of Use</a> and{" "}
//                 <a href="#" className="underline hover:text-lime-300">Privacy Policy</a>.
//               </label>
//             </form>
//           </div>
//         </div>
//       </section>

      
//     </>
//   );
// }


'use client';

import Image from 'next/image';
import Head from 'next/head';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Users, Grid, Package, Award } from "lucide-react";
import { useState } from 'react';

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
    href:'/blogs/',
    bg: 'bg-gray-50',
  },
  {
    title: 'Best HRIS Systems of 2025',
    date: 'February 18, 2025',
    image: '/images/best HRIS.png',
    href:'/blogs/',
    bg: 'bg-gray-50',
  },
  {
    title: 'Best HRMS Software',
    date: 'September 19, 2024',
    image: '/images/Best-HRMS-Software.jpeg',
    href: '/blog/human-resources/best-hrms-software',
    bg: 'bg-gray-50',
  },
  {
    title: 'Asana vs monday: Top Project Management...',
    date: 'September 19, 2024',
    image: '/images/monday-asana.jpeg',
    href: '/blog/project-management/asana-vs-monday',
    bg: 'bg-gray-50',
  },
  {
    title: 'Smartsheet vs. monday.com Comparison',
    date: 'March 26, 2024',
    image: '/images/Smartsheet.png',
    href: '/blog/smartsheet-vs-monday',
    bg: 'bg-gray-50',
  },
  {
    title: 'CRM For Outlook: Integrate & Manage Customers...',
    date: 'January 14, 2025',
    image: '/images/crm outlook.png',
    href: '/blog/crm-outlook',
    bg: 'bg-gray-50',
  },
  {
    title: 'What is Rapid Application Development...',
    date: 'April 8, 2024',
    image: '/images/Software-prototype.jpeg',
    href: '/blog/rapid-application-development',
    bg: 'bg-gray-50',
  },
  {
    title: 'Types of Human Resource Information...',
    date: 'April 30, 2024',
    image: '/images/tacom-types-hr.jpeg',
    href: '/blog/hris-types',
    bg: 'bg-gray-50',
  },
  {
    title: 'What Is Proof of Concept (POC)?',
    date: 'January 9, 2024',
    image: '/images/AdobeStock.jpeg',
    href: '/blog/proof-of-concept',
    bg: 'bg-gray-50',
  },
  {
    title: 'How to Create an Effective CRM Strategy',
    date: 'November 26, 2024',
    image: '/images/crm strategy.jpg',
    href: '/blog/crm-strategy',
    bg: 'bg-gray-50',
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
    description:
      'Software trials, demos, user reviews, knowledge bases — our experts spend the time researching every product so you don\'t have to.',
  },
  {
    title: 'Size it down',
    description:
      'We structure our recommendations so you can skim the key takeaways in 30 seconds or dig deeper into the details that matter most.',
  },
  {
    title: 'Answers with you in mind',
    description:
      'Our focus at TechnologyAdvice is to help technology buyers make better purchasing decisions. Our editorially independent analysis is driven by years of industry knowledge and extensive research instead of client-driven priorities.',
  },
];

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

const categories = [
  {
    title: 'HR Software',
    description: 'Solutions for human resource management.',
    logos: ['adp', 'workday', 'bamboohr', 'gusto', 'paycom'],
    links: [
      '/tools/adp',
      '/tools/workday',
      '/tools/bamboohr',
      '/tools/gusto',
      '/tools/paycom'
    ],
    cardLink: '/categories/hr-software',
  },
  {
    title: 'EHR-EMR Software',
    description: 'Electronic health record and medical record systems.',
    logos: ['epic', 'cerner', 'athenahealth', 'allscripts', 'ge1'],
    links: [
      '/tools/epic',
      '/tools/cerner',
      '/tools/athenahealth',
      '/tools/allscripts',
      '/tools/ge-healthcare'
    ],
    cardLink: '/categories/ehr-emr',
  },
  {
    title: 'Project Management Software',
    description: 'Tools to plan and manage projects effectively.',
    logos: ['monday', 'asana', 'wrike', 'trello', 'jira'],
    links: [
      '/tools/monday',
      '/tools/asana',
      '/tools/wrike',
      '/tools/trello',
      '/tools/jira'
    ],
    cardLink: '/categories/project-management',
  },
  {
    title: 'CRM Software',
    description: 'Customer relationship management platforms.',
    logos: ['hubspot', 'zoho', 'pipedrive', 'salesforce', 'freshsales'],
    links: [
      '/tools/hubspot',
      '/tools/zoho',
      '/tools/pipedrive',
      '/tools/salesforce',
      '/tools/freshsales'
    ],
    cardLink: '/categories/crm',
  },
  {
    title: 'ERP Software',
    description: 'Enterprise resource planning platforms.',
    logos: ['sap', 'oracle', 'netsuite', 'ms365', 'odoo'],
    links: [
      '/tools/sap',
      '/tools/oracle',
      '/tools/netsuite',
      '/tools/ms365',
      '/tools/odoo'
    ],
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

  const handleSubmit = async (e) => {
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
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const guideRef = useRef(null);
  const techRef = useRef(null);

  const scroll = (ref, direction) => {
    if (!ref.current) return;
    const cardWidth = ref.current.children[0]?.offsetWidth || 0;
    const gap = 24;
    const scrollAmount = (cardWidth + gap) * (direction === 'left' ? -1 : 1);
    ref.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };
  
  const controls = steps.map(() => useAnimationControls());

  useEffect(() => {
    let current = 0;
    const loop = () => {
      controls[current].start('visible').then(() => {
        controls[current].set('hidden');
        current = (current + 1) % steps.length;
        setTimeout(loop, 800);
      });
    };
    loop();
  }, [controls]);

  return (
    <>
      <Head>
        <title>B2C Technology Advice From Industry Experts</title>
        <meta 
          name="description" 
          content="Get the latest B2B technology and software advice, trends, and guidance from experts who work with it every day." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="B2B Technology Advice From Industry Experts" />
        <meta 
          property="og:description" 
          content="Expert advice on B2B technology and software from professionals who use it daily." 
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0E1F1C] via-[#0E1F1C] to-[#1a3330] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-[#8BC34A] to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-[#ffd800] to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  B2C Technology Advice{' '}
                  <br className="hidden sm:block" />
                  From{' '}
                  <span className="bg-gradient-to-r from-[#8BC34A] to-[#6fa832] bg-clip-text text-transparent">
                    Experts Who Use It
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  The latest B2B technology and software advice, trends, and guidance coming to you from the experts who work with it every day.
                </p>
              </div>

              {/* Email Subscribe */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center max-w-xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/10"
              >
                <input type="hidden" name="access_key" value="c9f66eb3-7bae-487c-bd58-ab7a0f817bff" />
                
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 text-gray-700 focus:outline-none text-base placeholder-gray-500 bg-transparent"
                />
                
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-[#ffd800] to-[#ffed4e] hover:from-[#ffed4e] hover:to-[#ffd800] px-8 py-4 text-black font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:transform-none text-base"
                >
                  {loading ? 'Submitting...' : 'Subscribe'}
                </button>
              </motion.form>

              {submitted && (
                <motion.p 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-[#8BC34A] text-base font-medium flex items-center gap-2"
                >
                  <span className="w-5 h-5 bg-[#8BC34A] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  Thank you for subscribing!
                </motion.p>
              )}

              {/* Tags */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-3 text-sm"
              >
                {['Best HR Software', 'Best PM Software', 'Best CRM Software'].map((tag, i) => (
                  <span 
                    key={i}
                    className="border border-white/30 rounded-full px-4 py-2 text-white/90 hover:border-[#8BC34A] hover:text-[#8BC34A] transition-all duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Images */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center"
            >
              {/* Floating Background Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#8BC34A]/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#ffd800]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>

              {/* Center Image */}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md z-30 shadow-2xl"
              >
                <Image 
                  src="/images/group3.png" 
                  alt="Team Meeting" 
                  fill 
                  className="object-cover"
                />
              </motion.div>

              {/* Left Image */}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute top-[25%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md z-20 shadow-2xl"
              >
                <Image 
                  src="/images/group1.png" 
                  alt="Team Collaboration" 
                  fill 
                  className="object-cover"
                />
              </motion.div>

              {/* Right Image */}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute top-[25%] right-[25%] transform translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md z-20 shadow-2xl"
              >
                <Image 
                  src="/images/group2.png" 
                  alt="Individual Work" 
                  fill 
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Buyer's Guide Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our most popular buyer's guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get started with our expert reviews and buying guidance for 163 categories of B2B technology.
            </p>
          </motion.div>

          <div className="relative">
            <div
              ref={guideRef}
              className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide snap-x snap-mandatory"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitScrollbar: { display: 'none' }
              }}
            >
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-80 sm:w-96 h-80 bg-white hover:bg-gray-50 border border-gray-200 hover:border-[#8BC34A] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col snap-start group"
                >
                  {/* Logos */}
                  <div className="flex items-center mb-8 -space-x-4">
                    {category.logos.map((logo, i) => (
                      <Link key={i} href={category.links[i]} passHref>
                        <motion.div 
                          whileHover={{ scale: 1.15, zIndex: 10 }}
                          className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center z-[1] hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                          <Image
                            src={`/images/${logo}.gif`}
                            alt={logo}
                            width={40}
                            height={40}
                            className="rounded-xl object-contain w-10 h-10"
                          />
                        </motion.div>
                      </Link>
                    ))}
                  </div>

                  {/* Content */}
                  <Link href={category.cardLink} passHref>
                    <div className="flex-grow flex flex-col justify-center cursor-pointer">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#8BC34A] transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{category.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-12 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scroll(guideRef, 'left')}
                className="w-16 h-16 rounded-2xl border-2 border-gray-200 bg-white hover:border-[#8BC34A] hover:bg-[#8BC34A] hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scroll(guideRef, 'right')}
                className="w-16 h-16 rounded-2xl border-2 border-gray-200 bg-white hover:border-[#8BC34A] hover:bg-[#8BC34A] hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending B2B Tech Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Trending B2B technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experts use data-driven analysis to determine the best software and technology solutions.
            </p>
          </motion.div>

          <div className="relative">
            <div
              ref={techRef}
              className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitScrollbar: { display: 'none' }
              }}
            >
              {techItems.map((item, index) => (
                <Link key={index} href={item.link} passHref>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="flex-shrink-0 w-64 sm:w-72 h-72 bg-white hover:bg-gray-50 border border-gray-200 hover:border-[#8BC34A] rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between items-center text-center cursor-pointer snap-start group"
                  >
                    <div className="w-full h-32 mb-6 flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-300">
                      <Image 
                        src={item.img} 
                        alt={item.name} 
                        width={120} 
                        height={90} 
                        className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#8BC34A] transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-12 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scroll(techRef, 'left')}
                className="w-14 h-14 rounded-2xl border-2 border-gray-200 bg-white hover:border-[#8BC34A] hover:bg-[#8BC34A] hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scroll(techRef, 'right')}
                className="w-14 h-14 rounded-2xl border-2 border-gray-200 bg-white hover:border-[#8BC34A] hover:bg-[#8BC34A] hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Analyze Section */}
      <section className="relative bg-gradient-to-br from-[#0E1F1C] via-[#0E1F1C] to-[#1a3330] text-white py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#8BC34A] to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#ffd800] to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              How we analyze technology
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Animated Ripple */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-2 border-white/30 z-0"
                  variants={rippleVariant}
                  initial="hidden"
                  animate={controls[index]}
                />

                {/* Number Circle */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-r from-[#8BC34A] to-[#6fa832] text-white font-bold text-2xl flex items-center justify-center shadow-2xl mb-8 group-hover:shadow-[#8BC34A]/25 transition-all duration-300"
                >
                  {index + 1}
                </motion.div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-[#8BC34A] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg max-w-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-[#0E1F1C] to-[#1a3330] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Data-based research with you in mind
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-[#1F2E2B] to-[#243832] rounded-3xl p-8 flex flex-col items-center text-white border border-white/10 hover:border-[#8BC34A]/50 transition-all duration-500 shadow-xl hover:shadow-2xl group"
              >
                <div className="bg-gradient-to-r from-[#8BC34A] to-[#6fa832] p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2 text-center">{stat.value}</div>
                <div className="text-gray-300 text-lg text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0E1F1C] via-[#0E1F1C] to-[#1a3330] rounded-[3rem] text-white relative overflow-hidden shadow-2xl"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-[#8BC34A] to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-[#ffd800] to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 p-12 lg:p-16">
              <div className="max-w-4xl mb-12">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  Marketers: Reach a highly engaged audience
                </h2>
                <p className="text-xl text-gray-200 mb-12 leading-relaxed">
                  100 million business technology and software buyers worldwide trust us to reduce
                  complexity and risk in the purchase process. Meet your buyers on their terms and
                  put the power of buyer engagements to work, building your brand and driving
                  demand for your products.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-white to-gray-100 text-gray-800 font-bold text-lg py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Explore Solutions
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#8BC34A] to-[#6fa832] text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Chat with Sales
                  </motion.button>
                </div>
              </div>

              {/* Partner Logos */}
              <div className="flex justify-start items-center gap-12 flex-nowrap overflow-x-auto pb-4 scrollbar-hide">
                {logos.map((src, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="w-48 h-32 relative flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <Image
                      src={src}
                      alt={`Partner ${index + 1}`}
                      fill
                      className="object-contain filter brightness-200"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
              <div className="absolute left-[-100px] top-[-100px] w-80 h-80 rounded-full border border-white/10 opacity-30" />
              <div className="absolute bottom-[-60px] right-[-60px] w-40 h-40 border border-white/10 rounded-full opacity-30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Featured Posts
            </h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Link href={post.href} key={index} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className={`${post.bg} rounded-3xl overflow-hidden flex flex-col sm:flex-row border border-gray-200 hover:border-[#8BC34A] hover:shadow-2xl transition-all duration-500 min-h-[280px] group`}
                >
                  {/* Image */}
                  <div className="relative w-full sm:w-1/2 h-48 sm:h-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center sm:w-1/2 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-3 group-hover:text-[#8BC34A] transition-colors duration-300 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 font-medium">{post.date}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0E1F1C] via-[#0E1F1C] to-[#1a3330] rounded-[3rem] shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 items-center py-16 gap-12 px-8 sm:px-12 lg:px-16">
              {/* Left Text */}
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                  Join 250,000 Daily Tech Insider readers in getting the latest
                  industry-leading tech news and top resources.
                </h2>
              </div>

              {/* Right Form */}
              <motion.form
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="access_key" value="c9f66eb3-7bae-487c-bd58-ab7a0f817bff" />

                <div className="flex flex-col sm:flex-row overflow-hidden rounded-2xl shadow-2xl">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter an email"
                    className="w-full bg-white text-black px-8 py-5 text-lg outline-none placeholder-gray-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-gradient-to-r from-[#ffd800] to-[#ffed4e] hover:from-[#ffed4e] hover:to-[#ffd800] text-black font-bold px-10 py-5 text-lg transition-all duration-300 whitespace-nowrap"
                  >
                    Sign Up
                  </motion.button>
                </div>

                <label className="flex items-start text-white gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="terms"
                    required
                    className="w-5 h-5 rounded mt-1 focus:ring-0 accent-[#ffd800] flex-shrink-0"
                  />
                  <span className="text-sm leading-relaxed">
                    By checking this box you agree to our{" "}
                    <a href="#" className="underline hover:text-[#8BC34A] transition-colors">Terms of Use</a> and{" "}
                    <a href="#" className="underline hover:text-[#8BC34A] transition-colors">Privacy Policy</a>.
                  </span>
                </label>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
