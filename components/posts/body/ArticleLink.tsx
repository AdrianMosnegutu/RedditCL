interface Props {
  url: string;
  children: React.ReactNode;
}

export default function ArticleLink({ url, children }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="text-blue-600 hover:underline"
    >
      {children}
    </a>
  );
}
