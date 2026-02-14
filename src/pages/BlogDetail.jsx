import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Share2, Link as LinkIcon, Facebook, Twitter } from 'lucide-react';
import { getBlogBySlug, getRelatedBlogs, blogCategories } from '../data/Blogs';

const BlogDetail = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const currentBlog = getBlogBySlug(slug);
    setBlog(currentBlog);

    if (currentBlog) {
      setRelatedBlogs(getRelatedBlogs(currentBlog, 3));
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-slate-500">Blog not found (slug: {slug || 'no slug'})</p>
      </div>
    );
  }

  const categoryInfo = blogCategories[blog.category];

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-20">
        {/* Category Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <span
            className={`inline-block px-4 py-2 ${categoryInfo.color} text-slate-900 text-xs font-bold uppercase tracking-widest rounded-full shadow-sm`}
          >
            {categoryInfo.title}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight mb-6"
        >
          {blog.title}
        </motion.h1>

        {/* Excerpt */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-xl text-slate-600 leading-relaxed mb-10 font-light"
        >
          {blog.excerpt}
        </motion.p>

        {/* Meta Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-6 pb-10 mb-10 border-b border-slate-200"
        >
          <div className="flex items-center gap-3">
            <img
              src={blog.authorImage}
              alt={blog.author}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-pink-100"
              loading="lazy"
            />
            <div>
              <p className="font-medium text-slate-900">{blog.author}</p>
              <p className="text-sm text-slate-500">Beauty Expert</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Calendar className="w-4 h-4" />
            <span>
              {new Date(blog.date).toLocaleDateString('en-IN', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Clock className="w-4 h-4" />
            <span>{blog.readTime}</span>
          </div>

          <div className="ml-auto">
            <ShareButton 
              copyLink={copyLink} 
              copied={copied} 
            />
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden mb-12 shadow-xl bg-slate-50"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg sm:prose-xl max-w-none mb-16 blog-content"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: blog.content
                .replace(/\n/g, '<br/>')
                .replace(/### (.*)/g, '<h3>$1</h3>')
                .replace(/## (.*)/g, '<h2>$1</h2>')
                .replace(/# (.*)/g, '<h1>$1</h1>')
            }}
          />
        </motion.div>

        {/* Tags */}
        {blog.tags?.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-16 pb-12 border-b border-slate-200">
            {blog.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-slate-100 text-slate-700 text-sm rounded-full hover:bg-pink-50 hover:text-pink-700 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 mb-16 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <img
              src={blog.authorImage}
              alt={blog.author}
              className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-md flex-shrink-0"
              loading="lazy"
            />
            <div>
              <h3 className="font-display text-2xl text-slate-900 mb-3">
                About {blog.author}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Beauty expert and skincare enthusiast with 5+ years of experience helping Indian women find their perfect beauty routine. Passionate about natural ingredients, clean beauty, and empowering self-care rituals.
              </p>
            </div>
          </div>
        </motion.div>
      </article>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-3xl md:text-4xl text-slate-900 italic mb-10 text-center md:text-left">
              Related <span className="text-pink-500">Stories</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                      <span>{related.readTime}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span>{new Date(related.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-slate-600 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prose Styles */}
      <style jsx>{`
        .blog-content h1, .blog-content h2, .blog-content h3 {
          font-weight: 700;
          margin: 2.5rem 0 1.25rem;
          color: #1e293b;
        }
        .blog-content h1 { font-size: 2.5rem; }
        .blog-content h2 { font-size: 2rem; }
        .blog-content h3 { font-size: 1.5rem; }
        .blog-content p {
          margin-bottom: 1.5rem;
          line-height: 1.85;
        }
        .blog-content ul, .blog-content ol {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }
        .blog-content li {
          margin-bottom: 0.75rem;
        }
        .blog-content strong {
          font-weight: 600;
          color: #1e293b;
        }
        .blog-content em {
          font-style: italic;
          color: #475569;
        }
        .blog-content code {
          background: #f1f5f9;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: ui-monospace, monospace;
        }
        .blog-content hr {
          margin: 3rem 0;
          border: none;
          border-top: 1px solid #e2e8f0;
        }
      `}</style>
    </div>
  );
};

const ShareButton = ({ copyLink, copied }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-pink-50 text-slate-700 hover:text-pink-600 rounded-full transition-all text-sm font-medium shadow-sm"
      >
        <Share2 className="w-4 h-4" />
        Share
      </button>

      {showMenu && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -8 }}
          className="absolute right-0 mt-3 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 w-56 z-50"
        >
          <button
            onClick={() => { copyLink(); setShowMenu(false); }}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-xl transition-colors text-sm text-left"
          >
            <LinkIcon className="w-5 h-5 text-slate-600" />
            {copied ? 'Link Copied!' : 'Copy Link'}
          </button>

          <button
            onClick={() => { 
              window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
              setShowMenu(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-xl transition-colors text-sm text-left"
          >
            <Facebook className="w-5 h-5 text-blue-600" />
            Share on Facebook
          </button>

          <button
            onClick={() => { 
              const text = `${blog.title} - Read now!`;
              window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
              setShowMenu(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 rounded-xl transition-colors text-sm text-left"
          >
            <Twitter className="w-5 h-5 text-sky-500" />
            Share on Twitter
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default BlogDetail;

// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ArrowLeft, Calendar, Clock, Share2, Link as LinkIcon, Facebook, Twitter } from 'lucide-react';
// import { getBlogBySlug, getRelatedBlogs, blogCategories } from '../data/Blogs';

// const BlogDetail = () => {
//   const { slug } = useParams();

//   const [blog, setBlog] = useState(null);
//   const [relatedBlogs, setRelatedBlogs] = useState([]);
//   const [copied, setCopied] = useState(false);

//   useEffect(() => {
//     const currentBlog = getBlogBySlug(slug);
//     setBlog(currentBlog);

//     if (currentBlog) {
//       setRelatedBlogs(getRelatedBlogs(currentBlog, 3));
//     }

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [slug]);

//   const copyLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <p className="text-slate-500">Blog not found (slug: {slug || 'no slug'})</p>
//       </div>
//     );
//   }

//   const categoryInfo = blogCategories[blog.category];

//   return (
//     <div className="min-h-screen bg-white pt-16 lg:pt-20">
//       {/* Hero Section - Matching Blog listing page style */}
//       <div className="bg-black text-white py-16 md:py-20 px-6 text-center">
//         <motion.span 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-pink-400 font-bold tracking-[0.3em] text-[10px] uppercase mb-2 block"
//         >
//           Beauty Secrets
//         </motion.span>
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="font-display text-5xl md:text-7xl italic mb-4"
//         >
//           {blog.title} <span className="text-pink-500 font-light">.</span>
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-white/70 max-w-2xl mx-auto font-light text-sm md:text-base"
//         >
//           {blog.excerpt}
//         </motion.p>
//       </div>

//       {/* Sticky Back Bar */}
//       <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
//         <div className="max-w-4xl mx-auto px-4 py-4">
//           <Link
//             to="/blog"
//             className="inline-flex items-center gap-2 text-slate-700 hover:text-pink-500 transition-colors text-sm font-medium"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Blog
//           </Link>
//         </div>
//       </div>

//       <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
//         {/* Category Badge */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
//           <span
//             className={`inline-block px-4 py-2 ${categoryInfo.color} text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full`}
//           >
//             {categoryInfo.title}
//           </span>
//         </motion.div>

//         {/* Meta + Author + Share */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-slate-200"
//         >
//           <div className="flex items-center gap-3">
//             <img
//               src={blog.authorImage}
//               alt={blog.author}
//               className="w-12 h-12 rounded-full object-cover"
//             />
//             <div>
//               <p className="text-sm font-medium text-slate-900">{blog.author}</p>
//               <p className="text-xs text-slate-500">Beauty Expert</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 text-slate-600">
//             <Calendar className="w-4 h-4" />
//             <span className="text-sm">
//               {new Date(blog.date).toLocaleDateString('en-IN', {
//                 month: 'long',
//                 day: 'numeric',
//                 year: 'numeric',
//               })}
//             </span>
//           </div>

//           <div className="flex items-center gap-2 text-slate-600">
//             <Clock className="w-4 h-4" />
//             <span className="text-sm">{blog.readTime}</span>
//           </div>

//           <div className="ml-auto">
//             <ShareButton copyLink={copyLink} copied={copied} />
//           </div>
//         </motion.div>

//         {/* Featured Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 bg-slate-100"
//         >
//           <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
//         </motion.div>

//         {/* Main Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="prose prose-lg max-w-none mb-12"
//         >
//           <div
//             className="blog-content text-slate-700 leading-relaxed space-y-6"
//             dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br/>') }}
//           />
//         </motion.div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-slate-200">
//           {blog.tags?.map((tag, i) => (
//             <span
//               key={i}
//               className="px-4 py-2 bg-slate-50 text-slate-700 text-sm rounded-full hover:bg-pink-50 hover:text-pink-600 transition-colors cursor-pointer"
//             >
//               #{tag}
//             </span>
//           ))}
//         </div>

//         {/* Author Bio */}
//         <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 mb-12">
//           <div className="flex items-start gap-6">
//             <img
//               src={blog.authorImage}
//               alt={blog.author}
//               className="w-20 h-20 rounded-full object-cover flex-shrink-0"
//             />
//             <div>
//               <h3 className="font-display text-2xl text-slate-900 mb-2">About {blog.author}</h3>
//               <p className="text-slate-600 leading-relaxed mb-4">
//                 Beauty expert and skincare enthusiast with 5+ years of experience helping Indian women find their perfect beauty routine.
//               </p>
//             </div>
//           </div>
//         </div>
//       </article>

//       {/* Related Blogs */}
//       {relatedBlogs.length > 0 && (
//         <section className="bg-slate-50 py-16">
//           <div className="max-w-7xl mx-auto px-4">
//             <h2 className="font-display text-3xl md:text-4xl text-slate-900 italic mb-8">
//               Related <span className="text-pink-500">Stories</span>
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {relatedBlogs.map((related) => (
//                 <Link
//                   key={related.id}
//                   to={`/blog/${related.slug}`}
//                   className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
//                 >
//                   <div className="aspect-[16/10] overflow-hidden">
//                     <img
//                       src={related.image}
//                       alt={related.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <span className="text-[9px] uppercase tracking-widest text-pink-500 font-bold">
//                       {related.readTime}
//                     </span>
//                     <h3 className="font-display text-xl text-slate-900 mt-2 mb-2 line-clamp-2 group-hover:text-pink-600 transition-colors">
//                       {related.title}
//                     </h3>
//                     <p className="text-sm text-slate-600 line-clamp-2">{related.excerpt}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Blog Content Styles */}
//       <style jsx>{`
//         .blog-content h1 { font-size: 2.5rem; font-weight: 700; margin: 2rem 0 1rem; color: #1e293b; }
//         .blog-content h2 { font-size: 2rem; font-weight: 600; margin: 2rem 0 1rem; color: #334155; }
//         .blog-content h3 { font-size: 1.5rem; font-weight: 600; margin: 1.5rem 0 0.75rem; color: #475569; }
//         .blog-content p { margin-bottom: 1.5rem; line-height: 1.8; }
//         .blog-content ul, .blog-content ol { margin: 1.5rem 0; padding-left: 2rem; }
//         .blog-content li { margin-bottom: 0.5rem; }
//         .blog-content strong { font-weight: 600; color: #1e293b; }
//         .blog-content em { font-style: italic; }
//         .blog-content hr { margin: 2rem 0; border: none; border-top: 1px solid #e2e8f0; }
//       `}</style>
//     </div>
//   );
// };

// const ShareButton = ({ copyLink, copied }) => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setShowMenu(!showMenu)}
//         className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-pink-50 text-slate-700 hover:text-pink-600 rounded-full transition-colors text-sm font-medium"
//       >
//         <Share2 className="w-4 h-4" />
//         Share
//       </button>

//       {showMenu && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9, y: -10 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           className="absolute right-0 mt-2 bg-white rounded-2xl shadow-lg border border-slate-200 p-2 w-48 z-50"
//         >
//           <button
//             onClick={copyLink}
//             className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors text-sm"
//           >
//             <LinkIcon className="w-4 h-4" />
//             {copied ? 'Copied!' : 'Copy Link'}
//           </button>

//           <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors text-sm">
//             <Facebook className="w-4 h-4" />
//             Facebook
//           </button>

//           <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors text-sm">
//             <Twitter className="w-4 h-4" />
//             Twitter
//           </button>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default BlogDetail;

// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ArrowLeft, Calendar, Clock, Share2, Link as LinkIcon, Facebook, Twitter } from 'lucide-react';
// import { getBlogBySlug, getRelatedBlogs, blogCategories } from '../data/Blogs';

// const BlogDetail = () => {
//   const { slug } = useParams();

//   const [blog, setBlog] = useState(null);
//   const [relatedBlogs, setRelatedBlogs] = useState([]);
//   const [copied, setCopied] = useState(false);

//   useEffect(() => {
//     const currentBlog = getBlogBySlug(slug);
//     setBlog(currentBlog);

//     if (currentBlog) {
//       setRelatedBlogs(getRelatedBlogs(currentBlog, 3));
//     }

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [slug]);

//   const copyLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <p className="text-slate-500">Blog not found (slug: {slug || 'no slug'})</p>
//       </div>
//     );
//   }

//   const categoryInfo = blogCategories[blog.category];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section - Exactly same style as Blog listing page */}
//       <div className="bg-black text-white py-16 md:py-20 px-6 text-center">
//         <motion.span 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-pink-400 font-bold tracking-[0.3em] text-[10px] uppercase mb-2 block"
//         >
//           Beauty Secrets
//         </motion.span>
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="font-display text-5xl md:text-7xl italic mb-4"
//         >
//           {blog.title} <span className="text-pink-500 font-light">.</span>
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-white/70 max-w-2xl mx-auto font-light text-sm md:text-base"
//         >
//           {blog.excerpt}
//         </motion.p>
//       </div>

//       {/* Sticky Back Navigation Bar */}
//       <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
//         <div className="max-w-4xl mx-auto px-4 py-4">
//           <Link
//             to="/blog"
//             className="inline-flex items-center gap-2 text-slate-700 hover:text-pink-500 transition-colors text-sm font-medium"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to Blog
//           </Link>
//         </div>
//       </div>

//       <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
//         {/* Category Badge */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
//           <span
//             className={`inline-block px-4 py-2 ${categoryInfo.color} text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full`}
//           >
//             {categoryInfo.title}
//           </span>
//         </motion.div>

//         {/* Meta + Author + Share */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-slate-200"
//         >
//           <div className="flex items-center gap-3">
//             <img
//               src={blog.authorImage}
//               alt={blog.author}
//               className="w-12 h-12 rounded-full object-cover"
//             />
//             <div>
//               <p className="text-sm font-medium text-slate-900">{blog.author}</p>
//               <p className="text-xs text-slate-500">Beauty Expert</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 text-slate-600">
//             <Calendar className="w-4 h-4" />
//             <span className="text-sm">
//               {new Date(blog.date).toLocaleDateString('en-IN', {
//                 month: 'long',
//                 day: 'numeric',
//                 year: 'numeric',
//               })}
//             </span>
//           </div>

//           <div className="flex items-center gap-2 text-slate-600">
//             <Clock className="w-4 h-4" />
//             <span className="text-sm">{blog.readTime}</span>
//           </div>

//           <div className="ml-auto">
//             <ShareButton copyLink={copyLink} copied={copied} />
//           </div>
//         </motion.div>

//         {/* Featured Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 bg-slate-100"
//         >
//           <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
//         </motion.div>

//         {/* Main Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="prose prose-lg max-w-none mb-12"
//         >
//           <div
//             className="blog-content text-slate-700 leading-relaxed space-y-6"
//             dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br/>') }}
//           />
//         </motion.div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-slate-200">
//           {blog.tags?.map((tag, i) => (
//             <span
//               key={i}
//               className="px-4 py-2 bg-slate-50 text-slate-700 text-sm rounded-full hover:bg-pink-50 hover:text-pink-600 transition-colors cursor-pointer"
//             >
//               #{tag}
//             </span>
//           ))}
//         </div>

//         {/* Author Bio */}
//         <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 mb-12">
//           <div className="flex items-start gap-6">
//             <img
//               src={blog.authorImage}
//               alt={blog.author}
//               className="w-20 h-20 rounded-full object-cover flex-shrink-0"
//             />
//             <div>
//               <h3 className="font-display text-2xl text-slate-900 mb-2">About {blog.author}</h3>
//               <p className="text-slate-600 leading-relaxed mb-4">
//                 Beauty expert and skincare enthusiast with 5+ years of experience helping Indian women find their perfect beauty routine.
//               </p>
//             </div>
//           </div>
//         </div>
//       </article>

//       {/* Related Blogs */}
//       {relatedBlogs.length > 0 && (
//         <section className="bg-slate-50 py-16">
//           <div className="max-w-7xl mx-auto px-4">
//             <h2 className="font-display text-3xl md:text-4xl text-slate-900 italic mb-8">
//               Related <span className="text-pink-500">Stories</span>
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {relatedBlogs.map((related) => (
//                 <Link
//                   key={related.id}
//                   to={`/blog/${related.slug}`}
//                   className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
//                 >
//                   <div className="aspect-[16/10] overflow-hidden">
//                     <img
//                       src={related.image}
//                       alt={related.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <span className="text-[9px] uppercase tracking-widest text-pink-500 font-bold">
//                       {related.readTime}
//                     </span>
//                     <h3 className="font-display text-xl text-slate-900 mt-2 mb-2 line-clamp-2 group-hover:text-pink-600 transition-colors">
//                       {related.title}
//                     </h3>
//                     <p className="text-sm text-slate-600 line-clamp-2">{related.excerpt}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Blog Content Styles */}
//       <style jsx>{`
//         .blog-content h1 {
//           font-size: 2.5rem;
//           font-weight: 700;
//           margin-top: 2rem;
//           margin-bottom: 1rem;
//           color: #1e293b;
//         }
//         .blog-content h2 {
//           font-size: 2rem;
//           font-weight: 600;
//           margin-top: 2rem;
//           margin-bottom: 1rem;
//           color: #334155;
//         }
//         .blog-content h3 {
//           font-size: 1.5rem;
//           font-weight: 600;
//           margin-top: 1.5rem;
//           margin-bottom: 0.75rem;
//           color: #475569;
//         }
//         .blog-content p {
//           margin-bottom: 1.5rem;
//           line-height: 1.8;
//         }
//         .blog-content ul, .blog-content ol {
//           margin: 1.5rem 0;
//           padding-left: 2rem;
//         }
//         .blog-content li {
//           margin-bottom: 0.5rem;
//         }
//         .blog-content strong {
//           font-weight: 600;
//           color: #1e293b;
//         }
//         .blog-content em {
//           font-style: italic;
//         }
//         .blog-content hr {
//           margin: 2rem 0;
//           border: none;
//           border-top: 1px solid #e2e8f0;
//         }
//       `}</style>
//     </div>
//   );
// };

// const ShareButton = ({ copyLink, copied }) => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setShowMenu(!showMenu)}
//         className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-pink-50 text-slate-700 hover:text-pink-600 rounded-full transition-colors text-sm font-medium"
//       >
//         <Share2 className="w-4 h-4" />
//         Share
//       </button>

//       {showMenu && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9, y: -10 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           className="absolute right-0 mt-2 bg-white rounded-2xl shadow-lg border border-slate-200 p-2 w-48 z-50"
//         >
//           <button
//             onClick={copyLink}
//             className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors text-sm"
//           >
//             <LinkIcon className="w-4 h-4" />
//             {copied ? 'Copied!' : 'Copy Link'}
//           </button>

//           <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors text-sm">
//             <Facebook className="w-4 h-4" />
//             Facebook
//           </button>

//           <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors text-sm">
//             <Twitter className="w-4 h-4" />
//             Twitter
//           </button>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default BlogDetail;