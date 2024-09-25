import { Button } from "@/components/ui/button";
import { shortenNumber } from "@/lib/utils";
import { BiComment, BiSolidComment } from "react-icons/bi";

interface Props {
  commentsVisible: boolean;
  toggleComments: () => void;
  numComments: number;
}

export default function CommentsToggle({
  commentsVisible,
  toggleComments,
  numComments,
}: Props) {
  return (
    <Button
      variant="ghost"
      onClick={toggleComments}
      className="group flex items-center gap-2"
    >
      {commentsVisible ? (
        <BiSolidComment size={20} className="text-blue-600" />
      ) : (
        <BiComment
          size={20}
          className="transition-colors ease-out group-hover:text-blue-600"
        />
      )}
      <span
        className={`${commentsVisible ? "font-semibold text-blue-600" : "font-normal"} text-base transition-colors ease-out`}
      >
        {shortenNumber(numComments)}
      </span>
    </Button>
  );
}
