import {
  OrbitControls,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import Sofa from "./Sofa";

const Experience = () => {
  return (
    <>
      <PresentationControls
        enabled={true} // the controls can be disabled by setting this to false
        global={false} // Spin globally or by dragging the model
        cursor={true} // Whether to toggle cursor style on drag
        snap={false} // Snap-back to center (can also be a spring config)
        speed={1.5}
        rotation={[0, 0, 0]} 
      >
        <Stage environment={null} intensity={1}  shadows="false">
          <Sofa />
        </Stage>
      </PresentationControls>
    </>
  );
};

export default Experience;