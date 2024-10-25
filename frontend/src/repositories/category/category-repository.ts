import { Assert } from "@/common/assert";
import { createCategory, ICategory } from "@/domain/category/models";
import { ICategoryRepository } from "@/domain/category/repository";
import { createPost, IPost } from "@/domain/post/models";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const DEFAULT_CATEGORY_STORAGE_KEY = "@zypsy/default-category";

class _CategoryRepository implements ICategoryRepository {
  async list(): Promise<Array<ICategory>> {
    const response = await fetch(`${API_URL}/categories`);

    if (response.status !== 200) {
      throw new Error("Failed to list categories");
    }

    const json = await response.json();

    Assert.array(json);

    return json.map((category) => {
      return createCategory(category);
    });
  }

  async setFavorite(category: ICategory, favorite: boolean): Promise<void> {
    const response = await fetch(`${API_URL}/categories/${category.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: category.id,
        name: category.name,
        favorite: favorite,
      }),
    });

    if (response.status !== 200) {
      throw new Error("Failed to set favorite category");
    }
  }

  async listPosts(id: string): Promise<Array<IPost>> {
    const response = await fetch(`${API_URL}/categories/${id}/posts`);

    if (response.status !== 200) {
      throw new Error("Failed to list posts");
    }

    const json = await response.json();

    Assert.array(json);

    return json.map((post) => {
      return createPost(post);
    });
  }

  getDefaultCategory(): ICategory | null {
    const result = localStorage.getItem(DEFAULT_CATEGORY_STORAGE_KEY);
    if (result === null) {
      return null;
    }
    return createCategory(JSON.parse(result));
  }

  setDefaultCategory(category: ICategory): void {
    localStorage.setItem(
      DEFAULT_CATEGORY_STORAGE_KEY,
      JSON.stringify(category)
    );
  }
}

export const CategoryRepository = new _CategoryRepository();
