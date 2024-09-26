import { shortenNumber } from "@/lib/utils";
import { FaCircle } from "react-icons/fa6";

interface Props {
  members: number;
  activeMembers: number;
}

export default function Members({ members, activeMembers }: Props) {
  return (
    <div className="flex items-center gap-8">
      {/* Total Members */}
      <div className="flex flex-col items-start">
        {shortenNumber(members)}
        <span className="text-muted-foreground text-sm font-semibold">
          Members
        </span>
      </div>

      {/* Active Members */}
      <div className="flex flex-col items-start">
        {shortenNumber(activeMembers)}
        <div className="flex items-center gap-2">
          <FaCircle size={6} className="text-green-500" />
          <span className="text-muted-foreground text-sm font-semibold">
            Active Members
          </span>
        </div>
      </div>
    </div>
  );
}
