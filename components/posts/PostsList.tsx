import { PostType } from "@/lib/types";
import List from "../utils/List";
import Post from "./Post";

interface Props {
  posts: PostType[];
}

export default async function PostsList({ posts }: Props) {
  return (
    <List
      items={posts}
      renderItem={(post) => <Post post={post as PostType} />}
      className="flex w-[50rem] flex-col gap-4"
    />
  );
}
