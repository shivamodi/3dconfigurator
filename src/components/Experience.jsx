import {
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import Sofa from "./Sofa";

const Experience = () => {
  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        rotation={[0, 0, 0]}
      >
        <Stage environment={null} intensity={1}  castShadow={false}>
          <Sofa />
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            metalness={0.5}
          />
        </mesh>
      </PresentationControls>
      <OrbitControls 
        minAzimuthAngle={-Math.PI / 8}
        maxAzimuthAngle={Math.PI / 8}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI - Math.PI / 2}
      />
    </>
  );
};

export default Experience;
