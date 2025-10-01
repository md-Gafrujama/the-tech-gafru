"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Home, MapPin ,Plus, Minus,LucideSearchCheck, LucideRocket, LucideGraduationCap, LucideCalculator, LucideAward, LucideArrowRight} from "lucide-react"; // Added LucideArrowRight for the button
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

// Data definitions (kept same as original)
const leaders = [
  {
    name: "Rob Bellenfant",
    title: "Founder and Chief Executive Officer",
    image: "/images/rob.png", // Corrected path assumption
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

// MODIFIED: Only India and U.S.A. locations with specific coordinates
const locations = [
  // These coordinates are approximate and might need fine-tuning based on your specific world map image.
  // Using slightly adjusted 'top' and 'left' values for a more precise placement for India and USA.
  { name: "India", top: "49%", left: "68.5%" }, 
  { name: "U.S.A.", top: "37%", left: "22%" }, 
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
      "At Martechbiz we strive to increase our knowledge, deepen our understanding, and invest in our personal and professional growth.",
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
      question: "What does Martechbiz do?",
      answer:
        "At Martechbiz, we pride ourselves on helping B2B tech buyers manage the complexity and risk of the buying process. We are a trusted source of information for tech buyers, delivering advice and facilitating connections between our buyers and the world’s leading sellers of business technology. The information provided on our site is meant to assist in the vendor selection process, but should not replace your own decision making process, merely augment it. You should do your own diligence on vendors before making any purchasing or partnership decision.",
    },
    {
      question: "How does Martechbiz make money?",
      answer:
        "Our business makes money through online advertising. While we only feature companies on our site that we believe in, we do allow these companies to run ads on our site. These ads almost exclusively show up on our “best software” categories and vendor review pages. Advertisers will have some of the most prominent spots on this page, and typically have links back to landing pages on their sites, with UTM codes in the URL to help them track the ROI of their spend.",
    },
    {
      question:
        "Where is Martechbiz located?",
      answer:
        "Martechbiz is headquartered in Nashville, Tennessee, but our staff are located around the globe.",
    },
    {
      question: "How do you describe Martechbiz culture?",
      answer:
        "In our Culture Compass, we describe TA’s work environment as engaging, fast-paced, supportive, global, and committed to DE&I.",
    },
   
    
  ];
  

const AboutUsPage = () => { 
    const [openItems, setOpenItems] = useState(Array(faqData.length).fill(false));

    const toggleItem = (index) => {
        setOpenItems((prev) =>
            prev.map((item, i) => (i === index ? !item : false))
        );
    };

    return (
        <div className="bg-gray-50 font-sans antialiased text-gray-900">
            {/* Hero Section - Modified for Left Alignment and additional features */}
            <section className="bg-[#0E1F1C] text-white px-6 md:px-12 lg:px-20 py-24 relative overflow-hidden">
                {/* Background gradient/overlay for modern feel */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a4a44] to-[#0E1F1C] opacity-90 z-0"></div>
                
                <div className="relative z-10 max-w-6xl"> {/* Removed mx-auto to left align */}
                    {/* Breadcrumb */}
                    <div className="flex items-center text-sm text-gray-300 mb-4 space-x-2">
                        <Home size={16} className="text-green-300" />
                        <Link href="/" className="hover:underline hover:text-green-200 transition-colors">
                            Home
                        </Link>
                        <span className="text-gray-400">›</span>
                        <span className="font-semibold text-white">About Us</span>
                    </div>

                    {/* Heading and Subheading */}
                    <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight mt-6 mb-4 drop-shadow-lg max-w-xl animate-fade-in-up">
                        Learn More About <br />
                        <span className="text-green-300">Martechbiz</span>
                    </h1>
                    <p className="text-gray-200 mt-4 text-lg sm:text-xl max-w-lg animate-fade-in-up delay-200">
                        Get to know TA’s purpose, core values, and culture.
                    </p>

                    {/* Added Feature: Call to Action Button */}
                    <Link href="#our-mission" className="mt-8 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400">
                        Discover Our Story
                        <LucideArrowRight className="ml-2 -mr-1 h-5 w-5" />
                    </Link>
                </div>
            </section>

            {/* Mission Section */}
            <section id="our-mission" className="bg-white text-[#0f172a] px-6 md:px-12 lg:px-32 py-20 shadow-inner">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 leading-tight">Our mission</h2>

                    <p className="text-xl sm:text-2xl font-medium text-center max-w-4xl mx-auto mb-12 leading-relaxed text-gray-800">
                        Martechbiz’s purpose is to create opportunities for our audiences, our customers,
                        our team members, and our communities.
                    </p>

                    <div className="space-y-8 text-gray-700 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
                        <p>
                            At Martechbiz, we pride ourselves on helping B2B tech buyers manage the complexity
                            and risk of the buying process. We are a trusted source of information for tech buyers,
                            delivering advice and facilitating connections between our buyers and the world’s leading
                            sellers of business technology.
                        </p>

                        <p>
                            Established in 2006 out of our founder’s dorm room, Martechbiz continues to expand
                            as a business. Through acquisitions, we now own more than 20 media brands, including{" "}
                            <Link
                                href="https://www.techrepublic.com"
                                className="text-[#386861] font-semibold hover:underline hover:text-green-700 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                TechRepublic
                            </Link>
                            ,{" "}
                            <Link
                                href="https://www.eweek.com"
                                className="text-[#386861] font-semibold hover:underline hover:text-green-700 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                eWeek
                            </Link>
                            ,{" "}
                            <Link
                                href="https://www.datamation.com"
                                className="text-[#386861] font-semibold hover:underline hover:text-green-700 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Datamation
                            </Link>
                            , and{" "}
                            <Link
                                href="https://www.channelinsider.com"
                                className="text-[#386861] font-semibold hover:underline hover:text-green-700 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
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
                </div>
            </section>

            

            {/* Locations Section - Redesigned */}
            <section className="relative py-20 px-4 sm:px-8 lg:px-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">Global Reach</h2>
                <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Proudly serving clients worldwide with key presences in India and U.S.A.
                </p>

                {/* Map Container */}
                <div className="relative w-full max-w-5xl mx-auto h-[450px] md:h-[550px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100 flex items-center justify-center">
                    {/* World Map Background */}
                    <Image
                        src="/images/world-map.png" // Ensure this image path is correct
                        alt="World Map"
                        fill
                        className="object-contain opacity-80" // Use object-contain for better pin alignment
                        priority
                    />

                    {/* Markers */}
                    {locations.map((loc, idx) => (
                        <div
                            key={idx}
                            className="absolute flex flex-col items-center group cursor-pointer"
                            style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
                        >
                            {/* Pin Icon with animated pulse */}
                            <div className="relative w-12 h-12 bg-green-600 border-4 border-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-125 transition-transform duration-300 ease-out z-10">
                                <MapPin className="text-white" size={24} />
                                {/* Pulsing effect */}
                                <span className="absolute animate-ping-slow inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            </div>
                            {/* Location Name Tag with hover effect */}
                            <div className="mt-3 bg-white border border-green-300 text-green-800 font-semibold px-5 py-2 rounded-full text-base shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-2 transition-all duration-300 ease-out whitespace-nowrap z-20">
                                {loc.name}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Headquarters Contact Info */}
            <section className="px-4 sm:px-8 lg:px-32 py-12 bg-gray-50">
                <div className="bg-gradient-to-r from-[#0c2e28] to-[#1e5c54] text-white text-center rounded-3xl p-10 sm:p-12 shadow-xl max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        Headquartered in Nashville, Tennessee
                    </h2>

                    <p className="text-lg font-medium mb-1 opacity-90">
                        3343 Perimeter Hill Dr Suite 100
                    </p>
                    <p className="text-lg font-medium mb-3 opacity-90">
                        Nashville, TN 37211
                    </p>
                    <p className="text-lg font-medium">
                        Phone:{" "}
                        <a
                            href="tel:8777022082"
                            className="underline text-green-200 hover:text-green-50 transition-colors"
                        >
                            877–702–2082
                        </a>
                    </p>
                </div>
            </section>

            {/* Core values */}
            <section className="px-4 sm:px-8 lg:px-32 py-20 bg-white">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Our Core Values</h2>

                <div className="space-y-8 max-w-5xl mx-auto">
                    {values.map((val, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 md:p-8 border border-gray-200 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                        >
                            <div className="bg-green-100 rounded-full p-4 flex-shrink-0 flex items-center justify-center shadow-inner">
                                {val.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">{val.title}</h3>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{val.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="mt-20 px-4 sm:px-8 lg:px-32 py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 leading-tight mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors duration-200"
                                    aria-expanded={openItems[index]}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                                        {item.question}
                                    </h3>
                                    <div className="w-10 h-10 bg-[#386861] hover:bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300">
                                        {openItems[index] ? (
                                            <Minus className="w-6 h-6 text-white" />
                                        ) : (
                                            <Plus className="w-6 h-6 text-white" />
                                        )}
                                    </div>
                                </button>

                                {/* Answer with smooth transition */}
                                <div
                                    id={`faq-answer-${index}`}
                                    role="region"
                                    aria-labelledby={`faq-question-${index}`}
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        openItems[index] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden px-6 pb-6 pt-0">
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;