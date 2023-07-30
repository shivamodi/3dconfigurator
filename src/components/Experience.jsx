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
            roughness={0}
            depthScale={0}
            minDepthThreshold={0}
            maxDepthThreshold={0}
            metalness={0}
          />
        </mesh>
      </PresentationControls>
      <OrbitControls 
        minAzimuthAngle={Math.PI}
        maxAzimuthAngle={0}
        minPolarAngle={Math.PI/4}
        maxPolarAngle={Math.PI/2}
        autoRotate={true}
        rotateSpeed={0.5}
      />
    </>
  );
};

export default Experience;