import PostSkeleton from "@/components/skeletons/PostSkeleton";
import SubredditCardSkeleton from "@/components/skeletons/SubredditCardSkeleton";
import List from "@/components/utils/List";

export default function LoadingSubredditPage() {
  return (
    <main className="page">
      <List
        items={[1, 2, 3]}
        renderItem={(item) => <PostSkeleton key={item as number} />}
        className="flex w-[50rem] flex-col gap-4"
      />
      <SubredditCardSkeleton />
    </main>
  );
}
