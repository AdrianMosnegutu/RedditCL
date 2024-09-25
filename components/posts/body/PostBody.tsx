import HtmlParser from "../../utils/HtmlParser";
import ArticleLink from "./ArticleLink";
import Media from "./Media";

interface Props {
  title: string;
  body: string;
  mediaType: string;
  url: string;
}

export default function PostBody({ title, body, mediaType, url }: Props) {
  const jsxTitle = (
    <h3 className="w-full overflow-hidden text-2xl font-semibold">{title}</h3>
  );

  return (
    <article className="flex flex-col items-start gap-6 px-8 py-6">
      {/* Post title */}
      {mediaType == "link" ? (
        <ArticleLink url={url}>{jsxTitle}</ArticleLink>
      ) : (
        jsxTitle
      )}

      {/* Post body */}
      {body && <HtmlParser html={body} />}

      {/* Media */}
      {mediaType && mediaType != "link" && (
        <Media mediaType={mediaType} url={url} />
      )}
    </article>
  );
}
