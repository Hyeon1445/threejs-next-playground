import ThreeBox from "@/components/box";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";

export default function Box() {
  return (
    <>
      <Head>
        <title>Box</title>
      </Head>
      <main>
        <Canvas style={{ border: "1px solid black" }}>
          <ThreeBox position={[-1.2, 0, 0]} />
          <ThreeBox position={[1.2, 0, 0]} />
        </Canvas>
      </main>
    </>
  );
}
