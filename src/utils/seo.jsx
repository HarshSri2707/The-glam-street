import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Hook for setting page SEO
export const useSEO = (seoData) => {
  useEffect(() => {
    // Update document title
    if (seoData?.title) {
      document.title = seoData.title;
    }
  }, [seoData]);

  return seoData;
};

// Generate slug from title
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Generate meta description from content
export const generateMetaDescription = (content, maxLength = 160) => {
  if (!content) return '';
  const stripped = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  return stripped.length > maxLength 
    ? stripped.substring(0, maxLength - 3) + '...'
    : stripped;
};

// SEO Component for structured data
export const SEOHead = ({ 
  title, 
  description, 
  keywords,
  canonical,
  ogImage,
  schema,
  noindex = false,
  nofollow = false
}) => {
  const fullTitle = title || 'The Glam Street - Premium Beauty Products for Indian Women';
  const fullDescription = description || 'Discover curated beauty products that make you feel unstoppable.';
  const fullCanonical = canonical || window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots Meta */}
      {(noindex || nofollow) && (
        <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#7C2D3C" />
      
      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

// Generate breadcrumb schema
export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

// Generate product schema
export const generateProductSchema = (product) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": "The Glam Street"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    ...(product.rating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": product.rating,
        "bestRating": "5",
        "worstRating": "1"
      }
    })
  };
};

// Generate article schema
export const generateArticleSchema = (article) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "author": {
      "@type": "Organization",
      "name": "The Glam Street"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Glam Street",
      "logo": {
        "@type": "ImageObject",
        "url": "https://theglamstreet.com/logo.png"
      }
    }
  };
};

// Image optimization helper
export const optimizeImageUrl = (url, width = 800, quality = 80) => {
  if (!url) return '';
  
  // For Unsplash images
  if (url.includes('unsplash.com')) {
    return `${url}&w=${width}&q=${quality}&auto=format`;
  }
  
  return url;
};

// Generate alt text from context
export const generateAltText = (context) => {
  const { productName, category, action } = context;
  const parts = [];
  
  if (productName) parts.push(productName);
  if (category) parts.push(category);
  if (action) parts.push(action);
  
  return parts.join(' - ') || 'The Glam Street Beauty Product';
};