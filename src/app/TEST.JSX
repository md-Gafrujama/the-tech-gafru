 {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                <div className="text-sm font-semibold text-blue-600 mb-3">{category.count}</div>
                <div className="flex flex-wrap gap-2">
                  {category.popular.map((tool) => (
                    <span key={tool} className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* How We Analyze Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-0 right-0" />
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-0 left-0" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Analyze Technology
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our rigorous process ensures you get the most accurate recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 transition-all">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white mb-6">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-bold text-green-400 mb-2">{index + 1}</div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


 {/* Marketers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48" />
              <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48" />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Marketers: Reach a Highly Engaged Audience
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  100 million business technology and software buyers worldwide trust us to reduce
                  complexity and risk in the purchase process. Meet your buyers on their terms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                    Explore Solutions
                  </button>
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                    Chat with Sales
                  </button>
                </div>
              </div>

              {/* Partner Logos */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                  >
                    <span className="text-white font-semibold" style={{ color: logo.color }}>
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>