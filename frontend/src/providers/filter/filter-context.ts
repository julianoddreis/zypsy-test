import { createContext, useContext } from "react";

import { ICategory } from "@/domain/category/models";

export enum FilterType {
  All = "all",
  Favorites = "favorites",
}

interface IFilterContext {
  readonly type: FilterType;
  readonly category: ICategory;
  readonly onTypeChange: (type: FilterType) => void;
  readonly onCategoryChange: (category: ICategory) => void;
}

export const FilterContext = createContext<IFilterContext | null>(null);

export function useFilters() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }

  return context;
}
