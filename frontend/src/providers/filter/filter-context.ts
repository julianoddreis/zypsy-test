import { createContext, useContext } from "react";

export enum FilterType {
  All = "all",
  Favorites = "favorites",
}

interface IFilterContext {
  readonly type: FilterType;
  readonly currentCategoryId: string;
  readonly onTypeChange: (type: FilterType) => void;
  readonly onCurrentCategoryIdChange: (categoryId: string) => void;
}

export const FilterContext = createContext<IFilterContext | null>(null);

export function useFilters() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }

  return context;
}
