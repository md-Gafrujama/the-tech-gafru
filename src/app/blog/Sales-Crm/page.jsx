 "use client";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';

const cards = [
  {
    title: "Cheapest Credit Card Processing Providers for 2025",
    description:
      "Discover the cheapest credit card processing services, including Helcim, Stax, and Square. Save on fees with our...",
    author: "Andrea Iannone",
    date: "June 30, 2025",
    image: "/images/sales-1.jpeg",
    link: "/blog/Sales-Crm/Credit-card",
  },
  {
    title: "Top Banking CRM Solutions: Optimize Customer Relationships in 2025",
    description:
      "Explore the best banking CRM solutions to enhance customer relationships and streamline operations. Learn how to...",
    author: "Bianca Caballero",
    date: "June 19, 2025",
    image: "/images/sales-2.png",
    link: "/blog/Sales-Crm/Credit-card",
  },
  {
    title: "  Sales & Marketing Alignment Done Right: Key Tactics",
    description:
      "Unlock solid alignment between sales and marketing departments to maximize performance, improve conversions, and...",
    author: "Bianca Caballero",
    date: "June 11, 2025",
    image: "/images/sales-3.jpg",
    link: "/blog/Sales-Crm/Credit-card",
  },
  // {
  //   title: "How to Use Square to Accept Credit Card Payments",
  //   description:
  //     "Step-by-step ways to accept credit card payments with Square. Includes options for in-person, online, and invoicing...",
  //   author: "Amy Lynn Dean",
  //   date: "June 7, 2025",
  //   image: "/images/sales-4.jpeg",
  //   link: "/blog/Sales-Crm/Credit-card",
  // },
  // {
  //   title: "The Ultimate Guide to Social Selling: Trust-building Strategies & Tools",
  //   description:
  //     "Learn what social selling is and how to build trust, boost engagement, and drive more qualified leads straight into your CRM...",
  //   author: "Bianca Caballero",
  //   date: "June 3, 2025",
  //   image: "/images/sales-5.jpeg",
  //   link: "/blog/sales/social-selling-guide",
  // },
  // {
  //   title: "Stripe Review: What Users Love (& Complain About) in 2025",
  //   description:
  //     "Thinking of using Stripe? In this 2025 Stripe review, we break down the features, who they benefit, and whether it's the...",
  //   author: "Amy Lynn Dean",
  //   date: "May 29, 2025",
  //   image: "/images/sales-6.jpeg",
  //   link: "/blog/sales/stripe-review-2025",
  // },
  // {
  //   title: "Stripe vs Square: Which Payment Platform is Best in 2025?",
  //   description:
  //     "Stripe and Square are two popular payment processing platforms. In each of the key categories compared, we explain the differences...",
  //   author: "Amy Lynn Dean",
  //   date: "May 21, 2025",
  //   image: "/images/sales-7.jpeg",
  //   link: "/blog/sales/stripe-vs-square-2025",
  // },
  // {
  //   title: "How to Use a POS System",
  //   description:
  //     "A point-of-sale (POS) system is essential for managing orders, sales, and customer data. While many types are available, learn what makes a good POS system...",
  //   author: "Amy Lynn Dean",
  //   date: "May 14, 2025",
  //   image: "/images/sales-8.jpeg",
  //   link: "/blog/sales/how-to-use-pos-system",
  // },
  // {
  //   title: "Stripe vs. Paypal: Which is Better in 2025?",
  //   description:
  //     "Stripe vs Paypal: Which is better in 2025? We compare features, integrations, global reach, and pricing availability...",
  //   author: "Amy Lynn Dean",
  //   date: "April 30, 2025",
  //   image: "/images/sales-9.jpeg",
  //   link: "/blog/sales/stripe-vs-paypal-2025",
  // },
];
export default function SalesCrm() {
  return (
    <> 
    <Head>
  <title>Sales-CRM & Guides 2025 | Technology Advice</title>
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
      <span className="text-gray-700 font-semibold">Sales</span>
    </div>

    {/* Heading */}
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Sales</h1>

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