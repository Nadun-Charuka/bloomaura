'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/core/supabase/client';
import type { Product, FilterOptions } from '@/core/types';

interface UseCatalogReturn {
  products: Product[];
  filteredProducts: Product[];
  filters: FilterOptions;
  loading: boolean;
  error: string | null;
  setFilters: (filters: Partial<FilterOptions>) => void;
  refreshProducts: () => Promise<void>;
}

export function useCatalog(): UseCatalogReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFiltersState] = useState<FilterOptions>({
    price_sort: null,
    availability: null,
    occasion: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from Supabase
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      setProducts(data || []);
      setFilteredProducts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Apply filters to products
  const applyFilters = useCallback(() => {
    let filtered = [...products];

    // Filter by availability
    if (filters.availability !== null) {
      filtered = filtered.filter((p) => p.is_available === filters.availability);
    }

    // Filter by occasion
    if (filters.occasion) {
      filtered = filtered.filter((p) => p.occasion === filters.occasion);
    }

    // Sort by price
    if (filters.price_sort) {
      filtered.sort((a, b) => {
        return filters.price_sort === 'asc' ? a.price - b.price : b.price - a.price;
      });
    }

    setFilteredProducts(filtered);
  }, [products, filters]);

  // Update filters
  const setFilters = useCallback((newFilters: Partial<FilterOptions>) => {
    setFiltersState((prev) => ({ ...prev, ...newFilters }));
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Apply filters when they change
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  // Set up real-time subscription
  useEffect(() => {
    const channel = supabase
      .channel('products-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'products',
        },
        () => {
          fetchProducts();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchProducts]);

  return {
    products,
    filteredProducts,
    filters,
    loading,
    error,
    setFilters,
    refreshProducts: fetchProducts,
  };
}
