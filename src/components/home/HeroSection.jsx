import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0A1612] via-[#0E1F1C] to-[#122820] text-white min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.05]"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,217,166,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,217,166,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      {/* Floating Background Orbs */}
      <motion.div
        className="absolute top-20 right-16 w-72 h-72 bg-gradient-to-br from-[#00d9a6]/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-20 w-96 h-96 bg-gradient-to-tr from-[#8BC34A]/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE - Content */}
          <motion.div
            className="space-y-10 text-center lg:text-left"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <h1 className="text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
                <motion.span 
                  className="block text-white mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Smart comparisons.
                </motion.span>
                <motion.span 
                  className="block relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-[#00d9a6] via-[#4FD1C7] to-[#8BC34A] bg-clip-text text-transparent font-extrabold">
                    Confident decisions.
                  </span>
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed font-light max-w-2xl">
                With <span className="text-white font-semibold">Martechbiz</span>, complex purchases become simple. Get clear, comparable price quotes from trusted vendors and make technology decisions faster, easier, and with absolute confidence.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              {[
                { icon: CheckCircle, text: 'Compare quotes from 50+ vendors instantly' },
                { icon: TrendingUp, text: 'Save up to 40% on software licenses' },
                { icon: Zap, text: 'Get recommendations in minutes, not weeks' },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + idx * 0.15, duration: 0.6 }}
                  whileHover={{ x: 8 }}
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#00d9a6]" />
                  </div>
                  <span className="text-white/90 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Software Categories Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
            >
              {[
                { name: 'Human Resources', color: '#00d9a6' },
                { name: 'Payroll Software', color: '#8BC34A' },
                { name: 'CRM Software', color: '#00d9a6' },
                { name: 'Accounting', color: '#4FD1C7' },
                { name: 'VoIP & Phone', color: '#8BC34A' }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.08, duration: 0.6 }}
                  onMouseEnter={() => setHoveredCategory(index)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  whileHover={{ scale: 1.08, y: -6 }}
                >
                  <div className="p-4 bg-white/[0.06] backdrop-blur-xl border border-white/15 rounded-xl transition-all duration-500 group-hover:bg-white/[0.12] group-hover:border-white/25 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at center, ${category.color}15, transparent 70%)` }}
                    />
                    <div className="relative z-10">
                      <div 
                        className="w-2 h-2 rounded-full mb-2"
                        style={{ backgroundColor: category.color }}
                      />
                      <p className="text-xs text-white/85 font-semibold leading-tight group-hover:text-white transition-colors duration-300">
                        {category.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Email Form */}
            <motion.div
              className="space-y-6 pt-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
                  <motion.div 
                    className="flex-1 relative group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className="w-full px-6 py-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-xl text-white text-base placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#00d9a6]/50 focus:border-[#00d9a6]/30 transition-all duration-500 group-hover:bg-white/[0.12] group-hover:border-white/30 font-medium"
                    />
                  </motion.div>
                  
                  <motion.button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="relative px-8 py-4 bg-gradient-to-r from-[#00d9a6] to-[#8BC34A] text-black text-base font-bold rounded-xl transition-all duration-500 disabled:opacity-50 whitespace-nowrap overflow-hidden group min-w-[160px] flex items-center justify-center gap-2"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 25px 50px rgba(0, 217, 166, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span 
                      className="relative z-10 flex items-center justify-center gap-2"
                      animate={loading ? { x: [0, 3, -3, 0] } : {}}
                      transition={{ duration: 0.5, repeat: loading ? Infinity : 0 }}
                    >
                      {loading ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Subscribe
                          <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.span>
                        </>
                      )}
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.button>
                </div>
              </div>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#00d9a6]/10 to-[#8BC34A]/10 border border-[#00d9a6]/30 rounded-xl backdrop-blur-xl max-w-2xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.8, y: -30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-r from-[#00d9a6] to-[#8BC34A] rounded-full flex items-center justify-center flex-shrink-0"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1 }}
                  >
                    <CheckCircle className="w-4 h-4 text-black" />
                  </motion.div>
                  <div>
                    <div className="text-[#00d9a6] font-semibold">Perfect! You're all set.</div>
                    <div className="text-white/70 text-sm">Check your email for the next steps.</div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Image Section */}
          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Main Premium Image Container */}
            <motion.div
              className="relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden"
              whileHover={{ 
                scale: 1.02,
              }}
            >
              {/* Outer Glow Layer */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-[#00d9a6]/20 via-[#4FD1C7]/15 to-[#8BC34A]/20 rounded-3xl blur-3xl -z-20"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Premium Border Animation */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none z-30"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,217,166,0.4) 0%, rgba(139,195,74,0.2) 100%)',
                  padding: '3px',
                }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  boxShadow: [
                    '0 0 20px rgba(0,217,166,0.2)',
                    '0 0 40px rgba(0,217,166,0.4)',
                    '0 0 20px rgba(0,217,166,0.2)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Main Image with Premium Overlay */}
              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-[#00d9a6]/40 via-[#4FD1C7]/20 to-[#8BC34A]/40"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  style={{
                    backgroundSize: '400% 400%',
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  <img
                    src="/images/solution.jpg"
                    alt="Business Intelligence Dashboard"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Multi-Layer Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1612]/40 via-transparent to-[#0A1612]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1612]/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#00d9a6]/5 via-transparent to-[#8BC34A]/5" />
              </div>

              {/* Floating Holographic Cards */}
              <motion.div
                className="absolute top-6 right-6 z-20"
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <motion.div
                  className="relative backdrop-blur-2xl bg-white/[0.08] border border-white/30 rounded-2xl p-6 shadow-2xl"
                  animate={{
                    borderColor: ['rgba(255,255,255,0.3)', 'rgba(0,217,166,0.5)', 'rgba(255,255,255,0.3)'],
                    boxShadow: [
                      '0 8px 32px rgba(0,217,166,0.1)',
                      '0 8px 32px rgba(0,217,166,0.3)',
                      '0 8px 32px rgba(0,217,166,0.1)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full bg-[#00d9a6]"
                      />
                      <span className="text-white/60 text-xs font-semibold">SUCCESS RATE</span>
                    </div>
                    <motion.div 
                      className="text-4xl font-black bg-gradient-to-r from-[#00d9a6] to-[#4FD1C7] bg-clip-text text-transparent"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                    >
                      98%
                    </motion.div>
                    <div className="w-full h-1 bg-gradient-to-r from-[#00d9a6] to-[#4FD1C7] rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-[#4FD1C7] to-[#8BC34A]"
                        initial={{ width: '0%' }}
                        animate={{ width: '98%' }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom Left Metric Card */}
              <motion.div
                className="absolute bottom-6 left-6 z-20"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.7, duration: 0.8 }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                
              </motion.div>

              {/* Bottom Center Premium Stat Card */}
              <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.9, duration: 0.8 }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <motion.div
                  className="relative backdrop-blur-2xl bg-white/[0.08] border border-white/30 rounded-2xl p-6 shadow-2xl"
                  animate={{
                    borderColor: ['rgba(255,255,255,0.3)', 'rgba(79,209,199,0.5)', 'rgba(255,255,255,0.3)'],
                    boxShadow: [
                      '0 8px 32px rgba(79,209,199,0.1)',
                      '0 8px 32px rgba(79,209,199,0.3)',
                      '0 8px 32px rgba(79,209,199,0.1)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                >
               
                </motion.div>
              </motion.div>

              {/* Animated Corner Decorations */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#00d9a6]/20 rounded-full z-10"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#8BC34A]/20 to-transparent rounded-3xl backdrop-blur-sm z-10"
                animate={{ 
                  rotate: [0, -180, -360],
                  scale: [1, 1.15, 1],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              {/* Top Right Corner Accent */}
              <motion.div
                className="absolute -top-3 -right-3 w-16 h-16 border-2 border-[#8BC34A]/30 rounded-2xl z-10"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </motion.div>

            {/* Background Glow Effect */}
            <motion.div
              className="absolute inset-0 -z-10"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(0,217,166,0.15) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Bottom Trust Section */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mt-24 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div 
            className="text-white/60 font-medium text-sm"
            whileHover={{ color: 'rgba(255,255,255,0.8)' }}
          >
            Trusted by industry leaders
          </motion.div>
          <div className="flex items-center gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i} 
                className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg cursor-pointer overflow-hidden group hover:border-[#00d9a6]/50 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.7 + i * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.15,
                  backgroundColor: 'rgba(0,217,166,0.15)',
                  boxShadow: '0 0 20px rgba(0,217,166,0.3)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#00d9a6]/30 to-[#8BC34A]/20 flex items-center justify-center">
                  <motion.div 
                    className="w-6 h-6 bg-white/40 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}