 "use client";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';
const cards = [
  {
    title: "The Best AI-Powered BI Tools to Stay Ahead in 2025",
    description:
      "AI BI tools use machine learning to deliver smarter insights fast. Explore the best options to drive better decisions and outpace competitors..",
    author: "J.R. Johnivan",
    date: "May 19, 2025",
    image: "/images/bi-1.jpg",
    link: "/blog/Business-intelligence/Top-Business-Intelligence-Software",
  },
  {
    title: "Best Power BI Alternatives: Top Tools for Data Analytics in 2025",
    description:
      "Exploring alternatives to Power BI? Check out the top BI tools with great features, better pricing, and seamless integrations to find your fit.",
    author: "Kashyap Vyas",
    date: "March 25, 2025",
    image: "/images/bi-2.jpeg",
    link: "/blog/Business-intelligence/Top-Business-Intelligence-Software",
  },
  {
    title: "Mastering Data Migration: Five Best Practices for a Seamless Transition in 2025",
    description:
      "What is data migration? Moving data from one application to another can be advantageous, read our complete guide to learn how your business can benefit.",
    author: "Kezia Jungco",
    date: "March 7, 2025",
    image: "/images/bi-3.jpg",
    link: "/blog/Business-intelligence/Top-Business-Intelligence-Software",
  },
  // {
  //   title: "Mind Map Template and Examples",
  //   description:
  //     "A mind map template can help simplify your planning and brainstorming process. Here's how it can benefit your...",
  //   author: "Kara Shear",
  //   date: "December 17, 2024",
  //   image: "/images/pm-4.jpeg",
  //   link: "/blog/",
  // },
  // {
  //   title: " The Project Closure Checklist: Overview, Examples & Template",
  //   description:
  //     "A project closure checklist can help keep your team aligned and ensure no task gets missed. Here’s how to...",
  //   author: "Amy Rose Smith",
  //   date: "December 12, 2024",
  //   image: "/images/pm-5.jpg",
  //   link: "/blog/",
  // },
  // {
  //   title: "Tips on How to Plan Quality Management in Projects",
  //   description:
  //     "Creating a quality management plan can help reduce risks and improve outcomes. Read on to know more for better...",
  //   author: "Stephen Pratt",
  //   date: "October 3, 2024",
  //   image: "/images/pm-6.jpeg",
  //   link: "/blog/",
  // },
  // {
  //   title: "Best Free Project Management Software",
  //   description:
  //     "Sometimes a spreadsheet just won’t cut it. But a free project management tool doesn’t ruin your budget either...",
  //   author: "Charlotte T. Reid",
  //   date: "September 19, 2024",
  //   image: "/images/hr-7.jpg",
  //   link: "/blog/",
  // },
  // {
  //   title: "Asana vs monday: Top Project Management Software",
  //   description:
  //     "Compare Asana and Monday’s key project management features to help you choose the best fit...",
  //   author: "Stephen Pratt",
  //   date: "September 13, 2024",
  //   image: "/images/hr-8.jpg",
  //   link: "/blog/",
  // },
  // {
  //   title: "What is a Mind Map? Examples, Tips and More",
  //   description:
  //     "A mind map is a brainstorming tool that helps you visualize ideas. This article shares four ideas to create...",
  //   author: "Kara Shear",
  //   date: "September 11, 2024",
  //   image: "/images/hr-9.jpg",
  //   link: "/blog/",
  // },
  // {
  //   title: "Design Review Process Guide: Definition, Steps & Types",
  //   description:
  //     "Need the steps of the design review process? This guide explains what it is and how to execute it effectively...",
  //   author: "Kara Shear",
  //   date: "August 30, 2024",
  //   image: "/images/hr-10.jpg",
  //   link: "/blog/",
  // },
  // {
  //   title: "Project Management Basics",
  //   description:
  //     "Key takeaways: Project management is a structured way of managing tasks that may include goals, timelines...",
  //   author: "Kara Shear",
  //   date: "August 18, 2024",
  //   image: "/images/hr-11.jpg",
  //   link: "/blog/",
  // },
  // {
  //   title: "8 Common Project Risks & How to Manage Them",
  //   description:
  //     "What are the top common project risks? Learn the best practices and strategies for minimizing them in...",
  //   author: "Amy Rose Smith",
  //   date: "August 10, 2024",
  //   image: "/images/hr-12.png",
  //   link: "/blog/",
  // },
];

export default function ProjectManagement() {
  return (
    <> 
    <Head>
  <title>Top Project Management Software & Guides 2025 | Technology Advice</title>
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
      <span className="text-gray-700 font-semibold">Business Intelligence</span>
    </div>

    {/* Heading */}
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Business Intelligence</h1>

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