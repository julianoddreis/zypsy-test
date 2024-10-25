import { ReactNode, useState } from "react";
import { FilterContext, FilterType } from "./filter-context";
import { ICategory } from "@/domain/category/models";
import React from "react";

interface IFilterProvider {
  readonly initialCategory: ICategory;
  readonly children: ReactNode;
}

export function FilterProvider({ initialCategory, children }: IFilterProvider) {
  const [type, setType] = useState<FilterType>(FilterType.All);
  const [category, setCategory] = useState<ICategory>(initialCategory);

  return (
    <FilterContext.Provider
      value={{
        type,
        category: category,
        onTypeChange: setType,
        onCategoryChange: setCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
