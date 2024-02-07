import { codeToHtml } from "shiki";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";
import type { BundledLanguage, BundledTheme } from "shiki";
import CopyToClipboard from "./CopyToClipboard";

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
    <div className="rounded-lg bg-gradient-to-r from-sky-200 to-sky-400 p-4 !pr-0 md:p-8 lg:p-12 [&>pre]:rounded-none max-w-xl">
      <div className="overflow-hidden rounded-s-lg">
        <div className="flex items-center justify-between bg-gradient-to-r from-neutral-900 to-neutral-800 py-2 pl-2 pr-4 text-sm">
          <span className="-mb-[calc(0.5rem+2px)] rounded-t-lg border-2 border-white/5 border-b-neutral-700 bg-neutral-800 px-4 py-2 ">
            {filename}
          </span>
          <CopyToClipboard code={code} />
        </div>
        <div
          className="border-t-2 border-neutral-700 text-sm [&>pre]:overflow-x-auto [&>pre]:!bg-neutral-900 [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </div>
  );
}
