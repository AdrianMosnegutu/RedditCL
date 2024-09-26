import HtmlParser from "@/components/utils/HtmlParser";

interface Props {
  description: string;
}

export default function Description({ description }: Props) {
  return (
    description && (
      <div className="text-muted-foreground text-sm">
        <HtmlParser html={description} />
      </div>
    )
  );
}
