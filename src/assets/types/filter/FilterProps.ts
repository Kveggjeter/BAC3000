import * as React from "react";

/**
 * Type casting for FilterContext.tsx
 * Giving regions and category types for usage in filtering
 */
export interface FilterState {
    regions: string[];
    category: string[];
}

/**
 * Type casting for FilterContext.tsx
 * Usage when declaring the React.createContext
 */
export interface FilterContextValue {
    filters: FilterState;
    setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
    toggleFilter: (field: keyof FilterState, value: string) => void;
}