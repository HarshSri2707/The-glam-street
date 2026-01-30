// import { motion, AnimatePresence } from 'framer-motion';
// import { useState, useEffect } from 'react';

// const Navigation = ({ data }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6 }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? 'bg-white/95 backdrop-blur-md shadow-lg'
//             : 'bg-transparent'
//         }`}
//       >
//         <nav className="section-container py-4 lg:py-6">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <a href="/" className="group">
//               <h1 className={`font-lora text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
//                 isScrolled ? 'text-glam-burgundy' : 'text-white'
//               }`}>
//                 {data.logo}
//               </h1>
//             </a>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-8">
//               {data.menu.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className={`font-sans font-medium tracking-wide animated-underline transition-colors duration-300 ${
//                     isScrolled ? 'text-glam-charcoal' : 'text-white'
//                   }`}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>

//             {/* Right Actions */}
//             <div className="flex items-center gap-4">
//               {/* Search Icon */}
//               <button
//                 className={`hidden md:block w-10 h-10 rounded-full transition-all duration-300 ${
//                   isScrolled
//                     ? 'hover:bg-glam-gold/20 text-glam-charcoal'
//                     : 'hover:bg-white/20 text-white'
//                 }`}
//                 aria-label="Search"
//               >
//                 <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </button>

//               {/* Cart Icon */}
//               <button
//                 className={`hidden md:block w-10 h-10 rounded-full transition-all duration-300 relative ${
//                   isScrolled
//                     ? 'hover:bg-glam-gold/20 text-glam-charcoal'
//                     : 'hover:bg-white/20 text-white'
//                 }`}
//                 aria-label="Cart"
//               >
//                 <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                 </svg>
//                 <span className="absolute -top-1 -right-1 w-5 h-5 bg-glam-burgundy text-white text-xs rounded-full flex items-center justify-center">
//                   0
//                 </span>
//               </button>

//               {/* CTA Button */}
//               <a
//                 href={data.cta.href}
//                 className={`hidden md:block px-6 py-2.5 font-sans font-medium tracking-wide transition-all duration-300 ${
//                   isScrolled
//                     ? 'bg-glam-burgundy text-white hover:bg-glam-gold hover:text-glam-charcoal'
//                     : 'bg-white text-glam-burgundy hover:bg-glam-gold'
//                 }`}
//               >
//                 {data.cta.label}
//               </a>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className={`lg:hidden w-10 h-10 rounded-full transition-all duration-300 ${
//                   isScrolled
//                     ? 'hover:bg-glam-gold/20 text-glam-charcoal'
//                     : 'hover:bg-white/20 text-white'
//                 }`}
//                 aria-label="Menu"
//               >
//                 <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   {isMobileMenuOpen ? (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   ) : (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </nav>
//       </motion.header>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: '100%' }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: '100%' }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-40 lg:hidden bg-glam-burgundy"
//           >
//             <div className="h-full overflow-y-auto px-6 py-24 space-y-8">
//               {data.menu.map((item, index) => (
//                 <motion.a
//                   key={index}
//                   href={item.href}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="block font-lora text-3xl font-bold text-white hover:text-glam-gold transition-colors duration-300"
//                 >
//                   {item.label}
//                 </motion.a>
//               ))}
              
//               <motion.a
//                 href={data.cta.href}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="block btn-primary w-full text-center"
//               >
//                 {data.cta.label}
//               </motion.a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navigation;


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ data }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jab scroll karein tab halki shadow aaye (niche wale code ki tarah)
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu scroll lock
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white ${
      isScrolled || isMobileMenuOpen ? 'shadow-md' : 'border-b border-transparent'
    }`}>
      {/* Top Guard: Mobile par bounce hone par piche ka na dikhe */}
      <div className="absolute -top-10 left-0 right-0 h-10 bg-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo - From Data */}
          <a href="/" className="flex items-center">
            <h1 className="font-serif text-xl md:text-2xl font-bold text-glam-burgundy tracking-tighter">
              {data.logo}<span className="text-pink-500">.</span>
            </h1>
          </a>

          {/* Desktop Navigation - Clean like Unfiltered Money */}
          <div className="hidden lg:flex items-center gap-8">
            {data.menu.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700 hover:text-pink-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Actions - Search, Cart & Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search Button */}
            <button className="p-2 text-slate-700 hover:text-pink-600 transition-colors" aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart Button */}
            <button className="p-2 text-slate-700 hover:text-pink-600 transition-colors relative" aria-label="Cart">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute top-1 right-1 w-4 h-4 bg-pink-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">0</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop CTA */}
            <a href={data.cta.href} className="hidden md:block px-6 py-2.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-pink-600 transition-all">
              {data.cta.label}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Solid White and Fixed */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-16 left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-10 space-y-6 pb-24">
              {data.menu.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={toggleMenu}
                  className="block text-2xl font-serif italic text-slate-900 border-b border-slate-50 pb-4"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={data.cta.href}
                className="block w-full py-4 bg-pink-600 text-white text-center rounded-xl font-bold uppercase tracking-widest text-xs"
              >
                {data.cta.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;