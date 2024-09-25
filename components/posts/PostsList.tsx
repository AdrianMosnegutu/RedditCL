import { PostType } from "@/lib/types";
import List from "../utils/List";
import Post from "./Post";

interface Props {
  posts: PostType[];
}

export default function PostsList({ posts }: Props) {
  return (
    <List
      items={posts}
      renderItem={(post) => (
        <Post key={(post as PostType).id} post={post as PostType} />
      )}
      className="flex w-[50rem] flex-col gap-4"
    />
  );
}
