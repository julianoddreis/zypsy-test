import { ReactNode, useCallback, useEffect, useState } from "react";

import { CategoriesContext } from "./categories-context";
import { Async } from "@/common/async";
import { ICategory } from "@/domain/category/models";
import { CategoryRepository } from "@/repositories/category";

interface ICategoriesProvider {
  readonly children: ReactNode;
}

export function CategoriesProvider({ children }: ICategoriesProvider) {
  const [task, setTask] = useState<Async<Array<ICategory>>>({ loading: true });

  const fetchCategories = useCallback(async (loader: boolean) => {
    try {
      if (loader) {
        setTask({ loading: true });
      }
      const response = await CategoryRepository.list();
      setTask({ done: true, value: response });
    } catch (error: any) {
      setTask({ failed: true, error });
    }
  }, []);

  const refresh = useCallback(() => {
    fetchCategories(false);
  }, [fetchCategories]);

  useEffect(() => {
    fetchCategories(true);
  }, [fetchCategories]);

  const getDefaultCategory = useCallback(() => {
    const stored = CategoryRepository.getDefaultCategory();
    if (stored) {
      return stored;
    }

    if (!task.done) {
      throw new Error("Default category called before categories are loaded");
    }

    return task.value[0];
  }, [task]);

  return (
    <CategoriesContext.Provider
      value={{ categories: task, refresh, getDefaultCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
