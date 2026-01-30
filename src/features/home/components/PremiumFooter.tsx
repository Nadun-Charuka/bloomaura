'use client';

import { motion } from 'framer-motion';
import { Flower2, Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';
import { useState } from 'react';

export function PremiumFooter() {
    const [email, setEmail] = useState('');
    const [showBackToTop, setShowBackToTop] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        alert('Thank you for subscribing! (This is a demo)');
        setEmail('');
    };

    return (
        <footer className="relative bg-gradient-to-br from-floral-cream/50 via-background to-floral-lavender/20 border-t border-border/50">
            <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-floral-pink to-floral-lavender shadow-lg">
                                <Flower2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold gradient-text">BloomAura</h3>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            Bringing nature's beauty to your doorstep with fresh, handcrafted bouquets across Western Province, Sri Lanka.
                        </p>
                        {/* Social Media */}
                        <div className="flex gap-2 sm:gap-3 pt-2">
                            {[
                                { icon: Facebook, href: '#' },
                                { icon: Instagram, href: '#' },
                                { icon: Twitter, href: '#' },
                            ].map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-premium hover:glass-hover flex items-center justify-center shadow-premium hover:shadow-premium-lg transition-all duration-300 active:scale-95"
                                    >
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        <h4 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {['About Us', 'Our Products', 'Delivery Info', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group active:scale-95"
                                    >
                                        <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h4 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                            Contact Us
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm text-muted-foreground">+94 77 123 4567</p>
                                    <p className="text-xs text-muted-foreground/70">Mon-Sat, 8AM-8PM</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-muted-foreground">hello@bloomaura.lk</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-muted-foreground">
                                    Colombo, Western Province<br />Sri Lanka
                                </p>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h4 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                            Newsletter
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe for exclusive offers and flower care tips
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                required
                                className="w-full px-4 py-2 rounded-xl glass-premium border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-floral-pink to-floral-lavender hover:from-floral-rose hover:to-floral-pink text-white font-medium shadow-premium hover:shadow-premium-lg transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Payment Methods */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="border-t border-border/50 pt-8 mb-8"
                >
                    <p className="text-sm text-muted-foreground text-center mb-4">We Accept</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Visa', 'Mastercard', 'PayPal', 'Cash on Delivery'].map((method) => (
                            <div
                                key={method}
                                className="glass-premium rounded-lg px-4 py-2 text-sm font-medium text-foreground shadow-premium"
                            >
                                {method}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="border-t border-border/50 pt-8 text-center"
                >
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} BloomAura. All rights reserved. Made with 💝 for flower lovers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <span>•</span>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        <span>•</span>
                        <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
                    </div>
                </motion.div>
            </div>

            {/* Back to Top Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-floral-pink to-floral-lavender text-white shadow-premium-lg hover:shadow-glow flex items-center justify-center z-50 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
        </footer>
    );
}
