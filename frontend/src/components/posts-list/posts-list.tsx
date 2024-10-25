import { ICategory } from "@/domain/category/models";
import { usePosts } from "@/hooks/posts";
import { useFilters } from "@/providers/filter";
import { Loader } from "@/components/loader";

import { Post } from "./post";

import Styles from "./posts-list.module.css";

interface PostsList {
  readonly categories: Array<ICategory>;
}

export function PostsList({ categories }: PostsList) {
  const { category } = useFilters();

  const { posts } = usePosts(category.id);

  if (posts.loading) {
    return <Loader />;
  }

  if (posts.failed) {
    return <div>Sorry, check the dev logs and try again.</div>;
  }

  return (
    <div className={Styles.Component}>
      <div className={Styles.List}>
        <div className={Styles.Header}>
          <h2 className={Styles.Title}>
            Found {posts.value.length} posts{" "}
            {posts.value.length > 0 ? `of "${category.name}"` : ""}
          </h2>
        </div>
        <div className={Styles.Posts}>
          {posts.value.map((post) => (
            <Post key={post.id} post={post} categories={categories} />
          ))}
        </div>
      </div>
    </div>
  );
}
