'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Optimized form submission handler
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-br from-[#0E1F1C] via-[#0E1F1C] to-[#1a2f2b] rounded-3xl sm:rounded-[2.5rem] w-full max-w-7xl mx-auto overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffd800] rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ffd800] rounded-full blur-[100px] opacity-10"></div>
        
        <div className="relative grid md:grid-cols-2 items-center gap-8 lg:gap-12 py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-block px-4 py-2 bg-[#ffd800] bg-opacity-10 rounded-full mb-4">
              <span className="text-[#ffd800] text-sm font-semibold tracking-wide">NEWSLETTER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold leading-tight text-white">
              Join Tech Insider readers for weekly tech news and resources.
            </h2>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <input type="hidden" name="access_key" value="2c1b7668-e873-404a-9759-f85af53e550b" />
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.input
                type="email"
                name="email"
                required
                placeholder="Enter your work email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white text-lg placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#ffd800]/50 focus:border-[#ffd800]/30 transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
              
              <motion.button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-[#ffd800] text-black font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 hover:bg-[#ffed4a] transform hover:scale-105 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </motion.button>
            </div>

            {submitted && (
              <motion.div
                className="flex items-center gap-3 p-4 bg-[#ffd800]/10 border border-[#ffd800]/30 rounded-xl backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="w-6 h-6 bg-[#ffd800] rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#ffd800] font-medium">Thanks! Check your email for confirmation.</span>
              </motion.div>
            )}

            <p className="text-white/60 text-sm">
              By subscribing, you agree to our{' '}
              <Link href="https://the-tech-gafru.vercel.app/Privacy-policy" className="text-[#ffd800] hover:underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="https://www.martechbiz.com/Terms-of-use" className="text-[#ffd800] hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
