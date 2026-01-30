'use client';

import { motion } from 'framer-motion';
import { Flower2, Truck, Palette, Award } from 'lucide-react';

const features = [
    {
        icon: Flower2,
        title: 'Fresh Flowers',
        description: 'Sourced daily from local farms for maximum freshness and beauty',
        color: 'from-floral-pink to-floral-rose',
    },
    {
        icon: Truck,
        title: 'Same-Day Delivery',
        description: 'Order before 2 PM for same-day delivery across Western Province',
        color: 'from-floral-lavender to-floral-pink',
    },
    {
        icon: Palette,
        title: 'Custom Arrangements',
        description: 'Personalized bouquets tailored to your preferences and occasion',
        color: 'from-floral-sage to-floral-lavender',
    },
    {
        icon: Award,
        title: '100% Satisfaction',
        description: 'Quality guaranteed or your money back, no questions asked',
        color: 'from-floral-rose to-floral-pink',
    },
];

export function FeaturesBanner() {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-background to-floral-cream/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-12 lg:mb-16"
                >
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2"
                        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                    >
                        Our <span className="gradient-text-premium">Key Benefits</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                        Why customers love BloomAura
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group"
                            >
                                <div className="glass-premium rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 h-full shadow-premium hover:shadow-premium-lg transition-all duration-300 active:scale-95">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}
                                    >
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3
                                        className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3"
                                        style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
