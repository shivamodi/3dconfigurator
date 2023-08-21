import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { USDZLoader } from "three/examples/jsm/loaders/USDZLoader";
import * as THREE from "three";
import { useCustomization } from "../contexts/Customization";
import {useFrame} from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';


 const tryRequire = (path) => {
  try {
   return require(`${path}`);
  } catch (err) {
   return null;
  }
};

function Table(props) {
  const ref = useRef()
  const searchParams = new URLSearchParams(document.location.search);
  const param1 = searchParams.get('__name');
  const param2 = searchParams.get('__cat');

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.15 * delta
  })
 /* const [usdz, setUsdz] = useState(null);

useLoader(USDZLoader, "./models/"+param1+".usdz", (loaded) => {
console.log(loaded, "loaded");
setUsdz(loaded.scene);
});*/

  const { nodes, materials } = useGLTF("./models/models/"+param1+".glb");
  const { material, sofaShade, activeFabric, activeTexture, fabricColor } = useCustomization();
  var fabricTextureProps;
  const leatherTextureProps = useTexture({
    // map: "./textures/leather/Leather_008_Base Color.jpg",
    normalMap: "./textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "./textures/leather/Leather_008_Roughness.jpg",
    aoMap: "./textures/leather/Leather_008_Ambient Occlusion.jpg", 
  });

  const fabricTexturePropsAO = tryRequire("./textures/fabric/"+activeTexture.replace(/[0-9]{1,2}/, '').replace(/\s+/g, '-').toLowerCase()+"AO.jpg") ? true 
  : false;


  const fabricTexturePropsNormal = tryRequire("./textures/fabric/"+activeTexture.replace(/[0-9]{1,2}/, '').replace(/\s+/g, '-').toLowerCase()+"Normal.jpg") ? true 
  : false;

  
  const fabricTexturePropsRoughness = tryRequire("./textures/fabric/"+activeTexture.replace(/[0-9]{1,2}/, '').replace(/\s+/g, '-').toLowerCase()+"Roughness.jpg") ? true 
  : false;

  if(fabricTexturePropsAO===true){

    fabricTextureProps = useTexture({
      map: "./textures/fabric/"+activeTexture.replace(/\s+/g, '-').toLowerCase()+".jpg",
      //normalMap: "./textures/fabric/"+activeTexture.toLowerCase().replace(" ", "-")+"-normal.jpg",
      //roughnessMap: "./textures/fabric/"+activeTexture.toLowerCase().replace(" ", "-")+"-roughness.jpg",
      aoMap: "./textures/fabric/"+activeTexture.replace(/[0-9]{1,2}/, '').replace(/\s+/g, '-').toLowerCase()+"AO.jpg",
    });
  }else{
    
  fabricTextureProps = useTexture({
    map: "./textures/fabric/"+activeTexture.replace(/\s+/g, '-').toLowerCase()+".jpg",
    //normalMap: "./textures/fabric/"+activeTexture.toLowerCase().replace(" ", "-")+"-normal.jpg",
    //roughnessMap: "./textures/fabric/"+activeTexture.toLowerCase().replace(" ", "-")+"-roughness.jpg",
    //aoMap: "./textures/fabric/"+activeTexture.replace(/[0-9]{1,2}/, '').replace(/\s+/g, '-').toLowerCase()+"AO.jpg",
  });
  }

  const woodTextureProps = useTexture({
    map: "./textures/fabric/WOOD.jpg",
  //  normalMap: "./textures/fabric/wood-Normal.jpg",
  //  roughnessMap: "./textures/fabric/wood-Roughness.jpg",
 //   aoMap: "./textures/fabric/wood-AO.jpg",
  });

  const wood2TextureProps = useTexture({
    map: "./textures/fabric/wood2.jpg",
    normalMap: "./textures/fabric/wood2-Normal.jpg",
    roughnessMap: "./textures/fabric/wood2-Roughness.jpg",
    aoMap: "./textures/fabric/wood2-AO.jpg",
  });

  const concreteTextureProps = useTexture({
    map: "./textures/fabric/concrete.jpg",
   // normalMap: "./textures/fabric/concrete-Normal.jpg",
  //  roughnessMap: "./textures/fabric/concrete-Roughness.jpg",
   // aoMap: "./textures/fabric/concrete-AO.jpg",
  });
  // leatherTextureProps.map.repeat.set(3, 3);
  leatherTextureProps.normalMap.repeat.set(3, 3);
  leatherTextureProps.roughnessMap.repeat.set(3, 3);
  leatherTextureProps.aoMap.repeat.set(3, 3);
  // leatherTextureProps.map.wrapS = leatherTextureProps.map.wrapT =
  //   THREE.MirroredRepeatWrapping;
  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;
 

    fabricTextureProps.map.repeat.set(15, 15);
    fabricTextureProps.map.wrapS = fabricTextureProps.map.wrapT =
      THREE.RepeatWrapping;
  if(fabricTexturePropsNormal===true){
    fabricTextureProps.normalMap.repeat.set(15, 15);
 fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT =
    THREE.RepeatWrapping;
  }
  if(fabricTexturePropsRoughness===true){
    fabricTextureProps.roughnessMap.repeat.set(15, 15);
 fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  }
 if(fabricTexturePropsAO===true){
  fabricTextureProps.aoMap.repeat.set(15, 15);
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;
 }

    woodTextureProps.map.repeat.set(15, 15);
  //woodTextureProps.normalMap.repeat.set(15, 15);
 // woodTextureProps.roughnessMap.repeat.set(15, 15);
 // woodTextureProps.aoMap.repeat.set(15, 15);
  woodTextureProps.map.wrapS = woodTextureProps.map.wrapT =
    THREE.RepeatWrapping;
 // woodTextureProps.normalMap.wrapS = woodTextureProps.normalMap.wrapT =
 //  THREE.RepeatWrapping;
// woodTextureProps.roughnessMap.wrapS =
//   woodTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
//  woodTextureProps.aoMap.wrapS = woodTextureProps.aoMap.wrapT =
 //   THREE.RepeatWrapping;

 wood2TextureProps.map.repeat.set(15, 15);
 wood2TextureProps.normalMap.repeat.set(3, 3);
 wood2TextureProps.roughnessMap.repeat.set(3, 3);
 wood2TextureProps.aoMap.repeat.set(15, 15);
 wood2TextureProps.map.wrapS = wood2TextureProps.map.wrapT =
   THREE.RepeatWrapping;
// woodTextureProps.normalMap.wrapS = woodTextureProps.normalMap.wrapT =
//  THREE.RepeatWrapping;
// woodTextureProps.roughnessMap.wrapS =
//   woodTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
//  woodTextureProps.aoMap.wrapS = woodTextureProps.aoMap.wrapT =
//   THREE.RepeatWrapping;
   


    //concreteTextureProps.map.repeat.set(1,1);
    concreteTextureProps.map.repeat.set( 1, 1 );
    concreteTextureProps.map.offset.x = 1;
    concreteTextureProps.map.offset.y = 1;
    concreteTextureProps.map.offset.z = 1;
//  concreteTextureProps.normalMap.repeat.set(15, 15);
//  concreteTextureProps.roughnessMap.repeat.set(15, 15);
 //concreteTextureProps.aoMap.repeat.set(3, 3);
  //concreteTextureProps.map.wrapS = concreteTextureProps.map.wrapT =
   // THREE.RepeatWrapping;
   // concreteTextureProps.map.offset = 1.0;
 // concreteTextureProps.normalMap.wrapS = concreteTextureProps.normalMap.wrapT =
  //  THREE.RepeatWrapping;
 // concreteTextureProps.roughnessMap.wrapS =
  //  concreteTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  //concreteTextureProps.aoMap.wrapS = concreteTextureProps.aoMap.wrapT =
    //THREE.RepeatWrapping;

  const objec = nodes;
  const nodebrowse = Object.values(objec);
  
    return (
    <group {...props} dispose={null} ref={ref}>
      {nodebrowse.map((obj, i) => { 

          console.log(nodes[nodebrowse[i].name]);

          if(typeof nodes[nodebrowse[i].name].material === 'object' &&
          !Array.isArray(nodes[nodebrowse[i].name].material) &&
          nodes[nodebrowse[i].name].material.map !== null){
            return(<mesh key={i} geometry={nodes[nodebrowse[i].name].geometry} castShadow={false} >
              <meshStandardMaterial  
              map={nodes[nodebrowse[i].name].material.map}
              aoMap={nodes[nodebrowse[i].name].material.aoMap}
              aoMapIntensity={nodes[nodebrowse[i].name].material.aoMapIntensity}
              blendDst={nodes[nodebrowse[i].name].material.blendDst}
              blendDstAlpha={nodes[nodebrowse[i].name].material.blendDstAlpha}
              blendEquation={nodes[nodebrowse[i].name].material.blendEquation}
              blendEquationAlpha={nodes[nodebrowse[i].name].material.blendEquationAlpha}
              blendSrc={nodes[nodebrowse[i].name].material.blendSrc}
              blendSrcAlpha={nodes[nodebrowse[i].name].material.blendSrcAlpha}
              blending={nodes[nodebrowse[i].name].material.blending}
              bumpMap={nodes[nodebrowse[i].name].material.bumpMap}
              bumpScale={nodes[nodebrowse[i].name].material.bumpScale}
              clipIntersection={nodes[nodebrowse[i].name].material.clipIntersection}
              clipShadows={nodes[nodebrowse[i].name].material.clipShadows}
              clippingPlanes={nodes[nodebrowse[i].name].material.clippingPlanes}
              colorWrite={nodes[nodebrowse[i].name].material.colorWrite}
              depthFunc= {nodes[nodebrowse[i].name].material.depthFunc}
              depthTest = {nodes[nodebrowse[i].name].material.depthTest}
              depthWrite={nodes[nodebrowse[i].name].material.depthWrite}
              displacementBias={nodes[nodebrowse[i].name].material.displacementBias}
              displacementMap={nodes[nodebrowse[i].name].material.displacementMap}
              displacementScale={nodes[nodebrowse[i].name].material.displacementScale}
              dithering={nodes[nodebrowse[i].name].material.dithering}
              emissive={nodes[nodebrowse[i].name].material.emissive}
              emissiveIntensity={nodes[nodebrowse[i].name].material.emissiveIntensity}
              emissiveMap={nodes[nodebrowse[i].name].material.emissiveMap}
              envMap={nodes[nodebrowse[i].name].material.envMap}
              envMapIntensity={nodes[nodebrowse[i].name].material.envMapIntensity}
              flatShading={nodes[nodebrowse[i].name].material.flatShading}
              fog={nodes[nodebrowse[i].name].material.fog}
              forceSinglePass={nodes[nodebrowse[i].name].material.forceSinglePass}
              isMaterial={nodes[nodebrowse[i].name].material.isMaterial}
              isMeshStandardMaterial={nodes[nodebrowse[i].name].material.isMeshStandardMaterial}
              lightMap={nodes[nodebrowse[i].name].material.lightMap}
              lightMapIntensity={nodes[nodebrowse[i].name].material.lightMapIntensity}
              metalness={nodes[nodebrowse[i].name].material.metalness}
              metalnessMap={nodes[nodebrowse[i].name].material.metalnessMap}
              name={nodes[nodebrowse[i].name].material.name}
              normalMapType={nodes[nodebrowse[i].name].material.normalMapType}
              normalScale={nodes[nodebrowse[i].name].material.normalScale}
              opacity={nodes[nodebrowse[i].name].material.opacity}
              polygonOffset={nodes[nodebrowse[i].name].material.polygonOffset}
              polygonOffsetFactor={nodes[nodebrowse[i].name].material.polygonOffsetFactor}
              polygonOffsetUnits={nodes[nodebrowse[i].name].material.polygonOffsetUnits}
              precision={nodes[nodebrowse[i].name].material.precision}
              premultipliedAlpha={nodes[nodebrowse[i].name].material.premultipliedAlpha}
              shadowSide={nodes[nodebrowse[i].name].material.shadowSide}
              side={nodes[nodebrowse[i].name].material.side}
              stencilFail={nodes[nodebrowse[i].name].material.stencilFail}
              stencilFunc={nodes[nodebrowse[i].name].material.stencilFunc}
              stencilFuncMask={nodes[nodebrowse[i].name].material.stencilFuncMask}
              stencilRef={nodes[nodebrowse[i].name].material.stencilRef}
              stencilWrite={nodes[nodebrowse[i].name].material.stencilWrite}
              stencilWriteMask={nodes[nodebrowse[i].name].material.stencilWriteMask}
              stencilZFail={nodes[nodebrowse[i].name].material.stencilZFail}
              stencilZPass={nodes[nodebrowse[i].name].material.stencilZPass}
              toneMapped={nodes[nodebrowse[i].name].material.toneMapped}
              transparent={nodes[nodebrowse[i].name].material.transparent}
              type={nodes[nodebrowse[i].name].material.type}
              userData={nodes[nodebrowse[i].name].material.userData}
              uuid={nodes[nodebrowse[i].name].material.uuid}
              version={nodes[nodebrowse[i].name].material.version}
              vertexColors={nodes[nodebrowse[i].name].material.vertexColors}
              visible={nodes[nodebrowse[i].name].material.visible}
              wireframe={nodes[nodebrowse[i].name].material.wireframe}
              wireframeLinecap={nodes[nodebrowse[i].name].material.wireframeLinecap}
              wireframeLinejoin={nodes[nodebrowse[i].name].material.wireframeLinejoin}
              wireframeLinewidth={nodes[nodebrowse[i].name].material.wireframeLinewidth}
              _alphaTest={nodes[nodebrowse[i].name].material._alphaTest}




            />
          </mesh>)
          }else if(nodes[nodebrowse[i].name].isMesh==true){
            //initialization
            const loader = new THREE.TextureLoader();
            return(<mesh key={i} geometry={nodes[nodebrowse[i].name].geometry} castShadow={false} >
              <meshStandardMaterial 
              aoMap={loader.load("./textures/fabric/"+nodes[nodebrowse[i].name].material.name.replace(/\s+/g, '-').toLowerCase()+"-AO.jpg")}
              map={loader.load( "./textures/fabric/"+nodes[nodebrowse[i].name].material.name.replace(/\s+/g, '-').toLowerCase()+".jpg")}
              castShadow={false}
              flipY={false}
              
            />
          </mesh>)
          }

        })}
      
    </group>
    
  );
}

export default Table;