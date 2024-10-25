import { FilterType, useFilters } from "@/providers/filter";

import { Radio } from "@/components/radio";
import { ICategory } from "@/domain/category/models";

import { useMemo } from "react";
import { CategoryButton } from "./components/category-button";
import Styles from "./sidebar.module.css";

interface SidebarProps {
  readonly categories: Array<ICategory>;
}

export function Sidebar({ categories }: SidebarProps) {
  const { type, onTypeChange } = useFilters();

  const filteredCategories = useMemo(() => {
    if (type === FilterType.All) {
      return categories;
    }

    return categories.filter((category) => category.favorite);
  }, [categories, type]);

  return (
    <div className={Styles.Sidebar}>
      <div className={Styles.Header}>
        <h1 className={Styles.Title}>Posts</h1>
      </div>
      <div className={Styles.Filters}>
        <div className={Styles.RadioGroup}>
          <Radio
            selected={type === FilterType.All}
            onChange={() => onTypeChange(FilterType.All)}
            id="radio-option-all"
            label={"All categories"}
          />
          <Radio
            selected={type === FilterType.Favorites}
            onChange={() => onTypeChange(FilterType.Favorites)}
            id="radio-option-favorites"
            label={"Favorites"}
          />
        </div>
        <div className={Styles.Categories}>
          {filteredCategories.map((category) => (
            <CategoryButton key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
