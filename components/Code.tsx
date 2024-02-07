import { codeToHtml } from "shiki";
import { transformerNotationHighlight } from "@shikijs/transformers";
import type { BundledLanguage, BundledTheme } from "shiki";

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
};
export default async function Code({
  code,
  lang = "javascript",
  theme = "nord",
}: Props) {
  const html = await codeToHtml(code, {
    lang,
    theme,
    transformers: [transformerNotationHighlight()],
  });

  return (
    <div
      className="[&_.highlighted]:bg-blue-700"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
