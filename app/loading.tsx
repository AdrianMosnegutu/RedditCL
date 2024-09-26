import PostSkeleton from "@/components/skeletons/PostSkeleton";
import SubredditLinkSkeleton from "@/components/skeletons/SubredditLinkSkeleton";
import { Card } from "@/components/ui/card";
import List from "@/components/utils/List";

export default function LoadingHomePage() {
  return (
    <main className="page">
      <List
        items={[1, 2, 3]}
        renderItem={(item) => <PostSkeleton key={item as number} />}
        className="flex w-[50rem] flex-col gap-4"
      />
      <Card>
        <List
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={(item) => <SubredditLinkSkeleton key={item as number} />}
          className="flex w-[30rem] flex-col"
        />
      </Card>
    </main>
  );
}
