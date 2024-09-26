import CommentSkeleton from "@/components/skeletons/CommentSkeleton";
import List from "@/components/utils/List";
import { CommentType } from "@/lib/types";
import Comment from "./Comment";

interface Props {
  comments: CommentType[];
}

export default function CommentSection({ comments }: Props) {
  return comments.length === 0 ? (
    <List
      items={[1, 2, 3]}
      renderItem={(index) => <CommentSkeleton key={index as number} />}
      className="p-4"
    />
  ) : (
    <List
      items={comments}
      renderItem={(comment, index) => (
        <Comment key={index} comment={comment as CommentType} />
      )}
      className="p-4"
    />
  );
}
