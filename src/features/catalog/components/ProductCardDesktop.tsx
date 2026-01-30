'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Product } from '@/core/types';
import { WhatsAppButton } from '@/features/whatsapp/components/WhatsAppButton';

interface ProductCardDesktopProps {
    product: Product;
}

export function ProductCardDesktop({ product }: ProductCardDesktopProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group"
        >
            <Card className="glass-card overflow-hidden rounded-3xl border-0 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden">
                    {product.image_url ? (
                        <Image
                            src={product.image_url}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-floral">
                            <span className="text-6xl">🌸</span>
                        </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                    {/* Availability Badge */}
                    <div className="absolute right-4 top-4">
                        <Badge
                            variant={product.is_available ? 'default' : 'secondary'}
                            className={`${product.is_available ? 'bg-floral-sage/90' : 'bg-muted/90'
                                } px-3 py-1 text-sm`}
                        >
                            {product.is_available ? '✓ Available' : 'Sold Out'}
                        </Badge>
                    </div>

                    {/* Occasion Tag - Floating */}
                    {product.occasion && (
                        <div className="absolute left-4 top-4">
                            <Badge
                                variant="outline"
                                className="border-white/50 bg-white/20 text-white backdrop-blur-md"
                            >
                                {product.occasion}
                            </Badge>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="space-y-4 p-6">
                    {/* Title & Price */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                            {product.name}
                        </h3>
                        <p className="text-3xl font-bold gradient-text">
                            Rs. {product.price.toLocaleString()}
                        </p>
                    </div>

                    {/* Description */}
                    {product.description && (
                        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                            {product.description}
                        </p>
                    )}

                    {/* WhatsApp Button */}
                    <WhatsAppButton
                        product={product}
                        className="w-full transform transition-transform duration-200 hover:scale-105"
                    />
                </div>
            </Card>
        </motion.div>
    );
}
