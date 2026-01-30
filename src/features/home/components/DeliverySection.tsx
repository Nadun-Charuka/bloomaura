'use client';

import { motion } from 'framer-motion';
import { Clock, Zap, Sparkles, Check } from 'lucide-react';

const deliveryOptions = [
    {
        icon: Clock,
        title: 'Standard Delivery',
        timing: '2-3 Business Days',
        price: 'Rs. 500',
        features: [
            'Scheduled delivery window',
            'Order tracking',
            'Email notifications',
            'Contactless delivery',
        ],
        color: 'from-floral-sage to-floral-lavender',
        popular: false,
    },
    {
        icon: Zap,
        title: 'Express Delivery',
        timing: 'Next Day',
        price: 'Rs. 800',
        features: [
            'Priority processing',
            'Guaranteed next-day delivery',
            'Real-time tracking',
            'SMS updates',
        ],
        color: 'from-floral-lavender to-floral-pink',
        popular: true,
    },
    {
        icon: Sparkles,
        title: 'Same-Day Delivery',
        timing: 'Within 4-6 Hours',
        price: 'Rs. 1,200',
        features: [
            'Order before 2 PM',
            'Ultra-fast delivery',
            'Live tracking',
            'Priority support',
        ],
        color: 'from-floral-pink to-floral-rose',
        popular: false,
    },
];

export function DeliverySection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-floral-lavender/10 via-background to-floral-cream/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                    >
                        Flexible <span className="gradient-text-premium">Delivery Options</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Choose the delivery speed that works best for you. All options include our freshness guarantee.
                    </p>
                </motion.div>

                {/* Delivery Timeline Visualization */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="glass-premium rounded-3xl p-8 md:p-12 mb-12 shadow-premium-lg"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {[
                            { step: '1', title: 'Order Placed', emoji: '🛒' },
                            { step: '2', title: 'Bouquet Prepared', emoji: '💐' },
                            { step: '3', title: 'Quality Check', emoji: '✅' },
                            { step: '4', title: 'On the Way', emoji: '🚚' },
                            { step: '5', title: 'Delivered!', emoji: '🎉' },
                        ].map((item, index) => (
                            <div key={item.step} className="flex items-center gap-4">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4, type: 'spring' }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-floral-pink to-floral-lavender flex items-center justify-center text-2xl shadow-lg mb-2">
                                        {item.emoji}
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs font-semibold text-primary">Step {item.step}</div>
                                        <div className="text-sm font-medium text-foreground">{item.title}</div>
                                    </div>
                                </motion.div>
                                {index < 4 && (
                                    <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-floral-pink to-floral-lavender" />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Delivery Options Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {deliveryOptions.map((option, index) => {
                        const Icon = option.icon;
                        return (
                            <motion.div
                                key={option.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative group"
                            >
                                {option.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-floral-rose to-floral-pink text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                                            MOST POPULAR
                                        </div>
                                    </div>
                                )}

                                <div className={`glass-premium rounded-3xl p-6 md:p-8 h-full shadow-premium hover:shadow-premium-lg transition-all duration-300 ${option.popular ? 'border-2 border-primary/30' : ''}`}>
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-6 shadow-lg`}
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>

                                    {/* Title & Timing */}
                                    <h3
                                        className="text-2xl font-bold text-foreground mb-2"
                                        style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                                    >
                                        {option.title}
                                    </h3>
                                    <p className="text-primary font-semibold mb-4">{option.timing}</p>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <span className="text-3xl font-bold gradient-text-premium">{option.price}</span>
                                        <span className="text-muted-foreground text-sm ml-2">per delivery</span>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-3">
                                        {option.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2">
                                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-12 text-center glass-premium rounded-2xl p-6 shadow-premium"
                >
                    <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Freshness Guarantee:</strong> All bouquets are prepared fresh on the day of delivery. If you're not 100% satisfied, we'll make it right.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
