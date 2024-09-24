import { SubredditType } from "@/lib/types";
import { Card } from "../../ui/card";
import Banner from "./Banner";
import Description from "./Description";
import Members from "./Members";
import NameAndIcon from "./NameAndIcon";

interface Props {
  subreddit: SubredditType;
}

export default function SubredditCard({ subreddit }: Props) {
  const { name, description, icon, banner, members, activeMembers } = subreddit;

  return (
    <Card className="h-fit w-[30rem] overflow-hidden">
      <Banner banner={banner} />
      <div className="flex flex-col gap-4 p-6">
        <NameAndIcon name={name} icon={icon} />
        <Description description={description} />
        <Members members={members} activeMembers={activeMembers || 0} />
      </div>
    </Card>
  );
}
