import Code from "@/components/Code";

export default function Home() {
  return (
    <>
      <Code code="let a = 1 + 4" />
      <Code code="console.log('Hello, world!')" lang="typescript" />
      <Code
        code={`fn main() { println!(\"Hello, world!\"); }`}
        lang="rust"
        theme="github-dark"
      />
    </>
  );
}
