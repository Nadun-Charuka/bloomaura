'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Product } from '@/core/types';
import { generateWhatsAppLink } from '../utils/generateMessage';

interface WhatsAppButtonProps {
    product: Product;
    className?: string;
}

export function WhatsAppButton({ product, className }: WhatsAppButtonProps) {
    const handleClick = () => {
        const link = generateWhatsAppLink({
            productName: product.name,
            price: product.price,
        });

        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={className}
        >
            <Button
                onClick={handleClick}
                disabled={!product.is_available}
                className="group relative overflow-hidden bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-lg transition-all duration-300 hover:shadow-xl disabled:opacity-50"
                size="lg"
            >
                {/* Animated Background */}
                <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                />

                {/* Icon & Text */}
                <div className="relative flex items-center justify-center gap-2">
                    <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                    <span className="font-semibold">
                        {product.is_available ? 'Consult on WhatsApp' : 'Currently Unavailable'}
                    </span>
                </div>
            </Button>
        </motion.div>
    );
}
