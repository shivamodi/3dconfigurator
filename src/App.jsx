import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";
import { Suspense } from 'react'

function App() {

return (
    <CustomizationProvider>
      <div className="App">
        <Canvas dpr={[1, 2]} shadows="false">
          <color attach="background" args={["#ffffff"]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}


export default App;
