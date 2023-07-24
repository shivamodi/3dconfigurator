import { createContext, useContext, useState } from "react";

const sofaShades = [
  {
    color: "#dbd4c9",
    name: "white-offwhite",
  },
  {
    color: "#7D6650",
    name: "beige-brown",
  },
  {
    color: "#335765",
    name: "blue-teal",
  },
  {
    color: "#774831",
    name: "orange-red",
  },
  {
    color: "#c58d80",
    name: "pink-purple",
  },
  {
    color: "#b78638",
    name: "yellow-green",
  },
  {
    color: "#575052",
    name: "grey-black",
  },
];

const fabricColors = 
  Array(["#dbd4c9", [ 
  {
    color: "#d4cdc2",
    name: "Boucle White",
  },
  {
    color: "#ede2c6",
    name: "Beverly Hills 02",
  },
  {
    color: "#f8f1df",
    name: "French Quarter 01",
  }, 
  {
    color: "#E8E0CB",
    name: "French Quarter 03",
  },
  {
    color: "#f0e7de",
    name: "Lake Shore Drive 02",
  },
  {
    color: "#f8ecdc",
    name: "Mozart 02",
  },
  {
    color: "#E9E4DC",
    name: "Park Avenue 01",
  },
  {
    color: "#C0B6B6",
    name: "Park Avenue 02",
  },
  {
    color: "#DDE7E9",
    name: "Royal Mile 80",
  },
  {
    color: "#e6dfd4",
    name: "Saint Germain 03",
  },
  {
    color: "#ded0bf",
    name: "Saint Laurent 03",
  },
  {
    color: "#fdfef9",
    name: "Soft Ripple 01",
  },
  {
    color: "#e7e2db",
    name: "Dublin 2536",
  },
  {
    color: "#f2eee8",
    name: "Dublin 2537",
  },
]],
  ["#7D6650", [  
  {
    color: "#dccdaf",
    name: "Beverly Hills 04",
  },
  {
    color: "#7d674f",
    name: "Beverly Hills 09",
  },
  {
    color: "#5c4d46",
    name: "Beverly Hills 15",
  }, 
  {
    color: "#dbd4c9",
    name: "French Quarter 03",
  },
  {
    color: "#dbd4c9",
    name: "Lake Shore Drive 02",
  },
  {
    color: "#dbd4c9",
    name: "Mozart 02",
  },
  {
    color: "#dbd4c9",
    name: "Park Avenue 01",
  },
  {
    color: "#dbd4c9",
    name: "Park Avenue 02",
  },
  {
    color: "#dbd4c9",
    name: "ROyal Mile 80",
  },
  {
    color: "#dbd4c9",
    name: "Saint Germain 03",
  },
  {
    color: "#dbd4c9",
    name: "Saint Laurent 03",
  },
  {
    color: "#dbd4c9",
    name: "Soft Ripple 01",
  },
  {
    color: "#dbd4c9",
    name: "Dublin 2536",
  },
  {
    color: "#dbd4c9",
    name: "Dublin 2537",
  },
]]);

const CustomizationContext = createContext({});
export const CustomizationProvider = (props) => {
  console.log(fabricColors);
  const [material, setMaterial] = useState("fabric");
  const [sofaShade, setSofaShade] = useState(sofaShades[0]);
  const [activeFabric, setActiveFabric] = useState(fabricColors[0][1]);
  const [fabricColor, setFabricColor] = useState("#ede7dd");
  console.log(fabricColors);
  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        sofaShades,
        sofaShade,
        setSofaShade,
        fabricColors,
        fabricColor,
        setFabricColor,
        activeFabric,
        setActiveFabric,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
