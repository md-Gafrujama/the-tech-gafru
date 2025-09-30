 "use client";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';

const cards = [
  {
    title: "Mailchimp Alternatives: The Best Email Marketing Tools of 2025",
    description:
      "Looking for Mailchimp alternatives? Discover the best-reviewed email marketing tools with detailed features,...",
    author: "Stephen Porritt",
    date: "June 27, 2025",
    image: "/images/it2.png",
    link: "/blog/IT-management/Best-email-marketing-tools",
  },
  {
    title: "5 Best Newsletter Platforms for 2025",
    description:
      "Deciding on the best newsletter platform for growing your audience and engaging subscribers is hugely important. In 2025,...",
    author: "Chris Mellides",
    date: "June 27, 2025",
    image: "/images/it3.png",
    link: "/blog/IT-management/Best-email-marketing-tools",
  },
  {
    title: "Leadpages vs ClickFunnels: Which Is Best for You?",
    description:
      "Trying to decide between Leadpages vs ClickFunnels? Our comparison breaks down features, pricing, and usability to...",
    author: "Stephen Porritt",
    date: "June 26, 2025",
    image: "/images/it4.png",
    link: "/blog/IT-management/Best-email-marketing-tools",
  },
];


export default function InformationTechnologyPage() {
  return (
    <> 
    <Head>
  <title>Top Information Technology Software & Guides 2025 | Technology Advice</title>
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
      <span className="text-gray-700 font-semibold">Information Technology</span>
    </div>

    {/* Heading */}
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Information Technology</h1>

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
