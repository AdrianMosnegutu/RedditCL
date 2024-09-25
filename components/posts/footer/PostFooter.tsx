"use client";

import List from "@/components/utils/List";
import { getToken } from "@/lib/actions";
import { getComments } from "@/lib/redditApi";
import { CommentType } from "@/lib/types";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import CommentsToggle from "./CommentsToggle";
import RedditLink from "./RedditLink";
import Score from "./Score";

interface Props {
  id: string;
  score: number;
  comments: number;
  redditUrl: string;
}

export default function PostFooter({
  id,
  score,
  comments: numComments,
  redditUrl,
}: Props) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [commentsVisible, setCommentsVisible] = useState(false);

  function toggleComments() {
    setCommentsVisible((prev) => !prev);
  }

  useEffect(() => {
    if (!commentsVisible || comments.length) {
      return;
    }

    async function fetchComments() {
      const token = await getToken();
      const comments = await getComments(token, id);
      setComments(comments);
    }

    fetchComments();
  }, [commentsVisible]);

  return (
    <>
      <div className="flex items-center gap-4 px-8 py-4">
        <Score score={score} />
        <CommentsToggle
          commentsVisible={commentsVisible}
          toggleComments={toggleComments}
          numComments={numComments}
        />
        <RedditLink redditUrl={redditUrl} />
      </div>

      {/* Comments section */}
      {commentsVisible && (
        <List
          items={comments}
          renderItem={(comment, index) => (
            <Comment key={index} comment={comment as CommentType} />
          )}
          className="p-4"
        />
      )}
    </>
  );
}
