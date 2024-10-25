"use client";

import { useCategories } from "@/hooks/categories";
import { FilterProvider } from "@/providers/filter";

import Styles from "./page.module.css";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  const { categories } = useCategories();

  if (categories.loading) {
    return <div>Loading...</div>;
  }

  if (categories.failed) {
    return <div>Failed</div>;
  }

  return (
    <FilterProvider initialCategoryId={categories.value[0].id}>
      <div className={Styles.Page}>
        <Sidebar categories={categories.value} />
        {/* <PostsList /> */}
      </div>
    </FilterProvider>
  );
}
