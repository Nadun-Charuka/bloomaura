'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Product } from '@/core/types';
import { WhatsAppButton } from '@/features/whatsapp/components/WhatsAppButton';

interface ProductCardMobileProps {
    product: Product;
}

export function ProductCardMobile({ product }: ProductCardMobileProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 0.98 }}
        >
            <Card className="glass-card overflow-hidden rounded-2xl border-0 shadow-lg">
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                    {product.image_url ? (
                        <Image
                            src={product.image_url}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-floral">
                            <span className="text-4xl">🌸</span>
                        </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Availability Badge */}
                    <div className="absolute right-3 top-3">
                        <Badge
                            variant={product.is_available ? 'default' : 'secondary'}
                            className={product.is_available ? 'bg-floral-sage/90' : 'bg-muted/90'}
                        >
                            {product.is_available ? 'Available' : 'Sold Out'}
                        </Badge>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-3 p-4">
                    {/* Title & Price */}
                    <div className="space-y-1">
                        <h3 className="line-clamp-1 text-lg font-semibold text-foreground">
                            {product.name}
                        </h3>
                        <p className="text-2xl font-bold text-primary">
                            Rs. {product.price.toLocaleString()}
                        </p>
                    </div>

                    {/* Description */}
                    {product.description && (
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                            {product.description}
                        </p>
                    )}

                    {/* Occasion Tag */}
                    {product.occasion && (
                        <Badge variant="outline" className="border-floral-lavender text-floral-lavender">
                            {product.occasion}
                        </Badge>
                    )}

                    {/* WhatsApp Button */}
                    <WhatsAppButton product={product} className="w-full" />
                </div>
            </Card>
        </motion.div>
    );
}
