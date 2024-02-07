import { codeToHtml } from "shiki";
import type { BundledLanguage, BundledTheme } from "shiki"; // Import the types from shiki // [!code highlight]

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
  });

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
