import { Image as ImageIcon, Link, Video } from "lucide-react";

interface Props {
  mediaType: string;
  className?: string;
}

export default function MediaIcon({ mediaType, className }: Props) {
  switch (mediaType) {
    case "image":
      return <ImageIcon size={24} name="image" className={className} />;
    case "link":
      return <Link size={24} name="link" className={className} />;
    case "hosted:video":
    case "rich:video":
      return <Video size={24} name="video" className={className} />;
    default:
      return null;
  }
}
