import PostsList from "@/components/posts/PostsList";
import SubredditCard from "@/components/subreddits/SubredditCard/SubredditCard";
import { getToken } from "@/lib/actions";
import { getSubreddit, getSubredditPosts } from "@/lib/redditApi";

interface Props {
  params: {
    subredditName: string;
  };
}

export default async function SubredditPage({ params }: Props) {
  const subredditName = params.subredditName;

  const token = await getToken();

  const [posts, subreddit] = await Promise.all([
    getSubredditPosts(token, subredditName),
    getSubreddit(token, subredditName),
  ]);

  return (
    <main className="page">
      <PostsList posts={posts} />
      <SubredditCard subreddit={subreddit} />
    </main>
  );
}
