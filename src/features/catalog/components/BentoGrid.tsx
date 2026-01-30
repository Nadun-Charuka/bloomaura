'use client';

import { motion } from 'framer-motion';
import { ProductCardMobile } from './ProductCardMobile';
import { ProductCardDesktop } from './ProductCardDesktop';
import type { Product } from '@/core/types';

interface BentoGridProps {
    products: Product[];
    isMobile?: boolean;
}

export function BentoGrid({ products, isMobile = false }: BentoGridProps) {
    const ProductCard = isMobile ? ProductCardMobile : ProductCardDesktop;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:gap-5 md:gap-6"
        >
            {products.map((product, index) => (
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                    <ProductCard product={product} />
                </motion.div>
            ))}
        </motion.div>
    );
}
