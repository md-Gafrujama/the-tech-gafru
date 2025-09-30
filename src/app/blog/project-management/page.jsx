 "use client";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';
const cards = [
  {
    title: "Top 5 Types of Project Management Methodologies",
    description:
      "Understanding the different project management methodologies will help you decide which is best for your needs...",
    author: "Brandon Matthews",
    date: "January 16, 2025",
    image: "/images/pm-1.jpeg",
    link: "/blog/project-management/Project-Management-Methodologies",
  },
  {
    title: "What is Workflow Automation in Project Management & Why Is It Important?",
    description:
      "Key takeaways: Workflow automation improves productivity in project teams with the help of software...",
    author: "Kara Shear",
    date: "January 4, 2025",
    image: "/images/pm-2.jpeg",
    link: "/blog/project-management/Project-Management-Methodologies",
  },
  {
    title: "Wrike vs. Asana Review: The Complete Guide",
    description:
      "Wrike and Asana are two popular project management software options. While they share some overlap, each...",
    author: "Kara Shear",
    date: "December 18, 2024",
    image: "/images/pm-3.jpg",
    link: "/blog/project-management/Project-Management-Methodologies",
  },
 
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
      <span className="text-gray-700 font-semibold">Project Management</span>
    </div>

    {/* Heading */}
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Project Management</h1>

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