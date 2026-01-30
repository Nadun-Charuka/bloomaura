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
                <Button variant="outline" className="glass relative">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                    {hasActiveFilters && (
                        <Badge className="ml-2 h-5 w-5 rounded-full p-0 text-xs">
                            {activeFilterCount}
                        </Badge>
                    )}
                </Button>
            </DialogTrigger>
            <DialogContent className="glass-card max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center justify-between">
                        <span>Filter Products</span>
                        {hasActiveFilters && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                    onReset();
                                    setOpen(false);
                                }}
                                className="h-8 text-xs"
                            >
                                <X className="mr-1 h-3 w-3" />
                                Reset All
                            </Button>
                        )}
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* Price Sort */}
                    <div className="space-y-3">
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
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-foreground">Availability</label>
                        <div className="flex flex-wrap gap-2">
                            <Badge
                                variant={filters.availability === null ? 'default' : 'outline'}
                                className="cursor-pointer px-4 py-2"
                                onClick={() => onFilterChange({ availability: null })}
                            >
                                All
                            </Badge>
                            <Badge
                                variant={filters.availability === true ? 'default' : 'outline'}
                                className="cursor-pointer px-4 py-2"
                                onClick={() => onFilterChange({ availability: true })}
                            >
                                Available
                            </Badge>
                            <Badge
                                variant={filters.availability === false ? 'default' : 'outline'}
                                className="cursor-pointer px-4 py-2"
                                onClick={() => onFilterChange({ availability: false })}
                            >
                                Sold Out
                            </Badge>
                        </div>
                    </div>

                    {/* Occasion */}
                    <div className="space-y-3">
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

                    {/* Apply Button */}
                    <Button
                        onClick={() => setOpen(false)}
                        className="w-full"
                        size="lg"
                    >
                        Apply Filters
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
