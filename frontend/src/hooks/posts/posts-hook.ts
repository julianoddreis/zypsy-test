import { useEffect, useState } from "react";

import { Async } from "@/common/async/async";
import { IPost } from "@/domain/post/models";
import { CategoryRepository } from "@/repositories/category";

interface PostsHook {
  readonly posts: Async<IPost[]>;
}

export function usePosts(categoryId: string): PostsHook {
  const [task, setTask] = useState<Async<IPost[]>>({ loading: true });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setTask({ loading: true });
        const response = await CategoryRepository.listPosts(categoryId);
        setTask({ done: true, value: response });
      } catch (error: any) {
        setTask({ failed: true, error });
      }
    };

    fetchPosts();
  }, [categoryId]);

  return {
    posts: task,
  };
}
