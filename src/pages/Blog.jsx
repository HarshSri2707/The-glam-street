import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { blogs, blogCategories, getFeaturedBlogs, getBlogsByCategory } from '../data/Blogs';

/**
 * Blog Listing Page - Editorial Magazine Style
 * Similar to uploaded design with mobile scroll + desktop grid
 */
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredBlogs = getFeaturedBlogs();
  const displayBlogs = selectedCategory === 'all' 
    ? blogs 
    : getBlogsByCategory(selectedCategory);

  return (
    <div id="blog" className="min-h-screen bg-white pt-16 lg:pt-20">
      {/* Compact Hero */}
     <div className="relative bg-black text-white py-20 md:py-28 px-6 text-center overflow-hidden min-h-[60vh] flex items-center justify-center">
  {/* Background Images with Overlay */}
  <div className="absolute inset-0 z-0">
    {/* Main Hero Image - Glowing Indian woman (clean, no watermark) */}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ 
        backgroundImage: `url('https://www.kaya.in/media/mageplaza/blog/post/uploads/2019/11/Discover-beauty-secrets-you-didnt-know-existed.jpg')`
      }}
    />
    
    {/* Subtle second layer for depth - Soft skincare glow */}
    
    
    {/* Dark overlay for perfect text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/70 to-black/85" />
  </div>

  {/* Content - higher z-index */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <motion.span 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-pink-400 font-bold tracking-[0.35em] text-xs md:text-sm uppercase mb-4 block"
    >
      Beauty Secrets
    </motion.span>
    
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic mb-5 md:mb-8 leading-tight drop-shadow-lg"
    >
      The <span className="text-pink-500 font-light">Glow Edit</span>
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="text-white/90 max-w-xl md:max-w-2xl mx-auto font-light text-base md:text-lg lg:text-xl drop-shadow-md"
    >
      Expert tips, rituals, and the science behind your natural radiance.
    </motion.p>
  </div>
</div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        
        {/* Category Filter */}
        <div className="mb-12 md:mb-16">
          <div className="flex overflow-x-auto gap-3 pb-4 hide-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-200'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Stories
            </button>
            {Object.entries(blogCategories).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all ${
                  selectedCategory === key
                    ? 'bg-pink-500 text-white shadow-lg shadow-pink-200'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Section (First 3 blogs) */}
        {selectedCategory === 'all' && (
          <div className="mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="mb-8"
            >
              <h2 className="font-display text-3xl md:text-4xl text-slate-900 italic mb-2">
                Featured <span className="text-pink-500">Stories</span>
              </h2>
              <p className="text-slate-500 text-sm font-light">
                Our editor's top picks this week
              </p>
            </motion.div>

            {/* Mobile: Horizontal Scroll | Desktop: Grid */}
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-10 md:grid md:grid-cols-3 md:gap-10 md:overflow-visible">
              {featuredBlogs.slice(0, 3).map((article, index) => (
                <div key={article.id} className="flex-shrink-0 w-[85vw] md:w-full snap-center">
                  <BlogCard article={article} index={index} isInView={isInView} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Blogs Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-8"
          >
            <h2 className="font-display text-3xl md:text-4xl text-slate-900 italic mb-2">
              {selectedCategory === 'all' ? 'All Stories' : blogCategories[selectedCategory]?.title}
            </h2>
            <p className="text-slate-500 text-sm font-light">
              {displayBlogs.length} articles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {displayBlogs.map((article, index) => (
              <BlogCard 
                key={article.id} 
                article={article} 
                index={index} 
                isInView={isInView} 
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

// Blog Card Component (Same as uploaded design)
const BlogCard = ({ article, index, isInView }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group cursor-pointer"
    >
      <a href={`blog/${article.slug}`} className="block">
        {/* Magazine Style Image Frame */}
        <div className="relative aspect-[16/10] md:aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-50 mb-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-[9px] font-bold uppercase tracking-widest rounded-full shadow-sm">
              {blogCategories[article.category]?.title || article.category}
            </span>
          </div>

          {/* Featured Badge */}
          {article.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-pink-500 text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="px-2 space-y-3">
          <div className="flex items-center gap-3 text-[10px] text-pink-500 font-bold uppercase tracking-widest">
            <span>{article.readTime}</span>
            <span className="w-1 h-1 bg-slate-200 rounded-full" />
            <span className="text-slate-400 font-medium lowercase italic">
              by {article.author}
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl text-slate-800 leading-snug group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>
          
          <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-2 opacity-80">
            {article.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {article.tags.slice(0, 2).map((tag, i) => (
              <span 
                key={i}
                className="text-[9px] px-2 py-1 bg-slate-50 text-slate-600 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 group-hover:text-pink-500 transition-colors border-b border-transparent group-hover:border-pink-500 pb-1">
              Read Story
            </span>
          </div>
        </div>
      </a>
    </motion.article>
  );
};

export default Blog;