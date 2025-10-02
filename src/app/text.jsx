{/* Featured Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            Featured Posts
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <Link href={post.href} key={index} className="group">
                <div
                  className={`${post.bg} rounded-2xl overflow-hidden flex flex-col sm:flex-row border border-gray-200 hover:bg-green-50 hover:border-green-400 transition min-h-[320px] sm:min-h-[220px] h-full`}>
                  {/* Image */}
                  <div className="relative w-full sm:w-1/2 h-42 sm:h-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-center sm:w-1/2 h-full">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-900 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>