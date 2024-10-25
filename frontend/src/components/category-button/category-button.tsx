import { useCallback, useMemo, useState } from "react";

import { ICategory } from "@/domain/category/models";
import { CategoryRepository } from "@/repositories/category";
import { useFilters } from "@/providers/filter";
import { Button } from "@/components/button";
import { Star } from "@/components/star";

interface CategoryButtonProps {
  readonly category: ICategory;
}

export function CategoryButton({ category }: CategoryButtonProps) {
  const { category: currentCategory, onCategoryChange } = useFilters();

  const [favorite, setFavorite] = useState(category.favorite);
  const [loading, setLoading] = useState(false);

  const type = useMemo(() => {
    if (currentCategory.id === category.id) {
      return "primary";
    }
    return "secondary";
  }, [currentCategory.id, category.id]);

  const handleStar = useCallback(async () => {
    const newValue = !favorite;

    try {
      setLoading(true);
      setFavorite(newValue);
      await CategoryRepository.setFavorite(category, newValue);
    } catch (error) {
      setFavorite(!newValue);
    } finally {
      setLoading(false);
    }
  }, [favorite, category.id]);

  const handleChange = useCallback(() => {
    onCategoryChange(category);
  }, [category.id]);

  return (
    <Button
      label={category.name}
      icon={<Star favorite={favorite} onClick={handleStar} type={type} />}
      type={type}
      loading={loading}
      onClick={handleChange}
    />
  );
}
