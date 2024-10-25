"use client";

import { FilterProvider } from "@/providers/filter";
import { CategoriesProvider, useCategories } from "@/providers/categories";
import { Sidebar } from "@/components/sidebar";
import { PostsList } from "@/components/posts-list";
import { Loader } from "@/components/loader/loader";

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
    return <Loader />;
  }

  if (categories.failed) {
    return <div>Sorry, check the dev logs and try again.</div>;
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
