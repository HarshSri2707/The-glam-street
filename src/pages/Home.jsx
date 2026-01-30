// import React, { useEffect, Suspense, lazy } from 'react';
// import { updatePageSEO, PAGE_SEO } from '../utils/seo';
// import HeroSection from '../components/home/HeroSection';
// import { ProductCardSkeleton } from '../components/ui/SkeletonLoader';
// import { BESTSELLERS, PRODUCTS_BY_CONCERN, BUDGET_PRODUCTS } from '../utils/constants';

// // Lazy load heavy components for better initial load
// const GlamMoodSelector = lazy(() => import('../components/home/GlamMoodSelector'));
// const ProductCarousel = lazy(() => import('../components/home/ProductCarousel'));
// const BrandTrust = lazy(() => import('../components/home/BrandTrust'));
// const BlogPreview = lazy(() => import('../components/home/BlogPreview'));

// /**
//  * Home Page Component
//  * SEO-optimized with lazy loading and proper semantic structure
//  */
// const Home = () => {
//   // Update SEO on mount
//   useEffect(() => {
//     updatePageSEO(PAGE_SEO.home);
    
//     // Scroll to top on page load
//     window.scrollTo(0, 0);
//   }, []);

//   // Loading fallback for lazy components
//   const CarouselSkeleton = () => (
//     <div className="section-padding-tight bg-cream-50">
//       <div className="max-w-7xl mx-auto">
//         <div className="h-8 w-64 shimmer rounded mb-6" />
//         <div className="flex gap-4 overflow-hidden">
//           {[1, 2, 3, 4].map((i) => (
//             <ProductCardSkeleton key={i} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <main className="min-h-screen">
//       {/* Hero Section - Loads immediately */}
//       <HeroSection />

//       {/* Interactive Mood Selector - Lazy loaded */}
//       <Suspense fallback={<div className="h-screen shimmer" />}>
//         <GlamMoodSelector />
//       </Suspense>

//       {/* Bestsellers Carousel */}
//       <Suspense fallback={<CarouselSkeleton />}>
//         <ProductCarousel
//           title="Bestselling Favorites"
//           subtitle="Tried, tested, and loved by thousands of Indian women"
//           products={BESTSELLERS}
//           categorySlug="bestsellers"
//         />
//       </Suspense>

//       {/* Products by Concern - Acne */}
//       <Suspense fallback={<CarouselSkeleton />}>
//         <ProductCarousel
//           title="Acne Solutions"
//           subtitle="Clear skin starts with the right ingredients"
//           products={PRODUCTS_BY_CONCERN.acne}
//           categorySlug="acne-solutions"
//         />
//       </Suspense>

//       {/* Brand Trust Section */}
//       <Suspense fallback={<div className="h-96 shimmer" />}>
//         <BrandTrust />
//       </Suspense>

//       {/* Budget Products */}
//       <Suspense fallback={<CarouselSkeleton />}>
//         <ProductCarousel
//           title="Glam on a Budget"
//           subtitle="Premium quality without the premium price tag"
//           products={BUDGET_PRODUCTS}
//           categorySlug="budget-friendly"
//         />
//       </Suspense>

//       {/* Blog Preview */}
//       <Suspense fallback={<div className="h-96 shimmer" />}>
//         <BlogPreview />
//       </Suspense>
//     </main>
//   );
// };

// export default Home;
import HeroSection from '../components/HeroSection/HeroSection';
import PhilosophySection from '../components/PhilosophySection/PhilosophySection';
import CategoriesSection from '../components/CategoriesSection/CategoriesSection';
import RitualSection from '../components/RitualSection/RitualSection';
import BestsellersSection from '../components/BestsellersSection/BestsellersSection';
import ManifestoSection from '../components/ManifestoSection/ManifestoSection';
import CommunitySection from '../components/CommunitySection/CommunitySection';
import BlogSection from '../components/BlogSection/BlogSection.jsx';
import { SEOHead } from '../utils/seo.jsx';
import contentData from '../data/content.json';

const Home = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEOHead
        title={contentData.seo.meta.title}
        description={contentData.seo.meta.description}
        keywords={contentData.seo.meta.keywords}
        canonical={contentData.seo.canonical}
        ogImage={contentData.seo.meta.ogImage}
        schema={contentData.seo.schema.organization}
      />

      {/* Main Content */}
     
        {/* Hero Section - Full viewport cinematic */}
        <HeroSection data={contentData.hero} />

 <main >
        {/* Philosophy Section - Split asymmetric layout */}
        <PhilosophySection data={contentData.sections.philosophy} />

        {/* Categories Section - Horizontal storytelling */}
        <CategoriesSection data={contentData.sections.categories} />

        {/* Ritual Section - Sticky image + scrolling text */}
        <RitualSection data={contentData.sections.ritual} />

        {/* Bestsellers Section - Interactive hover-based */}
        <BestsellersSection data={contentData.sections.bestsellers} />

        {/* Manifesto Section - Center-focused emotional */}
        <ManifestoSection data={contentData.sections.manifesto} />

        {/* Community Section - Zigzag narrative */}
        <CommunitySection data={contentData.sections.community} />

        {/* Blog Section - Editorial grid */}
        <BlogSection data={contentData.sections.blog} />
      </main>
    </>
  );
};

export default Home;
