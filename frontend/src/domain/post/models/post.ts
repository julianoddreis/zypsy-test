import { Assert } from "@/common/assert";

export interface IPost {
  readonly id: string;
  readonly description: string;
  readonly date: Date;
  readonly categories: Array<string>;
}

export function createPost(data: any): IPost {
  Assert.object(data);
  Assert.string(data.id);
  Assert.string(data.description);
  Assert.string(data.date);
  Assert.array(data.categories);

  data.categories.forEach((category: any) => {
    Assert.string(category);
  });

  return {
    id: data.id,
    description: data.description,
    date: new Date(data.date),
    categories: data.categories,
  };
}
