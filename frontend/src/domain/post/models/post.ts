import { LocalDate } from "@/common/local-date";
import { ICategory } from "@/domain/category/models";

export interface IPost {
  readonly id: string;
  readonly description: string;
  readonly date: LocalDate;
  readonly categories: Array<ICategory>;
}
