// WhatsApp Business Number
export const WHATSAPP_NUMBER = '+94760225917'; // Replace with actual business number

// Occasion Categories
export const OCCASIONS = [
  'Anniversary',
  'Birthday',
  'Valentine\'s Day',
  'Mother\'s Day',
  'Graduation',
  'Sympathy',
  'Just Because',
] as const;

// Price Ranges
export const PRICE_RANGES = {
  LOW: { min: 0, max: 3000 },
  MEDIUM: { min: 3000, max: 7000 },
  HIGH: { min: 7000, max: Infinity },
} as const;

// SEO Metadata - Optimized for Sri Lankan Search
export const SEO_METADATA = {
  title: 'BloomAura - Fresh Flower Bouquets Delivery in Sri Lanka | Order Online',
  description: 'Order premium fresh flower bouquets in Sri Lanka with same-day delivery. Best prices for roses, lilies, and custom arrangements in Colombo, Kandy, Galle. Free delivery available. LKR 2000-15000.',
  keywords: [
    // Primary keywords
    'flowers Sri Lanka',
    'flower bouquet Sri Lanka',
    'flower bouquet price Sri Lanka',
    'buy flowers online Sri Lanka',
    'flower delivery Sri Lanka',
    
    // Location-specific
    'flower delivery Colombo',
    'flowers Colombo',
    'flower shop Colombo',
    'flower delivery Kandy',
    'flower delivery Galle',
    'Western Province flowers',
    
    // Product-specific
    'rose bouquet Sri Lanka',
    'lily bouquet Sri Lanka',
    'fresh flowers Sri Lanka',
    'premium bouquets Sri Lanka',
    'custom flower arrangements Sri Lanka',
    
    // Service-specific
    'same day flower delivery Sri Lanka',
    'online flower shop Sri Lanka',
    'flower delivery service Sri Lanka',
    'birthday flowers Sri Lanka',
    'anniversary flowers Sri Lanka',
    'wedding flowers Sri Lanka',
    
    // Price-related
    'cheap flowers Sri Lanka',
    'affordable flower bouquets Sri Lanka',
    'flower prices Sri Lanka',
    'best flower deals Sri Lanka',
  ].join(', '),
  ogImage: '/og-image.jpg',
} as const;

// Site Configuration
export const SITE_CONFIG = {
  name: 'BloomAura',
  url: 'https://bloomaura-flame.vercel.app', // Update with your actual Vercel URL
  locale: 'en_LK',
  currency: 'LKR',
  businessName: 'BloomAura Flower Boutique',
  tagline: 'Fresh Flowers, Delivered with Love',
  location: {
    country: 'Sri Lanka',
    region: 'Western Province',
    city: 'Colombo',
    serviceAreas: ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Mount Lavinia', 'Dehiwala', 'Moratuwa'],
  },
  contact: {
    phone: WHATSAPP_NUMBER,
    email: 'hello@bloomaura.lk',
  },
  social: {
    facebook: 'https://facebook.com/bloomaura',
    instagram: 'https://instagram.com/bloomaura',
    whatsapp: `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`,
  },
  business: {
    priceRange: 'LKR 2000-15000',
    openingHours: 'Mo-Su 08:00-20:00',
    deliveryTime: 'Same Day Delivery Available',
  },
} as const;
