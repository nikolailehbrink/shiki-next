import Code from "@/components/Code";

export default function Home() {
  return (
    <>
      <Code code="let a = 1 + 4 // [!code --]" />
      <Code
        code="console.log('Hello, world!') // [!code ++]"
        lang="typescript"
      />
      <Code
        code={`fn main() { println!(\"Hello, world!\"); } // [!code highlight]`}
        lang="rust"
        theme="github-dark"
      />
    </>
  );
}
