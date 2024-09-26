import { Skeleton } from "../ui/skeleton";

export default function SubredditLinkSkeleton() {
  return (
    <div className="flex items-center gap-3 px-6 py-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <Skeleton className="h-6 w-1/2 rounded font-semibold" />
    </div>
  );
}
