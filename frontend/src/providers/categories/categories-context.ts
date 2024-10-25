import { createContext, useContext } from "react";

import { Async } from "@/common/async";
import { ICategory } from "@/domain/category/models";

interface ICategoriesContext {
  readonly categories: Async<Array<ICategory>>;
  readonly refresh: () => void;
}

export const CategoriesContext = createContext<ICategoriesContext | null>(null);

export function useCategories() {
  const context = useContext(CategoriesContext);

  if (!context) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }

  return context;
}
