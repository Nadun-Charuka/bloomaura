'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
    const scrollToProducts = () => {
        const productsSection = document.getElementById('products-section');
        productsSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-floral-cream via-background to-floral-pink/10 px-4">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-10 md:top-20 left-5 md:left-10 w-48 h-48 md:w-64 md:h-64 bg-floral-pink/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-56 h-56 md:w-80 md:h-80 bg-floral-lavender/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
            />

            {/* Floating Flower Emojis - Reduced for mobile */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-4xl md:text-6xl opacity-10 md:opacity-20"
                    style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 20}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.5,
                    }}
                >
                    {['🌸', '🌺', '🌻', '🌷', '🌹', '💐'][i]}
                </motion.div>
            ))}

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="space-y-4 md:space-y-6"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 glass-premium rounded-full px-4 py-2 md:px-6 md:py-3 shadow-premium text-xs md:text-sm"
                    >
                        <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                        <span className="font-medium text-foreground">
                            Premium Flower Delivery in Sri Lanka
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight px-2"
                        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                    >
                        <span className="gradient-text-premium">
                            Bloom Your
                        </span>
                        <br />
                        <span className="text-foreground">
                            Special Moments
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
                        style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                        Handcrafted bouquets delivered fresh to your doorstep.
                        <br className="hidden sm:block" />
                        Same-day delivery across Western Province.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-2 md:pt-4 px-4"
                    >
                        <Button
                            size="lg"
                            onClick={scrollToProducts}
                            className="group w-full sm:w-auto bg-gradient-to-r from-floral-pink to-floral-lavender hover:from-floral-rose hover:to-floral-pink text-white shadow-premium-lg hover:shadow-glow transition-all duration-300 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-2xl"
                        >
                            Shop Bouquets
                            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => {
                                const aboutSection = document.getElementById('about-section');
                                aboutSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full sm:w-auto glass-premium border-2 border-primary/30 hover:border-primary/50 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-2xl transition-all duration-300"
                        >
                            Learn More
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-wrap justify-center items-center gap-4 md:gap-8 pt-4 md:pt-8 text-xs md:text-sm text-muted-foreground px-4"
                    >
                        <div className="flex items-center gap-1.5 md:gap-2">
                            <span className="text-lg md:text-2xl">✓</span>
                            <span>Fresh Daily</span>
                        </div>
                        <div className="flex items-center gap-1.5 md:gap-2">
                            <span className="text-lg md:text-2xl">✓</span>
                            <span>Same-Day Delivery</span>
                        </div>
                        <div className="flex items-center gap-1.5 md:gap-2">
                            <span className="text-lg md:text-2xl">✓</span>
                            <span>100% Satisfaction</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Hidden on mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
