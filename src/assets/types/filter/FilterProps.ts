import * as React from "react";

export interface FilterState {
    regions: string[];
    category: string[];
}

export interface FilterContextValue {
    filters: FilterState;
    setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
    toggleFilter: (field: keyof FilterState, value: string) => void;
}