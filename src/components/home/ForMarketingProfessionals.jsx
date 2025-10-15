'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { logos } from '../../data/constants';

export default function ForMarketingProfessionals() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0E1F1C] via-[#1a2e2a] to-[#0E1F1C] rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute w-96 h-96 bg-[#00d9a6]/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
            <div className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute w-64 h-64 bg-[#00d9a6]/15 rounded-full blur-2xl top-1/2 right-1/4 animate-bounce" />
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d9a6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <motion.div 
              className="max-w-4xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Enhanced Header with Badge */}
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-[#00d9a6]/20 border border-[#00d9a6]/30 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="w-2 h-2 bg-[#00d9a6] rounded-full mr-2 animate-pulse" />
                <span className="text-[#00d9a6] text-sm font-medium">For Marketing Professionals</span>
              </motion.div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Marketers: Reach a 
                <span className="bg-gradient-to-r from-[#00d9a6] to-emerald-400 bg-clip-text text-transparent"> Highly Engaged</span> Audience
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
                100 million business technology and software buyers worldwide trust us to reduce
                complexity and risk in the purchase process. Meet your buyers on their terms.
              </p>

              {/* Enhanced Stats Section */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#00d9a6]/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">95%</div>
                  <div className="text-gray-300 text-sm">Trust & Reliability</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#00d9a6]/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Expert Support</div>
                </div>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button 
                  className="group px-8 py-4 bg-[#00d9a6] text-white rounded-full font-semibold hover:bg-[#00c396] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#00d9a6]/25 transform hover:scale-105 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/About-Us/Contact-us'}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Explore Solutions
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d9a6] to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </div>
            </motion.div>

            {/* Enhanced Partner Logos Section */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="mb-6">
                <h3 className="text-white/80 text-sm font-medium mb-4 tracking-wider uppercase">Trusted by Industry Leaders</h3>
              </div>
              
              <div className="flex justify-start items-center gap-10 flex-nowrap overflow-x-auto pb-10 z-10 relative hide-scrollbar">
                {logos.map((src, index) => (
                  <motion.div 
                    key={index} 
                    className="w-40 h-26 relative flex-shrink-0 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00d9a6]/20 to-emerald-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    <Image
                      src={src}
                      alt={`Partner ${index + 1}`}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
                      sizes="160px"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Contact Button for Mobile */}
            <motion.div 
              className="fixed bottom-6 right-6 z-50 md:hidden"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <button 
                className="bg-[#00d9a6] text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:shadow-[#00d9a6]/30"
                onClick={() => window.location.href = '/contact-us'}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
