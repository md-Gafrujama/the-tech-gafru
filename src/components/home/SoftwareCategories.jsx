'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SoftwareCategories() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50">
        <div className="absolute inset-0 opacity-30"
             style={{
               backgroundImage: `radial-gradient(circle at 20% 20%, #00d9a6 0%, transparent 40%),
                                radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 40%)`
             }}>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-[#00d9a6]/10 to-blue-500/10 rounded-full mb-4 sm:mb-6 border border-[#00d9a6]/20">
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Business Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 sm:mb-6">
            Software Categories
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover comprehensive business software solutions designed to streamline your operations
          </p>
        </motion.div>

        {/* 6 Cards Grid - All Cards Equal Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          
          {/* Human Resources Software */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="group relative h-full"
          >
            <Link href="/Software-comparison/HR-software" className="block h-full">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                    <div className="aspect-[16/9] w-full">
                      <img 
                        src="/images/HR.png"
                        alt="Human Resources Management"
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                  </div>

                  {/* Content - Fixed Height Distribution */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight mb-3">
                      Human Resources Software
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed flex-1 mb-4">
                      Comprehensive HR solutions for employee management, payroll, recruitment, and performance tracking.
                    </p>
                    
                    {/* Tools and Button - Fixed at Bottom */}
                    <div className="mt-auto space-y-3 sm:space-y-4">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {['BambooHR', 'Workday', 'ADP'].map((tool) => (
                          <span key={tool} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md sm:rounded-lg text-xs sm:text-sm text-gray-700 border border-gray-200/50 group-hover:border-blue-500/30 group-hover:bg-gradient-to-r group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-300 whitespace-nowrap">
                            {tool}
                          </span>
                        ))}
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl p-3 sm:p-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl min-h-[44px] sm:min-h-[52px] flex items-center justify-center w-full">
                        <div className="flex items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-base w-full">
                          <span className="truncate mr-2">Explore HR Solutions</span>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Payroll Software */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="group relative h-full"
          >
            <Link href="/Software-comparison/Payroll-software" className="block h-full">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-green-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#00d9a6] to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                    <div className="aspect-[16/9] w-full">
                      <img 
                        src="/images/payroll.png"
                        alt="Payroll Management System"
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight mb-3">
                      Payroll Software
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed flex-1 mb-4">
                      Automated payroll processing, tax calculations, compliance management, and employee payment solutions.
                    </p>
                    
                    <div className="mt-auto space-y-3 sm:space-y-4">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {['QuickBooks', 'Gusto', 'Paychex'].map((tool) => (
                          <span key={tool} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md sm:rounded-lg text-xs sm:text-sm text-gray-700 border border-gray-200/50 group-hover:border-green-500/30 group-hover:bg-gradient-to-r group-hover:from-green-50/50 group-hover:to-emerald-50/50 transition-all duration-300 whitespace-nowrap">
                            {tool}
                          </span>
                        ))}
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#00d9a6] to-green-500 rounded-lg sm:rounded-xl p-3 sm:p-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl min-h-[44px] sm:min-h-[52px] flex items-center justify-center w-full">
                        <div className="flex items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-base w-full">
                          <span className="truncate mr-2">Explore Payroll Tools</span>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* CRM Software */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="group relative h-full"
          >
            <Link href="/Software-comparison/CRM-software" className="block h-full">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                    <div className="aspect-[16/9] w-full">
                      <img 
                        src="/images/crm.png"
                        alt="Customer Relationship Management"
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight mb-3">
                      CRM Software
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed flex-1 mb-4">
                      Customer relationship management tools for sales, marketing automation, and customer service excellence.
                    </p>
                    
                    <div className="mt-auto space-y-3 sm:space-y-4">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {['Salesforce', 'HubSpot', 'Pipedrive'].map((tool) => (
                          <span key={tool} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md sm:rounded-lg text-xs sm:text-sm text-gray-700 border border-gray-200/50 group-hover:border-orange-500/30 group-hover:bg-gradient-to-r group-hover:from-orange-50/50 group-hover:to-red-50/50 transition-all duration-300 whitespace-nowrap">
                            {tool}
                          </span>
                        ))}
                      </div>
                      
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg sm:rounded-xl p-3 sm:p-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl min-h-[44px] sm:min-h-[52px] flex items-center justify-center w-full">
                        <div className="flex items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-base w-full">
                          <span className="truncate mr-2">Explore CRM Solutions</span>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Project Management Software - Fixed Size */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="group relative h-full"
          >
            <Link href="/Software-comparison/Accounting-management-software" className="block h-full">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-indigo-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                    <div className="aspect-[16/9] w-full">
                      <img 
                        src="/images/project.png"
                        alt="Project Management Dashboard"
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight mb-3">
                      Accounting Management Software
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed flex-1 mb-4">
                      Task management, team collaboration, resource planning, and project tracking solutions.
                    </p>
                    
                    <div className="mt-auto space-y-3 sm:space-y-4">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {['Asana', 'Monday.com', 'Trello'].map((tool) => (
                          <span key={tool} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md sm:rounded-lg text-xs sm:text-sm text-gray-700 border border-gray-200/50 group-hover:border-indigo-500/30 group-hover:bg-gradient-to-r group-hover:from-indigo-50/50 group-hover:to-cyan-50/50 transition-all duration-300 whitespace-nowrap">
                            {tool}
                          </span>
                        ))}
                      </div>
                      
                      <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg sm:rounded-xl p-3 sm:p-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl min-h-[44px] sm:min-h-[52px] flex items-center justify-center w-full">
                        <div className="flex items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-base w-full">
                          <span className="truncate mr-2">Explore PM Tools</span>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Business Intelligence Software */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="group relative h-full"
          >
            <Link href="/Software-comparison/VoIP-&-Business-Phone-systems" className="block h-full">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-200/50 overflow-hidden h-full flex flex-col cursor-pointer">
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                    <div className="aspect-[16/9] w-full">
                      <img 
                        src="/images/business.png"
                        alt="Business Intelligence Analytics"
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight mb-3">
                      VoIP & Business Phone systems
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed flex-1 mb-4">
                      Data analytics, reporting dashboards, business insights, and intelligence tools for data-driven decisions.
                    </p>
                    
                    <div className="mt-auto space-y-3 sm:space-y-4">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {['Tableau', 'Power BI', 'Looker'].map((tool) => (
                          <span key={tool} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md sm:rounded-lg text-xs sm:text-sm text-gray-700 border border-gray-200/50 group-hover:border-amber-500/30 group-hover:bg-gradient-to-r group-hover:from-amber-50/50 group-hover:to-yellow-50/50 transition-all duration-300 whitespace-nowrap">
                            {tool}
                          </span>
                        ))}
                      </div>
                      
                      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg sm:rounded-xl p-3 sm:p-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl min-h-[44px] sm:min-h-[52px] flex items-center justify-center w-full">
                        <div className="flex items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-base w-full">
                          <span className="truncate mr-2">Explore BI Solutions</span>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
