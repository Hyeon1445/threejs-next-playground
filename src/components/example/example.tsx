import { Canvas } from "@react-three/fiber";

const ThreeExample = () => {
  return (
    <div>
      <p>example</p>
      <Canvas style={{ border: "1px solid black" }}>
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default ThreeExample;
