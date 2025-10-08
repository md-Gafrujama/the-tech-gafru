import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Mock CRMForm component (replace with your actual import)
const CRMForm = ({ isOpen, onClose, category }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-900">Get Free Quotes</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-gray-600 mb-4">Category: {category}</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
          <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Requirements" className="w-full p-3 border rounded-lg h-24"></textarea>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

const SoftwareCategoriesSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleQuoteClick = (category) => {
    setSelectedCategory(category);
    setIsFormOpen(true);
  };

  const categories = [
    {
      title: "Human Resources Software",
      description: "Comprehensive HR solutions for employee management, payroll, recruitment, and performance tracking.",
      image: "/images/HR.png",
      tools: ['BambooHR', 'Workday', 'ADP'],
      link: "/Software-evaluation/HR-software",
      colors: {
        gradient: "from-blue-500 to-purple-600",
        border: "border-blue-500",
        hover: "hover:bg-blue-50",
        text: "text-blue-600",
        shadow: "group-hover:shadow-blue-200/50"
      }
    },
    {
      title: "Payroll Software",
      description: "Automated payroll processing, tax calculations, compliance management, and employee payment solutions.",
      image: "/images/payroll.png",
      tools: ['QuickBooks', 'Gusto', 'Paychex'],
      link: "/Software-evaluation/Payroll-software",
      colors: {
        gradient: "from-[#00d9a6] to-green-500",
        border: "border-[#00d9a6]",
        hover: "hover:bg-green-50",
        text: "text-[#00d9a6]",
        shadow: "group-hover:shadow-green-200/50"
      }
    },
    {
      title: "CRM Software",
      description: "Customer relationship management tools for sales, marketing automation, and customer service excellence.",
      image: "/images/crm.png",
      tools: ['Salesforce', 'HubSpot', 'Pipedrive'],
      link: "/Software-evaluation/CRM-software",
      colors: {
        gradient: "from-orange-500 to-red-500",
        border: "border-orange-500",
        hover: "hover:bg-orange-50",
        text: "text-orange-600",
        shadow: "group-hover:shadow-orange-200/50"
      }
    },
    {
      title: "Sales Software",
      description: "Sales automation, lead generation, pipeline management, and performance analytics for revenue growth.",
      image: "/images/sales.png",
      tools: ['Outreach', 'SalesLoft', 'ZoomInfo'],
      link: "/Software-evaluation/Sales-software",
      colors: {
        gradient: "from-purple-500 to-pink-500",
        border: "border-purple-500",
        hover: "hover:bg-purple-50",
        text: "text-purple-600",
        shadow: "group-hover:shadow-purple-200/50"
      }
    },
    {
      title: "Project Management Software",
      description: "Task management, team collaboration, resource planning, and project tracking solutions.",
      image: "/images/project.png",
      tools: ['Asana', 'Monday.com', 'Trello'],
      link: "/Software-evaluation/Accounting-management-software",
      colors: {
        gradient: "from-indigo-500 to-cyan-500",
        border: "border-indigo-500",
        hover: "hover:bg-indigo-50",
        text: "text-indigo-600",
        shadow: "group-hover:shadow-indigo-200/50"
      }
    },
    {
      title: "Business Intelligence Software",
      description: "Data analytics, reporting dashboards, business insights, and intelligence tools for data-driven decisions.",
      image: "/images/business.png",
      tools: ['Tableau', 'Power BI', 'Looker'],
      link: "/Software-evaluation/VoIP-&-Business-Phone-systems",
      colors: {
        gradient: "from-amber-500 to-yellow-500",
        border: "border-amber-500",
        hover: "hover:bg-amber-50",
        text: "text-amber-600",
        shadow: "group-hover:shadow-amber-200/50"
      }
    }
  ];

  return (
    <>
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

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group relative h-full"
              >
                <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl ${category.colors.shadow} overflow-hidden h-full flex flex-col`}>
                  <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${category.colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '2px' }}>
                    <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
                      <div className="aspect-[16/9] w-full">
                        <img 
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight mb-3">
                        {category.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed flex-1 mb-4">
                        {category.description}
                      </p>
                      
                      <div className="mt-auto space-y-3 sm:space-y-4">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {category.tools.map((tool) => (
                            <span key={tool} className={`px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-md sm:rounded-lg text-xs sm:text-sm text-gray-700 border border-gray-200/50 group-hover:${category.colors.border}/30 transition-all duration-300 whitespace-nowrap`}>
                              {tool}
                            </span>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-1 gap-2 sm:gap-3">
                          <a href={category.link} className="block w-full">
                            <div className={`bg-gradient-to-r ${category.colors.gradient} rounded-lg sm:rounded-xl p-3 sm:p-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl min-h-[44px] sm:min-h-[52px] flex items-center justify-center w-full cursor-pointer`}>
                              <div className="flex items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-base w-full">
                                <span className="truncate mr-2">Explore Solutions</span>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </div>
                            </div>
                          </a>
                          
                          <button 
                            onClick={() => handleQuoteClick(category.title)}
                            className={`bg-white border-2 ${category.colors.border} rounded-lg sm:rounded-xl p-3 sm:p-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[44px] sm:min-h-[52px] flex items-center justify-center w-full cursor-pointer ${category.colors.hover}`}
                          >
                            <div className={`flex items-center justify-center ${category.colors.text} font-semibold text-xs sm:text-sm lg:text-base w-full`}>
                              <span className="truncate mr-2">Get Free Quotes</span>
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Form Modal */}
      <CRMForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        category={selectedCategory}
      />
    </>
  );
};

export default SoftwareCategoriesSection;