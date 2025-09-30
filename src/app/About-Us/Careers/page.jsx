"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

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
    // Close other sections when clicking Culture
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

  // Define global colors
  const GLOBAL_BG_COLOR = 'white';
  const TEXT_COLOR = '#0E1F1C';
  const BUTTON_COLOR = '#ffd800';
  const BENEFITS_BACKGROUND_COLOR = '#0e1f1c';
  const BENEFITS_ITEM_BG_COLOR = '#1A2A28';

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
      title: "Is TechnologyAdvice the company for you?",
      content: `We have big goals ahead and need an extraordinary team to achieve them, so if you read this and get just as excited as we are, the opportunities are endless!`,
    },
  ];

 const testimonials = [
  {
    text: `There are endless opportunities to explore and advance your career at TechnologyAdvice. The company invests a lot of training and time into it's team members and it’s apparent that you get what you put in. If you want growth, opportunity, and an exciting fast-paced environment, TA is the right place for you.`,
  },
  {
    text: `You will grow really fast at TA and learn a lot quickly. You will learn how to challenge yourself and stretch your capabilities. The organization is goal driven and focused. The team is fun and my colleagues are great to work with and people are friendly.`,
  },
  {
    text: `I have never been a part of a company that is as positive as TechnologyAdvice. TA’s management lives by the 5 core values, and this trickles down throughout the entire organization.`,
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
      title: 'Career development',
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
      title: 'Health and wellness',
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
            d="M12 18v-5.25m0 0a6.002 6.002 0 0 0 1.58-1.425 18.067 18.067 0 0 1 5.865 3.125M12 18a6.002 6.002 0 0 0-1.58-1.425 18.067 18.067 0 0 1-5.865 3.125M12 18V6A3.003 3.003 0 0 0 6 6h2.25c.51 0 .935.347 1.076.839A6 6 0 0 1 12 6M12 18h.375a3 3 0 0 0 2.26-5.435M12 18H11.625A3 3 0 0 1 9.365 12.565m-2.26-5.435A3 3 0 0 0 6 6c0-1.657 1.343-3 3-3h.75a3 3 0 0 1 3 3v.375c0 .621.504 1.125 1.125 1.125h1.5a3 3 0 0 1 3 3v.375h-.75A3.001 3.001 0 0 0 15 12c0 .621.504 1.125 1.125 1.125H18c1.657 0 3-1.343 3-3V6.75A.75.75 0 0 0 20.25 6H12"
          />
        </svg>
      ),
      title: 'Learning and development',
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
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
      title: 'Team activities',
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
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25H18.75A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
      ),
      title: 'Paid time off',
      description: 'Enjoy work-life balance with generous paid time off.',
    },
  ];

  const coreValues = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#386861]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4.5 16.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM19.5 16.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM12 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM12 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>
      ),
      title: 'Be transparent',
      description: 'As stakeholders of TA, we deserve to have honest, open, & consistent information about our business. Every employee, no matter the level on the org chart, practices transparency about their work.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#386861]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.375c.068.038.129.093.182.158l2.992 3.007a.75.75 0 1 1-1.06 1.06L14.474 16.7c-.069-.06-.12-.129-.158-.2l-1.33-2.217a.75.75 0 0 0-.203-.277 1.5 1.5 0 0 1-.722-.977L9.236 9.873A8.75 8.75 0 0 0 7.5 7.5c0-4.004 3.003-7.25 6.702-7.25C18.2 0.25 21 3.5 21 7.5c0 1.626-.54 3.076-1.5 4.25a.75.75 0 0 0 .203.277l1.33 2.217c.069.06.12.129.158.2l2.992 3.007a.75.75 0 1 1-1.06 1.06L18.41 14.533c-.068-.038-.129-.093-.182-.158l-1.33-2.217a.75.75 0 0 0-.203-.277 1.5 1.5 0 0 1-.722-.977L9.236 9.873Z" />
        </svg>
      ),
      title: 'Challenge mediocrity',
      description: 'We attack our goals with passion & a sense of urgency. We hold each other accountable & produce results above & beyond expectations.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#386861]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.966 48.966 0 0 1 12 21.75c2.305 0 4.535-.295 6.735-.856m-1.72-1.033a48.96 48.96 0 0 0-10.618 0m10.618 0v.2c0 2.109-.969 3.993-2.564 5.25S12.378 24 12 24c-.378 0-2.07-.468-3.676-1.725S5.25 18.2 5.25 16.125v-.2M12 21.75c-2.305 0-4.535-.295-6.735-.856m0 0a48.805 48.805 0 0 1-1.378-3.695m1.378 3.695L7.5 21.493m-.491-11.347a60.436 60.436 0 0 1-.491-6.347m-1.996-.007a60.436 60.436 0 0 1-.491-6.347" />
        </svg>
      ),
      title: 'Crave knowledge',
      description: 'At TechnologyAdvice we continually increase our knowledge, deepen our understanding, & invest in our personal and professional growth.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#386861]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25H18.75A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
      ),
      title: 'Make calculated decisions',
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
        { title: "Social Media Specialist", department: "Audience Development", location: "Philippines" },
        { title: "Technology Content Strategist", department: "Audience Development", location: "Philippines" },
      ],
    },
    {
      category: "Content",
      jobs: [
        { title: "Staff Writer, Channel", department: "Content", location: "Philippines" },
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
        { title: "Client Success Manager", department: "Client Success", location: "United Kingdom" },
        { title: "Client Success Manager, Boston Area", department: "Client Success", location: "United States" },
        { title: "Client Success Operations Coordinator", department: "Client Success", location: "Philippines" },
        { title: "Client Success Coordinator", department: "Client Success", location: "Philippines" },
      ],
    },
    {
      category: "Sales",
      jobs: [
        { title: "Account Director", department: "Sales", location: "United Kingdom" },
        { title: "Account Manager", department: "Sales", location: "Australia" },
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
      {/* Hero Section */}
      <div className="bg-[#0E1F1C] min-h-screen text-white px-8 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <nav className="text-sm mb-8">
              <span className="text-gray-400">🏠 Home &gt; </span>
              <span className="font-semibold">Careers</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's grow together
            </h1>

            <p className="text-lg mb-4">
              We're TechnologyAdvice – the team behind a portfolio of leading B2B tech publications.
              If you're here, it's because all of our brands share a common mission – and a single team driving them forward.
            </p>

            <p className="text-lg mb-8">
              At TechnologyAdvice, you'll work alongside a diverse group of passionate individuals who love growing as professionals and learning new things.
              No two days are exactly the same here, and you'll face opportunities to expand your skill set, step outside of your comfort zone,
              and contribute to the best group you'll ever work with.
            </p>

            <div className="mb-8">
              <a href="#" className="font-semibold hover:text-[#386861]">
                Subscribe to our Talent Community →
              </a>
            </div>
<a href="/About-Us/Careers/opportunities" className="inline-block">
  <button className="bg-[#386861] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
    Apply Now
  </button>
</a>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-xl overflow-hidden w-full max-w-md">
              <Image
                src="/images/careers1.png"
                alt="Team working together"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

       <div className="flex flex-wrap gap-8 mt-50 text-white font-semibold text-xl">
  <a href="/About-Us/Careers" className="hover:underline">Culture</a>
  <a href="/About-Us/Careers/opportunities" className="hover:underline">Opportunities</a>
  <a href="/About-Us/Careers/faqs" className="hover:underline">FAQs</a>
</div>

      </div>

      {/* Culture Compass Section */}
      <div id="culture-compass" className="bg-white min-h-screen text-black max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Culture Compass</h2>

        <p className="text-lg md:w-3/4 mb-4">
          At TechnologyAdvice we believe our success starts with attracting, hiring, and developing amazing people for our team. In sharing who we are and how we work, we're giving you insight into our culture so you can make sure it's a match for you. Our Culture Compass was created to be remarkably explicit and transparent about our unique culture to give you the best opportunity to thrive in our environment and reach your full potential.
        </p>

        <p className="text-lg md:w-3/4 mb-8">
          We want TA to be the place for you and hope our culture resonates with you! If not, that's okay. We believe in ensuring that everyone understands and aligns with our team's goals, fostering a collective sense of purpose that drives our actions and dedication.
        </p>

        {sections.map((section, index) => (
          <div key={index} className="border-t py-4">
            <div
              onClick={() => toggleSection(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <span className="text-[#386861] text-2xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="mt-4 whitespace-pre-wrap">{section.content}</div>
            )}
          </div>
        ))}
      </div>
{/* 
testimonials */}
 <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
          What our team members have to say
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#0d1424] text-white p-6 rounded-2xl shadow-md h-full min-h-[330px] flex flex-col justify-between"
            >
              <div className="flex items-start gap-3 mb-4">
                <FaQuoteLeft className="text-green-400 text-xl mt-1" />
                <span className="h-full w-0.5 bg-green-400 mt-1" />
              </div>
              <p className="text-md font-medium leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

     {/* Awards Section */}
      <div className="py-16 px-4  max-w-6xl mx-auto sm:px-6 lg:px-8" style={{ color: TEXT_COLOR }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Awards
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center justify-center h-40">
                <Image
                  src={award.src}
                  alt={award.alt}
                  width={200}
                  height={100}
                  className="object-contain max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>


{/* Benefits Section */}
      <div className=" sm:px-6 lg:px-8  mx-auto px-4 py-16" style={{ backgroundColor: BENEFITS_BACKGROUND_COLOR, color: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl max-w-6xl mx-auto font-bold mb-12 text-white">
            Benefits of working on our team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-sm"
                style={{ backgroundColor: BENEFITS_ITEM_BG_COLOR }}
              >
                <div className="flex-shrink-0 p-3 rounded-md mb-4" style={{ backgroundColor: TEXT_COLOR }}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* video section */}
      <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f6f8fc] rounded-2xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          {/* Left Side - Text */}
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#0d1424] mb-4">
              We’d love to work with you
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-md">
              No matter who you are or what stage of your career you find yourself, when you join the TechnologyAdvice team you begin an incredible adventure.
            </p>
          </div>

          {/* Right Side - Video */}
         <div className="w-full h-full aspect-video">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/2D4-ar_d5K4?list=PLFagkHjQLihMrfT0Czpl97H7XuxQ8Uf96"
    title="TechnologyAdvice - Careers Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
        </div>
      </div>
    </section>
      {/* Core Values Section */}
      <div className=" sm:px-6 lg:px-8 max-w-6xl mx-auto px-4 py-16" style={{ color: TEXT_COLOR }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Core values
          </h2>
          <div className="space-y-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0 bg-white p-3 rounded-md mr-4">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: TEXT_COLOR }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      {/* Picture Yourself Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ color: TEXT_COLOR }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Picture yourself at TechnologyAdvice
          </h2>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-8 w-full">
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/APAC1.jpeg"
                  alt="Team members wearing crowns"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/APCA1.jpg"
                  alt="Person skydiving"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {/* Jobs Available Section - Only shown when showOpportunities is true */}
      {showOpportunities && (
        <div id="opportunities-section" className="bg-white py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: GLOBAL_BG_COLOR, color: TEXT_COLOR }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Jobs available
            </h2>

            {/* Filters Section */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center justify-start">
              {/* Location Filter */}
              <div className="relative inline-block text-left w-full sm:w-auto">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-4 leading-tight focus:outline-none focus:border-blue-500 shadow-sm"
                  style={{ color: TEXT_COLOR }}
                >
                  <option value="">All Locations</option>
                  {allLocations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a8.75 8.75 0 002.304-1.213 6.022 6.022 0 012.498-1.725 6.022 6.022 0 012.504-1.727 8.75 8.75 0 002.304-1.215 4.002 4.002 0 002.49-3.44c-.082-1.94-.97-3.614-2.618-4.944A10.05 10.05 0 0012 2.252c-2.34 0-4.526.702-6.235 1.875a10.05 10.05 0 00-2.618 4.943 4.002 4.002 0 002.49 3.44 8.75 8.75 0 002.304 1.215 6.022 6.022 0 012.504 1.727 6.022 6.022 0 012.498 1.725 8.75 8.75 0 00.07.04zm-.484 1.05zm2.25-14.82l-2.09-2.09c-.39-.39-1.023-.39-1.414 0l-2.09 2.09a1 1 0 000 1.414l2.09 2.09a1 1 0 001.414 0l2.09-2.09a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Department Filter */}
              <div className="relative inline-block text-left w-full sm:w-auto">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-4 leading-tight focus:outline-none focus:border-blue-500 shadow-sm"
                  style={{ color: TEXT_COLOR }}
                >
                  <option value="">All Departments</option>
                  {allDepartments.map(department => (
                    <option key={department} value={department}>{department}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.73 0 5.436.142 8.108.407.3-.097.6-.147.9-.147H21.75a.75.75 0 01.75.75v3.626a.75.75 0 01-.65.748L20.25 11.375V15.75a.75.75 0 01-.75.75H15V21a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-4.5H9.75a.75.75 0 01-.75-.75v-4.375L3.392 8.363a.75.75 0 01-.65-.748V3.688a.75.75 0 01.75-.75h1.17c.3 0 .6.05.9.147zM6.559 6.723A45.013 45.013 0 0112 6.75c1.848 0 3.655.106 5.433.313V7.5L12 10.875 6.559 7.5V6.723zM15 11.375h4.5v3.625H15v-3.625z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Search by Title */}
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Search by Title"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-gray-300 rounded-lg py-2 pl-10 pr-4 leading-tight focus:outline-none focus:border-blue-500 w-full shadow-sm"
                  style={{ color: TEXT_COLOR }}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.694 4.693a1.5 1.5 0 11-2.121 2.121l-4.693-4.694A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            {filteredJobCategories.length > 0 ? (
              filteredJobCategories.map((categoryData, catIndex) => (
                <div key={catIndex} className="mb-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: TEXT_COLOR }}>{categoryData.category}</h3>
                  <div className="space-y-4">
                    {categoryData.jobs.map((job, jobIndex) => (
                      <div
                        key={jobIndex}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50 p-6 rounded-lg shadow-sm"
                      >
                        <p className="text-lg font-semibold text-green-700 mb-2 sm:mb-0">
                          {job.title}
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-sm text-gray-600">
                          <span className="font-medium">{job.department}</span>
                          <span className="font-medium">{job.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-lg">No jobs found matching your criteria.</p>
            )}
          </div>
        </div>
      )}

      {/* Interviewing FAQs Section - Only shown when showFAQs is true */}
      {showFAQs && (
        <div id="faqs-section" className="py-16 px-4 sm:px-6 lg:px-8" style={{ color: TEXT_COLOR }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Interviewing FAQs
            </h2>

            <div className="space-y-8">
              {/* FAQ Items */}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  TechnologyAdvice does not engage with external staffing agencies.
                </h3>
                <p className="text-gray-700">
                  Any candidates introduced by such firms will not be eligible for compensation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  What does working at TechnologyAdvice look like?
                </h3>
                <p className="text-gray-700">
                  With employees across the globe, we take a remote-first approach. All of our jobs can be performed remotely unless otherwise noted in the job description.
                </p>
                <p className="text-gray-700 mt-2">
                  Whether you will work remotely all the time, sometimes, or never, we want to ensure you have the tools you need to be successful. We will ship the technology and equipment that you need to do your job.
                </p>
                <p className="text-gray-700 mt-2">
                  We also want to ensure that you are fully integrated into the culture and company, so you will have the opportunity to participate in virtual outings. If there is ever a chance for you to visit our headquarters in Nashville, TN, there will be catered lunch and a desk space waiting for you!
                </p>
                <p className="text-gray-700 mt-2">
                  New hires located within 50 miles of an office are requested to work from the office for their first week and for quarterly stakeholder meetings. If you are located in the US, we offer a Hybrid Work Policy allowing our team the choice to work 100% in the office, 100% remote, or a blend of the two unless otherwise noted.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  What does TechnologyAdvice do?
                </h3>
                <p className="text-gray-700">
                  Our 'what' can be broken down into two focuses.
                  We help people who are in need of new or optimized tech (primarily software) for their business get unbiased advice and data that helps them make sound purchasing decisions.
                  We help technology companies connect with an exclusive audience of 100 million buyers to ease the burden of prospecting blindly and meet buyers on their terms. We shorten the sales cycle by doing the initial vetting and qualifying of a prospect.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  I just submitted my application — what happens next?
                </h3>
                <p className="text-gray-700">
                  We're so excited you're interested in working with us! After applying, you will receive a confirmation email from our applicant tracking system confirming your application has been received. We review every application that we receive but unfortunately are unable to respond to every applicant directly. We will reach out to qualified candidates with an update on the next step within 5 – 7 days. Typically, a member of our HR team will conduct a phone interview with qualified candidates.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  What are the steps in your hiring process?
                </h3>
                <p className="text-gray-700">
                  Below is an overview of our standard hiring process and typical time commitment for each stage:
                  Phone Interview, 20 – 30 minutes 
                  Skills Assessment, approximately 2 hours (on task) 
                  Hiring Manager Interview, 60 – 90 minutes 
                  Test Drive, 3 – 4 hours 
                  Certain stages in the hiring process may be adjusted depending on the position or hiring manager.
                  What is a Test Drive?
                  Just like you wouldn't buy a car without test driving it first, we want candidates and future employees to have the opportunity to test their potential new role and company! You'll get a taste of a typical day and meet some of the team members you could work alongside!
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  How long does your hiring process take?
                </h3>
                <p className="text-gray-700">
                  It varies based on the position, but on average it takes around 2-3 weeks from when you apply to when an offer goes out. Our priority is always finding the right match rather than meeting a timeline. We want to ensure that not only are you a good fit for us but that we're also a good fit for you.
                  Be sure to keep your recruiter in the loop regarding any additional opportunities you are exploring so our recruitment team can work to accommodate your timeline and availability.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  What should I wear to my interview?
                </h3>
                <p className="text-gray-700">
                  Congrats on making it to the next stage! While we're a pretty casual bunch day-to-day, we believe interviews are a chance to put your best foot forward. Business casual is a safe bet, but if you're unsure, it's always better to be slightly overdressed than underdressed. When in doubt—dress to impress!
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  How do you foster diversity, equity, and inclusion?
                </h3>
                <p className="text-gray-700">
                  We're so glad you asked! TechnologyAdvice launched its Diversity, Equity, and Inclusion committee in 2019 and regularly holds events, training, book clubs, and listening sessions to support our team and ensure we offer an inclusive workplace for all. DE&I is an ongoing and continuous effort. We're committed to growing, learning, and bettering ourselves, our communities, and our future.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  I know someone who would make a great fit for TechnologyAdvice, but am not a current employee. Can I make a referral?
                </h3>
                <p className="text-gray-700">
                  We're so glad you'd like to recommend someone to work with us. We offer up to a $1,000 USD bonus for an eligible referral who is hired and completes 90 days of working with us in the US, UK, AU, and SG. For full-time roles that are based in the Philippines, you could be eligible for a $200 bonus. Please make note of our additional requirements below.
                  To be eligible for a referral bonus, the candidate you refer cannot previously exist in our ATS or has been previously reached out to by our HR team. Internal team members must submit their referrals in our ATS.
                  Additionally, you must either a) email careers@technologyadvice.com with your referral prior to the candidate applying, and/or b) the candidate MUST list your name in the "Did someone specifically refer you to apply?" section of the application. Only one referral bonus will be paid for each successful new hire, be sure they name you!
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  I was referred to TechnologyAdvice by a friend, colleague, pet sitter, etc.
                </h3>
                <p className="text-gray-700">
                  That's great! Make sure that you list their name in the "Did someone specifically refer you to apply?" section of the application. Please only list one name. We may contact them for any further insight they may be able to provide.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  I want to work at TechnologyAdvice, but I don't see a role I'm qualified for/interested in.
                </h3>
                <p className="text-gray-700">
                  We understand that waiting for the right role is really important. One way to stay up to date on open roles is our community newsletter! We will highlight open jobs, provide company updates, and even offer interviewing/career tips!
                  You can also fill out our general application to tell us a bit more about yourself and what you're looking for in a position. We're a fast-growing company and we are always looking for talented folks to join and have hired a number of individuals through our general application.
                  We'll reach out if we have a role that's a fit for you now or in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );}