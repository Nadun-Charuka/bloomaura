'use client';

import { motion } from 'framer-motion';
import { MapPin, Check } from 'lucide-react';

const serviceAreas = [
    'Colombo',
    'Gampaha',
    'Kalutara',
    'Negombo',
    'Moratuwa',
    'Dehiwala',
    'Maharagama',
    'Kelaniya',
    'Ja-Ela',
    'Panadura',
    'Wattala',
    'Kaduwela',
];

export function LocationSection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-floral-pink/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="inline-flex items-center gap-2 glass-premium rounded-full px-4 py-2 mb-4"
                            >
                                <MapPin className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Service Coverage</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                            >
                                We Deliver Across <span className="gradient-text-premium">Western Province</span>
                            </motion.h2>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            From the bustling streets of Colombo to the serene suburbs of Kalutara, we bring fresh flowers to your doorstep. Our extensive delivery network ensures your bouquets arrive fresh and on time.
                        </motion.p>

                        {/* Service Areas Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4"
                        >
                            {serviceAreas.map((area, index) => (
                                <motion.div
                                    key={area}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2 glass-premium rounded-xl p-3 shadow-premium hover:shadow-premium-lg transition-all duration-300"
                                >
                                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span className="text-sm font-medium text-foreground">{area}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="text-sm text-muted-foreground italic pt-4"
                        >
                            Don't see your area? Contact us via WhatsApp to check if we can deliver to you!
                        </motion.p>
                    </motion.div>

                    {/* Map Visualization Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-premium-lg glass-premium p-8">
                            {/* Decorative Map Representation */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    {/* Central Pin */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    >
                                        <div className="relative">
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.5, 0.8, 0.5],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: 'easeInOut',
                                                }}
                                                className="absolute inset-0 bg-primary/30 rounded-full blur-xl w-32 h-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                                            />
                                            <MapPin className="w-16 h-16 text-primary relative z-10" />
                                        </div>
                                    </motion.div>

                                    {/* Surrounding Pins */}
                                    {[...Array(8)].map((_, i) => {
                                        const angle = (i * 360) / 8;
                                        const radius = 120;
                                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                                        const y = Math.sin((angle * Math.PI) / 180) * radius;

                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                                                className="absolute top-1/2 left-1/2"
                                                style={{
                                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                                }}
                                            >
                                                <motion.div
                                                    animate={{ y: [0, -5, 0] }}
                                                    transition={{
                                                        duration: 2 + i * 0.2,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut',
                                                    }}
                                                >
                                                    <MapPin className="w-8 h-8 text-floral-lavender" />
                                                </motion.div>
                                            </motion.div>
                                        );
                                    })}

                                    {/* Decorative Text */}
                                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                                        <p className="text-sm font-medium text-muted-foreground">
                                            Western Province Coverage
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
