import { getToken } from "@/lib/actions";
import { getUserAvatar } from "@/lib/redditApi";
import { timeAgo, unixTimestampToDatetime } from "@/lib/utils";
import { FaCircle } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import MediaIcon from "./MediaIcon";

interface Props {
  author: string;
  timeCreated: number;
  mediaType: string;
}

export default async function PostHeader({
  author,
  timeCreated,
  mediaType,
}: Props) {
  const token = await getToken();
  const authorAvatar = await getUserAvatar(token, author);

  return (
    <div className="flex items-center gap-4 px-8 py-4">
      {/* Author avatar */}
      <Avatar className="bg-muted">
        <AvatarImage src={authorAvatar} />
        <AvatarFallback className="uppercase">
          {author.slice(0, 2)}
        </AvatarFallback>
      </Avatar>

      {/* Author username */}
      <span className="font-semibold">u/{author}</span>

      <FaCircle size={4} />

      {/* Time the post was created */}
      <time
        dateTime={unixTimestampToDatetime(timeCreated)}
        className="text-muted-foreground"
      >
        {timeAgo(timeCreated)}
      </time>

      <MediaIcon mediaType={mediaType} className="ml-auto" />
    </div>
  );
}
