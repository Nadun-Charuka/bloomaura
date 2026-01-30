'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Flower2, Loader2 } from 'lucide-react';
import { DynamicBanner } from '@/features/catalog/components/DynamicBanner';
import { BentoGrid } from '@/features/catalog/components/BentoGrid';
import { FilterSidebar } from '@/features/catalog/components/FilterSidebar';
import { FilterDrawer } from '@/features/catalog/components/FilterDrawer';
import { useCatalog } from '@/features/catalog/view-models/useCatalog';
import { HeroSection } from '@/features/home/components/HeroSection';
import { FeaturesBanner } from '@/features/home/components/FeaturesBanner';
import { AboutSection } from '@/features/home/components/AboutSection';
import { LocationSection } from '@/features/home/components/LocationSection';
import { DeliverySection } from '@/features/home/components/DeliverySection';
import { TestimonialsCarousel } from '@/features/home/components/TestimonialsCarousel';
import { PremiumFooter } from '@/features/home/components/PremiumFooter';

export default function HomePage() {
  const {
    filteredProducts,
    filters,
    loading,
    error,
    setFilters,
    refreshProducts,
  } = useCatalog();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleResetFilters = () => {
    setFilters({
      price_sort: null,
      availability: null,
      occasion: null,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-floral-cream via-background to-floral-pink/10">
      {/* Premium Header */}
      <header className="glass-premium sticky top-0 z-50 border-b border-border/50 backdrop-blur-lg shadow-premium">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 md:gap-3"
          >
            <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-floral-pink to-floral-lavender shadow-lg">
              <Flower2 className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                BloomAura
              </h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Fresh Flowers, Delivered</p>
            </div>
          </motion.div>

          {/* Mobile Filter Button */}
          {isMobile && (
            <FilterDrawer
              filters={filters}
              onFilterChange={setFilters}
              onReset={handleResetFilters}
            />
          )}
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Banner */}
      <FeaturesBanner />

      {/* Products Section */}
      <section id="products-section" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-background to-floral-cream/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            {!isMobile && (
              <aside className="hidden w-64 flex-shrink-0 lg:block">
                <FilterSidebar
                  filters={filters}
                  onFilterChange={setFilters}
                  onReset={handleResetFilters}
                />
              </aside>
            )}

            {/* Products Section */}
            <div className="flex-1 space-y-6">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-6 md:mb-8"
              >
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Our <span className="gradient-text-premium">Premium Collection</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                  Handpicked bouquets crafted with love and care
                </p>
              </motion.div>

              {/* Dynamic Banner */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <DynamicBanner />
              </motion.div>

              {/* Products Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                    Available Bouquets
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {filteredProducts.length} bouquet{filteredProducts.length !== 1 ? 's' : ''} available
                  </p>
                </div>
              </div>

              {/* Loading State */}
              {loading && (
                <div className="flex min-h-[400px] items-center justify-center">
                  <div className="text-center">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                    <p className="mt-4 text-muted-foreground">Loading beautiful bouquets...</p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="glass-card rounded-2xl p-8 text-center">
                  <p className="text-destructive">Error: {error}</p>
                  <button
                    onClick={refreshProducts}
                    className="mt-4 text-sm text-primary hover:underline"
                  >
                    Try again
                  </button>
                </div>
              )}

              {/* Empty State */}
              {!loading && !error && filteredProducts.length === 0 && (
                <div className="glass-card rounded-2xl p-12 text-center">
                  <Flower2 className="mx-auto h-16 w-16 text-muted-foreground/50" />
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    No bouquets found
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Try adjusting your filters or check back later for new arrivals
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="mt-4 text-sm text-primary hover:underline"
                  >
                    Reset filters
                  </button>
                </div>
              )}

              {/* Products Grid */}
              {!loading && !error && filteredProducts.length > 0 && (
                <BentoGrid products={filteredProducts} isMobile={isMobile} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Location Section */}
      <LocationSection />

      {/* Delivery Section */}
      <DeliverySection />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Premium Footer */}
      <PremiumFooter />
    </div>
  );
}
