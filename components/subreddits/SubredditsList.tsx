import { SubredditType } from "@/lib/types";
import { Card, CardTitle } from "../ui/card";
import SubredditLink from "./SubredditLink";

interface Props {
  title: string;
  subreddits: SubredditType[];
}

export default function SubredditsList({ title, subreddits }: Props) {
  return (
    <Card className="flex w-[30rem] flex-col divide-y-[1px]">
      <CardTitle className="px-6 py-4">{title}</CardTitle>
      <section>
        {subreddits.map((subreddit) => (
          <SubredditLink key={subreddit.name} subreddit={subreddit} />
        ))}
      </section>
    </Card>
  );
}
