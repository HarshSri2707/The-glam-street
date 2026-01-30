// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { SEOHead } from '../utils/seo.jsx';

// const AboutUs = () => {
//   return (
//     <>
//       <SEOHead
//         title="About Us - The Glam Street | Our Story & Mission"
//         description="Discover The Glam Street's journey. We empower Indian women with authentic beauty products and self-care rituals that build confidence from within."
//         keywords="about the glam street, beauty brand story, Indian beauty, women empowerment, authentic beauty products"
//       />

//       <div className="min-h-screen bg-glam-cream">
//         {/* Hero Section */}
//         <AboutHero />

//         {/* Our Story Section */}
//         <OurStory />

//         {/* Mission Section */}
//         <OurMission />

//         {/* Values Section */}
//         <OurValues />

//         {/* Team/Community Section */}
//         <CommunityMessage />

//         {/* CTA Section */}
//         <JoinUsCTA />
//       </div>
//     </>
//   );
// };

// // Hero Section
// const AboutHero = () => {
//   return (
//     <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-glam-burgundy to-glam-charcoal overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-glam-gold rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-glam-rose rounded-full blur-3xl" />
//       </div>

//       <div className="section-container relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto text-center"
//         >
//           <span className="inline-block px-4 py-1.5 bg-glam-gold/20 backdrop-blur-sm text-glam-gold text-sm font-sans tracking-widest uppercase mb-6">
//             Our Story
//           </span>
          
//           <h1 className="font-lora text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//             Glam Street: A Place Where <span className="text-glam-gold">Self-Care</span> Meets Confidence
//           </h1>
          
//           <p className="text-xl text-white/90 font-sans leading-relaxed max-w-3xl mx-auto">
//             We started The Glam Street for one simple reason - to give every Indian woman the right glam products to feel unapologetically confident and glow in their own skin.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Our Story Section
// const OurStory = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="py-20 lg:py-32 bg-white">
//       <div className="section-container">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* Left: Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="aspect-[4/5] overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=1000&fit=crop&q=80"
//                 alt="The Glam Street Story"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 border-8 border-glam-gold/0 hover:border-glam-gold/30 transition-all duration-500" />
//             </div>

//             {/* Decorative Badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="absolute -bottom-8 -right-8 bg-glam-burgundy text-white p-10 shadow-2xl"
//             >
//               <div className="text-center">
//                 <div className="font-lora text-5xl font-bold mb-2">2020</div>
//                 <div className="text-sm font-sans tracking-wide">Founded</div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right: Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <div className="inline-block">
//               <span className="text-glam-burgundy text-sm font-sans tracking-[0.2em] uppercase">
//                 Our Beginning
//               </span>
//               <div className="h-px w-16 bg-glam-gold mt-2" />
//             </div>

//             <h2 className="font-lora text-4xl lg:text-5xl font-bold text-glam-charcoal">
//               Born From a Simple Truth
//             </h2>

//             <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
//               <p>
//                 In a world obsessed with fleeting trends, we stand for long-lasting beauty care and bring out your inner glam quotient. We know that taking 10 minutes for your skin, hair, or for a touch of makeup isn't vanity.
//               </p>

//               <p className="font-medium text-glam-burgundy">
//                 It's a foundation to uplift your confidence and be your true self. It's an act of self-love that says, "I am worth it."
//               </p>

//               <p>
//                 As an Indian brand, we understand the unique beauty challenges you face, from the harsh sun and high humidity to the desire for products that honour your skin tone and heritage.
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-6 pt-8 border-t border-glam-gold/30">
//               {[
//                 { value: "50K+", label: "Happy Customers" },
//                 { value: "1000+", label: "Products" },
//                 { value: "4.8★", label: "Rating" }
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="font-lora text-3xl font-bold text-glam-burgundy mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-gray-600">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Mission Section
// const OurMission = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="py-20 lg:py-32 bg-gradient-glam">
//       <div className="section-container">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto text-center mb-16"
//         >
//           <span className="inline-block px-4 py-1.5 bg-glam-burgundy/10 text-glam-burgundy text-sm font-sans tracking-widest uppercase mb-4">
//             Our Mission
//           </span>
//           <h2 className="font-lora text-4xl lg:text-5xl font-bold text-glam-charcoal mb-6">
//             Offering Glam Solutions, Not Just Products
//           </h2>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               icon: "🎯",
//               title: "Curated Collection",
//               description: "A blend of trusted Indian favourites and globally-recognised beauty science, focused on giving you tangible solutions for your real-life beauty problems."
//             },
//             {
//               icon: "💖",
//               title: "Simplified Routines",
//               description: "We're here to simplify your routine, not complicate it. High-performance products that work as hard as you do."
//             },
//             {
//               icon: "✨",
//               title: "Real Solutions",
//               description: "Whether you're battling breakouts, fighting the hair frizz, or just seeking that everyday glow, we've got you covered."
//             }
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: index * 0.2, duration: 0.6 }}
//               className="bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
//             >
//               <div className="text-5xl mb-4">{item.icon}</div>
//               <h3 className="font-lora text-2xl font-bold text-glam-charcoal mb-4">
//                 {item.title}
//               </h3>
//               <p className="text-gray-700 leading-relaxed">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Values Section
// const OurValues = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const values = [
//     {
//       title: "Confidence First",
//       description: "We celebrate real skin, real hair, and real journeys. Our products are the catalyst, but your confidence is the main event.",
//       image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop&q=80"
//     },
//     {
//       title: "Care is the Currency",
//       description: "We view beauty as a ritual of care. When you prioritise yourself, you show up better for the world.",
//       image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop&q=80"
//     },
//     {
//       title: "Community Powered",
//       description: "We are a platform for all women, of all shades and stories. Your voice, your reviews, and your stories fuel The Glam Street.",
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&q=80"
//     }
//   ];

//   return (
//     <section ref={ref} className="py-20 lg:py-32 bg-white">
//       <div className="section-container">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-block px-4 py-1.5 bg-glam-gold/20 text-glam-burgundy text-sm font-sans tracking-widest uppercase mb-4">
//             What We Stand For
//           </span>
//           <h2 className="font-lora text-4xl lg:text-5xl font-bold text-glam-charcoal">
//             Our Core Values
//           </h2>
//         </motion.div>

//         <div className="space-y-24">
//           {values.map((value, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: index * 0.3, duration: 0.8 }}
//               className={`grid md:grid-cols-2 gap-12 items-center ${
//                 index % 2 !== 0 ? 'md:direction-rtl' : ''
//               }`}
//             >
//               <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
//                 <div className="aspect-square overflow-hidden">
//                   <img
//                     src={value.image}
//                     alt={value.title}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//               </div>

//               <div className={`${index % 2 !== 0 ? 'md:order-1' : ''} space-y-4`}>
//                 <div className="inline-flex items-center gap-3">
//                   <div className="w-12 h-12 rounded-full bg-glam-burgundy flex items-center justify-center text-white font-lora text-xl font-bold">
//                     {index + 1}
//                   </div>
//                   <div className="h-px flex-1 bg-glam-gold max-w-[100px]" />
//                 </div>

//                 <h3 className="font-lora text-3xl lg:text-4xl font-bold text-glam-charcoal">
//                   {value.title}
//                 </h3>

//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Community Message
// const CommunityMessage = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-glam-burgundy to-glam-charcoal">
//       <div className="section-container">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto text-center space-y-8"
//         >
//           <div className="text-7xl">👑</div>
          
//           <h2 className="font-lora text-4xl lg:text-5xl font-bold text-white">
//             Join 50,000+ Women Walking The Glam Street
//           </h2>

//           <p className="text-xl text-white/90 leading-relaxed">
//             Your journey, your glow, your confidence. We're not just a beauty brand - we're a movement celebrating every Indian woman's unique beauty story.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4 pt-8">
//             {['💄 Authentic Products', '🌟 Real Results', '💖 Supportive Community'].map((item, index) => (
//               <span
//                 key={index}
//                 className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Join Us CTA
// const JoinUsCTA = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="py-20 lg:py-32 bg-glam-cream">
//       <div className="section-container">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="max-w-3xl mx-auto text-center space-y-8"
//         >
//           <h2 className="font-lora text-4xl lg:text-5xl font-bold text-glam-charcoal">
//             Ready to Transform Your Routine Into a Ritual?
//           </h2>

//           <p className="text-xl text-gray-700">
//             Come Walk The Glam Street with Us
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
//             <a href="/shop" className="btn-primary">
//               Explore Products
//             </a>
//             <a href="/community" className="btn-secondary">
//               Join The Tribe
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;


import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AboutUs = () => {
  return (
    <div className="bg-[#0a0a0a] selection:bg-pink-500 selection:text-white">
      {/* 1. Sticky Hero */}
      <AboutHero />

      {/* Content Container - Reduced top margin/rounded corners */}
      <div className="relative z-10 bg-[#FAF9F6] rounded-t-[24px] md:rounded-t-[40px] -mt-6">
        
        {/* 2. Story Section - Minimal Padding */}
        <ScrollRevealStory />

        {/* 3. Stat Grid - Tight Layout */}
        <StatGrid />

        {/* 4. Value Slider - Snappy Horizontal Scroll */}
        <ValueSlider />

        {/* 5. Final CTA - Compact */}
        <HighGlossCTA />
      </div>
    </div>
  );
};

// 1. Hero Section - Height optimized for impact
const AboutHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative h-[85vh] md:h-screen w-full overflow-hidden sticky top-0">
      <motion.div style={{ y }} className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=90&w=1600" 
          className="w-full h-full object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </motion.div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pb-12">
        <motion.span className="text-pink-400 font-bold tracking-[0.3em] text-[10px] uppercase mb-2">
          Beauty Revolution
        </motion.span>
        <h1 className="font-serif text-5xl md:text-8xl text-white leading-none tracking-tighter">
          Glam <br /> <span className="italic font-light opacity-80">Reimagined.</span>
        </h1>
      </div>
    </section>
  );
};

// 2. Story Section - Padding reduced from py-32 to py-12/20
const ScrollRevealStory = () => {
  return (
    <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <motion.div 
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000" className="w-full h-64 md:h-full object-cover" />
        </motion.div>
        <div className="space-y-4">
          <h2 className="text-pink-600 font-bold text-[10px] tracking-widest uppercase">Our Story</h2>
          <h3 className="font-serif text-3xl md:text-5xl text-black leading-tight italic">Born for your glow.</h3>
          <p className="text-gray-600 text-base md:text-lg leading-snug font-light">
            We bridge the gap between heavy makeup and natural radiance. Since 2020, we've curated rituals that celebrate Indian skin tones.
          </p>
          <button className="text-xs font-bold border-b-2 border-pink-500 pb-1 uppercase">Learn More</button>
        </div>
      </div>
    </section>
  );
};

// 3. Stat Grid - Very Compact
const StatGrid = () => {
  return (
    <section className="bg-white py-8 md:py-12 px-6 border-y border-gray-50">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {[
          { l: "Global Awards", v: "12" },
          { l: "Happy Faces", v: "50K+" },
          { l: "Cruelty Free", v: "100%" },
          { l: "Expert Artists", v: "250+" }
        ].map((s, i) => (
          <div key={i} className="text-center p-2">
            <h4 className="font-serif text-2xl md:text-4xl text-black">{s.v}</h4>
            <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 font-medium">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// 4. Value Slider - Reduced Spacing
const ValueSlider = () => {
  return (
    <section className="py-12 md:py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <h2 className="font-serif text-3xl md:text-5xl text-center italic">Core Values</h2>
      </div>
      
      <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto pb-4 snap-x no-scrollbar">
        {[
          { t: "Purity", d: "Ethically sourced ingredients.", i: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600" },
          { t: "Artistry", d: "Designed for daily life.", i: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600" },
          { t: "Innovation", d: "Next-gen beauty science.", i: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600" }
        ].map((v, i) => (
          <div key={i} className="min-w-[260px] md:min-w-0 snap-center group bg-white p-3 rounded-2xl shadow-sm border border-gray-50">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4">
              <img src={v.i} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h5 className="font-serif text-xl mb-1">{v.t}</h5>
            <p className="text-gray-500 font-light text-xs">{v.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// 5. Final CTA - Tight and Catchy
const HighGlossCTA = () => {
  return (
    <section className="py-16 md:py-24 px-6 text-center bg-white relative overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl md:text-7xl mb-8 tracking-tighter leading-none">Your story <br/> starts <span className="text-pink-500 italic font-light">here.</span></h2>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-pink-600 transition-all shadow-lg shadow-black/10">
            Shop Selection
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white border border-pink-200 text-pink-500 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-pink-50 transition-all">
            Join the Tribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;