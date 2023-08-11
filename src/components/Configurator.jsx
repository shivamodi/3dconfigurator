import { act } from "@react-three/fiber";
import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  function displayMessage (evt) {
    var message;
    if (evt.origin !== "https://cozyhomedubai.com") {
    message = "Security blocked your access";
    }
    else {
    message = evt.data;
    }
    console.log(message.replace(/_[0-9]{1,2}/, '').replace(/\s+/g, '-').toLowerCase());
    setActiveFabric(message.replace(/_[0-9]{1,2}/, '').replace(/\s+/g, '-').toLowerCase());
    setActiveTexture(message.replace(/_[0-9]{1,2}/, '').replace(/\s+/g, '-').toLowerCase());
    //document.getElementById("received-message").innerHTML = message;
    }  
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
    setActiveTexture,
  } = useCustomization();
  if (window.addEventListener) {
    // For standards-compliant web browsers
    window.addEventListener("message", displayMessage, false);
    }
    else {
    window.attachEvent("onmessage", displayMessage);
    }
}
  
export default Configurator;
