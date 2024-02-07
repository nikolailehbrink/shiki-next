import { codeToHtml } from "shiki";

export default async function Code() {
  const html = await codeToHtml("const a = 1 + 3", {
    lang: "javascript",
    theme: "nord",
  });

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
