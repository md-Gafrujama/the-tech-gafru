'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
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
    <section className="relative bg-gradient-to-b from-[#0A1612] to-[#0E1F1C] text-white min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Grid Pattern with Floating Effect */}
      <motion.div 
        className="absolute inset-0 opacity-[0.04]"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,217,166,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,217,166,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </motion.div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute bottom-32 right-20 w-12 h-12 bg-gradient-to-br from-[#00d9a6]/10 to-transparent rounded-lg backdrop-blur-sm"
        animate={{
          rotate: [0, -360],
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Enhanced Left Content */}
          <motion.div
            className="space-y-10 text-center lg:text-left"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Enhanced Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
                <motion.span 
                  className="block text-white mb-2"
                  initial={{ opacity: 0, rotateX: 90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Smart comparisons. 
                </motion.span>
                <motion.span 
                  className="block relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  <motion.span 
                    className="bg-gradient-to-r from-[#00d9a6] to-[#8BC34A] bg-clip-text text-transparent relative inline-block"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    style={{ backgroundSize: '200% 200%' }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    Confident decisions.
                    {/* Glowing effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#00d9a6] to-[#8BC34A] opacity-20 blur-xl"
                      animate={{ 
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.span>
                </motion.span>
              </h1>
            </motion.div>

            {/* Enhanced Description with Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <motion.p
                className="text-xl lg:text-xl text-white/70 leading-relaxed font-light max-w-3xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
              >
                With <span className="text-white font-medium">Martechbiz</span>, complex purchases become simple. 
                Get <span className="text-white/90">clear, comparable price quotes</span> from trusted vendors 
                and make technology decisions <span className="text-white font-medium">faster, easier, and with confidence</span>.
              </motion.p>
            </motion.div>

            {/* Software Categories Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {[
                { name: 'Human Resources ', color: '#00d9a6' },
                { name: 'Payroll Software', color: '#8BC34A' },
                { name: 'CRM Software', color: '#00d9a6' },
                { name: 'Accounting Management Software', color: '#00d9a6' },
                { name: 'VoIP & Business Phone Systems', color: '#8BC34A' }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="p-4 bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 group-hover:bg-white/[0.08] group-hover:border-white/20 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${category.color}15, transparent)` 
                      }}
                    />
                    <div className="relative z-10">
                      <motion.div 
                        className="w-3 h-3 rounded-full mb-2"
                        style={{ backgroundColor: category.color }}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7] 
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: index * 0.2 
                        }}
                      />
                      <p className="text-sm text-white/80 font-medium leading-tight group-hover:text-white transition-colors duration-300">
                        {category.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Email Form with Advanced Animations */}
            <motion.div
              className="space-y-6 pt-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="access_key" value="2c1b7668-e873-404a-9759-f85af53e550b" />
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto lg:mx-0">
                  <motion.div 
                    className="flex-1 relative group"
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <motion.input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your work email"
                      className="w-full px-6 py-4 bg-white/[0.08] backdrop-blur-sm border border-white/20 rounded-xl text-white text-lg placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#00d9a6]/50 focus:border-[#00d9a6]/30 transition-all duration-500 group-hover:bg-white/[0.12] group-hover:border-white/30"
                      whileFocus={{ 
                        boxShadow: "0 0 0 3px rgba(0, 217, 166, 0.1), 0 10px 30px rgba(0, 217, 166, 0.1)" 
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00d9a6]/10 to-[#8BC34A]/10 opacity-0 group-hover:opacity-100 pointer-events-none"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="relative px-8 py-4 bg-gradient-to-r from-[#00d9a6] to-[#8BC34A] text-black text-lg font-semibold rounded-xl transition-all duration-500 disabled:opacity-50 whitespace-nowrap overflow-hidden group"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0, 217, 166, 0.3)",
                      rotateY: 5,
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      rotateY: -5,
                    }}
                    animate={{
                      boxShadow: loading ? "0 0 20px rgba(0, 217, 166, 0.5)" : "0 10px 20px rgba(0, 217, 166, 0.2)",
                    }}
                  >
                    <motion.span 
                      className="relative z-10"
                      animate={loading ? { x: [0, 5, -5, 0] } : {}}
                      transition={{ duration: 0.5, repeat: loading ? Infinity : 0 }}
                    >
                      {loading ? 'Sending...' : 'Subscribe Now'}
                    </motion.span>
                    
                    {/* Button Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    
                    {/* Loading Spinner */}
                    {loading && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    )}
                  </motion.button>
                </div>
              </form>

              {/* Enhanced Success Message */}
              {submitted && (
                <motion.div
                  className="flex items-center gap-3 p-4 bg-[#00d9a6]/10 border border-[#00d9a6]/30 rounded-xl backdrop-blur-sm max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, scale: 0.9, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 20,
                    delay: 0.1
                  }}
                >
                  <motion.div 
                    className="w-6 h-6 bg-[#00d9a6] rounded-full flex items-center justify-center flex-shrink-0 relative"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 0] 
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.svg 
                      className="w-3 h-3 text-black" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </motion.svg>
                    <motion.div
                      className="absolute inset-0 bg-[#00d9a6] rounded-full"
                      animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  <span className="text-[#00d9a6] font-medium">Thanks! Check your email for the next steps.</span>
                </motion.div>
              )}

              {/* Enhanced Trust Indicators */}
              <motion.div 
                className="flex flex-wrap items-center gap-6 pt-6 justify-center lg:justify-start text-sm text-white/60"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                {[
                  { text: ' Companies Trust Us', delay: 0 },
                  { text: '98% Success Rate', delay: 0.2 },
                  { text: 'Expert-Vetted Solutions', delay: 0.4 }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-2 group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + item.delay, duration: 0.6 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-[#00d9a6] rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: item.delay 
                      }}
                    />
                    <span className="group-hover:text-white/80 transition-colors duration-300">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Advanced Right Visual with 3D Transforms */}
          <motion.div
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000"
            initial={{ opacity: 0, x: 60, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Main Dashboard with 3D Effects */}
            <motion.div
              className="relative w-full max-w-md bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
              animate={{
                rotateY: [0, 5, 0, -5, 0],
                rotateX: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 8, 
                rotateX: -3,
                boxShadow: "0 25px 50px rgba(0, 217, 166, 0.2)",
              }}
              style={{ 
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Animated Header */}
              <motion.div 
                className="flex items-center justify-between mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-br from-[#00d9a6] to-[#8BC34A] rounded-lg"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "linear" 
                    }}
                  />
                  <div>
                    <motion.div 
                      className="w-20 h-3 bg-white/20 rounded"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-16 h-2 bg-white/10 rounded mt-1"
                      animate={{ 
                        width: [64, 72, 64],
                        opacity: [0.3, 0.6, 0.3] 
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </div>
                <motion.div 
                  className="w-6 h-6 bg-white/10 rounded"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { value: '142%', color: '#00d9a6', delay: 0 },
                  { value: '89%', color: '#8BC34A', delay: 0.5 }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="p-4 bg-white/[0.05] rounded-xl relative overflow-hidden group cursor-pointer"
                    animate={{ 
                      scale: [1, 1.02, 1],
                      rotateZ: [0, 1, 0, -1, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: stat.delay,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      boxShadow: `0 10px 20px ${stat.color}20`,
                    }}
                  >
                    <motion.div 
                      className="text-2xl font-bold mb-1"
                      style={{ color: stat.color }}
                      animate={{ 
                        textShadow: [
                          `0 0 5px ${stat.color}40`,
                          `0 0 15px ${stat.color}60`,
                          `0 0 5px ${stat.color}40`
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {stat.value}
                    </motion.div>
                    <motion.div 
                      className="w-12 h-2 bg-white/20 rounded"
                      animate={{ 
                        width: [48, 64, 48],
                        opacity: [0.5, 0.8, 0.5] 
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: stat.delay }}
                    />
                    
                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-xl"
                      style={{ 
                        background: `linear-gradient(135deg, ${stat.color}20, transparent)` 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Advanced Chart Animation */}
              <motion.div 
                className="h-32 bg-white/[0.03] rounded-xl mb-6 p-4 relative overflow-hidden"
                whileHover={{ 
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  boxShadow: '0 10px 30px rgba(0, 217, 166, 0.1)' 
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute bottom-4 left-4 right-4 h-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  {[...Array(7)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bottom-0 rounded-sm"
                      style={{
                        left: `${i * 14}%`,
                        width: '8px',
                        background: `linear-gradient(to top, #00d9a6, #8BC34A)`,
                      }}
                      initial={{ 
                        height: 0,
                        rotateZ: -10,
                        opacity: 0 
                      }}
                      animate={{ 
                        height: `${Math.random() * 60 + 20}px`,
                        rotateZ: 0,
                        opacity: 1 
                      }}
                      transition={{ 
                        delay: 1.8 + i * 0.15, 
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotateZ: 5,
                        boxShadow: '0 5px 15px rgba(0, 217, 166, 0.4)' 
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Enhanced Bottom Actions */}
              <div className="space-y-3">
                <motion.div 
                  className="flex gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                >
                  <motion.div 
                    className="flex-1 h-8 bg-[#00d9a6]/20 rounded-lg"
                    whileHover={{ 
                      backgroundColor: 'rgba(0, 217, 166, 0.3)',
                      scale: 1.02 
                    }}
                    animate={{ 
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ 
                      hover: { duration: 0.2 },
                      opacity: { duration: 2, repeat: Infinity }
                    }}
                  />
                  <motion.div 
                    className="w-8 h-8 bg-white/10 rounded-lg cursor-pointer"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 90,
                      backgroundColor: 'rgba(255,255,255,0.2)' 
                    }}
                    whileTap={{ scale: 0.95 }}
                  />
                </motion.div>
                <motion.div 
                  className="grid grid-cols-3 gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4, duration: 0.6 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-6 bg-white/[0.05] rounded cursor-pointer"
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      transition={{ delay: 2.6 + i * 0.1, duration: 0.5 }}
                      whileHover={{ 
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        scale: 1.05,
                        rotateZ: 2,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Floating Elements with Physics */}
            <motion.div
              className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-[#00d9a6]/20 to-transparent rounded-full backdrop-blur-sm border border-[#00d9a6]/30"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
                borderColor: [
                  'rgba(0,217,166,0.3)', 
                  'rgba(0,217,166,0.6)', 
                  'rgba(0,217,166,0.3)'
                ],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ 
                scale: 1.3, 
                rotate: 720,
                boxShadow: '0 20px 40px rgba(0, 217, 166, 0.3)' 
              }}
            />

            <motion.div
              className="absolute -bottom-12 -left-6 w-12 h-12 bg-gradient-to-br from-[#8BC34A]/20 to-transparent rounded-xl backdrop-blur-sm border border-[#8BC34A]/30"
              animate={{ 
                y: [0, 12, 0],
                rotate: [0, -180, -360],
                scale: [1, 1.2, 1],
                borderRadius: ['12px', '50%', '12px'],
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity, 
                delay: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ 
                scale: 1.4, 
                rotate: -720,
                boxShadow: '0 15px 30px rgba(139, 195, 74, 0.4)' 
              }}
            />

            {/* Orbital Elements */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-br from-[#00d9a6] to-[#8BC34A] rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: `${100 + i * 30}px 0px`,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10 + i * 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Enhanced Bottom Indicators with Stagger Animation */}
        <motion.div 
          className="flex items-center justify-center lg:justify-start gap-8 mt-16 text-sm text-white/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, color: 'rgba(255,255,255,0.8)' }}
          >
            <span>Trusted by leading B2B companies</span>
          </motion.div>
          <div className="hidden sm:flex items-center gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i} 
                className="w-6 h-6 bg-white/10 rounded cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.7 + i * 0.1, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: 'rgba(0,217,166,0.2)',
                  rotate: 10,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
