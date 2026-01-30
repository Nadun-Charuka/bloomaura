'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Product } from '@/core/types';
import { WhatsAppButton } from '@/features/whatsapp/components/WhatsAppButton';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardMobileProps {
    product: Product;
}

export function ProductCardMobile({ product }: ProductCardMobileProps) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 0.98 }}
            className="group"
        >
            <Card className="glass-premium overflow-hidden rounded-2xl border-0 shadow-premium active:shadow-premium-lg transition-all duration-300">
                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden">
                    {product.image_url ? (
                        <motion.div
                            whileTap={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="h-full w-full"
                        >
                            <Image
                                src={product.image_url}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                priority={false}
                            />
                        </motion.div>
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-floral">
                            <motion.span
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                className="text-6xl"
                            >
                                🌸
                            </motion.span>
                        </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Availability Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="absolute right-3 top-3"
                    >
                        <Badge
                            variant={product.is_available ? 'default' : 'secondary'}
                            className={`${product.is_available ? 'bg-floral-sage/90 hover:bg-floral-sage' : 'bg-muted/90'
                                } px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-sm`}
                        >
                            {product.is_available ? '✓ Available' : 'Sold Out'}
                        </Badge>
                    </motion.div>

                    {/* Occasion Tag */}
                    {product.occasion && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="absolute left-3 top-3"
                        >
                            <Badge
                                variant="outline"
                                className="border-white/60 bg-white/25 text-white backdrop-blur-md font-medium shadow-lg text-xs"
                            >
                                {product.occasion}
                            </Badge>
                        </motion.div>
                    )}

                    {/* Like Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsLiked(!isLiked);
                        }}
                        className="absolute bottom-3 right-3 w-10 h-10 rounded-full glass-premium flex items-center justify-center shadow-lg active:scale-90 transition-transform"
                    >
                        <Heart
                            className={`w-5 h-5 transition-colors ${isLiked ? 'fill-primary text-primary' : 'text-white'
                                }`}
                        />
                    </motion.button>
                </div>

                {/* Content Section */}
                <div className="space-y-3 p-4">
                    {/* Title & Price */}
                    <div className="space-y-1.5">
                        <h3
                            className="line-clamp-2 text-lg font-bold text-foreground leading-tight"
                            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                        >
                            {product.name}
                        </h3>
                        <p className="text-2xl font-bold gradient-text-premium">
                            Rs. {product.price.toLocaleString()}
                        </p>
                    </div>

                    {/* Description */}
                    {product.description && (
                        <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed">
                            {product.description}
                        </p>
                    )}

                    {/* WhatsApp Button */}
                    <WhatsAppButton
                        product={product}
                        className="w-full transform transition-all duration-300 active:scale-95 shadow-premium hover:shadow-premium-lg"
                    />
                </div>
            </Card>
        </motion.div>
    );
}
