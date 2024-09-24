import SubredditCard from "@/components/subreddits/SubredditsCard/SubredditCard";
import { getSubreddit } from "@/lib/redditApi";

interface Props {
  params: {
    subredditName: string;
  };
}

export default async function SubredditPage({ params }: Props) {
  const subredditName = params.subredditName;
  const subreddit = await getSubreddit(subredditName);

  return (
    <main className="page">
      <SubredditCard subreddit={subreddit} />
    </main>
  );
}
