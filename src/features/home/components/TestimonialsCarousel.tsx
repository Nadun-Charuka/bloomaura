'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Priya Fernando',
        location: 'Colombo',
        rating: 5,
        text: 'Absolutely stunning bouquet for my anniversary! The flowers were fresh, beautifully arranged, and delivered right on time. BloomAura exceeded all my expectations.',
        occasion: 'Anniversary',
    },
    {
        id: 2,
        name: 'Rajesh Silva',
        location: 'Gampaha',
        rating: 5,
        text: 'I ordered a custom arrangement for my mother\'s birthday, and she was over the moon! The team at BloomAura really understood what I wanted. Highly recommend!',
        occasion: 'Birthday',
    },
    {
        id: 3,
        name: 'Amara Perera',
        location: 'Kalutara',
        rating: 5,
        text: 'Same-day delivery saved the day! I forgot my wife\'s birthday, and BloomAura came through with a gorgeous bouquet in just 4 hours. Thank you so much!',
        occasion: 'Birthday',
    },
    {
        id: 4,
        name: 'Dinesh Jayawardena',
        location: 'Negombo',
        rating: 5,
        text: 'The quality and freshness of the flowers are unmatched. I\'ve ordered from BloomAura multiple times, and they never disappoint. My go-to flower shop!',
        occasion: 'Regular Customer',
    },
];

export function TestimonialsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-background to-floral-lavender/10">
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
                        What Our <span className="gradient-text-premium">Customers Say</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                        Don't just take our word for it - hear from our happy customers
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div
                        className="relative glass-premium rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-premium-lg min-h-[350px] sm:min-h-[400px] flex items-center"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        {/* Quote Icon */}
                        <Quote className="absolute top-6 left-6 sm:top-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 text-primary/20" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="w-full"
                            >
                                {/* Stars */}
                                <div className="flex justify-center gap-1 mb-6">
                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: i * 0.1, duration: 0.4 }}
                                        >
                                            <Star className="w-6 h-6 fill-primary text-primary" />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground text-center leading-relaxed mb-6 sm:mb-8 italic px-2">
                                    "{currentTestimonial.text}"
                                </p>

                                {/* Customer Info */}
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-2">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-floral-pink to-floral-lavender flex items-center justify-center text-white font-bold text-base sm:text-lg">
                                            {currentTestimonial.name.charAt(0)}
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-sm sm:text-base text-foreground">{currentTestimonial.name}</p>
                                            <p className="text-xs sm:text-sm text-muted-foreground">{currentTestimonial.location}</p>
                                        </div>
                                    </div>
                                    <div className="inline-block glass rounded-full px-3 sm:px-4 py-1 mt-2">
                                        <span className="text-xs sm:text-sm font-medium text-primary">{currentTestimonial.occasion}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-premium hover:glass-hover active:scale-95 flex items-center justify-center shadow-premium hover:shadow-premium-lg transition-all duration-300 group"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
                        </button>

                        <button
                            onClick={goToNext}
                            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-premium hover:glass-hover active:scale-95 flex items-center justify-center shadow-premium hover:shadow-premium-lg transition-all duration-300 group"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsAutoPlaying(false);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 bg-primary'
                                    : 'w-2 bg-primary/30 hover:bg-primary/50'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
