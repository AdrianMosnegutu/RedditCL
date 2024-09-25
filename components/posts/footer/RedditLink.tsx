import { Button } from "@/components/ui/button";
import { FaReddit } from "react-icons/fa6";

interface Props {
  redditUrl: string;
}

export default function RedditLink({ redditUrl }: Props) {
  return (
    <a
      href={redditUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group ml-auto rounded-full"
    >
      <Button variant="ghost" className="aspect-square rounded-full p-0">
        <FaReddit
          size={24}
          className="transition-colors ease-out group-hover:text-primary"
        />
      </Button>
    </a>
  );
}
