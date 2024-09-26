import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function SubredditCardSkeleton() {
  return (
    <Card className="sticky top-[6.5rem] h-fit w-[30rem] overflow-hidden">
      <Skeleton className="aspect-[3] w-full" />
      <div className="flex items-center gap-4 p-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <div className="flex flex-col gap-2 p-4 pt-0">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-1/3" />
      </div>
    </Card>
  );
}
