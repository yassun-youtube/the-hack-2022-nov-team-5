type Post = {
  id: string;
  title: string;
  tag: string;
  name: string;
  article: string;
  created_at: Date;
  like_count: number;
  try_count: number;
};

type PostCreate = Omit<Post, 'id'>;

export type { Post, PostCreate };
