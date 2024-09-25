import { Button } from "@/components/ui/button";
import { shortenNumber } from "@/lib/utils";
import { useState } from "react";
import {
  BiDownvote,
  BiSolidDownvote,
  BiSolidUpvote,
  BiUpvote,
} from "react-icons/bi";

interface Props {
  score: number;
}

export default function Score({ score }: Props) {
  const [userScore, setUserScore] = useState<-1 | 0 | 1>(0);

  function scoreStyle() {
    if (userScore === 1) return "text-green-600 font-semibold";
    if (userScore === -1) return "text-red-600 font-semibold";
    return "";
  }

  function handleUpvote() {
    setUserScore((prev) => (prev === 1 ? 0 : 1));
  }

  function handleDownvote() {
    setUserScore((prev) => (prev === -1 ? 0 : -1));
  }

  return (
    <div className="flex items-center">
      {/* Upvote */}
      <Button
        variant="ghost"
        onClick={handleUpvote}
        className="group aspect-square rounded-full p-0"
      >
        {userScore === 1 ? (
          <BiSolidUpvote size={20} className="upvote text-green-600" />
        ) : (
          <BiUpvote size={20} className="upvote" />
        )}
      </Button>

      <span className={`${scoreStyle()} transition-colors ease-out`}>
        {shortenNumber(score)}
      </span>

      {/* Downvote */}
      <Button
        variant="ghost"
        onClick={handleDownvote}
        className="group aspect-square rounded-full p-0"
      >
        {userScore === -1 ? (
          <BiSolidDownvote size={20} className="downvote text-red-600" />
        ) : (
          <BiDownvote size={20} className="downvote" />
        )}
      </Button>
    </div>
  );
}
