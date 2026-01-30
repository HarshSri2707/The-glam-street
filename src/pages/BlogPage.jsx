import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { SEOHead } from '../utils/seo.jsx';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Glam Up Girl',
    'Ingredient IQ',
    'The Glam Corner',
    'The GlamStreet Spotlight'
  ];

  const articles = [
    {
      category: 'Glam Up Girl',
      title: "The Perfect Red Lip: Finding Your Shade and Making it Last All Day",
      excerpt: "Master the art of red lips with our step-by-step guide tailored for Indian skin tones. From finding your perfect shade to application techniques that last.",
      readTime: "5 min read",
      date: "Jan 28, 2026",
      image: "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800&h=500&fit=crop&q=80",
      href: "/blog/perfect-red-lip",
      featured: true
    },
    {
      category: 'Ingredient IQ',
      title: "Vitamin C vs. Niacinamide: Which is Right for You?",
      excerpt: "Decode the ingredient labels and find what truly works for your skin. A complete comparison of these powerful actives for Indian skin.",
      readTime: "7 min read",
      date: "Jan 27, 2026",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=500&fit=crop&q=80",
      href: "/blog/vitamin-c-niacinamide",
      featured: true
    },
    {
      category: 'The Glam Corner',
      title: "5-Minute Self-Care Ritual to Transform Your Day",
      excerpt: "Small moments of care that build confidence from within. Discover how a quick morning routine can change your entire mood and skin health.",
      readTime: "4 min read",
      date: "Jan 26, 2026",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&h=500&fit=crop&q=80",
      href: "/blog/5-minute-ritual",
      featured: true
    },
    {
      category: 'Glam Up Girl',
      title: "Beginners Guide to 7 AM to 7 PM Skincare Routine",
      excerpt: "A comprehensive guide for busy women who want glowing skin from morning to night. Simple, effective, and tailored for Indian climate.",
      readTime: "8 min read",
      date: "Jan 25, 2026",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=500&fit=crop&q=80",
      href: "/blog/7am-7pm-routine"
    },
    {
      category: 'Ingredient IQ',
      title: "The Power of Turmeric (Haldi): An Ancient Secret for Modern Skin",
      excerpt: "Discover why this golden spice is your skin's best friend. Traditional wisdom meets modern science in this deep-dive into turmeric benefits.",
      readTime: "6 min read",
      date: "Jan 24, 2026",
      image: "https://images.unsplash.com/photo-1615485500834-bc10199bc743?w=800&h=500&fit=crop&q=80",
      href: "/blog/turmeric-benefits"
    },
    {
      category: 'Glam Up Girl',
      title: "Bridal Glow Prep: A 4-Week Skincare Checklist",
      excerpt: "Your complete countdown to wedding-ready skin. Expert tips and product recommendations for that natural bridal radiance.",
      readTime: "10 min read",
      date: "Jan 23, 2026",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop&q=80",
      href: "/blog/bridal-glow-prep"
    },
    {
      category: 'The GlamStreet Spotlight',
      title: "The Glam Street Tribe: 3 Real Women Share Their Best Product Finds",
      excerpt: "Honest reviews from real customers. Discover which products changed their skincare game and why they can't stop recommending them.",
      readTime: "6 min read",
      date: "Jan 22, 2026",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=500&fit=crop&q=80",
      href: "/blog/customer-finds"
    },
    {
      category: 'Ingredient IQ',
      title: "Hyaluronic Acid vs. Glycerine: Which is Best for Indian Climate?",
      excerpt: "Not all hydrators are created equal. Learn which ingredient works best for our humidity, heat, and unique skin needs.",
      readTime: "5 min read",
      date: "Jan 21, 2026",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=500&fit=crop&q=80",
      href: "/blog/hydrators-comparison"
    },
    {
      category: 'The Glam Corner',
      title: "Mental Health and Skin Health: How Stress Affects Breakouts",
      excerpt: "Understanding the skin-mind connection. Why your stress shows up on your face and how to break the cycle.",
      readTime: "7 min read",
      date: "Jan 20, 2026",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop&q=80",
      href: "/blog/stress-breakouts"
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <>
      <SEOHead
        title="The GlamStreet Guide - Beauty Blog | Tips, Tutorials & Ingredient Deep-Dives"
        description="Explore beauty wisdom, rituals, and ingredient insights. From makeup tutorials to skincare science, discover everything you need for your glam journey."
        keywords="beauty blog, skincare tips, makeup tutorials, ingredient guide, beauty rituals, Indian beauty, glam street blog"
      />

      <div className="min-h-screen bg-glam-cream">
        {/* Hero Section */}
        <BlogHero />

        {/* Featured Articles */}
        <FeaturedSection articles={featuredArticles} />

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* All Articles Grid */}
        <ArticlesGrid articles={filteredArticles} />

        {/* Newsletter CTA */}
        <NewsletterCTA />
      </div>
    </>
  );
};

// Blog Hero
const BlogHero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-br from-glam-burgundy to-glam-charcoal overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-glam-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-glam-rose rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-glam-gold/20 backdrop-blur-sm text-glam-gold text-sm font-sans tracking-widest uppercase mb-6">
            The Blog
          </span>
          
          <h1 className="font-lora text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The GlamStreet <span className="text-glam-gold">Guide</span>
          </h1>
          
          <p className="text-xl text-white/90 font-sans leading-relaxed max-w-3xl mx-auto">
            Beauty wisdom, rituals & ingredient deep-dives. Your go-to resource for everything glam.
          </p>

          {/* Blog Categories Preview */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {['Tutorials', 'Ingredients', 'Lifestyle', 'Reviews'].map((tag, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Featured Section
const FeaturedSection = ({ articles }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-glam-gold/20 text-glam-burgundy text-sm font-sans tracking-widest uppercase mb-4">
            Featured
          </span>
          <h2 className="font-lora text-4xl lg:text-5xl font-bold text-glam-charcoal">
            Must-Read Articles
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <FeaturedArticleCard key={index} article={article} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Article Card
const FeaturedArticleCard = ({ article, index, isInView }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group"
    >
      <a href={article.href} className="block space-y-4">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-glam-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-4 py-1.5 bg-white text-glam-burgundy text-xs font-sans tracking-wide">
              {article.category}
            </span>
          </div>

          {/* Featured Badge */}
          <div className="absolute top-4 right-4">
            <span className="w-10 h-10 bg-glam-gold rounded-full flex items-center justify-center text-white">
              ⭐
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <h3 className="font-lora text-2xl font-bold text-glam-charcoal group-hover:text-glam-burgundy transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-2 text-glam-gold font-medium text-sm pt-2">
            <span className="group-hover:underline">Read More</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </a>
    </motion.article>
  );
};

// Category Filter
const CategoryFilter = ({ categories, selected, onSelect }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-12 bg-glam-cream border-y border-glam-gold/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              onClick={() => onSelect(category)}
              className={`px-6 py-3 font-sans font-medium tracking-wide transition-all duration-300 ${
                selected === category
                  ? 'bg-glam-burgundy text-white shadow-lg'
                  : 'bg-white text-glam-charcoal hover:bg-glam-gold hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Articles Grid
const ArticlesGrid = ({ articles }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} index={index} isInView={isInView} />
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

// Article Card
const ArticleCard = ({ article, index, isInView }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 6) * 0.1, duration: 0.6 }}
      className="group"
    >
      <a href={article.href} className="block space-y-4">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white text-glam-burgundy text-xs font-sans tracking-wide">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readTime}
            </span>
          </div>

          <h3 className="font-lora text-xl font-bold text-glam-charcoal group-hover:text-glam-burgundy transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>

          <div className="text-glam-gold font-medium text-sm group-hover:underline">
            Read More →
          </div>
        </div>
      </a>
    </motion.article>
  );
};

// Newsletter CTA
const NewsletterCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gradient-to-br from-glam-burgundy to-glam-charcoal">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="text-6xl">💌</div>
          
          <h2 className="font-lora text-4xl lg:text-5xl font-bold text-white">
            Never Miss a Glow Tip
          </h2>

          <p className="text-xl text-white/90">
            Get the latest beauty insights, product launches, and exclusive tips delivered to your inbox every week.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 text-glam-charcoal focus:outline-none focus:ring-2 focus:ring-glam-gold"
            />
            <button className="px-8 py-4 bg-glam-gold text-glam-charcoal font-sans font-bold tracking-wide hover:bg-white transition-colors duration-300 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>

          <p className="text-sm text-white/60">
            Join 10,000+ subscribers. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPage;