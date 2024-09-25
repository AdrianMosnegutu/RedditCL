import PostsList from "@/components/posts/PostsList";
import SubredditsList from "@/components/subreddits/SubredditsList";
import { getToken } from "@/lib/actions";
import { searchPosts, searchSubreddits } from "@/lib/redditApi";

interface Props {
  searchParams: { q: string };
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q;

  const token = await getToken();

  const [posts, subreddits] = await Promise.all([
    searchPosts(token, query),
    searchSubreddits(token, query),
  ]);

  return (
    <main className="page">
      <PostsList posts={posts} />
      <SubredditsList title="Search Results" subreddits={subreddits} />
    </main>
  );
}
