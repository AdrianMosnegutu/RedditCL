import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function PostSkeleton() {
  return (
    <Card className="divide-y-[1px]">
      <div className="flex items-center gap-4 px-8 py-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-6 w-32" />
      </div>
      <div className="flex flex-col items-start gap-6 px-8 py-6">
        <Skeleton className="h-8 w-5/6" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-[30rem] w-full" />
      </div>
      <div className="flex items-center gap-4 px-8 py-4">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-32" />
      </div>
    </Card>
  );
}
