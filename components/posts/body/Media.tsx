import HtmlParser from "@/components/utils/HtmlParser";
import Image from "next/image";

interface Props {
  mediaType: string;
  url: string;
}

export default function Media({ mediaType, url }: Props) {
  const className =
    "relative h-[30rem] w-full overflow-hidden rounded-[var(--radius)] bg-black";

  switch (mediaType) {
    case "image":
      return (
        <a href={url} target="_blank" rel="noreferrer" className={className}>
          <Image
            src={url}
            alt="associated media"
            fill
            sizes="(min-width: 640px) 640px, 100vw"
            className="object-contain"
          />
        </a>
      );

    case "hosted:video":
      return (
        <video controls className={className}>
          <source src={url} type="video/mp4" />
        </video>
      );

    case "rich:video":
      return (
        <div className={className}>
          <HtmlParser html={url} />;
        </div>
      );

    default:
      return null;
  }
}
