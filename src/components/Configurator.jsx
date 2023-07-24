import { act } from "@react-three/fiber";
import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const {
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
  } = useCustomization();

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">sofa material</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material === "leather" ? "item--active" : ""}`}
            onClick={() => setMaterial("leather")}
          >
            <div className="item__label">Leather</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item--active" : ""}`}
            onClick={() => setMaterial("fabric")}
          >
            <div className="item__label">Fabric</div>
          </div>
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">sofa shade</div>
        <div className="configurator__section__values">
          {sofaShades.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === sofaShade.color ? "item--active" : ""
              }`}
              onClick={() => { setSofaShade(item); setActiveFabric(fabricColors[index][1]);  } }
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">Fabric color</div>
        <div className="configurator__section__values">
          {activeFabric.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === sofaShade.color ? "item--active" : ""
              }`}
              onClick={() => setFabricColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
