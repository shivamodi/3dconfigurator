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
    name: "Boucle White 01",
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
    color: "#584f48",
    name: "Beverly Hills 20",
  },
  {
    color: "#221213",
    name: "Beverly Hills 29",
  },
  {
    color: "#d0cabc",
    name: "Country Living 03",
  },
  {
    color: "#b8aaa1",
    name: "Country Living 06",
  },
  {
    color: "#d5bfa7",
    name: "French Quarter 06",
  },
  {
    color: "#d5bfa7",
    name: "French Quarter 11",
  },
  {
    color: "#7e6c64",
    name: "French Quarter 18",
  },
  {
    color: "#cbbead",
    name: "Mozart 04",
  },
  {
    color: "#b09d8e",
    name: "Mozart 13",
  },
  {
    color: "#a99b92",
    name: "Royal Mile 13",
  },
  {
    color: "#473e3c",
    name: "Royal Mile 26",
  },
  {
    color: "#aea190",
    name: "Saint Laurent 08",
  },
  {
    color: "#8B7C63",
    name: "Saint Laurnet 11",
  },
  {
    color: "#b9ac9c",
    name: "Dublin 2532",
  },
  {
    color: "#e0d3cb",
    name: "Dublin 2534",
  },
  {
    color: "#c9b69f",
    name: "Bremen 2111",
  },
  {
    color: "#937057",
    name: "Bremen 2110",
  },
  {
    color: "#665448",
    name: "Bremen 2109",
  },
  {
    color: "#af6f47",
    name: "Bremen 2103",
  },
  {
    color: "#cfbea8",
    name: "Sevilla 2143",
  },
]],
["#335765", [  
  {
    color: "#dccdaf",
    name: "Abbey Road 71",
  },
  {
    color: "#7d674f",
    name: "Abbey Road 76",
  },
  {
    color: "#5c4d46",
    name: "Beverly Hills 70",
  }, 
  {
    color: "#584f48",
    name: "Beverly Hills 72",
  },]],
  ["#774831", [  
    {
      color: "#dccdaf",
      name: "Beverly Hills 59",
    },
    {
      color: "#7d674f",
      name: "French Quarter 53",
    },
    {
      color: "#5c4d46",
      name: "French Quarter 55",
    }, 
    {
      color: "#584f48",
      name: "Mozart 54",
    },]],
    ["#c58d80", [  
      {
        color: "#dccdaf",
        name: "Abbey Road 51",
      },
      {
        color: "#7d674f",
        name: "Abbey Road 61",
      },
      {
        color: "#5c4d46",
        name: "Abbey Road 65",
      }, 
      {
        color: "#584f48",
        name: "Beverly Hills 62",
      },]],
      ["#b78638", [  
        {
          color: "#dccdaf",
          name: "French Quarter 48",
        },
        {
          color: "#7d674f",
          name: "Mozart 35",
        },
        {
          color: "#5c4d46",
          name: "Mozart 48",
        }, 
        {
          color: "#584f48",
          name: "Mozart 49",
        },]],
        ["#575052", [  
          {
            color: "#dccdaf",
            name: "Beverly Hills 84",
          },
          {
            color: "#7d674f",
            name: "Beverly Hills 85",
          },
          {
            color: "#5c4d46",
            name: "Beverly Hills 95",
          }, 
          {
            color: "#584f48",
            name: "Country Living 81",
          },]]);

const CustomizationContext = createContext({});
export const CustomizationProvider = (props) => {
  
  const [material, setMaterial] = useState("fabric");
  const [sofaShade, setSofaShade] = useState(sofaShades[0]);
  const [activeFabric, setActiveFabric] = useState(fabricColors[0][1]);
  const [activeTexture, setActiveTexture] = useState(fabricColors[0][1][0].name);
  const [fabricColor, setFabricColor] = useState("#ede7dd");
  
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
        activeTexture,
        setActiveTexture,
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
