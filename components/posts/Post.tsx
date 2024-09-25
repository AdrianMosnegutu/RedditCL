import { PostType } from "@/lib/types";
import { Card } from "../ui/card";
import PostBody from "./body/PostBody";
import PostFooter from "./footer/PostFooter";
import PostHeader from "./header/PostHeader";

interface Props {
  post: PostType;
}

export default function Post({ post }: Props) {
  return (
    <Card key={post.id} className="divide-y-[1px]">
      <PostHeader {...post} />
      <PostBody {...post} />
      <PostFooter {...post} />
    </Card>
  );
}
