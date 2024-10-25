import { useMemo } from "react";

import { CategoryButton } from "@/components/category-button";
import { ICategory } from "@/domain/category/models";
import { IPost } from "@/domain/post/models";

import Styles from "./post.module.css";

interface PostProps {
  readonly post: IPost;
  readonly categories: Array<ICategory>;
}

export function Post({ post, categories }: PostProps) {
  const postCategories = useMemo(() => {
    return categories.filter((category) =>
      post.categories.includes(category.id)
    );
  }, [post, categories]);

  return (
    <div className={Styles.Post}>
      <h2 className={Styles.Title}>{post.date.toDateString()}</h2>
      <p className={Styles.Description}>{post.description}</p>
      <div className={Styles.Categories}>
        {postCategories.map((category) => (
          <CategoryButton key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
