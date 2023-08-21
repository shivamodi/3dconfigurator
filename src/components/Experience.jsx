import {
  OrbitControls,
  PresentationControls,
  Stage,
  PerspectiveCamera,
  PivotControls,
} from "@react-three/drei";
import Sofa from "./Sofa";
import Table from "./Table";
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

const Experience = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const param1 = searchParams.get('__name');
  const param2 = searchParams.get('__cat');
  return (
    <>
    {(param2=="table"?
      <>
      <PresentationControls
        enabled={true} // the controls can be disabled by setting this to false
        global={false} // Spin globally or by dragging the model
        cursor={true} // Whether to toggle cursor style on drag
        snap={false} // Snap-back to center (can also be a spring config)
        speed={1}
        rotation={[0, Math.PI/180 * 90, 0]} 
      >
        <Stage environment={null} intensity={1}  shadows="false">
        <Table />
      </Stage>
      </PresentationControls>
      <PerspectiveCamera
        makeDefault
        position={[0, 0.7, 1.8]}
        fov={60}
        zoom={0.6}
      />
      <OrbitControls       
      minAzimuthAngle={Math.PI}
      maxAzimuthAngle={0}
      minPolarAngle={0}
      maxPolarAngle={Math.PI * 0.5}
      autoRotate={true}
      rotateSpeed={0.5}
      /></>:
      <>
      <PresentationControls
        enabled={true} // the controls can be disabled by setting this to false
        global={false} // Spin globally or by dragging the model
        cursor={true} // Whether to toggle cursor style on drag
        snap={false} // Snap-back to center (can also be a spring config)
        speed={1}
        rotation={[0, 0, 0]} 
      >
      <Stage environment={null} intensity={1}  shadows="false">
        <Sofa />
      </Stage>
      </PresentationControls>
      <PerspectiveCamera
        makeDefault
        position={[0, 0.7, 1.8]}
        fov={60}
        zoom={0.7}
      />
      <OrbitControls 
      minAzimuthAngle={Math.PI}
      maxAzimuthAngle={0}
      minPolarAngle={0}
      maxPolarAngle={Math.PI/2}
      autoRotate={true}
      rotateSpeed={0.5}
    /></>)}

    </>
  );
};

export default Experience;
