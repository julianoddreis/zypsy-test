import { Assert } from "@/common/assert";

export interface ICategory {
  readonly id: string;
  readonly name: string;
  readonly favorite: boolean;
}

export function createCategory(data: any): ICategory {
  Assert.object(data);
  Assert.string(data.id);
  Assert.string(data.name);
  Assert.boolean(data.favorite);

  return {
    id: data.id,
    name: data.name,
    favorite: data.favorite,
  };
}
