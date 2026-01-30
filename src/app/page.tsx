'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Flower2, Loader2 } from 'lucide-react';
import { DynamicBanner } from '@/features/catalog/components/DynamicBanner';
import { BentoGrid } from '@/features/catalog/components/BentoGrid';
import { FilterSidebar } from '@/features/catalog/components/FilterSidebar';
import { FilterDrawer } from '@/features/catalog/components/FilterDrawer';
import { useCatalog } from '@/features/catalog/view-models/useCatalog';

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
      {/* Header */}
      <header className="glass-card sticky top-0 z-50 border-b border-border/50 backdrop-blur-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-floral-pink to-floral-lavender shadow-lg">
              <Flower2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">BloomAura</h1>
              <p className="text-xs text-muted-foreground">Fresh Flowers, Delivered</p>
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 lg:px-8">
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
            {/* Dynamic Banner */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DynamicBanner />
            </motion.div>

            {/* Products Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Our Collection
                </h2>
                <p className="text-sm text-muted-foreground">
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
      </main>

      {/* Footer */}
      <footer className="glass-card mt-16 border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <p className="text-sm text-muted-foreground">
            © 2026 BloomAura. Fresh flower delivery across Western Province, Sri Lanka.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Made with 💝 for flower lovers
          </p>
        </div>
      </footer>
    </div>
  );
}
