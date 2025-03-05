import {FilterContextValue, FilterState} from "../assets/types/filter/FilterProps.ts";
import {createContext, ReactNode, useContext, useState} from "react";

const FilterContext = createContext<FilterContextValue | undefined>(undefined);

export function FilterProvider({ children }: {children: ReactNode}) {
    const [filters, setFilter] = useState<FilterState>({
        regions: [],
        category: []
    });

    function toggleFilter(field: keyof FilterState, value: string) {
        setFilter((prev) => {
            const currentArray = prev[field];
            if (currentArray.includes(value)) {
                return {
                    ...prev,
                    [field]: currentArray.filter((r) => r !== value)
                };
            } else {
                return {
                    ...prev,
                    [field]: [...currentArray, value]
                };
            }
        });
    }

    return (
        <FilterContext.Provider value={{ filters, setFilter, toggleFilter }}>
            {children}
            </FilterContext.Provider>
    );
}

export function UseFilter() {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be defined');
    }
    return context;
}