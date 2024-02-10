import { useEffect, useState } from "react";
import HabiliesDark from "../../../assets/habilitiesDark.gif";
import HabiliesLight from "../../../assets/habilitiesLight.gif";
import imagenes from "./imagenes";
import "../../StyleComponent.css"

export const Habilities = ({ isDarkTheme }) => {

  const habilitiesGif = isDarkTheme ? HabiliesDark : HabiliesLight;
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    Promise.all(imagenes).then((resolvedImages) => {
      setLoadedImages(resolvedImages);
    });
  }, []);

  return (
    <div className="contentHabilities">
      <div className="contImgHability">
        <img src={habilitiesGif} className="imgHabilities" />
      </div>
      <div className="habilities">
        {loadedImages.map((imagen, index) => (
          <img key={index} src={imagen.default} alt={`Imagen ${index}`} className="imgHability" />
        ))}
      </div>
    </div>
  );
};
