'use client';

import { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { OCCASIONS } from '@/core/constants';
import type { FilterOptions } from '@/core/types';

interface FilterDrawerProps {
    filters: FilterOptions;
    onFilterChange: (filters: Partial<FilterOptions>) => void;
    onReset: () => void;
}

export function FilterDrawer({ filters, onFilterChange, onReset }: FilterDrawerProps) {
    const [open, setOpen] = useState(false);

    const hasActiveFilters =
        filters.price_sort !== null ||
        filters.availability !== null ||
        filters.occasion !== null;

    const activeFilterCount = [
        filters.price_sort,
        filters.availability,
        filters.occasion,
    ].filter((f) => f !== null).length;

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="glass-premium relative shadow-premium hover:shadow-premium-lg transition-all duration-300 active:scale-95 h-11 px-4"
                >
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    <span className="text-sm font-medium">Filters</span>
                    {hasActiveFilters && (
                        <Badge className="ml-2 h-5 w-5 rounded-full p-0 text-xs bg-primary">
                            {activeFilterCount}
                        </Badge>
                    )}
                </Button>
            </DialogTrigger>
            <DialogContent className="glass-premium max-h-[85vh] overflow-y-auto rounded-3xl sm:max-w-md">
                <DialogHeader className="pb-4">
                    <DialogTitle className="flex items-center justify-between text-xl font-bold" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                        <span>Filter Products</span>
                        {hasActiveFilters && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                    onReset();
                                }}
                                className="h-9 text-xs hover:bg-destructive/10 hover:text-destructive active:scale-95"
                            >
                                <X className="mr-1.5 h-4 w-4" />
                                Reset All
                            </Button>
                        )}
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 py-2">
                    {/* Price Sort */}
                    <div className="space-y-3">
                        <label className="text-sm font-semibold text-foreground" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                            Sort by Price
                        </label>
                        <Select
                            value={filters.price_sort || 'none'}
                            onValueChange={(value) =>
                                onFilterChange({
                                    price_sort: value === 'none' ? null : (value as 'asc' | 'desc'),
                                })
                            }
                        >
                            <SelectTrigger className="glass-premium h-12 shadow-premium">
                                <SelectValue placeholder="Select order" />
                            </SelectTrigger>
                            <SelectContent className="glass-premium">
                                <SelectItem value="none" className="h-11">No sorting</SelectItem>
                                <SelectItem value="asc" className="h-11">Low to High</SelectItem>
                                <SelectItem value="desc" className="h-11">High to Low</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Availability */}
                    <div className="space-y-3">
                        <label className="text-sm font-semibold text-foreground" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                            Availability
                        </label>
                        <div className="flex flex-wrap gap-2">
                            <Badge
                                variant={filters.availability === null ? 'default' : 'outline'}
                                className="cursor-pointer px-5 py-2.5 text-sm font-medium transition-all duration-200 active:scale-95 hover:shadow-premium"
                                onClick={() => onFilterChange({ availability: null })}
                            >
                                All
                            </Badge>
                            <Badge
                                variant={filters.availability === true ? 'default' : 'outline'}
                                className="cursor-pointer px-5 py-2.5 text-sm font-medium transition-all duration-200 active:scale-95 hover:shadow-premium"
                                onClick={() => onFilterChange({ availability: true })}
                            >
                                ✓ Available
                            </Badge>
                            <Badge
                                variant={filters.availability === false ? 'default' : 'outline'}
                                className="cursor-pointer px-5 py-2.5 text-sm font-medium transition-all duration-200 active:scale-95 hover:shadow-premium"
                                onClick={() => onFilterChange({ availability: false })}
                            >
                                Sold Out
                            </Badge>
                        </div>
                    </div>

                    {/* Occasion */}
                    <div className="space-y-3">
                        <label className="text-sm font-semibold text-foreground" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                            Occasion
                        </label>
                        <Select
                            value={filters.occasion || 'none'}
                            onValueChange={(value) =>
                                onFilterChange({ occasion: value === 'none' ? null : value })
                            }
                        >
                            <SelectTrigger className="glass-premium h-12 shadow-premium">
                                <SelectValue placeholder="Select occasion" />
                            </SelectTrigger>
                            <SelectContent className="glass-premium max-h-[300px]">
                                <SelectItem value="none" className="h-11">All Occasions</SelectItem>
                                {OCCASIONS.map((occasion) => (
                                    <SelectItem key={occasion} value={occasion} className="h-11">
                                        {occasion}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Apply Button */}
                    <Button
                        onClick={() => setOpen(false)}
                        className="w-full h-12 bg-gradient-to-r from-floral-pink to-floral-lavender hover:from-floral-rose hover:to-floral-pink text-white font-semibold shadow-premium-lg hover:shadow-glow transition-all duration-300 active:scale-95 rounded-xl"
                        size="lg"
                    >
                        Apply Filters
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
