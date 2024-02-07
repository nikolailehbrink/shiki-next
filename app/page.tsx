import Code from "@/components/Code";

export default function Home() {
  return (
    <>
      <Code
        code={`return (// [!code ++]
  <div className="rounded-lg bg-gradient-to-r from-sky-300 to-sky-500 p-4 !pr-0 md:p-8 lg:p-12 [&>pre]:rounded-none max-w-xl">// [!code --]
    <div className="overflow-hidden rounded-s-lg">// [!code highlight]
      <div className="flex items-center justify-between bg-gradient-to-r from-neutral-900 to-neutral-800 py-2 pl-2 pr-4 text-sm">
        <span className="-mb-[calc(0.5rem+2px)] rounded-t-lg border-2 border-white/5 border-b-neutral-700 bg-neutral-800 px-4 py-2 ">
          {filename}
        </span>
      </div>
      <div
        className="border-t-2 border-neutral-700 text-sm [&>pre]:overflow-x-auto [&>pre]:!bg-neutral-900 [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  </div>
);
`}
        lang="tsx"
        theme="ayu-dark"
        filename="app/page.tsx"
      />
    </>
  );
}
