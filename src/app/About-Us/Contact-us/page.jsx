 "use client";
 import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import {
  FaUser,
  FaHeadphones,
  FaBriefcase,
  FaPen,
  FaQuestionCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

 const contactOptions = [
  {
    icon: <FaUser className="text-white" />,
    title: "Client support",
    description: "Send us an email",
    href: "/contact/client-support", // example path
  },
  {
    icon: <FaHeadphones className="text-white" />,
    title: "Contact sales",
    description: "Find B2B solutions",
    href: "/contact/sales",
  },
  {
    icon: <FaBriefcase className="text-white" />,
    title: "Find a career",
    description: "Apply now",
    href: "/careers",
  },
  {
    icon: <FaPen className="text-white" />,
    title: "Editorial team",
    description: "Meet the team",
    href: "/about/editorial-team",
  },
  {
    icon: <FaQuestionCircle className="text-white" />,
    title: "General inquiries",
    description: "Send us an email",
    href: "/contact/general",
  },
];


const locations = [
  {
    name: "Australia",
    email: "APAC.sales@technologyadvice.com",
    image: "/images/australia.jpeg",
  },
  {
    name: "Singapore",
    email: "singapore.sales@technologyadvice.com",
    image: "/images/singapore.jpeg",
  },
  {
    name: "United Kingdom",
    email: "EMEA.sales@technologyadvice.com",
    image: "/images/uk.jpeg",
  },
];

export default function ContactPage() {
  return (
    <>
     <Head>
        <title>Contact Us | YourCompanyName</title>
        <meta
          name="description"
          content="Get in touch with our team for client support, sales, careers, or general inquiries. We're here to help!"
        />
        </Head>
      {/* Top Section */}
 
      <div className="min-h-screen bg-white">
        <div className="bg-[#0E1F1C] text-white py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm mb-2">
              
              <Link href="/" className=" hover:text-green-400">
                🏠 Home
              </Link>{" "}
              &gt; <span className="font-semibold">Contact Us</span>
            </p>
            <h1 className="text-4xl font-bold mb-4">Contact us</h1>
            <p className="max-w-2xl">
              We’re here to help! Our experts are eager to help answer any
              questions you may have. Please contact us below and our team will
              reach out to you soon.
            </p>
          </div>
        </div>

        {/* Help Options */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold mb-8">How can we help?</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
             {contactOptions.map((item, index) => (
  <Link
    key={index}
    href={item.href}
    className="rounded-2xl p-8 transition-all duration-300 border border-transparent hover:border-green-600 hover:bg-[#f8fff5] hover:shadow-lg block"
  >
    <div className="flex items-start gap-5">
      <div className="bg-[#386861] p-3 rounded-md">{item.icon}</div>
      <div>
        <h3 className="font-semibold text-xl text-gray-900 mb-1">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 hover:text-green-700 transition-colors duration-300">
          {item.description}
        </p>
      </div>
    </div>
  </Link>
))}

          </div>
        </div>
        {/* United States Location */}
         <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our offices</h2>
        <p className="text-lg text-gray-700 mb-6">United States locations</p>

        <div className="rounded-2xl overflow-hidden shadow-md relative">
          <Image
            src="/images/Nashville.webp"
            alt="Nashville office"
            width={1200}
            height={600}
            className="w-full h-80 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-start p-6 text-white">
            <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-1">Nashville</h3>
              <p>3343 Perimeter Hill Dr Suite 100</p>
              <p>Nashville, TN 37211</p>
              <p className="mt-2">Phone: 877-702-2082</p>
            </div>
          </div>
        </div>
      </div>
      </div>
 

      {/* Global Locations */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Global locations
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden relative shadow-md"
            >
              <Image
                src={loc.image}
                alt={loc.name}
                width={400}
                height={250}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 p-6 text-white flex flex-col justify-start">
                <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{loc.name}</h3>
                  <p className="text-sm">{loc.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
