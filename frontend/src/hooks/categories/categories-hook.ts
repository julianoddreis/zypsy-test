import { useEffect, useState } from "react";

import { Async } from "@/common/async/async";
import { CategoryRepository } from "@/repositories/category";
import { ICategory } from "@/domain/category/models";

interface CategoriesHook {
  readonly categories: Async<ICategory[]>;
}

export function useCategories(): CategoriesHook {
  const [task, setTask] = useState<Async<ICategory[]>>({ loading: true });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setTask({ loading: true });
        const response = await CategoryRepository.list();
        setTask({ done: true, value: response });
      } catch (error: any) {
        setTask({ failed: true, error });
      }
    };

    fetchCategories();
  }, []);

  return {
    categories: task,
  };
}
