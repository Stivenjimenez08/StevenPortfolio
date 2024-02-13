import { useEffect, useState } from "react";
import HabiliesDark from "../../../assets/habilitiesDark.gif";
import HabiliesLight from "../../../assets/habilitiesLight.gif";
import imagenes from "./imagenes";
import "../../StyleComponent.css"
import { useTranslation } from "react-i18next";

export const Habilities = ({ isDarkTheme }) => {

  const habilitiesGif = isDarkTheme ? HabiliesDark : HabiliesLight;
  const [loadedImages, setLoadedImages] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    Promise.all(imagenes).then((resolvedImages) => {
      setLoadedImages(resolvedImages);
    });
  }, []);

  const habilitiesBgColor = isDarkTheme ? '#124757' : 'inherit';
  const titleBgColor = isDarkTheme ? '#fff' : 'inherit';
  

  const databaseTitle = t("database");
  const toolsTitle = t("tools");

  const sections = [
    { title: "Frontend", start: 0, end: 7, names: ["Vite", "React", "Redux", "Tailwind", "JavaScript", "Html 5", "Css", "Bootstrap"]},
    { title: "Backend", start: 8, end: 9, names: ["Node.js","TypeScript"] },
    { title: databaseTitle, start: 10, end: 11, names: ["MySQL","MongoDB"] },
    { title: toolsTitle, start: 12, end: 14, names: ["Git","Scrum", "Ingles B1"] },
  ];

  return (
    <div className="contentHabilities">
      <div className="contImgHability">
        <img src={habilitiesGif} className="imgHabilities" />
      </div>
      <div className="habilities" style={{ backgroundColor: habilitiesBgColor }}>
      {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="section">
            <h2 style={{ color: titleBgColor }}>{section.title}</h2>
            <div className="images">
              {loadedImages.slice(section.start, section.end + 1).map((imagen, index) => (
                <div key={index} className="imageWrapper">
                  <img src={imagen.default} alt={`Imagen ${index}`} className="imgHability" />
                  <h3>{section.names[index]}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
