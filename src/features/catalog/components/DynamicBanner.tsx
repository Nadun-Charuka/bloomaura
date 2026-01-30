'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BannerItem {
    id: string;
    title: string;
    emoji: string;
    color: string;
}

const bannerItems: BannerItem[] = [
    { id: '1', title: "Valentine's Specials", emoji: '💝', color: 'from-floral-rose to-floral-pink' },
    { id: '2', title: 'New Arrivals', emoji: '🌸', color: 'from-floral-pink to-floral-lavender' },
    { id: '3', title: 'Best Sellers', emoji: '⭐', color: 'from-floral-lavender to-floral-sage' },
    { id: '4', title: 'Custom Bouquets', emoji: '🎨', color: 'from-floral-sage to-floral-cream' },
];

export function DynamicBanner() {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-floral-pink/20 via-floral-lavender/20 to-floral-sage/20 p-6 backdrop-blur-sm">
            {/* Decorative Elements */}
            <motion.div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-floral-pink/20 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-floral-lavender/20 blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
            />

            {/* Header */}
            <div className="relative mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">Featured Collections</h2>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="relative -mx-6 overflow-x-auto px-6 scrollbar-hide">
                <div className="flex gap-3 pb-2">
                    {bannerItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-shrink-0"
                        >
                            <Badge
                                variant="outline"
                                className={`glass cursor-pointer border-0 bg-gradient-to-r ${item.color} px-4 py-2 text-white shadow-lg transition-shadow hover:shadow-xl`}
                            >
                                <span className="mr-2 text-lg">{item.emoji}</span>
                                <span className="whitespace-nowrap font-medium text-black">{item.title}</span>
                            </Badge>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-2 flex justify-center gap-1">
                {bannerItems.map((item) => (
                    <div key={item.id} className="h-1 w-8 rounded-full bg-primary/20" />
                ))}
            </div>
        </div>
    );
}
