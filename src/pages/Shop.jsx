import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X, Star, ShoppingCart } from 'lucide-react';
import { products, productCategories } from '../data/Products';

/**
 * Shop Page - All Products with Filters
 * Luxury design with pink accents
 */
const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedConcern, setSelectedConcern] = useState('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [priceRange, setPriceRange] = useState('all');

  // Filter products
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const concernMatch = selectedConcern === 'all' || product.concern.includes(selectedConcern);
    
    let priceMatch = true;
    if (priceRange === 'under299') priceMatch = product.price < 299;
    else if (priceRange === '299-499') priceMatch = product.price >= 299 && product.price < 500;
    else if (priceRange === '500plus') priceMatch = product.price >= 500;

    return categoryMatch && concernMatch && priceMatch;
  });

  return (
    <div id="shop" className="min-h-screen bg-[#FAF9F6] pt-16 lg:pt-20">
      {/* Compact Hero */}
<div className="relative bg-black text-white py-20 md:py-28 px-6 text-center overflow-hidden min-h-[60vh] flex items-center justify-center">
  {/* Background Images with Overlay */}
  <div className="absolute inset-0 z-0">
    {/* Main Image - Full visibility, sharp */}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ 
        backgroundImage: `url('https://media.istockphoto.com/id/1024577404/photo/various-hair-dresser-tools-on-pink-background-with-copy-space.jpg?s=612x612&w=0&k=20&c=lvLC_kD5E4isVfTY13p8hVYkZ2wiCa7-Ob3t9hdXB4I=')`
      }}
    />
    
    {/* Optional subtle second layer for depth (same image ya different) */}
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
      style={{ 
        backgroundImage: `url('https://media.istockphoto.com/id/1024577404/photo/various-hair-dresser-tools-on-pink-background-with-copy-space.jpg?s=612x612&w=0&k=20&c=lvLC_kD5E4isVfTY13p8hVYkZ2wiCa7-Ob3t9hdXB4I=')`
      }}
    />
    
    {/* Dark overlay for text readability (stronger on mobile) */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/85" />
  </div>

  {/* Content - higher z-index */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <motion.span 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-pink-400 font-bold tracking-[0.35em] text-xs md:text-sm uppercase mb-4 block"
    >
      Premium Collection
    </motion.span>
    
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic mb-5 md:mb-8 leading-tight drop-shadow-lg"
    >
      Shop <span className="text-pink-500 font-light">Selection.</span>
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="text-white/90 max-w-xl md:max-w-2xl mx-auto font-light text-base md:text-lg lg:text-xl drop-shadow-md"
    >
      Curated products for Indian skin and hair
    </motion.p>
  </div>
</div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-display text-xl mb-6 text-black">Filters</h3>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-bold">
                  Category
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === 'all' 
                        ? 'bg-pink-50 text-pink-600 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    All Products
                  </button>
                  {productCategories.byBodyPart.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === cat 
                          ? 'bg-pink-50 text-pink-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Concern Filter */}
              <div className="mb-8">
                <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-bold">
                  Skin Concern
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedConcern('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedConcern === 'all' 
                        ? 'bg-pink-50 text-pink-600 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    All Concerns
                  </button>
                  {productCategories.byConcern.map(concern => (
                    <button
                      key={concern}
                      onClick={() => setSelectedConcern(concern)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedConcern === concern 
                          ? 'bg-pink-50 text-pink-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {concern}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-bold">
                  Price Range
                </h4>
                <div className="space-y-2">
                  {[
                    { label: 'All Prices', value: 'all' },
                    { label: 'Under ₹299', value: 'under299' },
                    { label: '₹299 - ₹499', value: '299-499' },
                    { label: '₹500+', value: '500plus' }
                  ].map(range => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        priceRange === range.value 
                          ? 'bg-pink-50 text-pink-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setShowMobileFilters(true)}
                className="w-full py-3 px-4 bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-sm font-medium"
              >
                <Filter className="w-4 h-4" />
                Filters ({filteredProducts.length} products)
              </button>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-black">{filteredProducts.length}</span> products
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 font-light">No products found matching your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedConcern('all');
                    setPriceRange('all');
                  }}
                  className="mt-4 text-pink-600 font-medium text-sm underline"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {showMobileFilters && (
        <MobileFiltersModal
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedConcern={selectedConcern}
          setSelectedConcern={setSelectedConcern}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          onClose={() => setShowMobileFilters(false)}
        />
      )}
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        {product.bestseller && (
          <div className="absolute top-2 left-2 bg-pink-500 text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
            Bestseller
          </div>
        )}
        {product.originalPrice && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-[9px] font-bold px-2 py-1 rounded-full">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </div>
        )}

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="px-4 py-2 bg-pink-600 text-white text-[10px] font-bold uppercase tracking-wide rounded-full flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform">
            <ShoppingCart className="w-3 h-3" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 md:p-4">
        <p className="text-[9px] uppercase tracking-widest text-pink-600 font-bold mb-1">
          {product.brand}
        </p>
        <h3 className="font-serif text-sm md:text-base text-black mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium text-gray-700">{product.rating}</span>
          <span className="text-[10px] text-gray-400">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-display text-lg font-bold text-black">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button className="w-full py-2 border border-pink-500 text-pink-600 text-[10px] font-bold uppercase tracking-wide rounded-full hover:bg-pink-50 transition-colors">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

// Mobile Filters Modal
const MobileFiltersModal = ({
  selectedCategory,
  setSelectedCategory,
  selectedConcern,
  setSelectedConcern,
  priceRange,
  setPriceRange,
  onClose
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 lg:hidden"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30 }}
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-2xl">Filters</h3>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Same filter content as desktop */}
        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-bold">
              Category
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === 'all' ? 'bg-pink-50 text-pink-600' : 'bg-gray-50 text-gray-700'
                }`}
              >
                All
              </button>
              {productCategories.byBodyPart.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === cat ? 'bg-pink-50 text-pink-600' : 'bg-gray-50 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Concerns */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-bold">
              Concern
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedConcern('all')}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedConcern === 'all' ? 'bg-pink-50 text-pink-600' : 'bg-gray-50 text-gray-700'
                }`}
              >
                All
              </button>
              {productCategories.byConcern.map(concern => (
                <button
                  key={concern}
                  onClick={() => setSelectedConcern(concern)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedConcern === concern ? 'bg-pink-50 text-pink-600' : 'bg-gray-50 text-gray-700'
                  }`}
                >
                  {concern}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 font-bold">
              Price
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'All', value: 'all' },
                { label: 'Under ₹299', value: 'under299' },
                { label: '₹299-₹499', value: '299-499' },
                { label: '₹500+', value: '500plus' }
              ].map(range => (
                <button
                  key={range.value}
                  onClick={() => setPriceRange(range.value)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    priceRange === range.value ? 'bg-pink-50 text-pink-600' : 'bg-gray-50 text-gray-700'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={onClose}
          className="w-full mt-6 py-4 bg-pink-600 text-white rounded-2xl font-bold uppercase tracking-wide text-sm"
        >
          Apply Filters
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Shop;