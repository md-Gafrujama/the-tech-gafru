'use client';

import { motion } from 'framer-motion';
import { Activity, Target, UserCheck } from 'lucide-react';
import { steps } from '../../data/constants';

export default function HowWeAnalyzeTechnology() {
  const iconComponents = {
    Activity: Activity,
    Target: Target,
    UserCheck: UserCheck,
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0E1F1C] via-[#1a2e2a] to-[#0E1F1C] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-[#00d9a6]/15 rounded-full blur-3xl top-0 right-0 animate-pulse" />
        <div className="absolute w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute w-64 h-64 bg-[#00d9a6]/10 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d9a6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            <span className="text-[#00d9a6] text-sm font-medium">Our Analysis Process</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            How We Analyze 
            <span className="bg-gradient-to-r from-[#00d9a6] to-emerald-400 bg-clip-text text-transparent"> Technology</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our rigorous process ensures you get the most accurate recommendations through comprehensive evaluation and expert analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = iconComponents[step.icon];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 hover:border-[#00d9a6]/30 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Enhanced Icon Container */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00d9a6] to-emerald-500 flex items-center justify-center text-white mb-6 group-hover:shadow-lg group-hover:shadow-[#00d9a6]/25 transition-all duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  {/* Step Number with Enhanced Styling */}
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#00d9a6] to-emerald-400 bg-clip-text text-transparent mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00d9a6] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Enhanced Progress Indicator */}
                  <div className="mt-6 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#00d9a6] to-emerald-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                    />
                  </div>
                </div>

                {/* Enhanced Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#00d9a6] to-transparent opacity-60">
                    <motion.div
                      className="absolute top-0 right-0 w-2 h-2 bg-[#00d9a6] rounded-full transform translate-x-1 -translate-y-0.5"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  </div>
                )}

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d9a6]/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#00d9a6]" />
            <span className="text-sm font-medium">Trusted by industry experts</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#00d9a6]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
