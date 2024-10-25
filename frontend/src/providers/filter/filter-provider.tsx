import { ReactNode, useCallback, useState } from "react";

import { FilterContext, FilterType } from "./filter-context";
import { ICategory } from "@/domain/category/models";
import { CategoryRepository } from "@/repositories/category";
import { useCategories } from "@/providers/categories";

interface IFilterProvider {
  readonly children: ReactNode;
}

export function FilterProvider({ children }: IFilterProvider) {
  const { getDefaultCategory } = useCategories();

  const [type, setType] = useState<FilterType>(FilterType.All);
  const [category, setCategory] = useState<ICategory>(getDefaultCategory());

  const handleChangeCategory = useCallback((category: ICategory) => {
    setCategory(category);
    CategoryRepository.setDefaultCategory(category);
  }, []);

  return (
    <FilterContext.Provider
      value={{
        type,
        category: category,
        onTypeChange: setType,
        onCategoryChange: handleChangeCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
