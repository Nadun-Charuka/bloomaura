'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Product } from '@/core/types';
import { WhatsAppButton } from '@/features/whatsapp/components/WhatsAppButton';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardDesktopProps {
    product: Product;
}

export function ProductCardDesktop({ product }: ProductCardDesktopProps) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.03, y: -8 }}
            className="group"
        >
            <Card className="glass-premium overflow-hidden rounded-3xl border-0 shadow-premium hover:shadow-premium-lg transition-all duration-500">
                {/* Image Section */}
                <div className="relative h-72 w-full overflow-hidden">
                    {product.image_url ? (
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="h-full w-full"
                        >
                            <Image
                                src={product.image_url}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-floral">
                            <motion.span
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                className="text-7xl"
                            >
                                🌸
                            </motion.span>
                        </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Availability Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute right-4 top-4"
                    >
                        <Badge
                            variant={product.is_available ? 'default' : 'secondary'}
                            className={`${product.is_available ? 'bg-floral-sage/90 hover:bg-floral-sage' : 'bg-muted/90'
                                } px-3 py-1.5 text-sm font-semibold shadow-lg backdrop-blur-sm`}
                        >
                            {product.is_available ? '✓ Available' : 'Sold Out'}
                        </Badge>
                    </motion.div>

                    {/* Occasion Tag */}
                    {product.occasion && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="absolute left-4 top-4"
                        >
                            <Badge
                                variant="outline"
                                className="border-white/60 bg-white/25 text-white backdrop-blur-md font-medium shadow-lg"
                            >
                                {product.occasion}
                            </Badge>
                        </motion.div>
                    )}

                    {/* Like Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsLiked(!isLiked)}
                        className="absolute bottom-4 right-4 w-10 h-10 rounded-full glass-premium flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <Heart
                            className={`w-5 h-5 transition-colors ${isLiked ? 'fill-primary text-primary' : 'text-white'
                                }`}
                        />
                    </motion.button>
                </div>

                {/* Content Section */}
                <div className="space-y-4 p-6">
                    {/* Title & Price */}
                    <div className="space-y-2">
                        <h3
                            className="text-xl font-bold text-foreground transition-colors group-hover:text-primary line-clamp-2"
                            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                        >
                            {product.name}
                        </h3>
                        <p className="text-3xl font-bold gradient-text-premium">
                            Rs. {product.price.toLocaleString()}
                        </p>
                    </div>

                    {/* Description */}
                    {product.description && (
                        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                            {product.description}
                        </p>
                    )}

                    {/* WhatsApp Button */}
                    <WhatsAppButton
                        product={product}
                        className="w-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    />
                </div>
            </Card>
        </motion.div>
    );
}
