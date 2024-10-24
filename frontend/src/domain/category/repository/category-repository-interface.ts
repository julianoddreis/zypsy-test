import { IPost } from "@/domain/post/models";
import { ICategory } from "@/domain/category/models";

export interface ICategoryRepository {
  list(): Promise<Array<ICategory>>;
  setFavorite(id: string, favorite: boolean): Promise<ICategory>;
  listPosts(id: string): Promise<Array<IPost>>;
}
