"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Home, MapPin ,Plus, Minus,LucideSearchCheck, LucideRocket, LucideGraduationCap, LucideCalculator, LucideAward} from "lucide-react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
const leaders = [
  {
    name: "Rob Bellenfant",
    title: "Founder and Chief Executive Officer",
    image: "/iamges/rob.png",
    linkedin: "https://www.linkedin.com/in/rob-bellenfant",
  },
  {
    name: "Zach Jones",
    title: "Chief Revenue Officer",
    image: "/leaders/zach.png",
    linkedin: "https://www.linkedin.com/in/zach-jones",
  },
  {
    name: "Crystal Mullins",
    title: "Chief Operating Officer",
    image: "/leaders/crystal.png",
    linkedin: "https://www.linkedin.com/in/crystal-mullins",
  },
  {
    name: "Tyler Lessard",
    title: "Chief Marketing Officer",
    image: "/leaders/tyler.png",
    linkedin: "https://www.linkedin.com/in/tyler-lessard",
  },
  {
    name: "Katherine Fones",
    title: "Chief Product Officer",
    image: "/leaders/katherine.jpg",
    linkedin: "https://www.linkedin.com/in/katherine-fones",
  },
  {
    name: "Chris Turner-Green",
    title: "Managing Director, EMEA & APAC",
    image: "/leaders/chris.jpg",
    linkedin: "https://www.linkedin.com/in/chris-turner-green",
  },
];

const locations = [
  { name: "Canada", top: "30%", left: "18%" },
  { name: "Nashville, TN", top: "37%", left: "26%" },
  { name: "United Kingdom", top: "25%", left: "46%" },
  { name: "Germany", top: "33%", left: "50%" },
  { name: "India", top: "48%", left: "65%" },
  { name: "Singapore", top: "60%", left: "72%" },
  { name: "Australia", top: "73%", left: "78%" },
  { name: "The Philippines", top: "50%", left: "82%" },
];

const values = [
  {
    icon: <LucideSearchCheck className="text-[#386861]" size={28} />,
    title: "Be transparent",
    description:
      "As stakeholders of TA, we deserve to have honest, open, and consistent information about our business. Every employee, no matter the level on the org chart, practices transparency about their work.",
  },
  {
    icon: <LucideRocket className="text-[#386861]" size={28} />,
    title: "Challenge mediocrity",
    description:
      "We attack our goals with passion and a sense of urgency. We hold each other accountable and produce results above and beyond expectations.",
  },
  {
    icon: <LucideGraduationCap className="text-[#386861]" size={28} />,
    title: "Crave knowledge",
    description:
      "At TechnologyAdvice we strive to increase our knowledge, deepen our understanding, and invest in our personal and professional growth.",
  },
  {
    icon: <LucideCalculator className="text-[#386861]" size={28} />,
    title: "Make calculated Decisions",
    description:
      "We combine data with cross-team collaboration and balance diligence with speed to ensure prudent and tactical decisions that grow our business.",
  },
  {
    icon: <LucideAward className="text-[#386861]" size={28} />,
    title: "Value each other",
    description:
      "We go out of our way to lift each other up, applaud victories, and communicate with respect and honesty. We care about the success of the team and motivate and encourage one another.",
  },
];

const faqData = [
    
    {
      question: "What does TechnologyAdvice do?",
      answer:
        "At TechnologyAdvice, we pride ourselves on helping B2B tech buyers manage the complexity and risk of the buying process. We are a trusted source of information for tech buyers, delivering advice and facilitating connections between our buyers and the world’s leading sellers of business technology. The information provided on our site is meant to assist in the vendor selection process, but should not replace your own decision making process, merely augment it. You should do your own diligence on vendors before making any purchasing or partnership decision.",
    },
    {
      question: "How does TechnologyAdvice make money?",
      answer:
        "Our business makes money through online advertising. While we only feature companies on our site that we believe in, we do allow these companies to run ads on our site. These ads almost exclusively show up on our “best software” categories and vendor review pages. Advertisers will have some of the most prominent spots on this page, and typically have links back to landing pages on their sites, with UTM codes in the URL to help them track the ROI of their spend.",
    },
    {
      question:
        "Where is TechnologyAdvice located?",
      answer:
        "TechnologyAdvice is headquartered in Nashville, Tennessee, but our staff are located around the globe.",
    },
    {
      question: "How do you describe TechnologyAdvice culture?",
      answer:
        "In our Culture Compass, we describe TA’s work environment as engaging, fast-paced, supportive, global, and committed to DE&I.",
    },
   
    
  ];
  


const AboutHero = () => { 
    
    const [openItems, setOpenItems] = useState(Array(faqData.length).fill(false));

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.map((item, i) => (i === index ? !item : false))
    );
  };
  return (<>
  
  
    <section className="bg-[#0E1F1C] text-white px-6 md:px-12 lg:px-20 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-300 mb-2 space-x-2">
        <Home size={16} />
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span>›</span>
        <span className="font-semibold text-white">About Us</span>
      </div>

      {/* Heading and Subheading */}
      <div className="max-w-3xl mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Learn More About <br />
          <span className="text-white">TechnologyAdvice</span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Get to know TA’s purpose, core values, and culture.
        </p>
      </div>

      {/* Image Section */}
      {/* <div className="flex flex-col sm:flex-row gap-6">
        <div className="relative w-full sm:w-1/2 h-72 sm:h-96 rounded-xl overflow-hidden">
          <Image
            src="/images/team1.png"
            alt="Team Collaboration"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative w-full sm:w-1/2 h-72 sm:h-96 rounded-xl overflow-hidden">
          <Image
            src="/images/team2.png"
            alt="Meeting Room"
            fill
            className="object-cover"
          />
        </div>
      </div> */}
    </section>
    <section className="bg-white text-[#0f172a] px-6 md:px-12 lg:px-32 py-20">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Our mission</h2>

      {/* Purpose Statement */}
      <p className="text-xl sm:text-2xl font-medium text-center max-w-5xl mx-auto mb-10 leading-snug">
        TechnologyAdvice’s purpose is to create opportunities for our audiences, our customers,
        our team members, and our communities.
      </p>

      {/* Paragraphs */}
      <div className="space-y-6 text-gray-700 max-w-5xl mx-auto text-base sm:text-lg leading-relaxed">
        <p>
          At TechnologyAdvice, we pride ourselves on helping B2B tech buyers manage the complexity
          and risk of the buying process. We are a trusted source of information for tech buyers,
          delivering advice and facilitating connections between our buyers and the world’s leading
          sellers of business technology.
        </p>

        <p>
          Established in 2006 out of our founder’s dorm room, TechnologyAdvice continues to expand
          as a business. Through acquisitions, we now own more than 20 media brands, including{" "}
          <Link
            href="https://www.techrepublic.com"
            className="text-[#386861] font-semibold hover:underline"
            target="_blank"
          >
            TechRepublic
          </Link>
          ,{" "}
          <Link
            href="https://www.eweek.com"
            className="text-[#386861]font-semibold hover:underline"
            target="_blank"
          >
            eWeek
          </Link>
          ,{" "}
          <Link
            href="https://www.datamation.com"
            className="text-[#386861] font-semibold hover:underline"
            target="_blank"
          >
            Datamation
          </Link>
          , and{" "}
          <Link
            href="https://www.channelinsider.com"
            className="text-[#386861] font-semibold hover:underline"
            target="_blank"
          >
            Channel Insider
          </Link>
          , and serve more than 600 clients per year. These critical acquisitions included global
          teams of dynamic technology and media professionals to enhance our presence in the US,
          the UK, Singapore, and Australia. We now have more than 300 global team members
          representing 12 languages.
        </p>

        <p>
         The tech-quotes has been named an Inc. 5000 America’s Fastest-Growing Private Company
          seven times, and was listed on the Inc. Best Workplaces list three times. The company is
          also a seven-time recipient of the Tennessean Top Workplaces Award.
        </p>
      </div>
    </section>
   <section className="bg-white px-3 sm:px-8 lg:px-20 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Executive leadership
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition duration-200 p-6 bg-gray-50 flex flex-col items-center text-center"
          >
            <div className="relative w-24 h-24">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="rounded-full object-cover"
              />
              <Link
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-2 -right-2 bg-white border border-[#386861] text-[#386861] rounded-full p-2 hover:bg-green-50"
              >
                <FaLinkedinIn size={14} />
              </Link>
            </div>
            <h3 className="text-lg font-semibold mt-4">{leader.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{leader.title}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="relative py-20 px-4 sm:px-8 lg:px-32 bg-white overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Locations</h2>

      {/* Map Container */}
      <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px]">
        {/* World Map Background */}
        <Image
          src="/images/world-map.png"
          alt="World Map"
          fill
          className="object-contain opacity-80"
          priority
        />

        {/* Markers */}
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="absolute flex items-center gap-2"
            style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
          >
            <div className="w-10 h-10 bg-green-100 border border-green-600 rounded-full flex items-center justify-center">
              <MapPin className="text-green-600" size={20} />
            </div>
            <div className="bg-white border text-green-700 font-semibold px-3 py-1 rounded-full text-sm shadow">
              {loc.name}
            </div>
          </div>
        ))}
      </div>
    </section>
     <section className="px-4 sm:px-8 lg:px-32 py-12">
      <div className="bg-gradient-to-r from-[#141f3a] via-[#1e245c] to-[#165457] text-white text-center rounded-3xl p-10 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Headquartered in Nashville, Tennessee
        </h2>

        <p className="text-lg font-medium mb-1">
          3343 Perimeter Hill Dr Suite 100
        </p>
        <p className="text-lg font-medium mb-3">
          Nashville, TN 37211
        </p>
        <p className="text-lg font-medium">
          Phone:{" "}
          <a
            href="tel:8777022082"
            className="underline text-blue-300 hover:text-blue-400 transition"
          >
            877–702–2082
          </a>
        </p>
      </div>
    </section>
     <section className="px-4 sm:px-8 lg:px-32 py-16 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Core values</h2>

      <div className="space-y-6">
        {values.map((val, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 border rounded-2xl bg-gray-50 shadow-sm"
          >
            <div className="bg-white rounded-lg p-3 flex items-center justify-center">
              {val.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{val.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{val.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
     <section  className="mt-20 px-4 sm:px-8 lg:px-32 max-w-7xl mx-auto">
      <div className="max-w-none">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 leading-tight mb-10">
          Project management software FAQs
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-0 -mt-4 divide-y divide-gray-200 border border-gray-200 rounded-xl">
          {faqData.map((item, index) => (
            <div key={index}>
              {/* Question */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {item.question}
                </h3>
                <div className="w-9 h-9 bg-[#386861] hover:bg-green-700 rounded-md flex items-center justify-center">
                  {openItems[index] ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openItems[index] && (
                <div className="px-6 pb-6 animate-in fade-in duration-200">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutHero;