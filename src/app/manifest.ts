import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BloomAura - Fresh Flower Delivery Sri Lanka',
    short_name: 'BloomAura',
    description: 'Order premium fresh flower bouquets in Sri Lanka with same-day delivery',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5E6F0',
    theme_color: '#F5E6F0',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['shopping', 'lifestyle'],
    lang: 'en-LK',
  };
}
