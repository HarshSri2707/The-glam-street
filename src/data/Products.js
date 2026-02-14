// Premium Beauty Products Data - EXPANDED
// High-quality product images from Unsplash
// 50+ products across all categories

export const productCategories = {
  byBodyPart: ['Face', 'Hair', 'Body', 'Lips', 'Eyes'],
  byConcern: ['Acne', 'Hairfall', 'Dark Circles', 'Dry Hair', 'Dullness', 'Pigmentation', 'Anti-Aging', 'Sensitivity'],
  byBrand: ['Lakme', 'MamaEarth', 'Lotus', 'Biotique', 'Plum', 'The Derma Co', 'Minimalist'],
  byType: ['Serum', 'Moisturizer', 'Shampoo', 'Conditioner', 'Lipstick', 'Kajal', 'Sunscreen', 'Face Wash', 'Toner', 'Oil', 'Mask', 'Scrub']
};

export const glamMoods = {
  morning: {
    title: "Morning Ritual",
    subtitle: "Wake Up & Glow",
    description: "Start your day with products that energize and protect your skin",
    icon: "☀️",
    color: "from-orange-200 to-yellow-100"
  },
  day: {
    title: "Day Routine",
    subtitle: "Stay Fresh All Day",
    description: "Long-lasting products that keep you confident through your busy day",
    icon: "✨",
    color: "from-pink-200 to-rose-100"
  },
  night: {
    title: "Night Care",
    subtitle: "Repair & Rejuvenate",
    description: "Deep nourishment while you sleep for radiant morning skin",
    icon: "🌙",
    color: "from-purple-200 to-indigo-100"
  }
};

export const products = [
  // ========== FACE CARE - SERUMS ==========
  {
    id: 1,
    name: "Vitamin C Glow Serum 10%",
    brand: "Plum",
    category: "Face",
    type: "Serum",
    concern: ["Dullness", "Pigmentation"],
    price: 599,
    originalPrice: 799,
    rating: 4.5,
    reviews: 1250,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=85",
    mood: "morning",
    bestseller: true,
    description: "Brighten and even out skin tone with 10% pure Vitamin C. Reduces dark spots and boosts radiance.",
    benefits: ["Brightens skin", "Reduces dark spots", "Boosts radiance", "Evens skin tone"]
  },
  {
    id: 2,
    name: "Niacinamide 10% + Zinc Serum",
    brand: "Minimalist",
    category: "Face",
    type: "Serum",
    concern: ["Acne", "Pigmentation"],
    price: 549,
    originalPrice: 699,
    rating: 4.7,
    reviews: 2450,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=85",
    mood: "night",
    bestseller: true,
    description: "Minimizes pores, controls oil, and reduces acne marks. Perfect for oily and acne-prone skin.",
    benefits: ["Minimizes pores", "Reduces acne", "Controls oil", "Evens skin tone"]
  },
  {
    id: 3,
    name: "Hyaluronic Acid 2% Serum",
    brand: "The Derma Co",
    category: "Face",
    type: "Serum",
    concern: ["Dullness", "Anti-Aging"],
    price: 499,
    originalPrice: 649,
    rating: 4.6,
    reviews: 1890,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=85",
    mood: "morning",
    bestseller: true,
    description: "Multi-molecular HA for deep hydration. Plumps skin and reduces fine lines.",
    benefits: ["Deep hydration", "Plumps skin", "Reduces fine lines", "Lightweight"]
  },
  {
    id: 4,
    name: "Retinol 0.3% Night Serum",
    brand: "Minimalist",
    category: "Face",
    type: "Serum",
    concern: ["Anti-Aging", "Pigmentation"],
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviews: 1340,
    image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=600&q=85",
    mood: "night",
    description: "Powerful anti-aging serum. Reduces wrinkles, fine lines, and improves texture.",
    benefits: ["Reduces wrinkles", "Smooths texture", "Brightens", "Anti-aging"]
  },
  {
    id: 5,
    name: "Alpha Arbutin 2% Serum",
    brand: "Minimalist",
    category: "Face",
    type: "Serum",
    concern: ["Pigmentation", "Dark Circles"],
    price: 549,
    originalPrice: 699,
    rating: 4.5,
    reviews: 980,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=85",
    mood: "night",
    description: "Targets hyperpigmentation and dark spots. Gentle yet effective brightening serum.",
    benefits: ["Fades dark spots", "Brightens", "Evens tone", "Gentle formula"]
  },

  // ========== FACE CARE - MOISTURIZERS ==========
  {
    id: 6,
    name: "Hyaluronic Acid Moisturizer",
    brand: "MamaEarth",
    category: "Face",
    type: "Moisturizer",
    concern: ["Dullness"],
    price: 399,
    originalPrice: 499,
    rating: 4.4,
    reviews: 2890,
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600&q=85",
    mood: "morning",
    bestseller: true,
    description: "Lightweight gel moisturizer with HA for 24-hour hydration. Non-sticky formula.",
    benefits: ["24-hour moisture", "Plumps skin", "Non-sticky", "Lightweight"]
  },
  {
    id: 7,
    name: "Retinol Night Cream",
    brand: "Plum",
    category: "Face",
    type: "Moisturizer",
    concern: ["Anti-Aging", "Dullness"],
    price: 699,
    originalPrice: 899,
    rating: 4.6,
    reviews: 1520,
    image: "https://images.unsplash.com/photo-1556228578-dd526ddc2596?w=600&q=85",
    mood: "night",
    description: "Rich night cream with retinol. Repairs and rejuvenates skin overnight.",
    benefits: ["Anti-aging", "Repairs skin", "Reduces wrinkles", "Rich texture"]
  },
  {
    id: 8,
    name: "Vitamin C Day Cream SPF 30",
    brand: "Lotus",
    category: "Face",
    type: "Moisturizer",
    concern: ["Pigmentation", "Dullness"],
    price: 449,
    originalPrice: 599,
    rating: 4.5,
    reviews: 1230,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=85",
    mood: "morning",
    description: "Brightening day cream with SPF protection. Perfect morning companion.",
    benefits: ["Brightens", "SPF 30", "Hydrates", "Protects"]
  },

  // ========== FACE CARE - SUNSCREENS ==========
  {
    id: 9,
    name: "SPF 50 PA++++ Sunscreen Gel",
    brand: "Lotus",
    category: "Face",
    type: "Sunscreen",
    concern: ["Pigmentation"],
    price: 449,
    originalPrice: 599,
    rating: 4.7,
    reviews: 3100,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=85",
    mood: "morning",
    bestseller: true,
    description: "Lightweight, non-greasy gel sunscreen. Broad spectrum UVA/UVB protection.",
    benefits: ["PA++++ protection", "Matte finish", "Water resistant", "No white cast"]
  },
  {
    id: 10,
    name: "Mineral Sunscreen SPF 50",
    brand: "The Derma Co",
    category: "Face",
    type: "Sunscreen",
    concern: ["Sensitivity", "Pigmentation"],
    price: 599,
    originalPrice: 749,
    rating: 4.6,
    reviews: 1670,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=85",
    mood: "morning",
    description: "Zinc oxide based mineral sunscreen. Safe for sensitive skin.",
    benefits: ["Physical filter", "Sensitive skin safe", "No irritation", "Broad spectrum"]
  },

  // ========== FACE CARE - CLEANSERS ==========
  {
    id: 11,
    name: "Turmeric Face Wash",
    brand: "MamaEarth",
    category: "Face",
    type: "Face Wash",
    concern: ["Acne", "Dullness"],
    price: 249,
    originalPrice: 299,
    rating: 4.4,
    reviews: 4300,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=85",
    mood: "morning",
    bestseller: true,
    description: "Traditional haldi face wash for clear, glowing skin. Fights acne naturally.",
    benefits: ["Fights acne", "Natural glow", "Gentle cleansing", "Anti-bacterial"]
  },
  {
    id: 12,
    name: "Salicylic Acid Face Wash 2%",
    brand: "Minimalist",
    category: "Face",
    type: "Face Wash",
    concern: ["Acne"],
    price: 349,
    originalPrice: 449,
    rating: 4.7,
    reviews: 2890,
    image: "https://images.unsplash.com/photo-1556228578-dd526ddc2596?w=600&q=85",
    mood: "morning",
    bestseller: true,
    description: "Deep cleanses pores and prevents breakouts. Perfect for acne-prone skin.",
    benefits: ["Unclogs pores", "Prevents acne", "Oil control", "Deep cleansing"]
  },
  {
    id: 13,
    name: "Vitamin C Foaming Face Wash",
    brand: "Plum",
    category: "Face",
    type: "Face Wash",
    concern: ["Dullness"],
    price: 299,
    originalPrice: 399,
    rating: 4.3,
    reviews: 1560,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=85",
    mood: "morning",
    description: "Brightening foaming cleanser with Vitamin C. Removes impurities gently.",
    benefits: ["Brightens", "Gentle foam", "Removes dirt", "Refreshing"]
  },

  // ========== FACE CARE - TONERS ==========
  {
    id: 14,
    name: "Rose Water Toner",
    brand: "Biotique",
    category: "Face",
    type: "Toner",
    concern: [],
    price: 199,
    originalPrice: 249,
    rating: 4.5,
    reviews: 2650,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=85",
    mood: "morning",
    bestseller: true,
    description: "Pure rose water toner. Tightens pores and balances skin pH naturally.",
    benefits: ["Tightens pores", "Soothes skin", "Natural", "Refreshing"]
  },
  {
    id: 15,
    name: "Glycolic Acid Toner 7%",
    brand: "Minimalist",
    category: "Face",
    type: "Toner",
    concern: ["Pigmentation", "Dullness"],
    price: 449,
    originalPrice: 599,
    rating: 4.6,
    reviews: 1340,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=85",
    mood: "night",
    description: "Exfoliating toner for brighter, smoother skin. Removes dead skin cells.",
    benefits: ["Exfoliates", "Brightens", "Smooths texture", "Refines pores"]
  },

  // ========== HAIR CARE - SHAMPOOS ==========
  {
    id: 16,
    name: "Onion Hair Fall Control Shampoo",
    brand: "MamaEarth",
    category: "Hair",
    type: "Shampoo",
    concern: ["Hairfall"],
    price: 349,
    originalPrice: 449,
    rating: 4.6,
    reviews: 5200,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=85",
    mood: "morning",
    bestseller: true,
    description: "Onion oil enriched shampoo reduces hairfall and promotes hair growth.",
    benefits: ["Reduces hairfall", "Promotes growth", "Strengthens", "Nourishes"]
  },
  {
    id: 17,
    name: "Anti-Dandruff Shampoo",
    brand: "Biotique",
    category: "Hair",
    type: "Shampoo",
    concern: ["Dry Hair"],
    price: 299,
    originalPrice: 399,
    rating: 4.4,
    reviews: 2890,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=85",
    mood: "morning",
    description: "Natural anti-dandruff formula with neem and tea tree. Soothes itchy scalp.",
    benefits: ["Removes dandruff", "Soothes scalp", "Natural", "Gentle"]
  },
  {
    id: 18,
    name: "Keratin Smooth Shampoo",
    brand: "Lakme",
    category: "Hair",
    type: "Shampoo",
    concern: ["Dry Hair"],
    price: 399,
    originalPrice: 499,
    rating: 4.5,
    reviews: 1780,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=85",
    mood: "morning",
    description: "Keratin-infused shampoo for smooth, frizz-free hair.",
    benefits: ["Smooths hair", "Reduces frizz", "Adds shine", "Repairs"]
  },

  // ========== HAIR CARE - CONDITIONERS ==========
  {
    id: 19,
    name: "Argan Oil Conditioner",
    brand: "MamaEarth",
    category: "Hair",
    type: "Conditioner",
    concern: ["Dry Hair"],
    price: 349,
    originalPrice: 449,
    rating: 4.5,
    reviews: 2340,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=85",
    mood: "morning",
    description: "Deep conditioning with Moroccan argan oil. Makes hair soft and manageable.",
    benefits: ["Deep conditioning", "Softens", "Adds shine", "Detangles"]
  },
  {
    id: 20,
    name: "Protein Repair Conditioner",
    brand: "Plum",
    category: "Hair",
    type: "Conditioner",
    concern: ["Dry Hair", "Hairfall"],
    price: 399,
    originalPrice: 499,
    rating: 4.6,
    reviews: 1560,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=85",
    mood: "morning",
    description: "Protein-rich formula repairs damaged hair. Strengthens from within.",
    benefits: ["Repairs damage", "Strengthens", "Prevents breakage", "Nourishes"]
  },

  // ========== HAIR CARE - OILS & SERUMS ==========
  {
    id: 21,
    name: "Onion Hair Growth Oil",
    brand: "MamaEarth",
    category: "Hair",
    type: "Oil",
    concern: ["Hairfall"],
    price: 399,
    originalPrice: 499,
    rating: 4.7,
    reviews: 6200,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=85",
    mood: "night",
    bestseller: true,
    description: "Onion oil with bhringraj for hair growth. Reduces hairfall significantly.",
    benefits: ["Reduces hairfall by 50%", "Promotes growth", "Strengthens roots", "Natural"]
  },
  {
    id: 22,
    name: "Castor Oil for Hair Growth",
    brand: "Biotique",
    category: "Hair",
    type: "Oil",
    concern: ["Hairfall", "Dry Hair"],
    price: 249,
    originalPrice: 329,
    rating: 4.4,
    reviews: 3450,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=85",
    mood: "night",
    description: "Pure cold-pressed castor oil. Promotes thick, healthy hair growth.",
    benefits: ["Thickens hair", "Promotes growth", "Nourishes scalp", "Natural"]
  },
  {
    id: 23,
    name: "Hair Repair Serum",
    brand: "Lotus",
    category: "Hair",
    type: "Serum",
    concern: ["Dry Hair"],
    price: 299,
    originalPrice: 399,
    rating: 4.3,
    reviews: 1890,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=85",
    mood: "day",
    description: "Lightweight serum for instant shine and frizz control.",
    benefits: ["Controls frizz", "Adds shine", "Heat protection", "Non-greasy"]
  },

  // ========== MAKEUP - EYES ==========
  {
    id: 24,
    name: "Kohl Ultimate Kajal - Black",
    brand: "Lakme",
    category: "Eyes",
    type: "Kajal",
    concern: [],
    price: 250,
    originalPrice: 300,
    rating: 4.8,
    reviews: 5500,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=85",
    mood: "day",
    bestseller: true,
    description: "Smudge-proof, waterproof kajal. Stays perfect for 12+ hours.",
    benefits: ["12-hour stay", "Intense black", "Waterproof", "Smudge-proof"]
  },
  {
    id: 25,
    name: "9 to 5 Liner - Black",
    brand: "Lakme",
    category: "Eyes",
    type: "Eyeliner",
    concern: [],
    price: 350,
    originalPrice: 450,
    rating: 4.7,
    reviews: 3200,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=85",
    mood: "day",
    bestseller: true,
    description: "Precision tip liquid liner. Creates perfect wings every time.",
    benefits: ["Precision tip", "Quick dry", "Long-lasting", "Intense black"]
  },
  {
    id: 26,
    name: "Under Eye Brightening Cream",
    brand: "The Derma Co",
    category: "Eyes",
    type: "Eye Cream",
    concern: ["Dark Circles"],
    price: 549,
    originalPrice: 699,
    rating: 4.5,
    reviews: 1780,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=85",
    mood: "night",
    description: "Reduces dark circles and puffiness. Brightens under-eye area.",
    benefits: ["Reduces dark circles", "De-puffs", "Brightens", "Hydrates"]
  },

  // ========== MAKEUP - LIPS ==========
  {
    id: 27,
    name: "9 to 5 Lipstick - Red Coat",
    brand: "Lakme",
    category: "Lips",
    type: "Lipstick",
    concern: [],
    price: 350,
    originalPrice: 450,
    rating: 4.6,
    reviews: 2800,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&q=85",
    mood: "day",
    bestseller: true,
    description: "Creamy matte lipstick with vitamin E. Doesn't dry lips.",
    benefits: ["8-hour wear", "Vitamin E enriched", "Non-drying", "Rich color"]
  },
  {
    id: 28,
    name: "Matte Revolution Lipstick - Nude",
    brand: "Lakme",
    category: "Lips",
    type: "Lipstick",
    concern: [],
    price: 450,
    originalPrice: 550,
    rating: 4.7,
    reviews: 1940,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&q=85",
    mood: "day",
    description: "Perfect nude shade for Indian skin tones. Long-lasting matte finish.",
    benefits: ["Perfect nude", "Long-lasting", "Comfortable", "Matte finish"]
  },
  {
    id: 29,
    name: "Lip Balm SPF 15 - Strawberry",
    brand: "MamaEarth",
    category: "Lips",
    type: "Lip Balm",
    concern: [],
    price: 149,
    originalPrice: 199,
    rating: 4.4,
    reviews: 3450,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&q=85",
    mood: "day",
    bestseller: true,
    description: "Natural lip balm with SPF protection. Keeps lips soft and moisturized.",
    benefits: ["SPF 15", "Natural", "Moisturizes", "Delicious scent"]
  },
  {
    id: 30,
    name: "Liquid Lipstick - Plum Wine",
    brand: "Plum",
    category: "Lips",
    type: "Lipstick",
    concern: [],
    price: 499,
    originalPrice: 649,
    rating: 4.6,
    reviews: 1230,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&q=85",
    mood: "day",
    description: "Long-lasting liquid lipstick. Transfer-proof formula.",
    benefits: ["Transfer-proof", "Long-lasting", "Intense color", "Lightweight"]
  },

  // ========== BODY CARE ==========
  {
    id: 31,
    name: "Ubtan Body Scrub",
    brand: "MamaEarth",
    category: "Body",
    type: "Scrub",
    concern: ["Dullness"],
    price: 349,
    originalPrice: 449,
    rating: 4.5,
    reviews: 2340,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=85",
    mood: "night",
    description: "Traditional ubtan formula exfoliates and brightens skin naturally.",
    benefits: ["Exfoliates", "Brightens", "Natural", "Smooths skin"]
  },
  {
    id: 32,
    name: "Vitamin C Body Lotion",
    brand: "Plum",
    category: "Body",
    type: "Lotion",
    concern: ["Dullness"],
    price: 449,
    originalPrice: 599,
    rating: 4.4,
    reviews: 1670,
    image: "https://images.unsplash.com/photo-1556228578-dd526ddc2596?w=600&q=85",
    mood: "morning",
    description: "Lightweight body lotion with Vitamin C. Brightens and hydrates skin.",
    benefits: ["Brightens", "Hydrates", "Fast absorbing", "Non-greasy"]
  },
  {
    id: 33,
    name: "Shea Butter Body Cream",
    brand: "Biotique",
    category: "Body",
    type: "Cream",
    concern: [],
    price: 399,
    originalPrice: 499,
    rating: 4.6,
    reviews: 1890,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=85",
    mood: "night",
    description: "Rich shea butter cream for extremely dry skin. Deep nourishment.",
    benefits: ["Deep nourishment", "Rich texture", "Long-lasting", "Natural"]
  },

  // ========== FACE MASKS ==========
  {
    id: 34,
    name: "Charcoal Face Mask",
    brand: "MamaEarth",
    category: "Face",
    type: "Mask",
    concern: ["Acne"],
    price: 299,
    originalPrice: 399,
    rating: 4.5,
    reviews: 2890,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=85",
    mood: "night",
    bestseller: true,
    description: "Activated charcoal mask deep cleanses pores and removes impurities.",
    benefits: ["Deep cleansing", "Removes blackheads", "Detoxifies", "Purifies"]
  },
  {
    id: 35,
    name: "Vitamin C Clay Mask",
    brand: "Plum",
    category: "Face",
    type: "Mask",
    concern: ["Dullness", "Pigmentation"],
    price: 349,
    originalPrice: 449,
    rating: 4.4,
    reviews: 1560,
    image: "https://images.unsplash.com/photo-1556228578-dd526ddc2596?w=600&q=85",
    mood: "night",
    description: "Brightening clay mask with Vitamin C. Reveals radiant skin.",
    benefits: ["Brightens", "Exfoliates", "Refines pores", "Glowing skin"]
  },
  {
    id: 36,
    name: "Neem & Tulsi Face Mask",
    brand: "Biotique",
    category: "Face",
    type: "Mask",
    concern: ["Acne"],
    price: 249,
    originalPrice: 329,
    rating: 4.3,
    reviews: 2120,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=85",
    mood: "night",
    description: "Natural ayurvedic mask with neem and tulsi. Controls acne naturally.",
    benefits: ["Controls acne", "Purifies", "Natural", "Soothes"]
  },

  // ========== ADDITIONAL PRODUCTS ==========
  {
    id: 37,
    name: "Oil Control Face Mist",
    brand: "Plum",
    category: "Face",
    type: "Mist",
    concern: ["Acne"],
    price: 299,
    originalPrice: 399,
    rating: 4.3,
    reviews: 1270,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&q=85",
    mood: "day",
    description: "Refreshing face mist controls shine. Perfect for midday touch-up.",
    benefits: ["Controls oil", "Refreshing", "Portable", "Mattifies"]
  },
  {
    id: 38,
    name: "Vitamin E Night Cream",
    brand: "Lotus",
    category: "Face",
    type: "Moisturizer",
    concern: ["Anti-Aging"],
    price: 399,
    originalPrice: 499,
    rating: 4.4,
    reviews: 1780,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=85",
    mood: "night",
    description: "Rich vitamin E cream nourishes and repairs skin overnight.",
    benefits: ["Nourishes", "Repairs", "Anti-aging", "Rich formula"]
  },
  {
    id: 39,
    name: "Tea Tree Face Wash",
    brand: "The Derma Co",
    category: "Face",
    type: "Face Wash",
    concern: ["Acne"],
    price: 349,
    originalPrice: 449,
    rating: 4.6,
    reviews: 2340,
    image: "https://images.unsplash.com/photo-1556228578-dd526ddc2596?w=600&q=85",
    mood: "morning",
    description: "Tea tree oil face wash for acne-prone skin. Prevents breakouts.",
    benefits: ["Prevents acne", "Natural", "Gentle", "Deep cleanses"]
  },
  {
    id: 40,
    name: "Aloe Vera Gel 99%",
    brand: "MamaEarth",
    category: "Face",
    type: "Gel",
    concern: ["Sensitivity"],
    price: 249,
    originalPrice: 299,
    rating: 4.7,
    reviews: 4560,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=85",
    mood: "day",
    bestseller: true,
    description: "Pure aloe vera gel soothes and hydrates skin. Multi-purpose use.",
    benefits: ["Soothes", "Hydrates", "Multi-use", "Natural"]
  },

  // ========== MORE BESTSELLERS ==========
  {
    id: 41,
    name: "Rice Water Face Toner",
    brand: "Minimalist",
    category: "Face",
    type: "Toner",
    concern: ["Dullness"],
    price: 349,
    originalPrice: 449,
    rating: 4.5,
    reviews: 1890,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=85",
    mood: "morning",
    description: "Rice water toner brightens and tightens skin naturally.",
    benefits: ["Brightens", "Tightens pores", "Natural", "Hydrating"]
  },
  {
    id: 42,
    name: "Peptide Serum",
    brand: "The Derma Co",
    category: "Face",
    type: "Serum",
    concern: ["Anti-Aging"],
    price: 699,
    originalPrice: 899,
    rating: 4.7,
    reviews: 1120,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=85",
    mood: "night",
    description: "Advanced peptide serum reduces wrinkles and firms skin.",
    benefits: ["Reduces wrinkles", "Firms skin", "Boosts collagen", "Anti-aging"]
  },
  {
    id: 43,
    name: "Coffee Face Scrub",
    brand: "MamaEarth",
    category: "Face",
    type: "Scrub",
    concern: ["Dullness"],
    price: 299,
    originalPrice: 399,
    rating: 4.4,
    reviews: 3670,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=85",
    mood: "night",
    bestseller: true,
    description: "Coffee scrub exfoliates and energizes dull skin. Natural glow.",
    benefits: ["Exfoliates", "Energizes", "Natural", "Removes tan"]
  },
  {
    id: 44,
    name: "Coconut Hair Mask",
    brand: "Biotique",
    category: "Hair",
    type: "Mask",
    concern: ["Dry Hair"],
    price: 349,
    originalPrice: 449,
    rating: 4.5,
    reviews: 1560,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=85",
    mood: "night",
    description: "Deep conditioning coconut mask for dry, damaged hair.",
    benefits: ["Deep conditioning", "Repairs", "Softens", "Natural"]
  },
  {
    id: 45,
    name: "Biotin Hair Growth Tablets",
    brand: "The Derma Co",
    category: "Hair",
    type: "Supplement",
    concern: ["Hairfall"],
    price: 599,
    originalPrice: 749,
    rating: 4.6,
    reviews: 2340,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=85",
    mood: "morning",
    description: "Biotin supplements promote hair growth and reduce hairfall.",
    benefits: ["Promotes growth", "Reduces hairfall", "Strengthens", "Scientifically proven"]
  },
  {
    id: 46,
    name: "Compact Powder - Natural Beige",
    brand: "Lakme",
    category: "Face",
    type: "Powder",
    concern: [],
    price: 250,
    originalPrice: 320,
    rating: 4.4,
    reviews: 2890,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=85",
    mood: "day",
    bestseller: true,
    description: "Long-lasting compact powder with SPF. Perfect for touch-ups.",
    benefits: ["Long-lasting", "SPF protection", "Oil control", "Natural finish"]
  },
  {
    id: 47,
    name: "BB Cream SPF 30 - Beige",
    brand: "Lakme",
    category: "Face",
    type: "BB Cream",
    concern: [],
    price: 399,
    originalPrice: 499,
    rating: 4.5,
    reviews: 1890,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=85",
    mood: "morning",
    description: "All-in-one BB cream with SPF. Coverage + protection in one.",
    benefits: ["SPF 30", "Light coverage", "Natural finish", "Hydrates"]
  },
  {
    id: 48,
    name: "Nail Polish Remover - Acetone Free",
    brand: "Plum",
    category: "Nails",
    type: "Remover",
    concern: [],
    price: 149,
    originalPrice: 199,
    rating: 4.3,
    reviews: 1230,
    image: "https://images.unsplash.com/photo-1556228578-dd526ddc2596?w=600&q=85",
    mood: "day",
    description: "Gentle nail polish remover without harsh acetone.",
    benefits: ["Acetone-free", "Gentle", "No strong smell", "Effective"]
  },
  {
    id: 49,
    name: "Hand Cream - Rose & Shea",
    brand: "MamaEarth",
    category: "Body",
    type: "Cream",
    concern: [],
    price: 199,
    originalPrice: 249,
    rating: 4.4,
    reviews: 1670,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=85",
    mood: "day",
    description: "Nourishing hand cream with rose and shea butter. Non-greasy.",
    benefits: ["Nourishes", "Non-greasy", "Pleasant scent", "Fast absorbing"]
  },
  {
    id: 50,
    name: "Foot Cream - Mint & Peppermint",
    brand: "Biotique",
    category: "Body",
    type: "Cream",
    concern: [],
    price: 249,
    originalPrice: 329,
    rating: 4.5,
    reviews: 1340,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=85",
    mood: "night",
    description: "Cooling foot cream repairs cracked heels and softens feet.",
    benefits: ["Repairs heels", "Cooling", "Softens", "Refreshing"]
  }
];

// Helper functions
export const getProductsByMood = (mood) => {
  return products.filter(product => product.mood === mood);
};

export const getBestsellers = () => {
  return products.filter(product => product.bestseller);
};

export const getProductsByConcern = (concern) => {
  return products.filter(product => product.concern.includes(concern));
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getProductsByBrand = (brand) => {
  return products.filter(product => product.brand === brand);
};

export const getProductsByPriceRange = (min, max) => {
  return products.filter(product => product.price >= min && product.price <= max);
};

export const getBudgetFriendly = () => {
  return products.filter(product => product.price <= 399).slice(0, 6);
};

export const getNewArrivals = () => {
  return products.slice(-8); // Last 8 products as new arrivals
};

export const getTrendingProducts = () => {
  return products.filter(product => product.reviews > 2000);
};