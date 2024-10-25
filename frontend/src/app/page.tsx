"use client";

import { FilterProvider } from "@/providers/filter";
import { Sidebar } from "@/components/sidebar";
import { PostsList } from "@/components/posts-list";
import { CategoriesProvider, useCategories } from "@/providers/categories";

import Styles from "./page.module.css";

export default function HomeContainer() {
  return (
    <CategoriesProvider>
      <Home />
    </CategoriesProvider>
  );
}

function Home() {
  const { categories } = useCategories();

  if (categories.loading) {
    return <div>Loading...</div>;
  }

  if (categories.failed) {
    return <div>Failed</div>;
  }

  return (
    <FilterProvider initialCategory={categories.value[0]}>
      <div className={Styles.Page}>
        <Sidebar categories={categories.value} />
        <PostsList categories={categories.value} />
      </div>
    </FilterProvider>
  );
}
