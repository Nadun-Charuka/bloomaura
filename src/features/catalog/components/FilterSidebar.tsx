'use client';

import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

interface FilterSidebarProps {
    filters: FilterOptions;
    onFilterChange: (filters: Partial<FilterOptions>) => void;
    onReset: () => void;
}

export function FilterSidebar({ filters, onFilterChange, onReset }: FilterSidebarProps) {
    const hasActiveFilters =
        filters.price_sort !== null ||
        filters.availability !== null ||
        filters.occasion !== null;

    return (
        <div className="glass-card sticky top-4 space-y-6 rounded-2xl p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <SlidersHorizontal className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">Filters</h3>
                </div>
                {hasActiveFilters && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onReset}
                        className="h-8 text-xs"
                    >
                        <X className="mr-1 h-3 w-3" />
                        Reset
                    </Button>
                )}
            </div>

            {/* Price Sort */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Sort by Price</label>
                <Select
                    value={filters.price_sort || 'none'}
                    onValueChange={(value) =>
                        onFilterChange({
                            price_sort: value === 'none' ? null : (value as 'asc' | 'desc'),
                        })
                    }
                >
                    <SelectTrigger className="glass">
                        <SelectValue placeholder="Select order" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="none">No sorting</SelectItem>
                        <SelectItem value="asc">Low to High</SelectItem>
                        <SelectItem value="desc">High to Low</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Availability */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Availability</label>
                <div className="flex gap-2">
                    <Badge
                        variant={filters.availability === null ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => onFilterChange({ availability: null })}
                    >
                        All
                    </Badge>
                    <Badge
                        variant={filters.availability === true ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => onFilterChange({ availability: true })}
                    >
                        Available
                    </Badge>
                    <Badge
                        variant={filters.availability === false ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => onFilterChange({ availability: false })}
                    >
                        Sold Out
                    </Badge>
                </div>
            </div>

            {/* Occasion */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Occasion</label>
                <Select
                    value={filters.occasion || 'none'}
                    onValueChange={(value) =>
                        onFilterChange({ occasion: value === 'none' ? null : value })
                    }
                >
                    <SelectTrigger className="glass">
                        <SelectValue placeholder="Select occasion" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="none">All Occasions</SelectItem>
                        {OCCASIONS.map((occasion) => (
                            <SelectItem key={occasion} value={occasion}>
                                {occasion}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Active Filters Count */}
            {hasActiveFilters && (
                <div className="rounded-lg bg-primary/10 p-3 text-center">
                    <p className="text-sm font-medium text-primary">
                        {[filters.price_sort, filters.availability, filters.occasion].filter(
                            (f) => f !== null
                        ).length}{' '}
                        active filter(s)
                    </p>
                </div>
            )}
        </div>
    );
}
