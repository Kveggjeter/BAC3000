import {FilterContextValue, FilterState} from "../assets/types/filter/FilterProps.ts";
import {createContext, ReactNode, useContext, useState} from "react";

/**
 * Gives access to the global filter-values and the functions used for interacting with them,
 * as for example filtering of regions and categories (Currently only filter alternatives)
 */
const FilterContext = createContext<FilterContextValue | undefined>(undefined);

/**
 * Provider component that holds the state of the active filters and gives functionality to
 * update the states
 *
 * @param children Children component that has access to the context
 * @returns TSX.Element Returns a context provider
 */
export function FilterProvider({ children }: {children: ReactNode}) {
    const [filters, setFilter] = useState<FilterState>({
        regions: [],
        category: []
    });

    /**
     * Adding or removing a filter-value from the given category
     *
     * @param field Field to be updated
     * @param value Value that are to be toggled in the filter
     */
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

/**
 * Filter hook for access to FilterContext.
 * Used on every component withing the <FilterProvider>
 *
 * @throws {Error} throws an error if the hook is not defined
 * @returns {FilterContextValue} returns an object with filter values and functionality
 */
export function UseFilter() {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be defined');
    }
    return context;
}