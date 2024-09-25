import { SubredditType } from "@/lib/types";
import { Card, CardTitle } from "../ui/card";
import List from "../utils/List";
import SubredditLink from "./SubredditLink";

interface Props {
  title: string;
  subreddits: SubredditType[];
}

export default function SubredditsList({ title, subreddits }: Props) {
  return (
    <Card className="sticky top-[6.5rem] flex w-[30rem] flex-col divide-y-[1px]">
      <CardTitle className="p-6">{title}</CardTitle>
      <List
        items={subreddits}
        renderItem={(subreddit) => (
          <SubredditLink subreddit={subreddit as SubredditType} />
        )}
      />
    </Card>
  );
}
