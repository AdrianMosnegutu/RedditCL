import PostsList from "@/components/posts/PostsList";
import SubredditsList from "@/components/subreddits/SubredditsList";
import { getToken } from "@/lib/actions";
import { getPopularPosts, getPopularSubreddits } from "@/lib/redditApi";

export default async function HomePage() {
  const token = await getToken();

  const [popularPosts, popularSubreddits] = await Promise.all([
    getPopularPosts(token),
    getPopularSubreddits(token),
  ]);

  return (
    <main className="page">
      <PostsList posts={popularPosts} />
      <SubredditsList
        title="Popular Subreddits"
        subreddits={popularSubreddits}
      />
    </main>
  );
}
