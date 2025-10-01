"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaQuoteLeft, FaChevronDown, FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function CareersPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showOpportunities, setShowOpportunities] = useState(false);
  const [showFAQs, setShowFAQs] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToCulture = () => {
    const element = document.getElementById("culture-compass");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setShowOpportunities(false);
    setShowFAQs(false);
  };

  const handleOpportunitiesClick = () => {
    setShowOpportunities(true);
    setShowFAQs(false);
    const element = document.getElementById("opportunities-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFAQsClick = () => {
    setShowFAQs(true);
    setShowOpportunities(false);
    const element = document.getElementById("faqs-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Define modern color palette with your preferred #0E1F1C
  const GLOBAL_BG_COLOR = 'white';
  const TEXT_COLOR = '#0E1F1C';
  const PRIMARY_COLOR = '#0E1F1C';
  const SECONDARY_COLOR = '#0E1F1C';
  const BENEFITS_BACKGROUND_COLOR = '#0E1F1C';
  const BENEFITS_ITEM_BG_COLOR = '#1A2A28';
  const CARD_BG = '#f8fafc';

  const sections = [
    {
      title: "What are TA's core values?",
      content: `These are not just words on our website. Our core values are foundational to who we are as a company and the success of our team. We strive to achieve our highest potential and are dedicated to making a consistent effort to grow in these areas.

Be transparent
Being transparent is being honest and sharing the reality of a situation, even when it's hard to hear. Examples include:
- Asking for help and taking ownership when something isn't going as planned.
- Giving honest, constructive feedback to help each other learn and grow
- Proactively sharing information.
This results in every team member empowering one another and aligning within and across departments to do their best work.

Challenge mediocrity
Challenging mediocrity is bringing ideas to the table. Improving an imperfect process. Examples include:
- Thinking outside the box.
- Questioning "why?" with the intent to improve.
- Working harder, smarter, and more efficiently than the status quo.
The result is that our team, company, and clients improve every day.

Crave knowledge
Craving knowledge is asking questions and digging to find the best possible solutions. Examples include:
- Learning a new skill, language, talent, or hobby and not stopping there.
- Shadowing a team member who does something you're interested in learning more about.
- Identifying knowledge gaps within yourself and following your curiosity, because the more you know the more our business grows.
This results in our team continuously learning, growing, developing, and producing experts in our field.

Make calculated decisions
Making calculated decisions is analyzing trends and diving deeper into your knowledge base. Examples include:
- Leaning on data to support your research and ideas.
- Looking for ways to improve efficiency and processes where they lack.
- Thinking 3 steps ahead and staying agile as you navigate new paths.
This results in our team using facts, data, and intelligence to guide our business, making us well-rounded and prepared for contingencies.

Value each other
Valuing each other is doing something to make someone else's day more productive or fulfilling because when one of us wins, we all win. Examples include:
- Pitching in with administrative or project tasks.
- Giving back to our community through both financial contributions and volunteering our time.
- Recognizing and speaking kindly about one another.
- Supporting one another both personally and professionally.
This results in our team being friendly, genuine, welcoming, helpful, attentive, and willing to roll up our sleeves for the greater good.`,
    },
    {
      title: "What makes someone thrive at TA?",
      content: `A growth mindset
Our team is dedicated to growth and actively seeks opportunities to learn and develop. We see failure as lessons learned. We stay curious and expand our knowledge and skill sets beyond our current capabilities.

Adaptability
We are always ready to embrace new information and pivot our focus. We are a fast-growing, privately held company and base our decisions on constant feedback and data. Our plans and goals will change so we welcome opportunities for our roles and responsibilities to adapt with us.

A team-first mentality
We help each other out and organize our days with the big picture in mind. We all work toward a common goal, prioritizing collaboration and open communication. We don't let titles, location, gender, background, etc. define who gets invited to the table. Your voice and authentic individual ideas are valued and taken seriously.

Intrinsic motivation
We are self-starters and find motivation naturally. We are driven, hold ourselves accountable, and require minimal oversight to remain productive and committed. Due to this, we provide flexibility and autonomy day to day while trusting team members to communicate accordingly. We know what is needed to get the job done.

Resiliency
We navigate ambiguous situations and find innovative ways to overcome challenges regardless of our limitations. Instead of limiting ourselves with "I can't", "I don't know how", or "Is it possible?", we ask ourselves "What would it take?"

Proactivity
We go beyond the immediate tasks at hand to push our goals forward. We expect everyone to be proactive, take initiative to make the most of their work week, spot opportunities for improvement, and take it upon themselves to enact change or make something better.`,
    },
    {
      title: "What is TA's work environment like?",
      content: `Engaging
We believe work is more fun when you know and are known by the people you work with. This can look like being a mentor, directly messaging a colleague to tell them they did a good job, sharing in a meeting, or helping someone out when they need it most. With events like an annual company talent show and virtual happy hours, we don't take ourselves too seriously and encourage one another through life's ups and downs.

Fast-paced
We move fast! We have a bias toward taking action and value progress over perfection. Projects and tasks move quickly providing you a way to make an increased impact. We pivot often based on business needs and thrive where we embrace the unknown. We're all about getting out of our comfort zones, introducing new ideas, and questioning the status quo. There will be learning opportunities when we're innovating and moving fast!

Supportive
Growth varies for everyone, and we're here to support you, whether you're an individual contributor or a leader. You will have opportunities to develop new skills, carve your own niche in the business, participate in one of our Employee Resource Groups, ascend to a leadership role, or explore new paths within the organization. We're invested in your career journey however that looks.

Global
Our workforce spans the globe across four continents, representing a rich tapestry of cultures, backgrounds, and perspectives. We enjoy the benefits of cross-cultural collaboration, an array of global perspectives, language diversity, and the commitment to cultural sensitivity. We are continuously adapting the way we work, communicate, collaborate, give back, and have fun, to align with being a remote-first organization.

Committed to DE&I
We recognize that diversity extends beyond the color of our skin to include ethnicities, gender identities, sexual orientations, abilities, cultural backgrounds, experiences, and skills. Our way of operating is to allow our teammates to show up as themselves every day. We ask our team to equally respect individual differences, and do their best to embrace and amplify the shining light of others. We protect one another by creating inclusive, safe spaces and holding a high standard of trust and respect for individual contributors as well as leaders. By doing this, we have created an environment where people feel valued, trusted, and connected.`,
    },
    {
      title: "Is Martechbiz the company for you?",
      content: `We have big goals ahead and need an extraordinary team to achieve them, so if you read this and get just as excited as we are, the opportunities are endless!`,
    },
  ];

  const testimonials = [
    {
      text: `There are endless opportunities to explore and advance your career at Martechbiz. The company invests a lot of training and time into it's team members and it's apparent that you get what you put in. If you want growth, opportunity, and an exciting fast-paced environment, TA is the right place for you.`,
    },
    {
      text: `You will grow really fast at TA and learn a lot quickly. You will learn how to challenge yourself and stretch your capabilities. The organization is goal driven and focused. The team is fun and my colleagues are great to work with and people are friendly.`,
    },
    {
      text: `I have never been a part of a company that is as positive as Martechbiz. TA's management lives by the 5 core values, and this trickles down throughout the entire organization.`,
    },
  ];

  const awards = [
    { src: '/images/award1.png', alt: 'Inc. 5000 6-Time Award Winner' },
    { src: '/images/award2.png', alt: '2019 Winner Next Awards' },
    { src: '/images/award3.png', alt: 'Deloitte Technology Fast 500' },
    { src: '/images/award4.png', alt: "Forbes America's Best Startup Employers 2021" },
    { src: '/images/award5.png', alt: 'NBA Small Business Award Recipient' },
    { src: '/images/award6.png', alt: 'Inc. Best Workplaces 2021' },
    { src: '/images/award7.png', alt: 'Best Business Award' },
    { src: '/images/award8.png', alt: 'Top Workplaces Tennessee' },
  ];

  const benefits = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.158V18a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18v-3.842M12 1.5v12m0 0-3.75-3.75M12 13.5l3.75-3.75"
          />
        </svg>
      ),
      title: 'Career Development',
      description: 'Explore virtually endless career opportunities with development meetings, DE&I events, book clubs, Emerging Leaders and Leadership Academy, and more!',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.835 3 8.25c0 7.219 2.912 11.241 11.125 15.113a9.75 9.75 0 0 0 2.494-1.285c.79-.523 1.16-1.121 1.16-1.121L21 8.25Z"
          />
        </svg>
      ),
      title: 'Health & Wellness',
      description: 'Enjoy comprehensive health, dental, and vision benefits, plus other great additionals like Headspace and fitness reimbursements.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.966 48.966 0 0 1 12 21.75c2.305 0 4.535-.295 6.735-.856m-1.72-1.033a48.96 48.96 0 0 0-10.618 0m10.618 0v.2c0 2.109-.969 3.993-2.564 5.25S12.378 24 12 24c-.378 0-2.07-.468-3.676-1.725S5.25 18.2 5.25 16.125v-.2M12 21.75c-2.305 0-4.535-.295-6.735-.856m0 0a48.805 48.805 0 0 1-1.378-3.695m1.378 3.695L7.5 21.493m-.491-11.347a60.436 60.436 0 0 1-.491-6.347m-1.996-.007a60.436 60.436 0 0 1-.491-6.347"
          />
        </svg>
      ),
      title: 'Learning & Development',
      description: 'Company-wide access to on-demand learning management systems and training.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
      title: 'Mentorship',
      description: 'Gain a mentee or mentor (or both!) as part of a formalized mentorship program.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
      title: 'Team Activities',
      description: 'Company-wide hackathons, in-person, and virtual events.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h18.75A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
      ),
      title: 'Paid Time Off',
      description: 'Enjoy work-life balance with generous paid time off.',
    },
  ];

  const coreValues = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#0E1F1C]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Be Transparent',
      description: 'As stakeholders of TA, we deserve to have honest, open, & consistent information about our business. Every employee, no matter the level on the org chart, practices transparency about their work.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#0E1F1C]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: 'Challenge Mediocrity',
      description: 'We attack our goals with passion & a sense of urgency. We hold each other accountable & produce results above & beyond expectations.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#0E1F1C]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      title: 'Crave Knowledge',
      description: 'At Martechbiz we continually increase our knowledge, deepen our understanding, & invest in our personal and professional growth.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#0E1F1C]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      title: 'Make Calculated Decisions',
      description: 'We combine data with cross-team collaboration & balance diligence with speed to ensure prudent & tactical decisions that grow our business.',
    },
  ];

  const jobCategories = [
    {
      category: "Agency",
      jobs: [
        { title: "President, Agency", department: "Agency", location: "United States" },
      ],
    },
    {
      category: "Audience Development",
      jobs: [
        { title: "Cybersecurity Newsletter Writer", department: "Audience Development", location: "United States" },
        { title: "Social Media Specialist", department: "Audience Development", location: "India" },
        { title: "Technology Content Strategist", department: "Audience Development", location: "India" },
      ],
    },
    {
      category: "Content",
      jobs: [
        { title: "Staff Writer, Channel", department: "Content", location: "India" },
      ],
    },
    {
      category: "Finance",
      jobs: [
        { title: "Bookkeeper", department: "Finance", location: "United States" },
        { title: "Staff Accountant", department: "Finance", location: "United States" },
      ],
    },
    {
      category: "People Operations",
      jobs: [
        { title: "Learning and Development Specialist", department: "Human Resources", location: "United States" },
      ],
    },
    {
      category: "Product",
      jobs: [
        { title: "Commercial Content Editor and Strategist", department: "Client Delivery", location: "United States" },
      ],
    },
    {
      category: "Revenue",
      jobs: [
        { title: "Affiliate Growth Specialist", department: "Revenue", location: "United States" },
      ],
    },
    {
      category: "Client Success",
      jobs: [
        { title: "Client Success Coordinator", department: "Client Success", location: "United States" },
        { title: "Client Success Manager", department: "Client Success", location: "United States" },
        { title: "Client Success Manager, Boston Area", department: "Client Success", location: "United States" },
        { title: "Client Success Operations Coordinator", department: "Client Success", location: "India" },
        { title: "Client Success Coordinator", department: "Client Success", location: "India" },
      ],
    },
    {
      category: "Sales",
      jobs: [
        { title: "Account Director", department: "Sales", location: "United States" },
        { title: "Account Manager", department: "Sales", location: "India" },
        { title: "Newsletter Sales Account Executive", department: "Sales", location: "United States" },
      ],
    },
  ];

  const allLocations = [...new Set(jobCategories.flatMap(cat => cat.jobs.map(job => job.location)))].sort();
  const allDepartments = [...new Set(jobCategories.flatMap(cat => cat.jobs.map(job => job.department)))].sort();

  const filteredJobCategories = jobCategories.map(category => ({
    ...category,
    jobs: category.jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = selectedLocation ? job.location === selectedLocation : true;
      const matchesDepartment = selectedDepartment ? job.department === selectedDepartment : true;
      return matchesSearch && matchesLocation && matchesDepartment;
    })
  })).filter(category => category.jobs.length > 0);

  return (
    <div className="bg-white">
      {/* Hero Section - Enhanced with gradient and animations */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-[#0E1F1C] via-[#1a2f2c] to-[#0E1F1C] min-h-screen text-white px-8 md:px-16 py-12 overflow-hidden"
      >
        {/* Background geometric shapes for modern look */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-[#0E1F1C] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-[#0E1F1C] opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <nav className="text-sm mb-8">
              <span className="text-gray-400">🏠 Home &gt; </span>
              <span className="font-semibold text-[#0E1F1C]">Careers</span>
            </nav>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#ffffff] bg-clip-text text-transparent">
              Let's grow together
            </h1>

            <p className="text-lg mb-4 text-gray-200 leading-relaxed">
              We're Martechbiz – the team behind a portfolio of leading B2B tech publications.
              If you're here, it's because all of our brands share a common mission – and a single team driving them forward.
            </p>

            <p className="text-lg mb-8 text-gray-200 leading-relaxed">
              At Martechbiz, you'll work alongside a diverse group of passionate individuals who love growing as professionals and learning new things.
              No two days are exactly the same here, and you'll face opportunities to expand your skill set, step outside of your comfort zone,
              and contribute to the best group you'll ever work with.
            </p>

           

            <motion.a 
              href="https://quoreit.com/contact" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-gradient-to-r from-[#0E1F1C] to-[#00b894] text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Apply Now
              </button>
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="rounded-2xl overflow-hidden w-full max-w-md shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/careers1.png"
                alt="Team working together"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Enhanced Navigation */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-8 mt-16 text-white font-semibold text-xl relative z-10"
        >
          <button onClick={scrollToCulture} className="hover:text-[#FFFF00] transition-colors duration-300 transform hover:scale-110">Culture</button>
          <button onClick={handleOpportunitiesClick} className="hover:text-[#FFFF00] transition-colors duration-300 transform hover:scale-110">Opportunities</button>
          <button onClick={handleFAQsClick} className="hover:text-[#FFFF00] transition-colors duration-300 transform hover:scale-110">FAQs</button>
        </motion.div>
      </motion.div>

      {/* Culture Compass Section - Enhanced with better styling */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="culture-compass" 
        className="bg-white min-h-screen text-black max-w-6xl mx-auto px-4 py-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0E1F1C] to-[#0E1F1C] bg-clip-text text-transparent">
          Our Culture Compass
        </h2>

        <div className="space-y-4 text-lg text-gray-700 mb-12 leading-relaxed">
          <p>
            At Martechbiz we believe our success starts with attracting, hiring, and developing amazing people for our team. In sharing who we are and how we work, we're giving you insight into our culture so you can make sure it's a match for you. Our Culture Compass was created to be remarkably explicit and transparent about our unique culture to give you the best opportunity to thrive in our environment and reach your full potential.
          </p>
          <p>
            We want TA to be the place for you and hope our culture resonates with you! If not, that's okay. We believe in ensuring that everyone understands and aligns with our team's goals, fostering a collective sense of purpose that drives our actions and dedication.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.div 
              key={index} 
              className="border-0 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <div
                onClick={() => toggleSection(index)}
                className="flex justify-between items-center cursor-pointer p-8 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#0E1F1C] pr-4">{section.title}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#0E1F1C] p-2 rounded-full bg-white shadow-md"
                >
                  <FaChevronDown size={20} />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 whitespace-pre-wrap text-gray-700 leading-relaxed">
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials - Enhanced design */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 bg-gradient-to-r from-[#0E1F1C] to-[#0E1F1C] bg-clip-text text-transparent">
            What our team members have to say
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-[#0E1F1C] to-[#0E1F1C] text-white p-8 rounded-3xl shadow-xl h-full min-h-[330px] flex flex-col justify-between relative overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#0E1F1C] opacity-10 rounded-full -translate-y-10 translate-x-10"></div>
                
                <div className="flex items-start gap-3 mb-6">
                  <div className="bg-[#0E1F1C] p-2 rounded-full">
                    <FaQuoteLeft className="text-white text-lg" />
                  </div>
                </div>
                <p className="text-md font-medium leading-relaxed relative z-10">
                  {t.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Awards Section - Enhanced with modern grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 max-w-6xl mx-auto sm:px-6 lg:px-8" 
        style={{ color: TEXT_COLOR }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-[#0E1F1C] to-[#0E1F1C] bg-clip-text text-transparent">
          Awards & Recognition
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center h-48 border border-gray-100"
            >
              <Image
                src={award.src}
                alt={award.alt}
                width={200}
                height={100}
                className="object-contain max-h-full filter hover:brightness-110 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits Section - Enhanced with better cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative sm:px-6 lg:px-8 mx-auto px-4 py-20 overflow-hidden" 
        style={{ backgroundColor: BENEFITS_BACKGROUND_COLOR, color: 'white' }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E1F1C] via-[#1a2f2c] to-[#0E1F1C]"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#0E1F1C] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#0E1F1C] opacity-5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl max-w-6xl mx-auto font-bold mb-16 text-white bg-gradient-to-r from-white to-[#0E1F1C] bg-clip-text text-transparent">
            Benefits of working on our team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-3xl shadow-xl backdrop-blur-sm border border-gray-700/30 hover:border-[#0E1F1C]/50 transition-all duration-300"
                style={{ backgroundColor: `${BENEFITS_ITEM_BG_COLOR}CC` }}
              >
                <div className="flex-shrink-0 p-4 rounded-2xl mb-6 bg-gradient-to-br from-[#0E1F1C] to-[#0E1F1C]">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Core Values Section - Enhanced with modern cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="sm:px-6 lg:px-8 max-w-6xl mx-auto px-4 py-20" 
        style={{ color: TEXT_COLOR }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-[#0E1F1C] to-[#0E1F1C] bg-clip-text text-transparent">
          Core Values
        </h2>
        <div className="space-y-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 10, scale: 1.02 }}
              className="flex items-start bg-gradient-to-r from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex-shrink-0 bg-white p-4 rounded-2xl mr-6 shadow-md border border-gray-100">
                {value.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#0E1F1C]">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Jobs Section */}
      <AnimatePresence>
        {showOpportunities && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            id="opportunities-section" 
            className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-[#0E1F1C] to-[#0E1F1C] bg-clip-text text-transparent">
                Jobs Available
              </h2>

              {/* Enhanced Filters */}
              <div className="flex flex-col lg:flex-row gap-6 mb-16 items-center justify-center">
                {/* Location Filter */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full lg:w-auto"
                >
                                  <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full lg:w-64 pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#0E1F1C] focus:outline-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700"
                  >
                    <option value="">All Locations</option>
                    {allLocations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </motion.div>

                {/* Department Filter */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full lg:w-auto"
                >
                  <FaBriefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full lg:w-64 pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#0E1F1C] focus:outline-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700"
                  >
                    <option value="">All Departments</option>
                    {allDepartments.map(department => (
                      <option key={department} value={department}>{department}</option>
                    ))}
                  </select>
                </motion.div>

                {/* Search Filter */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full lg:w-auto"
                >
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full lg:w-64 pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#0E1F1C] focus:outline-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700"
                  />
                </motion.div>
              </div>

              {/* Job Listings */}
              <div className="space-y-8">
                {filteredJobCategories.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 bg-white rounded-3xl shadow-lg"
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-gray-600 mb-2">No jobs found</h3>
                    <p className="text-gray-500">Try adjusting your search criteria</p>
                  </motion.div>
                ) : (
                  filteredJobCategories.map((category, categoryIndex) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                      className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
                    >
                      <div className="bg-gradient-to-r from-[#0E1F1C] to-[#1a2f2c] text-white p-6">
                        <h3 className="text-2xl font-bold">{category.category}</h3>
                        <p className="text-gray-300">{category.jobs.length} position{category.jobs.length !== 1 ? 's' : ''} available</p>
                      </div>
                      <div className="p-6">
                        <div className="space-y-4">
                          {category.jobs.map((job, jobIndex) => (
                            <motion.div
                              key={`${job.title}-${jobIndex}`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: jobIndex * 0.05 }}
                              whileHover={{ x: 5, scale: 1.01 }}
                              className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#0E1F1C]/30 hover:shadow-md transition-all duration-300 group"
                            >
                              <div className="flex-1">
                                <h4 className="text-xl font-bold text-[#0E1F1C] mb-2 group-hover:text-[#0E1F1C] transition-colors">
                                  {job.title}
                                </h4>
                                <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                                  <span className="flex items-center gap-2">
                                    <FaBriefcase className="text-[#0E1F1C]" />
                                    {job.department}
                                  </span>
                                  <span className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-[#0E1F1C]" />
                                    {job.location}
                                  </span>
                                </div>
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-4 sm:mt-0 sm:ml-6 bg-gradient-to-r from-[#0E1F1C] to-[#00b894] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                              >
                                Apply Now
                              </motion.button>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced FAQ Section */}
      <AnimatePresence>
        {showFAQs && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            id="faqs-section" 
            className="bg-white py-20 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-[#0E1F1C] to-[#0E1F1C] bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                  {
                    question: "What is the application process like?",
                    answer: "Our application process typically involves submitting your resume and cover letter, followed by initial screening interviews, technical assessments (if applicable), and final interviews with team members and leadership."
                  },
                  {
                    question: "Do you offer remote work opportunities?",
                    answer: "Yes! We're a remote-first organization with team members across four continents. We offer flexible work arrangements and support for remote collaboration."
                  },
                  {
                    question: "What benefits do you offer?",
                    answer: "We offer comprehensive health, dental, and vision benefits, generous PTO, professional development opportunities, fitness reimbursements, and many other perks designed to support your well-being and growth."
                  },
                  {
                    question: "How do you support professional development?",
                    answer: "We provide access to learning management systems, mentorship programs, leadership academies, book clubs, and opportunities to attend conferences and training programs."
                  },
                  {
                    question: "What makes Martechbiz's culture unique?",
                    answer: "Our culture is built on five core values: Be Transparent, Challenge Mediocrity, Crave Knowledge, Make Calculated Decisions, and Value Each Other. We're committed to diversity, inclusion, and creating an environment where everyone can thrive."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-gray-50 to-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      onClick={() => toggleSection(`faq-${index}`)}
                      className="flex justify-between items-center cursor-pointer p-8 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-[#0E1F1C] pr-4">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: openIndex === `faq-${index}` ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#0E1F1C] p-2 rounded-full bg-white shadow-md"
                      >
                        <FaChevronDown size={20} />
                      </motion.div>
                    </motion.div>
                    
                    <AnimatePresence>
                      {openIndex === `faq-${index}` && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-8 pt-0 text-gray-700 leading-relaxed text-lg">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Call-to-Action Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-[#0E1F1C] via-[#1a2f2c] to-[#0E1F1C] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#0E1F1C] opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#0E1F1C] opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-[#FFFF] bg-clip-text text-transparent"
          >
            Ready to Join Our Team?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Take the next step in your career journey. We're looking for passionate individuals who share our values and want to make a real impact.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a 
              href="https://quoreit.com/contact" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#0E1F1C] to-[#00b894] text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform"
            >
              Browse Open Positions
            </motion.a>
            
           
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-gray-400 mt-8"
          >
            Questions? Contact our People Operations team at careers@Martechbiz.com
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

