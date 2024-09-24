import SubredditCard from "@/components/subreddits/SubredditsCard/SubredditCard";
import { getToken } from "@/lib/actions";
import { getSubreddit } from "@/lib/redditApi";

interface Props {
  params: {
    subredditName: string;
  };
}

export default async function SubredditPage({ params }: Props) {
  const token = await getToken();

  const subredditName = params.subredditName;
  const subreddit = await getSubreddit(token, subredditName);

  return (
    <main className="page">
      <SubredditCard subreddit={subreddit} />
    </main>
  );
}
