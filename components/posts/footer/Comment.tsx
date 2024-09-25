import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import HtmlParser from "@/components/utils/HtmlParser";
import { CommentType } from "@/lib/types";
import { timeAgo, unixTimestampToDatetime } from "@/lib/utils";
import { FaCircle } from "react-icons/fa6";

interface Props {
  comment: CommentType;
}

export default function Comment({ comment }: Props) {
  const { author, body, timeCreated } = comment;

  return (
    <article className="comment">
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs uppercase">
          {author.slice(0, 2)}
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-1">
        {/* Author and time */}
        <div className="flex items-center gap-2">
          <span className="font-semibold">u/{author}</span>
          <FaCircle size={4} />
          <time
            dateTime={unixTimestampToDatetime(timeCreated)}
            className="text-muted-foreground"
          >
            {timeAgo(timeCreated)}
          </time>
        </div>

        {/* Comment body */}
        <HtmlParser html={body} />
      </div>
    </article>
  );
}
