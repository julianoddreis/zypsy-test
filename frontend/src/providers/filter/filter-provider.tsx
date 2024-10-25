import { ReactNode, useState } from "react";
import { FilterContext, FilterType } from "./filter-context";

interface IFilterProvider {
  readonly initialCategoryId: string;
  readonly children: ReactNode;
}

export function FilterProvider({
  initialCategoryId,
  children,
}: IFilterProvider) {
  const [type, setType] = useState<FilterType>(FilterType.All);
  const [currentCategoryId, setCurrentCategoryId] =
    useState<string>(initialCategoryId);

  return (
    <FilterContext.Provider
      value={{
        type,
        currentCategoryId,
        onTypeChange: setType,
        onCurrentCategoryIdChange: setCurrentCategoryId,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
