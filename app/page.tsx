import SubredditsList from "@/components/subreddits/SubredditsList";
import { getPopularSubreddits } from "@/lib/redditApi";

export default async function HomePage() {
  const popularSubreddits = await getPopularSubreddits();

  return (
    <main className="page">
      <SubredditsList
        title="Popular Subreddits"
        subreddits={popularSubreddits}
      />
    </main>
  );
}
