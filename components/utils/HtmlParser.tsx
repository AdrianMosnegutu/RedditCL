import he from "he";
import parse from "html-react-parser";

interface Props {
  html: string;
}

export default function HtmlParser({ html }: Props) {
  return html && <>{parse(he.decode(html))}</>;
}
