import { IPost } from "@/domain/post/models";
import { ICategory } from "@/domain/category/models";

export interface ICategoryRepository {
  list(): Promise<Array<ICategory>>;
  setFavorite(category: ICategory, favorite: boolean): Promise<void>;
  listPosts(id: string): Promise<Array<IPost>>;
}
