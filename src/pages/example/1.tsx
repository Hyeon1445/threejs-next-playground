import { Canvas } from "@react-three/fiber";

const TorusExample = () => {
  return (
    <Canvas style={{ border: "1px solid black" }}>
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
};

export default TorusExample;
