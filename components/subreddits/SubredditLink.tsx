import { SubredditType } from "@/lib/types";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface Props {
  subreddit: SubredditType;
}

export default function SubredditLink({ subreddit }: Props) {
  return (
    <Link
      href={`/r/${subreddit.name}`}
      className="hover:bg-muted sticky top-[6.5rem] flex items-center gap-3 px-6 py-2 transition-colors ease-out"
    >
      <Avatar>
        <AvatarImage src={subreddit.icon} />
        <AvatarFallback className="uppercase">
          {subreddit.name.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
      <h3>
        <span className="font-semibold">r/{subreddit.name}</span>
      </h3>
    </Link>
  );
}
