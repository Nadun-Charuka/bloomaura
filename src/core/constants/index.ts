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

// SEO Metadata
export const SEO_METADATA = {
  title: 'BloomAura - Fresh Flower Delivery in Colombo & Western Province',
  description: 'Premium flower bouquets delivered fresh across Western Province, Sri Lanka. Perfect for birthdays, anniversaries, and special occasions.',
  keywords: 'fresh flower delivery colombo, bouquets western province, flower shop sri lanka, premium flowers, same day delivery',
  ogImage: '/og-image.jpg',
} as const;

// Site Configuration
export const SITE_CONFIG = {
  name: 'BloomAura',
  url: 'https://bloomaura.lk',
  locale: 'en_LK',
  currency: 'LKR',
} as const;
