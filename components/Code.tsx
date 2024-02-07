import { codeToHtml } from "shiki";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";
import type { BundledLanguage, BundledTheme } from "shiki";

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  filename?: string;
};
export default async function Code({
  code,
  lang = "javascript",
  theme = "nord",
  filename,
}: Props) {
  const html = await codeToHtml(code, {
    lang,
    theme,
    transformers: [transformerNotationHighlight(), transformerNotationDiff()],
  });

  return (
    <div>
      <div className="bg-neutral-800">
        {filename && (
          <div className="bg-neutral-900 text-sm inline-flex py-2 px-4">
            {filename}
          </div>
        )}
      </div>
      <div
        className="[&_.highlighted]:bg-blue-700"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}
