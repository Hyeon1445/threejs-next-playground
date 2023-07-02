import ThreeExample from "@/components/example/example";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Three</title>
      </Head>
      <main>
        <button>hello</button>
        <div>home</div>
        <ThreeExample />
      </main>
    </>
  );
}
