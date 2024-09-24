import Image from "next/image";

interface Props {
  banner: string;
}

export default function Banner({ banner }: Props) {
  return (
    banner && (
      <div className="relative aspect-[3] w-full">
        <Image
          src={banner}
          alt="subreddit banner"
          fill
          priority
          sizes="100%"
          className="border-b object-cover"
        />
      </div>
    )
  );
}
