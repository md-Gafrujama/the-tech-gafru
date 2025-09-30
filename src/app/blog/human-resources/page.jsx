 "use client";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';

const cards = [
  {
    title: "Employee Disciplinary Action Guide + Form Template",
    description:
      "Disclaimer: This article is not intended as legal advice. Please seek counsel from an employment law attorney to...",
    author: "Robie Ann Ferrer",
    date: "May 26, 2025",
    image: "/images/hr-1.jpg",
    link: "/blog/human-resources/Best-hr-software-smbs",
  },
  {
    title: "How to Do Payroll Yourself: A Comprehensive Small Business Guide",
    description:
      "Learn how to do payroll by yourself, from tax setup to paying employees. Discover the pros, cons, alternatives, answers to...",
    author: "Robie Ann Ferrer",
    date: "May 13, 2025",
    image: "/images/hr-2.jpg",
    link: "/blog/human-resources/Best-hr-software-smbs",
  },
  {
    title: "Best Human Resources (HR) Software for Small Businesses in 2025",
    description:
      "Our top picks for the best HR software for small businesses are BambooHR, Rippling, Gusto, and Paycor. Read our...",
    author: "Robie Ann Ferrer",
    date: "May 5, 2025",
    image: "/images/hr-3.jpg",
    link: "/blog/human-resources/Best-hr-software-smbs",
  },
  {
    title: "Ziprecruiter vs Indeed: 2025 Comparison for Employers",
    description:
      "Looking to hire new talent? Compare the top features of ZipRecruiter vs Indeed to find the right recruitment solution for...",
    author: "Robie Ann Ferrer",
    date: "March 28, 2025",
    image: "/images/hr-4.jpg",
    link: "/blog/",
  },
  {
    title: "Paid vs Unpaid Internships: The Complete HR Overview",
    description:
      "Paying interns isn’t just the right thing to do—it’s often a legal requirement. Companies that offer paid internships...",
    author: "Lauren Hansen",
    date: "March 25, 2025",
    image: "/images/hr-5.jpg",
    link: "/blog/",
  },
  {
    title: "What Is DEI Training & How To Implement It",
    description:
      "Workplace DEI training is critical to breaking down the barriers historically marginalized communities face before...",
    author: "Jessica Dennis",
    date: "March 17, 2025",
    image: "/images/hr-6.jpg",
    link: "/blog/",
  },
  // {
  //   title: "HR Compliance Checklist: Must-Have Steps for 2025 & Beyond",
  //   description:
  //     "Stay compliant with our 2025 HR compliance checklist. Download our checklist to cover key regulations, hiring...",
  //   author: "Bryan Driscoll",
  //   date: "March 14, 2025",
  //   image: "/images/hr-7.jpg",
  //   link: "/blog/",
  // },
  // {
  //   title: "5 Best HR Outsourcing Companies for 2025",
  //   description:
  //     "Browsing for the best payroll outsourcing software? We review the top solutions to help you find the perfect fit for...",
  //   author: "Kaylyn McKenna",
  //   date: "February 24, 2025",
  //   image: "/images/hr-8.jpg",
  //   link: "/blog/",
  // },
  // {
  //   title: "5 Must-Have Integrations for Your ATS",
  //   description:
  //     "Key takeaways Modern applicant tracking systems (ATS) are a huge asset for recruiters. They make life easier by...",
  //   author: "Hanna Sillo",
  //   date: "February 21, 2025",
  //   image: "/images/hr-9.jpg",
  //   link: "/blog/",
  // },
  //   {
  //   title: "Best HRIS Systems of 2025",
  //   description:
  //     "Looking for the best HRIS system on the market? We review the top HRIS systems so you can find the perfect fit for your...",
  //   author: "Robie Ann Ferrer",
  //   date: "February 18, 2025",
  //   image: "/images/hr-10.jpg",
  //   link: "/blog/",
  // },
  // {
  //   title: "Essential Recruiting Metrics You Need to Be Tracking in 2024",
  //   description:
  //     "Are you tracking the right recruiting metrics to evaluate the success of your strategies?",
  //   author: "Irene Casucian",
  //   date: "February 17, 2025",
  //   image: "/images/hr-11.jpg",
  //   link: "/blog/",
  // },
  // {
  //   title: "AI Recruiting: Uses, Advantages, & Disadvantages 2025",
  //   description:
  //     "Using AI for recruiting can increase hiring efficiency and effectiveness, but it can also exacerbate hiring biases and...",
  //   author: "Alana Rudder",
  //   date: "February 11, 2025",
  //   image: "/images/hr-12.png",
  //   link: "/blog/",
  // },
  // {
  //   title: "ADP vs Paychex: Payroll Comparison 2025",
  //   description:
  //     "Key takeaways ADP vs Paychex: Which is better? ADP and Paychex are leading providers of payroll systems and HR...",
  //   author: "Robie Ann Ferrer",
  //   date: "February 10, 2025",
  //   image: "/images/hr-13.jpg",
  //   link: "/blog/",
  // },
  // {
  //   title: "Best Free Applicant Tracking Software (ATS) in 2025",
  //   description:
  //     "The best free ATS helps HR teams manage the hiring process effectively and efficiently. Discover our expert picks...",
  //   author: "Alana Rudder",
  //   date: "February 7, 2025",
  //   image: "/images/hr-14.jpg",
  //   link: "/blog/",
  // },
  // {
  //   title: "Employee Referrals: Meaning, Benefits, and Useful Tips",
  //   description:
  //     "Employee referrals allow companies to diversify their talent pools and speed up recruiting—when done right.",
  //   author: "Marta Gomez-Taylor",
  //   date: "February 3, 2025",
  //   image: "/images/hr-15.jpg",
  //   link: "/blog/",
  // },
];

export default function HumanResourcesPage() {
  return (
    <> 
    <Head>
  <title>Top Human Resources Software & Guides 2025 | Technology Advice</title>
  <meta 
    name="description" 
    content="Discover the best HR tools and strategies in 2025. Explore comparisons, checklists, and software guides for payroll, compliance, recruiting, and more." 
  />
</Head>

        <div className="min-h-screen py-10 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12"> {/* NEW WRAPPER */}

    {/* Breadcrumb */}
    <div className="text-sm text-gray-500 mb-2">
      <Link href="/" className="hover:underline">Home</Link>
      <span className="mx-1">›</span>
      <span className="text-gray-700 font-semibold">Human Resources</span>
    </div>

    {/* Heading */}
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Human Resources</h1>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card, idx) => (
        <Link href={card.link} key={idx}>
          <div className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:bg-green-50 transition duration-300 flex flex-col h-[500px]">

            {/* Fixed height image */}
            <div className="relative w-full h-52 bg-gray-100">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Text */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{card.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{card.description}</p>
              <div className="mt-auto">
                <p className="text-xs text-gray-500">{card.author}</p>
                <p className="text-xs text-gray-400">{card.date}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>

    </>
  );
}
