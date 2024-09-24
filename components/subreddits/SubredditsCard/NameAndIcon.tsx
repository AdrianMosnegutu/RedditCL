import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardTitle } from "@/components/ui/card";

interface Props {
  name: string;
  icon: string;
}

export default function NameAndIcon({ name, icon }: Props) {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-14 w-14">
        <AvatarImage src={icon} />
        <AvatarFallback className="text-xl uppercase">
          {name.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
      <CardTitle>r/{name}</CardTitle>
    </div>
  );
}
