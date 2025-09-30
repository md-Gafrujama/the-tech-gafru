"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function InterviewingFAQs() {
const faqs = [
    {
      question: "TechnologyAdvice does not engage with external staffing agencies.",
      answer: "Any candidates introduced by such firms will not be eligible for compensation.",
    },
    {
      question: "What does working at TechnologyAdvice look like?",
      answer: `With employees across the globe, we take a remote-first approach. All of our jobs can be performed remotely unless otherwise noted in the job description.

Whether you will work remotely all the time, sometimes, or never, we want to ensure you have the tools you need to be successful. We will ship the technology and equipment that you need to do your job.

We also want to ensure that you are fully integrated into the culture and company, so you will have the opportunity to participate in virtual outings. If there is ever a chance for you to visit our headquarters in Nashville, TN, there will be catered lunch and a desk space waiting for you!

New hires located within 50 miles of an office are requested to work from the office for their first week and for quarterly stakeholder meetings. If you are located in the US, we offer a Hybrid Work Policy allowing our team the choice to work 100% in the office, 100% remote, or a blend of the two unless otherwise noted.`,
    },
    {
      question: "What does TechnologyAdvice do?",
      answer: `We help people in need of new or optimized tech for their business get unbiased advice and data to make sound purchasing decisions.

We also help technology companies connect with an exclusive audience of 100 million buyers to meet prospects on their terms and shorten the sales cycle.`,
    },
    {
      question: "I just submitted my application — what happens next?",
      answer: `After applying, you'll get a confirmation email. We review every application and reach out to qualified candidates within 5–7 days. If qualified, a member of HR will conduct a phone interview.

Stay up to date by subscribing to our newsletter or following us on social media!`,
    },
    {
      question: "What are the steps in your hiring process?",
      answer: `- Phone Interview (20–30 mins)
- Skills Assessment (~2 hours)
- Hiring Manager Interview (60–90 mins)
- Test Drive (3–4 hours)

Some stages may vary depending on the role.`,
    },
    {
      question: "What is a Test Drive?",
      answer: `It's a chance to experience a day in the role, meet the team, and ensure mutual fit — just like test driving a car before you buy it!`,
    },
    {
      question: "How long does your hiring process take?",
      answer: `It varies, but on average it takes 2–3 weeks from application to offer. Let your recruiter know if you're exploring other opportunities so we can adjust accordingly.`,
    },
    {
      question: "What should I wear to my interview?",
      answer: `We're casual day-to-day, but interviews are a great chance to stand out. Business casual is a safe bet. When in doubt — dress to impress!`,
    },
    {
      question: "How do you foster diversity, equity, and inclusion?",
      answer: `We have a DE&I committee, host regular events, training, and listening sessions. It's a continuous, evolving effort to ensure inclusivity across the company.`,
    },
    {
      question: "Can I refer someone to TechnologyAdvice if I'm not an employee?",
      answer: `Yes! We offer up to $1,000 USD for eligible referrals (or $200 in PH roles). To qualify, email careers@technologyadvice.com *before* the person applies, or have them list your name in the referral section.`,
    },
    {
      question: "I was referred to TechnologyAdvice. What should I do?",
      answer: `Just list the person’s name in the “Did someone specifically refer you to apply?” section of your application.`,
    },
    {
      question: "What if I don’t see a role I’m interested in?",
      answer: `Subscribe to our newsletter to stay updated on openings and tips. Or submit a general application — we've hired many great people that way!`,
    },
  ];
return (<>
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
              <a href="#" className="font-semibold hover:text-[#ffd800]">
                Subscribe to our Talent Community →
              </a>
            </div>
<a href="/careers/opportunities" className="inline-block">
  <button className="bg-[#ffd800] text-black px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
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
 <div className="flex flex-wrap gap-8 mt-50 text-[#ffd800] font-semibold text-xl">
  <a href="/About-Us/Careers" className="hover:underline">Culture</a>
  <a href="/About-Us/Careers/opportunities" className="hover:underline">Opportunities</a>
  <a href="#" className="hover:underline">FAQs</a>
</div>

      </div>

      {/* faqs */}
       <section id="faqs" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold  text-[#0d1424] mb-10">
          Interviewing FAQs
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-xl p-5 bg-[#f9fafb] hover:shadow"
            >
              <summary className="cursor-pointer text-lg font-semibold text-[#0d1424]  transition">
                {faq.question}
              </summary>
              <div className="mt-3 text-gray-700 whitespace-pre-line text-[16px] leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
    </div>
    </>
     );
}