import { Skeleton } from "../ui/skeleton";

export default function CommentSkeleton() {
  return (
    <div className="flex w-[50rem] items-start gap-4 p-2">
      <div className="flex items-center space-x-2">
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
      <div className="flex w-full flex-col gap-2">
        <Skeleton className="h-4 w-1/6" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}
