'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutSection() {
    return (
        <section id="about-section" className="py-16 md:py-24 bg-gradient-to-br from-floral-cream/50 via-background to-floral-lavender/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-premium-lg">
                            {/* Placeholder for now - you can add actual images later */}
                            <div className="absolute inset-0 bg-gradient-to-br from-floral-pink/30 via-floral-lavender/30 to-floral-sage/30 flex items-center justify-center">
                                <div className="text-center">
                                    <span className="text-9xl mb-4 block animate-float">🌸</span>
                                    <p className="text-lg text-muted-foreground font-medium">
                                        Our Story in Bloom
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <motion.div
                                className="absolute top-10 right-10 w-32 h-32 bg-floral-rose/20 rounded-full blur-2xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-8 -right-8 glass-premium rounded-2xl p-6 shadow-premium-lg hidden md:block"
                        >
                            <div className="flex gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold gradient-text-premium">5+</div>
                                    <div className="text-sm text-muted-foreground">Years</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold gradient-text-premium">10K+</div>
                                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold gradient-text-premium">50K+</div>
                                    <div className="text-sm text-muted-foreground">Bouquets</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
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
                                className="inline-block glass-premium rounded-full px-4 py-2 mb-4"
                            >
                                <span className="text-sm font-medium text-primary">About BloomAura</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                            >
                                Bringing <span className="gradient-text-premium">Nature's Beauty</span> to Your Doorstep
                            </motion.h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="space-y-4 text-lg text-muted-foreground leading-relaxed"
                        >
                            <p>
                                Founded with a passion for flowers and a commitment to excellence, BloomAura has been serving the Western Province of Sri Lanka with the freshest, most beautiful bouquets for over 5 years.
                            </p>
                            <p>
                                Every morning, we handpick the finest blooms from local farms, ensuring that each arrangement we create is a masterpiece of color, fragrance, and freshness. Our expert florists pour their hearts into every bouquet, making sure your special moments are celebrated with nature's finest.
                            </p>
                            <p>
                                Whether it's a birthday, anniversary, wedding, or just because, we're here to help you express your feelings through the timeless language of flowers.
                            </p>
                        </motion.div>

                        {/* Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
                        >
                            {[
                                { emoji: '🌟', label: 'Quality' },
                                { emoji: '🌿', label: 'Freshness' },
                                { emoji: '💝', label: 'Care' },
                            ].map((value, index) => (
                                <motion.div
                                    key={value.label}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-premium rounded-2xl p-4 text-center shadow-premium hover:shadow-premium-lg transition-all duration-300"
                                >
                                    <div className="text-3xl mb-2">{value.emoji}</div>
                                    <div className="font-semibold text-foreground">{value.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
